import Image from "next/image"
import { Button } from "./ui/button"

export default function Product({ title, desc, price, img }) {
  return (
    <div className="p-5 border rounded flex flex-col">
      <Image
        unoptimized
        width={400}
        height={400}
        alt={title}
        src={img.url}
        placeholder="blur"
        blurDataURL={img.metadata.lqip}
        className="w-full aspect-square object-cover not-prose"
      />
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>₹{price}</p>
      <Button className="mt-auto">Buy Now</Button>
    </div>
  )
}
