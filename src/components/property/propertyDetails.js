"use client"

import { useState } from "react"

export default function PropertyDetails({ formData, updateFormData, onPrevious, onSubmit, isSubmitting }) {
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      updateFormData({ [name]: checked })
    } else {
      updateFormData({ [name]: value })
    }
  }

  const handleWaterSourceChange = (source) => {
    const currentSources = [...formData.waterSource]

    if (currentSources.includes(source)) {
      // Remove the source if it's already selected
      updateFormData({
        waterSource: currentSources.filter((item) => item !== source),
      })
    } else {
      // Add the source if it's not already selected
      updateFormData({
        waterSource: [...currentSources, source],
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.bedrooms || formData.bedrooms.trim() === "") {
      newErrors.bedrooms = "Number of bedrooms is required"
    }

    if (!formData.bathrooms || formData.bathrooms.trim() === "") {
      newErrors.bathrooms = "Number of bathrooms is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit()
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100">
      <h2 className="text-xl font-semibold mb-4">Property Details</h2>
      <p className="text-gray-600 mb-6">Provide detailed information about your property features and amenities.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Bedrooms*</label>
          <input
            type="text"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="Number of bedrooms"
            className={`w-full p-3 border ${errors.bedrooms ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.bedrooms && <p className="text-red-500 text-sm mt-1">{errors.bedrooms}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Bathrooms*</label>
          <input
            type="text"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="Number of bathrooms"
            className={`w-full p-3 border ${errors.bathrooms ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.bathrooms && <p className="text-red-500 text-sm mt-1">{errors.bathrooms}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Balconies</label>
          <input
            type="text"
            name="balconies"
            value={formData.balconies}
            onChange={handleChange}
            placeholder="Number of balconies"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Total Floors</label>
          <input
            type="text"
            name="totalFloors"
            value={formData.totalFloors}
            onChange={handleChange}
            placeholder="Total floors in building"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Floor Number</label>
          <input
            type="text"
            name="floorNo"
            value={formData.floorNo}
            onChange={handleChange}
            placeholder="Property floor number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Property Facing</label>
          <input
            type="text"
            name="propertyFacing"
            value={formData.propertyFacing}
            onChange={handleChange}
            placeholder="E.g., North, South, East, West"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Availability Status</label>
          <select
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Ready to move">Ready to move</option>
            <option value="Under construction">Under construction</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Age of Property</label>
          <select
            name="ageOfProperty"
            value={formData.ageOfProperty}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="0-1">0-1 years</option>
            <option value="1-5">1-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Preferred Tenant</label>
          <select
            name="preferredTo"
            value={formData.preferredTo}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Family">Family</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Anyone">Anyone</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Furnishing Status</label>
          <select
            name="furnishingStatus"
            value={formData.furnishingStatus}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Furnished">Furnished</option>
            <option value="Semi-Furnished">Semi-Furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Power Backup</label>
          <select
            name="powerBackup"
            value={formData.powerBackup}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Full">Full</option>
            <option value="Partial">Partial</option>
            <option value="None">None</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Road Accessibility</label>
          <select
            name="roadAccessibility"
            value={formData.roadAccessibility}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Heavy vehicle">Heavy vehicle</option>
            <option value="Light vehicle">Light vehicle</option>
            <option value="No vehicle access">No vehicle access</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Parking Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="reservedParking"
              checked={formData.reservedParking}
              onChange={handleChange}
              className="h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">Reserved Parking</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="openParking"
              checked={formData.openParking}
              onChange={handleChange}
              className="h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">Open Parking</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="coveredParking"
              checked={formData.coveredParking}
              onChange={handleChange}
              className="h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">Covered Parking</span>
          </label>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Water Source</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.waterSource.includes("Municipal Corporation")}
              onChange={() => handleWaterSourceChange("Municipal Corporation")}
              className="h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">Municipal Corporation</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.waterSource.includes("Borewell")}
              onChange={() => handleWaterSourceChange("Borewell")}
              className="h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">Borewell</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.waterSource.includes("24*7 Water")}
              onChange={() => handleWaterSourceChange("24*7 Water")}
              className="h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">24*7 Water</span>
          </label>
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
          disabled={isSubmitting}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Property"}
        </button>
      </div>
    </div>
  )
}

