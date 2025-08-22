"use client"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function ProductDetailsPage() {
    const params = useParams()
    const { id } = params

    // Mock product data (in real app, fetch from backend)
    const products = [
        { id: "1", name: "Product One", description: "High quality product", price: "$29" },
        { id: "2", name: "Product Two", description: "Best seller item", price: "$49" },
        { id: "3", name: "Product Three", description: "Limited edition", price: "$59" },
        { id: "4", name: "Product Four", description: "Popular choice", price: "$39" },
    ]

    const product = products.find(p => p.id === id)

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold">Product not found</h1>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
            <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-6">{product.price}</p>
            <Link href="/products" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                Back to Products
            </Link>
        </div>
    )
}
