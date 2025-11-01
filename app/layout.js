import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import sanity from "@/lib/sanity"
import { cacheLife } from "next/cache"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Aainal Bandhani",
  description: "Exclusive Bandhani Online Store",
}

const getCategories = async () => {
  "use cache"
  cacheLife("hours")
  return sanity.fetch(`array::unique(*[_type=="product"].category)`)
}

export default async function RootLayout({ children }) {
  const categories = await getCategories()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar categories={categories} />
        <main className="p-5 max-w-300 mx-auto prose">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
