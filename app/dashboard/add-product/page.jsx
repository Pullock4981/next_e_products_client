"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"

export default function AddProductPage() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        image: null, // new field
    })
    const [loading, setLoading] = useState(false)

    // Redirect unauthenticated users
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const data = new FormData()
            data.append("name", formData.name)
            data.append("price", formData.price)
            data.append("description", formData.description)
            if (formData.image) {
                data.append("image", formData.image)
            }

            await axios.post("http://localhost:5000/products", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })

            alert("Product added successfully!")
            setFormData({ name: "", price: "", description: "", image: null })
        } catch (error) {
            console.error(error)
            alert("Failed to add product.")
        } finally {
            setLoading(false)
        }
    }

    if (status === "loading") return <p>Loading...</p>

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white shadow rounded">
            <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                    className="w-full border p-2 rounded"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
        </div>
    )
}
