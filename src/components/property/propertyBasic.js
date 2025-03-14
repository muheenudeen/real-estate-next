"use client"

import { useState } from "react"

export default function BasicInfo({ formData, updateFormData, onNext }) {
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title || formData.title.trim() === "") {
      newErrors.title = "Title is required"
    }

    if (!formData.description || formData.description.trim() === "") {
      newErrors.description = "Description is required"
    }

    if (!formData.price || formData.price.trim() === "") {
      newErrors.price = "Price is required"
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Property Info</h2>
        <p className="text-gray-600 mb-6">
          You can select what kind of property you have to add and also select the property type from below dropdown.
        </p>

        <div className="mb-6">
          <div className="flex space-x-4 mb-6">
            <label className="flex items-center">
              <input type="radio" name="listingType" value="Sell" checked={true} className="h-5 w-5 text-blue-500" />
              <span className="ml-2 text-gray-700">Sell</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="listingType" value="Rent" className="h-5 w-5 text-blue-500" />
              <span className="ml-2 text-gray-700">Rent</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="listingType" value="Lease" className="h-5 w-5 text-blue-500" />
              <span className="ml-2 text-gray-700">Lease</span>
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">What kind of property do you have?</label>
            <select
              className="w-full  p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="Residential"
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Property Type</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="Flat/Apartment"
            >
              <option value="Flat/Apartment">Flat/Apartment</option>
              <option value="House/Villa">House/Villa</option>
              <option value="Plot/Land">Plot/Land</option>
              <option value="Office Space">Office Space</option>
              <option value="Shop/Showroom">Shop/Showroom</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Property title"
              className={`w-full p-3 border ${errors.title ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your property"
              rows="4"
              className={`w-full p-3 border ${errors.description ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Property Price</h2>
        <p className="text-gray-600 mb-6">Here you can specify the price that you are expecting for the property.</p>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Expected Price</label>
          <div className="relative">
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="100000"
              className={`w-full p-3 border ${errors.price ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <div className="absolute right-3 top-3 text-gray-400">(Display Price)</div>
          </div>
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        <div className="flex items-center mb-4">
          <input type="checkbox" id="displayPrice" className="h-5 w-5 text-blue-500" checked />
          <label htmlFor="displayPrice" className="ml-2 text-gray-700">
            Display price on listing
          </label>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Select Property Status</h2>
          <p className="text-gray-600 mb-6">
            From the below dropdown box, select the ownership status and other details.
          </p>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Ownership Status</label>
            <select
              name="ownershipStatus"
              value={formData.ownershipStatus}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Single">Single</option>
              <option value="Joint">Joint</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

