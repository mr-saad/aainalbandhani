import Product from "@/components/Product"
import sanity from "@/lib/sanity"

const getProducts = async () => {
  return sanity.fetch(
    `*[_type=='product']{_id,"slug":slug.current,category,title,desc,price,category,"img":image.asset->{url,metadata{lqip}}}`,
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
