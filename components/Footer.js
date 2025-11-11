import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Footer() {
  return (
    <footer className="border-t p-5 mt-20">
      <div className="text-center max-w-100 mx-auto">
        <h4 className="text-3xl font-bold">Subscribe</h4>
        <p className="mb-2">to get the drip before it drops.</p>
        <form className="flex gap-5">
          <Input placeholder="you@domain.com" />
          <Button type="button">Join</Button>
        </form>
      </div>
      <div className="mt-10 max-w-7xl mx-auto grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div>
          <b>Catalog</b>
          <ul>
            <li>Dupatta</li>
            <li>Saree</li>
          </ul>
        </div>
        <div>
          <b>Info</b>
          <ul>
            <li>Return Policy</li>
            <li>Terms & Conditions</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="row-start-1 lg:row-start-auto">
          <b className="text-3xl tracking-tighter">Aainal Bandhani</b>
          <p className="text-right">by Aainal Khatri</p>
        </div>
        <div>
          <b>Services</b>
          <ul>
            <li>Wishlist</li>
            <li>Account</li>
            <li>Customized Order</li>
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <b>Extras</b>
          <ul>
            <a
              target="_blank"
              className="hover:border-b border-black"
              href="https://ratanbandhej.vercel.app"
            >
              Ratan Bandhej
            </a>
            <br />
            <a
              target="_blank"
              className="hover:border-b border-black"
              href="https://aroramudart.vercel.app"
            >
              Arora Mud Art
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}
