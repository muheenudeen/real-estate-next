"use client"

import { useEffect, useState } from "react"
import { PropertyCard } from "@/cards/propertyCard"
import { useApi } from "@/hooks/UseApi"

const SCROLL_INTERVAL = 4000

export default function PropertyListings() {
  const { data, error, isPending } = useApi("/property", "get")
  
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (!data || data.length <= 1) return

    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev >= data.length - 1 ? 0 : prev + 1))
    }, SCROLL_INTERVAL)

    return () => clearInterval(interval)
  }, [data])

  if (isPending)
    return <div className="max-w-7xl mx-auto px-4 py-12 text-gray-600">Loading properties...</div>

  if (error)
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        Error loading properties: {error.message}
      </div>
    )

  if (!data?.length)
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
        No properties available at the moment.
      </div>
    )

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Best Properties For Sale in Kerala</h1>
        <p className="text-gray-600">
          Here is the list of properties for sale in Kerala, including apartments, flats, office spaces, and houses.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${scrollPosition * 30}%)` }}
        >
           {data.map((property) => (
            <div key={property._id} className="w-80 m-5 h-96 flex-shrink-0">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )}







// "use client"

// import { useEffect, useState } from "react"
// import PropertyModal from "@/modal/propertyModal"
// import { useApi } from "@/hooks/UseApi"
// import { PropertyCard } from "@/cards/propertyCard"

// const SCROLL_INTERVAL = 4000

// export default function PropertyListings() {
//   const { data, error, isPending } = useApi("/property", "get")
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [selectedProperty, setSelectedProperty] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [visibleItems, setVisibleItems] = useState(3)

//   // Determine how many items to show based on screen size
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleItems(1)
//       } else if (window.innerWidth < 1024) {
//         setVisibleItems(2)
//       } else {
//         setVisibleItems(3)
//       }
//     }

//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   // Auto-scroll functionality
//   useEffect(() => {
//     if (!data || data.length <= visibleItems) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev >= data.length - visibleItems ? 0 : prev + 1))
//     }, SCROLL_INTERVAL)

//     return () => clearInterval(interval)
//   }, [data, currentIndex, visibleItems])

//   const handlePropertyClick = (property) => {
//     setSelectedProperty(property)
//     setIsModalOpen(true)
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//   }

//   const nextSlide = () => {
//     if (!data) return
//     setCurrentIndex((prev) => (prev >= data.length - visibleItems ? 0 : prev + 1))
//   }

//   const prevSlide = () => {
//     if (!data) return
//     setCurrentIndex((prev) => (prev <= 0 ? data.length - visibleItems : prev - 1))
//   }

//   if (isPending) return <div className="max-w-7xl mx-auto px-4 py-12 text-gray-600">Loading properties...</div>

//   if (error)
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-12 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
//         Error loading properties: {error.message}
//       </div>
//     )

//   if (!data?.length)
//     return (
//       <div className="max-w-7xl mx-auto px-4 py-12 bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
//         No properties available at the moment.
//       </div>
//     )

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-4">Best Properties For Sale in Kerala</h1>
//         <p className="text-gray-600">
//           Here is the list of properties for sale in Kerala, including apartments, flats, office spaces, and houses.
//         </p>
//       </div>

//       <div className="relative">
//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md -ml-4"
//           aria-label="Previous slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="h-6 w-6 text-gray-700"
//           >
//             <path d="m15 18-6-6 6-6" />
//           </svg>
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md -mr-4"
//           aria-label="Next slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="h-6 w-6 text-gray-700"
//           >
//             <path d="m9 18 6-6-6-6" />
//           </svg>
//         </button>

//         {/* Slider Container */}
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
//               width: `${(data.length / visibleItems) * 100}%`,
//             }}
//           >
//             {data.map((property) => (
//               <div
//                 key={property._id}
//                 className="px-3"
//                 style={{ width: `${100 / data.length}%` }}
//                 onClick={() => handlePropertyClick(property)}
//               >
//                 <PropertyCard property={property} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center mt-6 space-x-2">
//           {Array.from({ length: Math.ceil(data.length - visibleItems + 1) }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {isModalOpen && selectedProperty && (
//         <PropertyModal property={selectedProperty} isOpen={isModalOpen} onClose={closeModal} />
//       )}
//     </div>
//   )
// }

