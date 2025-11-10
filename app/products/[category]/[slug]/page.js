import sanity from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

export const generateStaticParams = async () => {
  const slugs = await sanity.fetch(
    `*[_type=="product"]{"slug":slug.current,category}`,
  )
  return slugs.map((slug) => ({ slug: slug.slug, category: slug.category }))
}

export default function Slug(props) {
  return (
    <Suspense fallback={<p>Please Wait</p>}>
      <SlugProduct params={props.params} />
    </Suspense>
  )
}

const getProduct = async (slug) => {
  return (
    sanity.fetch(
      `*[_type=="product" && slug.current==$slug][0]{_id,"slug":slug.current,title,desc,price,details,category,"img":image.asset->{url,metadata{lqip}}}`,
      {
        slug,
      },
    ) || {}
  )
}

async function SlugProduct({ params }) {
  const product = await getProduct((await params).slug)
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <Image
        unoptimized
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
