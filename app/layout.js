import Navbar from "@/components/Navbar"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children} {/* Each page renders its own content */}
      </body>
    </html>
  )
}