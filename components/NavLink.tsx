"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavigationMenuLink } from "./ui/navigation-menu"
import { ReactNode } from "react"

export default function NavLink({
  children,
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  href: string
}) {
  const path = usePathname()
  return (
    <NavigationMenuLink
      asChild
      className={`px-4 ${path == href ? "bg-accent" : ""}`}
    >
      <Link href={href} {...props}>
        {children}
      </Link>
    </NavigationMenuLink>
  )
}
