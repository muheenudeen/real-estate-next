"use client"


import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/UseApi";

export default function PropertyLocation() {
  const router = useRouter();
  const { mutate, isPending } = useApi("/property", "post");
  const [location, setLocation] = useState({
    state: "",
    city: "",
    zipCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(location, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="State"
        value={location.state}
        onChange={(e) => setLocation({ ...location, state: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="City"
        value={location.city}
        onChange={(e) => setLocation({ ...location, city: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Zip Code"
        value={location.zipCode}
        onChange={(e) => setLocation({ ...location, zipCode: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <button type="submit" disabled={isPending} className="p-2 bg-blue-500 text-white rounded">
        {isPending ? "Saving..." : "Submit"}
      </button>
    </form>
  );
}