"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/UseApi";
import Sidebar from "@/app/sidebar/page";

export default function PropertyForm() {
  const router = useRouter();
  const { mutate, isPending } = useApi("/property", "post");
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    userId: "",
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem("id");
    if (storedUserId) {
      setFormData((prev) => ({ ...prev, userId: storedUserId }));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.userId) {
      return alert("User ID is missing! Please log in again.");
    }

    mutate(formData, {
      onSuccess: () => {
        router.push("/propertyFeatures");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg">
      <Sidebar/>
      <div>

        <h2 className="text-xl font-semibold mb-2">Property Info</h2>
        <p className="text-gray-600 text-sm mb-4">
          You can select what kind of property you have to add and also select the property type from the dropdown.
        </p>

        <div className="flex gap-4 mb-4">
          <label className="flex items-center">
            <input type="radio" name="propertyType" className="mr-2" /> Sell
          </label>
          <label className="flex items-center">
            <input type="radio" name="propertyType" className="mr-2" /> Rent
          </label>
          <label className="flex items-center">
            <input type="radio" name="propertyType" className="mr-2" /> Lease
          </label>
        </div>

        <label className="block text-sm font-medium">What kind of property do you have?</label>
        <select className="w-full p-2 border rounded bg-gray-100 mb-3">
          <option>Residential</option>
          <option>Commercial</option>
        </select>

        <label className="block text-sm font-medium">Property Type</label>
        <select className="w-full p-2 border rounded bg-gray-100">
          <option>Flat/Apartment</option>
          <option>Villa</option>
          <option>Independent House</option>
        </select>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Property Price</h2>
        <p className="text-gray-600 text-sm mb-4">Here you can specify the price that you are expecting for the property.</p>

        <label className="block text-sm font-medium">Expected Price</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full p-2 border rounded bg-gray-100"
          />
          <input type="checkbox" className="absolute right-3 top-3" />
        </div>
      </div>

      <div className="col-span-2">
        <h2 className="text-xl font-semibold mb-2">Property Description</h2>
        <p className="text-gray-600 text-sm mb-4">Add a small description about your property. Fill in the fields below.</p>

        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border rounded bg-gray-100 mb-3"
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded bg-gray-100 mb-3"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full p-2 border rounded bg-gray-100 mb-3"
        />
      </div>
      <div className="col-span-2 text-right">
        <button type="submit" disabled={isPending} className="px-4 py-2 bg-blue-500 text-white rounded">
          {isPending ? "Saving..." : "Next"}
        </button>
      </div>
    </form>
  );
}
