// import { Bath, BedDouble, Maximize2 } from 'lucide-react'

// export function PropertyCard({ property }) {
//   return (
//     <div className="flex-shrink-0 w-40 md:w-[400px] bg-white rounded-lg overflow-hidden shadow-lg">
//       <div className="relative">
//         <img
//           src={property.image || "/placeholder.svg"}
//           alt={property.title}
//           className="w-full h-72 object-cover"
//         />
//         <div className="absolute top-4 left-4 flex gap-2">
//           <span className="px-3 py-1 text-sm font-semibold text-black bg-orange-500 rounded">
//             PREMIUM
//           </span>
//           <span className="px-3 py-1 text-sm font-semibold text-black bg-cyan-500 rounded">
//             FOR SALE
//           </span>
//         </div>
//         <div className="absolute bottom-4 left-4">
//           <span className="px-4 py-2 text-sm font-semibold text-black bg-teal-700/80 rounded">
//             FLAT/APARTMENT
//           </span>
//         </div>
//       </div>

//       <div className="p-6">
//         <h3 className="text-xl font-semibold line-clamp-2 mb-3">{property.title}</h3>
//         <p className="text-gray-600 mb-4">{property.location.district}</p>

//         <div className="flex items-center gap-8 mb-6">
//           <div className="flex items-center gap-2">
//             <BedDouble className="w-5 h-5 text-gray-600" />
//             <span className="text-sm">{property.bedrooms} Br</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Bath className="w-5 h-5 text-gray-600" />
//             <span className="text-sm">{property.bathrooms} Ba</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Maximize2 className="w-5 h-5 text-gray-600" />
//             <span className="text-sm">{property.area || "1000"} sq.ft.</span>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="text-2xl font-bold text-gray-900">
//             ₹ {property.price || "Contact for Price"}
//           </div>
//           <button className="px-6 py-2.5 text-blue-600 border-2 border-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium">
//             View Details
//           </button>
//         </div>

//         <div className="mt-6 inline-block px-3 py-1 text-sm border border-gray-300 rounded-md bg-gray-50">
//           RERA
//         </div>
//       </div>
//     </div>
//   )
// }





"use client"

export function PropertyCard({ property }) {
  return (
    <div className="flex-shrink-0 w-full bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img src={property.image || "/placeholder.svg"} alt={property.title} className="w-full h-72 object-cover" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-sm font-semibold text-black bg-orange-500 rounded">PREMIUM</span>
          <span className="px-3 py-1 text-sm font-semibold text-black bg-cyan-500 rounded">FOR SALE</span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-4 py-2 text-sm font-semibold text-black bg-teal-700/80 rounded">FLAT/APARTMENT</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold line-clamp-2 mb-3">{property.title}</h3>
        <p className="text-gray-600 mb-4">{property.location?.district || property.location?.city || "Location"}</p>

        <div className="flex items-center gap-8 mb-6">
          <div className="flex items-center gap-2">
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
              className="text-gray-600"
            >
              <path d="M2 9V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v4" />
              <path d="M2 13h20" />
              <path d="M4 21h16a2 2 0 0 0 2-2v-6H2v6a2 2 0 0 0 2 2Z" />
              <path d="M6 17h12" />
            </svg>
            <span className="text-sm">{property.bedrooms} Br</span>
          </div>
          <div className="flex items-center gap-2">
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
              className="text-gray-600"
            >
              <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
              <line x1="10" x2="8" y1="5" y2="7" />
              <line x1="2" x2="22" y1="12" y2="12" />
              <line x1="7" x2="7" y1="19" y2="21" />
              <line x1="17" x2="17" y1="19" y2="21" />
            </svg>
            <span className="text-sm">{property.bathrooms} Ba</span>
          </div>
          <div className="flex items-center gap-2">
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
              className="text-gray-600"
            >
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" x2="14" y1="3" y2="10" />
              <line x1="3" x2="10" y1="21" y2="14" />
            </svg>
            <span className="text-sm">{property.area || "1000"} sq.ft.</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">₹ {property.price || "Contact for Price"}</div>
          <button className="px-6 py-2.5 text-blue-600 border-2 border-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium">
            View Details
          </button>
        </div>

        <div className="mt-6 inline-block px-3 py-1 text-sm border border-gray-300 rounded-md bg-gray-50">RERA</div>
      </div>
    </div>
  )
}

