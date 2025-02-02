import { Bath, BedDouble, Maximize2 } from 'lucide-react'

export function PropertyCard({ property }) {
  return (
    <div className="flex-shrink-0 w-full md:w-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-[250px] object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-sm font-semibold text-black bg-orange-500 rounded">
            PREMIUM
          </span>
          <span className="px-3 py-1 text-sm font-semibold text-black bg-cyan-500 rounded">
            FOR SALE
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-4 py-2 text-sm font-semibold text-black bg-teal-700/80 rounded">
            FLAT/APARTMENT
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold line-clamp-2 mb-3">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.location.district}</p>

        <div className="flex items-center gap-8 mb-6">
          <div className="flex items-center gap-2">
            <BedDouble className="w-5 h-5 text-gray-600" />
            <span className="text-sm">{property.bedrooms} Br</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-gray-600" />
            <span className="text-sm">{property.bathrooms} Ba</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize2 className="w-5 h-5 text-gray-600" />
            <span className="text-sm">{property.area || "1000"} sq.ft.</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            ₹ {property.price || "Contact for Price"}
          </div>
          <button className="px-6 py-2.5 text-blue-600 border-2 border-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium">
            View Details
          </button>
        </div>

        <div className="mt-6 inline-block px-3 py-1 text-sm border border-gray-300 rounded-md bg-gray-50">
          RERA
        </div>
      </div>
    </div>
  )
}
