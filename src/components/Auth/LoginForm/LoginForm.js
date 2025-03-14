"use client";

import { useState } from "react";
import { useApi } from "@/hooks/UseApi";
import { toast } from "react-hot-toast";

export default function LoginForm({ onOtpSent }) {
  const [email, setEmail] = useState("");
  const { mutate, isPending } = useApi("/sendlogin","post");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    mutate(
      { email },
      {
        onSuccess: (data) => {
          console.log("OTP Sent Response:", data); // Debugging Log
          toast.success("OTP sent to your email");
          onOtpSent(email);
        },
        onError: (error) => {
          console.error("OTP Error:", error.response?.data); // Debugging Log
          toast.error(error.response?.data?.message || "Failed to send OTP. Please try again.");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Login"}
      </button>
    </form>
  );
}
