export default async function Some({ params }) {
  return (await params).category.map((cat) => <p key={cat}>{cat}</p>)
}
