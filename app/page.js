import Product from "@/components/Product"
import sanity from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 60

const getSections = async () => {
  return await sanity.fetch(
    `*[_type=="section"]{_id,title,desc,"products": *[_type=='product' && _id in ^.products[]._ref]{_id,"slug":slug.current,title,desc,price,category,"img":image.asset->{url,metadata{lqip}}},content[]{...,_type=="image"=>{"url":asset->url,"lqip":asset->metadata.lqip}}}`,
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
              types: {
                image: ({ value }) => {
                  return (
                    <Image
                      src={value.url}
                      blurDataURL={value.lqip}
                      width={400}
                      height={400}
                      alt={"Aainal Bandhani Home Page Image"}
                      className="rounded aspect-square object-cover w-full not-prose"
                    />
                  )
                },
              },
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
