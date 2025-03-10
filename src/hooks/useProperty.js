"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "./UseApi"
import { toast } from "react-hot-toast"

export function useAddProperty() {
  return useMutation({
    mutationFn: (data) => api.post("/property", data),
    onSuccess: () => {
      toast.success("Property added successfully")
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to add property")
    },
  })
}

export function useGetProperties() {
  return useQuery({
    queryKey: ["property"],
    queryFn: async () => {
      const response = await api.get("/property")
      return response.data.propertes
    },
  })
}

export function useGetProperty(id) {
  return useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      if (!id) return null
      const response = await api.get(`/property/${id}`)
      return response.data.property
    },
    enabled: !!id,
  })
}

