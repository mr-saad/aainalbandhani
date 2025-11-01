import Product from "@/components/Product"
import sanity from "@/lib/sanity"

const getProductsByCategory = async (category) => {
  console.log(category)
  return (
    sanity.fetch(
      `*[_type=="product" && category==$category]{_id,title,desc,price,category,"img":image.asset->{url,metadata{lqip}}}`,
      {
        category,
      },
    ) || []
  )
}

export default async function FilterProducts({ params }) {
  const { category } = await params
  const products = await getProductsByCategory(category)
  return (
    <div>
      <h1>{category}</h1>
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
