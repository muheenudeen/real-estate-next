"use client"


import { useState } from "react";
import { useRouter } from 'next/navigation'
import { useApi } from "@/hooks/UseApi";

export default function PropertyForm() {
  const router = useRouter();
  const { mutate, isPending } = useApi("/properties", "post");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        router.push("/features");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <button type="submit" disabled={isPending} className="p-2 bg-blue-500 text-white rounded">
        {isPending ? "Saving..." : "Next"}
      </button>
    </form>
  );
}