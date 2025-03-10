import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

// Creating an Axios instance with cookie-based authentication
export const api = axios.create({
  baseURL: "https://thithithara.onrender.com/api ",
  headers: {
    Authorization: `Bearer ${Cookies.get("token") || ""}`, // Using Cookies for token
    "User-Id": typeof window !== "undefined" ? localStorage.getItem("id") || "" : "", // Avoid SSR issue
  },
});

// Custom Hook for API calls (GET & POST/PUT/DELETE)
export const useApi = (endpoint, method = "post") => {
  const token = Cookies.get("token") || ""; // Fetching token from Cookies
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("id") || "" : "";

  if (method.toLowerCase() === "get") {
    return useQuery({
      queryKey: [endpoint],
      queryFn: async () => {
        const response = await api.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
            "User-Id": userId,
          },
        });
        return response.data.propertes;
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "An error occurred");
      },
    });
  }

  return useMutation({
    mutationFn: (data) =>
      api[method](endpoint, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "User-Id": userId,
        },
      }),
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });
};
