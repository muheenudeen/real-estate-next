import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "https://thithithara.onrender.com/api",
  headers: {
    Authorization: `Bearer ${Cookies.get("token") || ""}`, 
    "User-Id": typeof window !== "undefined" ? localStorage.getItem("id") || "" : "",
  },
});

export const useApi = (endpoint, method = "post") => {
  const token = Cookies.get("token") || "";
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
