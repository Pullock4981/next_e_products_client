"use client"
import Link from "next/link"

export default function ProductHighlights() {
    // Example products data
    const products = [
        { id: 1, name: "Product One", description: "High quality product", price: "$29" },
        { id: 2, name: "Product Two", description: "Best seller item", price: "$49" },
        { id: 3, name: "Product Three", description: "Limited edition", price: "$59" },
        { id: 4, name: "Product Four", description: "Popular choice", price: "$39" },
    ]

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Product Highlights</h2>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {products.map(product => (
                        <div key={product.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="font-bold mb-4">{product.price}</p>
                            <Link href={`/products/${product.id}`} className="text-blue-600 font-semibold hover:underline">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
