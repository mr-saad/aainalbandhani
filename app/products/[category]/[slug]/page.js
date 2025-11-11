import sanity from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 60

export const generateStaticParams = async () => {
  const slugs = await sanity.fetch(
    `*[_type=="product"]{"slug":slug.current,category}`,
  )
  return slugs.map((slug) => ({ slug: slug.slug, category: slug.category }))
}

const getProduct = async (slug) => {
  return (
    sanity.fetch(
      `*[_type=="product" && slug.current==$slug][0]{_id,"slug":slug.current,title,desc,price,details[]{...,_type=="image"=>{"url": asset->url,"lqip":asset->metadata.lqip}},category,"img":image.asset->{url,metadata{lqip}}}`,
      {
        slug,
      },
    ) || {}
  )
}
export default async function Slug({ params }) {
  const product = await getProduct((await params).slug)

  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Image
        src={product.img.url}
        blurDataURL={product.img.metadata.lqip}
        width={400}
        height={400}
        alt={product.title}
        className="rounded aspect-square object-cover w-full not-prose"
      />
      <div>
        <h1>{product.title}</h1>
        <p>{product.desc}</p>
        <b>₹{product.price}</b>
        <PortableText
          value={product.details}
          components={{
            types: {
              image: ({ value }) => {
                return (
                  <Image
                    src={value.url}
                    blurDataURL={value.lqip}
                    width={400}
                    height={400}
                    alt={product.title}
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
        />
      </div>
    </div>
  )
}
