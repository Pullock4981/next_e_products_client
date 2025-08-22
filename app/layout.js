import Hero from "@/components/Hero"
import Navbar from "../components/Navbar"
import "./globals.css"
import ProductHighlights from "@/components/ProductHighlights"
import Footer from "@/components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <Hero></Hero>
        <ProductHighlights></ProductHighlights>
        <Footer></Footer>
        {children}
      </body>
    </html>
  )
}
