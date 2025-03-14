"use client";

import { useApi } from "@/hooks/UseApi";

export const useAddProperty = () => {
  return useApi("/property", "post");
};

export const useGetProperties = () => {
  return useApi("/property", "get");
};