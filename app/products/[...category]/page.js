import { Suspense } from "react"
import Some from "./params"

export default function Category({ params }) {
  return (
    <>
      <h1>Category</h1>

      <Suspense fallback="please wait">
        <Some params={params} />
      </Suspense>
    </>
  )
}
