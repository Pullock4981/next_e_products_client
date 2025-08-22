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
        image: null,
    })
    const [imagePreview, setImagePreview] = useState(null)
    const [loading, setLoading] = useState(false)

    // Redirect unauthenticated users
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status, router])

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === "image" && files.length > 0) {
            setFormData({ ...formData, image: files[0] })
            setImagePreview(URL.createObjectURL(files[0]))
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const data = new FormData()
            data.append("name", formData.name)
            data.append("price", formData.price)
            data.append("description", formData.description)
            if (formData.image) data.append("image", formData.image)

            await axios.post("http://localhost:5000/products", data, {
                headers: { "Content-Type": "multipart/form-data" },
            })

            alert("Product added successfully!")
            setFormData({ name: "", price: "", description: "", image: null })
            setImagePreview(null)
            router.push("/dashboard/products") // Redirect to products list page
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
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                {imagePreview && (
                    <div className="mt-2">
                        <p className="text-sm text-gray-500 mb-1">Image Preview:</p>
                        <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded" />
                    </div>
                )}

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
