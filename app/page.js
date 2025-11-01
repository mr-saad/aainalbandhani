import Product from "@/components/Product"
import sanity from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { cacheLife } from "next/cache"
import Link from "next/link"

const getSections = async () => {
  "use cache"
  cacheLife("hours")
  return await sanity.fetch(
    `*[_type=="section"]{_id,title,desc,"products": *[_type=='product' && _id in ^.products[]._ref]{_id,title,desc,price,"img":image.asset->{url,metadata{lqip}}},content}`,
  )
}

export default async function Home() {
  const sections = await getSections()
  return sections.map((section) => <Section {...section} key={section._id} />)
}

function Section({ title, desc, products, content }) {
  return (
    <div className="mb-20">
      <h1>{title}</h1>
      {desc ? <p>{desc}</p> : null}
      {products ? (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {products.map((prod) => (
            <Product key={prod._id} {...prod} />
          ))}
        </div>
      ) : null}
      {content ? (
        <div className="mt-10">
          <PortableText
            components={{
              marks: {
                link: ({ children, value }) => (
                  <Link href={value?.href}>{children}</Link>
                ),
              },
            }}
            value={content}
          />
        </div>
      ) : null}
    </div>
  )
}
