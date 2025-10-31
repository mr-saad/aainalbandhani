export default async function Params({ params }) {
  const awaited = await params
  return awaited.category.map((cat) => <p key={cat}>{cat}</p>)
}
