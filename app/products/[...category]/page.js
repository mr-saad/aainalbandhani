import { Suspense } from "react"
import Params from "./params"

export default function Category({ params }) {
  return (
    <Suspense fallback="please wait">
      <Params params={params} />
    </Suspense>
  )
}
