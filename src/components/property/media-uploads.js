"use client"

import { useState } from "react"
import Image from "next/image"

export default function MediaUpload({ formData, updateFormData, onNext, onPrevious }) {
  const [previewImage, setPreviewImage] = useState(formData.image || "")
  const [errors, setErrors] = useState({})

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // In a real app, you would upload this to your server or a cloud storage
      // For this demo, we'll just create a local URL
      const imageUrl = URL.createObjectURL(file)
      setPreviewImage(imageUrl)
      updateFormData({ image: imageUrl })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.image || formData.image.trim() === "") {
      newErrors.image = "At least one image is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onNext()
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100">
      <h2 className="text-xl font-semibold mb-4">Media Upload</h2>
      <p className="text-gray-600 mb-6">
        Upload images of your property. High-quality images attract more potential buyers.
      </p>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Property Images*</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="image-upload" />
          <label htmlFor="image-upload" className="cursor-pointer">
            {previewImage ? (
              <div className="relative w-full h-64 mx-auto">
                <Image
                  src={previewImage || "/placeholder.svg"}
                  alt="Property preview"
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="py-8">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            )}
          </label>
        </div>
        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onPrevious}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </div>
  )
}

