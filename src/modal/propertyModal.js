"use client"

import { useEffect, useState } from "react"

export default function PropertyModal({ property, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
  })

  // Ensure `property.images` is always an array
  const images = property?.images || []

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen || !property) return null

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const formatPrice = (price) => {
    if (!price) return "Contact for Price"
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(price)
  }

  const hasValue = (value) => value !== undefined && value !== null && value !== ""

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white w-full max-w-7xl max-h-[90vh] overflow-hidden rounded-lg shadow-xl flex flex-col">
        {/* Modal Header with Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Property Details</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Side */}
          <div className="col-span-2 p-6">
            {/* Header Section */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-sm font-semibold text-white bg-orange-500 rounded">FEATURED</span>
                <span className="px-3 py-1 text-sm font-semibold text-white bg-cyan-500 rounded">FOR SALE</span>
                <span className="px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded">VERIFIED</span>
                <span className="text-sm text-gray-500">ID: {property._id}</span>
              </div>

              <h1 className="text-2xl font-bold">{property.title}</h1>

              <div className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-sm">{property.location?.fullAddress || "Address not available"}</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-blue-600">{formatPrice(property.price)}</p>
                  <p className="text-sm text-gray-500">Built up Area: {property.builtUpArea || "1162"} sq.ft</p>
                </div>
                <button className="p-2 border rounded-full hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" x2="12" y1="2" y2="15" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Facts and Features */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Facts and Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 rounded">🏠</div>
                  <div>
                    <p className="text-sm text-gray-500">TYPE</p>
                    <p className="font-medium">Flat/Apartment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 rounded">📏</div>
                  <div>
                    <p className="text-sm text-gray-500">BUILT UP AREA</p>
                    <p className="font-medium">{property.builtUpArea || "1162"} sq.ft.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 rounded">🛏️</div>
                  <div>
                    <p className="text-sm text-gray-500">BEDROOMS</p>
                    <p className="font-medium">{property.bedrooms}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 rounded">🚽</div>
                  <div>
                    <p className="text-sm text-gray-500">BATHROOMS</p>
                    <p className="font-medium">{property.bathrooms}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 rounded">📋</div>
                  <div>
                    <p className="text-sm text-gray-500">STATUS</p>
                    <p className="font-medium">{property.availabilityStatus}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Details */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {hasValue(property.ownershipStatus) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Ownership Status</span>
                      <span className="font-medium">{property.ownershipStatus}</span>
                    </div>
                  )}
                  {hasValue(property.furnishingStatus) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Furnishing Status</span>
                      <span className="font-medium">{property.furnishingStatus}</span>
                    </div>
                  )}
                  {hasValue(property.powerBackup) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Power Backup</span>
                      <span className="font-medium">{property.powerBackup}</span>
                    </div>
                  )}
                  {hasValue(property.roadAccessibility) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Road Accessibility</span>
                      <span className="font-medium">{property.roadAccessibility}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  {hasValue(property.balconies) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Balconies</span>
                      <span className="font-medium">{property.balconies}</span>
                    </div>
                  )}
                  {hasValue(property.floorNo) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Floor No</span>
                      <span className="font-medium">{property.floorNo}</span>
                    </div>
                  )}
                  {hasValue(property.totalFloors) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Total Floors</span>
                      <span className="font-medium">{property.totalFloors}</span>
                    </div>
                  )}
                  {hasValue(property.ageOfProperty) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Age of Property</span>
                      <span className="font-medium">{property.ageOfProperty}</span>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Amenities */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.waterSource?.map((source) => (
                  <div key={source} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{source}</span>
                  </div>
                ))}
                {property.reservedParking && (
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Reserved Parking</span>
                  </div>
                )}
                {property.openParking && (
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Open Parking</span>
                  </div>
                )}
                {property.coveredParking && (
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Covered Parking</span>
                  </div>
                )}
              </div>
            </section>

            {/* Location Details */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {hasValue(property.location?.state) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">State</span>
                      <span className="font-medium">{property.location.state}</span>
                    </div>
                  )}
                  {hasValue(property.location?.city) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">City</span>
                      <span className="font-medium">{property.location.city}</span>
                    </div>
                  )}
                  {hasValue(property.location?.locality) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Locality</span>
                      <span className="font-medium">{property.location.locality}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  {hasValue(property.location?.district) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">District</span>
                      <span className="font-medium">{property.location.district}</span>
                    </div>
                  )}
                  {hasValue(property.location?.zipCode) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Zip Code</span>
                      <span className="font-medium">{property.location.zipCode}</span>
                    </div>
                  )}
                  {hasValue(property.location?.landmark) && (
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Landmark</span>
                      <span className="font-medium">{property.location.landmark}</span>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Contact Form - Right Side */}
          <div className="bg-gray-50 p-6">
            <div className="sticky top-6">
              <h2 className="text-2xl font-semibold mb-6">Get Contact Details</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below to get one step closer to your dream property
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">This number would be verified</p>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    Please select your interest
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your interest</option>
                    <option value="buy">Buy Property</option>
                    <option value="rent">Rent Property</option>
                    <option value="invest">Investment</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-500 leading-none">
                    I have read and accept the Terms and Conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  View Contact Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}