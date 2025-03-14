"use client";

import { useApi } from "@/hooks/UseApi";

export const useAddProperty = () => {
  return useApi("/property", "post");
};

export const useGetProperties = (id) => {
  return useApi(id ? `/property/${id}` : null, "get");
}