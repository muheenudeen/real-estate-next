"use client"

import { useState } from "react"

export default function LocationInfo({ formData, updateFormData, onNext, onPrevious }) {
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      updateFormData({
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      })
    } else {
      updateFormData({ [name]: value })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    const location = formData.location

    if (!location.state || location.state.trim() === "") {
      newErrors["location.state"] = "State is required"
    }

    if (!location.city || location.city.trim() === "") {
      newErrors["location.city"] = "City is required"
    }

    if (!location.fullAddress || location.fullAddress.trim() === "") {
      newErrors["location.fullAddress"] = "Full address is required"
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
      <h2 className="text-xl font-semibold mb-4">Location Information</h2>
      <p className="text-gray-600 mb-6">Please provide the location details of your property.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">State*</label>
          <input
            type="text"
            name="location.state"
            value={formData.location.state}
            onChange={handleChange}
            placeholder="State"
            className={`w-full p-3 border ${errors["location.state"] ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors["location.state"] && <p className="text-red-500 text-sm mt-1">{errors["location.state"]}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">District</label>
          <input
            type="text"
            name="location.district"
            value={formData.location.district}
            onChange={handleChange}
            placeholder="District"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">City*</label>
          <input
            type="text"
            name="location.city"
            value={formData.location.city}
            onChange={handleChange}
            placeholder="City"
            className={`w-full p-3 border ${errors["location.city"] ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors["location.city"] && <p className="text-red-500 text-sm mt-1">{errors["location.city"]}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Locality</label>
          <input
            type="text"
            name="location.locality"
            value={formData.location.locality}
            onChange={handleChange}
            placeholder="Locality"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Zip Code</label>
          <input
            type="text"
            name="location.zipCode"
            value={formData.location.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Landmark</label>
          <input
            type="text"
            name="location.landmark"
            value={formData.location.landmark}
            onChange={handleChange}
            placeholder="Landmark"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 md:col-span-2">
          <label className="block text-gray-700 mb-2">Full Address*</label>
          <textarea
            name="location.fullAddress"
            value={formData.location.fullAddress}
            onChange={handleChange}
            placeholder="Full address of the property"
            rows="3"
            className={`w-full p-3 border ${errors["location.fullAddress"] ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          ></textarea>
          {errors["location.fullAddress"] && (
            <p className="text-red-500 text-sm mt-1">{errors["location.fullAddress"]}</p>
          )}
        </div>
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

