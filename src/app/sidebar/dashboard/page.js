"use client";

import { useRouter } from "next/navigation"; // ✅ Use Next.js navigation
import { FaPlusCircle, FaHome, FaComments } from "react-icons/fa";
import Sidebar from "../page";

const Dashboard = () => {
  const router = useRouter();

  const userName = typeof window !== "undefined" ? localStorage.getItem("userName") || "User" : "User"; 
  const totalProperties = 0; // Replace with actual data
  const totalEnquiries = 0; // Replace with actual data

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 pl-64">
  <Sidebar />
      {/* Success Message */}
      <div className="w-full max-w-4xl bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md text-center">
        ✅ You have Successfully logged in
      </div>

      {/* Welcome Message */}
      <div className="mt-4 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome back, <span className="text-blue-600">{userName}!</span>
        </h1>
        <p className="text-gray-600 mt-1">
          Maximize your business with <strong>thithithara.com</strong> Utilize our offerings.
        </p>
      </div>

      {/* Add New Property Button */}
      <button
        onClick={() => router.push("/my-properties")} // ✅ Use router.push for navigation
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2 shadow-md hover:bg-blue-700 transition"
      >
        <FaPlusCircle size={18} /> Add New Property
      </button>

      {/* Stats Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Total Properties */}
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
          <FaHome size={40} className="text-blue-500 mr-3" />
          <div>
            <p className="text-gray-600 text-lg">Total Properties</p>
            <p className="text-2xl font-bold text-blue-600">{totalProperties}</p>
          </div>
        </div>

        {/* Total Enquiries */}
        <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
          <FaComments size={40} className="text-yellow-500 mr-3" />
          <div>
            <p className="text-gray-600 text-lg">Total Enquiries</p>
            <p className="text-2xl font-bold text-yellow-500">{totalEnquiries}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
