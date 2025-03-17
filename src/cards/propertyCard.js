"use client"

import { Bed, Bath, Maximize, Building2 } from "lucide-react"


export function PropertyCard({ property }) {
  return (
    <div className="flex-shrink-0 w-full bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="relative">
        <img
          src={property.image || "/placeholder.svg?height=208&width=400"}
          alt={property.title}
          className="w-full h-36 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">PREMIUM</span>
          <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">FOR SALE</span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-4 py-2 text-xs font-semibold text-white bg-blue-700/90 backdrop-blur-sm rounded-full">
            <Building2 className="w-3.5 h-3.5 inline-block mr-1" />
            FLAT/APARTMENT
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold line-clamp-2 mb-2 text-gray-800">{property.title}</h3>
        <p className="text-gray-600 mb-5 flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 mr-1 text-blue-500"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {property.location?.district || property.location?.city || "Location"}
        </p>

        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Bed className="text-blue-600 w-5 h-5" />
            <span className="text-sm font-medium">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="text-blue-600 w-5 h-5" />
            <span className="text-sm font-medium">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="text-blue-600 w-5 h-5" />
            <span className="text-sm font-medium">{property.area || "1000"} sq.ft.</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">₹ {property.price || "Contact for Price"}</div>
          <button className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
            View Details
          </button>
        </div>

        <div className="mt-5 inline-block px-3 py-1 text-xs font-medium border border-blue-200 rounded-md bg-blue-50 text-blue-700">
          RERA Approved
        </div>
      </div>
    </div>
  )
}

