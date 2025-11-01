import Product from "@/components/Product"
import sanity from "@/lib/sanity"
import { cacheLife } from "next/cache"

const getProducts = async () => {
  "use cache"
  cacheLife("hours")
  return sanity.fetch(
    `*[_type=='product']{_id,category,title,desc,price,"img":image.asset->{url,metadata{lqip}}}`,
  )
}
export default async function Products() {
  const products = await getProducts()
  return (
    <div>
      <h1>Products</h1>
      {products ? (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {products.map((prod) => (
            <Product key={prod._id} {...prod} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
