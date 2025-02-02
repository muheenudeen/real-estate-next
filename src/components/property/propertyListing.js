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
            <div key={property._id} className="w-96 m-5 flex-shrink-0">
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
