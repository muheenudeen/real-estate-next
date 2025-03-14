"use client";

import { useGetProperties } from "@/hooks/useProperty";
import { useRouter } from "next/navigation";
import { FaPlusCircle } from "react-icons/fa";
import Sidebar from "@/app/sidebar/page";

const MyProperties = () => {
  const { data: properties, isLoading } = useGetProperties();
  const router = useRouter();

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 min-h-screen bg-gray-100 p-6 w-full">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">My Property Listings</h1>
          <button
            onClick={() => router.push("/addProperty")}
            className="px-6 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2 shadow-md hover:bg-blue-700 transition mb-6"
          >
            <FaPlusCircle size={18} /> Add New Property
          </button>

          {/* Loading State */}
          {isLoading && <p className="text-center text-gray-500">Loading properties...</p>}

          {!isLoading && (!properties || properties.length === 0) && (
            <div className="text-center mt-12">
              <h2 className="text-2xl font-semibold text-gray-800">My Property Listings (0)</h2>
              <p className="text-lg text-gray-600 mt-2">
                Here you can see and manage your property listings. You can check the current status
                of your property listings from here.
              </p>
            </div>
          )}

          {!isLoading && properties?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div key={property._id} className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="w-full h-48 relative">
                    <img
                      src={property.image || "/placeholder.jpg"}
                      alt={property.name || "Property Image"}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                      priority
                    />
                  </div>
                  <h2 className="text-lg font-bold text-gray-800 mt-2">
                    {property.name || "Unnamed Property"}
                  </h2>
                  <p className="text-gray-600">
                    {property.location?.fullAddress || "Location not available"}
                  </p>
                  <p className="text-blue-600 font-semibold mt-2">
                    ₹{property.price?.toLocaleString() || "N/A"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProperties;