import { Suspense } from "react"
import FilterProducts from "./FilterProducts"

export default function Category({ params }) {
  return (
    <Suspense fallback={<p>please wait</p>}>
      <FilterProducts params={params} />
    </Suspense>
  )
}
