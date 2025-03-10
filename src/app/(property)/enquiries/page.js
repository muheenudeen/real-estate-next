import Sidebar from "@/app/sidebar/page";
import { FaSearch } from "react-icons/fa";

const MyEnquiries = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800">
            My Enquiries <span className="text-gray-500">0</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Evaluate your potential customer preferences and match them with the right home or office building.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-200 p-2 rounded-md mt-4 w-full max-w-md">
            <FaSearch className="text-gray-500 ml-2" />
            <input
              type="text"
              placeholder="Search listing"
              className="bg-transparent outline-none p-2 w-full"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="border p-3">Date</th>
                  <th className="border p-3">Property Title</th>
                  <th className="border p-3">Property ID</th>
                  <th className="border p-3">Name</th>
                  <th className="border p-3">Contact</th>
                  <th className="border p-3">Interest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 p-4">
                    No enquiries found.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEnquiries;
