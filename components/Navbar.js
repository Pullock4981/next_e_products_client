"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-gray-900 text-white px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    <Link href="/">MyShop</Link>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/products" className="hover:text-gray-300">Products</Link>
                    <Link href="/login" className="hover:text-gray-300">Login</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 flex flex-col space-y-2">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/products" className="hover:text-gray-300">Products</Link>
                    <Link href="/login" className="hover:text-gray-300">Login</Link>
                </div>
            )}
        </nav>
    )
}
