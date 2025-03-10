import React from "react";
import Sidebar from "@/app/sidebar/page";

const MySubscriptions = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">My Subscriptions</h2>
          <span className="text-blue-600 text-lg font-semibold">0</span>
          <p className="text-gray-600 mt-4">You are not subscribed to any plan</p>
        </div>
      </div>
    </div>
  );
};

export default MySubscriptions;
