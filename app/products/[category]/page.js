import Product from "@/components/Product"
import sanity from "@/lib/sanity"
import { notFound } from "next/navigation"

export const revalidate = 60

export const generateStaticParams = async () => {
  const categories = await sanity.fetch(`*[_type=="product"]{category}`)
  return categories.map(({ category }) => ({ category }))
}

const getProductsByCategory = async (category) => {
  const products = await sanity.fetch(
    `*[_type=="product" && category==$category]{_id,"slug":slug.current,title,desc,price,category,"img":image.asset->{url,metadata{lqip}}}`,
    {
      category,
    },
  )
  if (products.length) {
    return products
  } else {
    notFound()
  }
}

export default async function Category(props) {
  const params = await props.params
  const products = await getProductsByCategory(params.category)
  return (
    <div>
      <h1>{params.category}</h1>
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
