import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export default function Product({ title, desc, img, category, slug }) {
  return (
    <div className="p-5 border rounded flex flex-col">
      <Image
        width={400}
        height={400}
        alt={title}
        src={img.url}
        placeholder="blur"
        blurDataURL={img.metadata.lqip}
        className="w-full aspect-square object-cover not-prose rounded"
      />
      <h3>{title}</h3>
      <p>{desc}</p>
      <Button asChild className="mt-auto">
        <Link className="no-underline" href={`/products/${category}/${slug}`}>
          Buy Now
        </Link>
      </Button>
    </div>
  )
}
