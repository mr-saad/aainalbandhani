import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"
import NavLink from "./NavLink"
import { Suspense } from "react"
import Toggler from "./Toggler"

export default function Navbar({ categories }) {
  return (
    <header className="p-5 gap-2 grid grid-cols-2 items-center border-b">
      <h1 className="text-xl tracking-tighter">
        <Link href="/">Aainal Bandhani</Link>
      </h1>
      <Toggler />
      <Suspense fallback="">
        <NavigationMenu
          className="relative hidden md:block col-span-2 md:col-span-1 md:justify-self-end row-start-2 md:row-start-auto max-w-none justify-start"
          viewport={false}
        >
          <NavigationMenuList className="flex-col md:flex-row items-start">
            <NavigationMenuItem>
              <NavLink href={"/"}>Home</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href={"/products"}>Products</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer">
                Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {categories
                  ? categories.map((cat) => (
                      <NavLink key={cat} href={`/products/${cat}`}>
                        {cat}
                      </NavLink>
                    ))
                  : null}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href={"/about"}>About</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink href={"/contact"}>Contact</NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Suspense>
    </header>
  )
}
