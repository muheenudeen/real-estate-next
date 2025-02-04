import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export const api = axios.create({ baseURL: "https://thithithara.onrender.com/api" });


export const useApi = (endpoint, method = "post") => {
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
