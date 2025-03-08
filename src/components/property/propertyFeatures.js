"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/UseApi";

export default function PropertyFeatures() {
  const router = useRouter();
  const { mutate, isPending } = useApi("/property", "post");
  const [features, setFeatures] = useState({
    bedrooms: "",
    bathrooms: "",
    balconies: "",
    furnishingStatus: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(features, {
      onSuccess: () => {
        router.push("/location");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Bedrooms"
        value={features.bedrooms}
        onChange={(e) => setFeatures({ ...features, bedrooms: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Bathrooms"
        value={features.bathrooms}
        onChange={(e) => setFeatures({ ...features, bathrooms: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Balconies"
        value={features.balconies}
        onChange={(e) => setFeatures({ ...features, balconies: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <select
        value={features.furnishingStatus}
        onChange={(e) => setFeatures({ ...features, furnishingStatus: e.target.value })}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Furnishing Status</option>
        <option value="Furnished">Furnished</option>
        <option value="Semi-Furnished">Semi-Furnished</option>
        <option value="Unfurnished">Unfurnished</option>
      </select>
      <button type="submit" disabled={isPending} className="p-2 bg-blue-500 text-white rounded">
        {isPending ? "Saving..." : "Next"}
      </button>
    </form>
  );
}