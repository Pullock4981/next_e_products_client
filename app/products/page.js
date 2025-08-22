"use client"
import Link from "next/link"

export default function ProductsPage() {
    // Mock product data
    const products = [
        { id: 1, name: "Product One", description: "High quality product", price: "$29" },
        { id: 2, name: "Product Two", description: "Best seller item", price: "$49" },
        { id: 3, name: "Product Three", description: "Limited edition", price: "$59" },
        { id: 4, name: "Product Four", description: "Popular choice", price: "$39" },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold text-center py-8">Products</h1>

            <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="font-bold mb-4">{product.price}</p>
                        <Link href={`/products/${product.id}`} className="text-blue-600 font-semibold hover:underline">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
