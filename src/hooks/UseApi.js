"use client";

import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "https://thithithara.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use((config) => {
  const token = Cookies.get("token") || "";
  const id = localStorage.getItem("id")
  const userId = typeof window !== "undefined" ? localStorage.getItem("id") || "" : "";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (userId) {
    config.headers["User-Id"] = userId;
  }

  return config;
});

export const useApi = (endpoint, method = "get") => {
  if (method.toLowerCase() === "get") {
    return useQuery({
      queryKey: [endpoint],
      queryFn: async () => {
        const response = await api.get(endpoint);
        return response.data.propertes;
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "An error occurred");
      },
    });
  }

  return useMutation({
    mutationFn: (data) => api[method](endpoint, data),
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });
};