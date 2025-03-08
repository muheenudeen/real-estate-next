import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const api = axios.create({ 
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    "User-Id": localStorage.getItem("id") || "",
  }
});

export const useApi = (endpoint, method = "post") => {
  const token = localStorage.getItem("token") || "";
  const userId = localStorage.getItem("id") || "";

  if (method.toLowerCase() === "get") {
    return useQuery({
      queryKey: [endpoint],
      queryFn: async () => {
        const response = await api.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
            "User-Id": userId,
          }
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
        }
      }),
    onError: (error) => {
      toast.error(error.response?.data?.message || "An error occurred");
    },
  });
};
