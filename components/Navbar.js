"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const path = usePathname()
  return (
    <header className="p-5 gap-2 flex flex-wrap justify-between border-b">
      <h1 className="text-xl tracking-tighter">
        <Link href="/">Aainal Bandhani</Link>
      </h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={path === "/" ? "bg-accent" : ""}
            >
              <Link href={"/"}>Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink
                asChild
                className={path === "/products/dupatta" ? "bg-accent" : ""}
              >
                <Link href="/products/dupatta">Dupatta</Link>
              </NavigationMenuLink>
              <NavigationMenuLink
                asChild
                className={path === "/products/saree" ? "bg-accent" : ""}
              >
                <Link href="/products/saree">Saree</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={path === "/about" ? "bg-accent" : ""}
            >
              <Link href={"/about"}>About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={path === "/contact" ? "bg-accent" : ""}
            >
              <Link href={"/contact"}>Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
