"use client"

import axios from "axios"

export const api = axios.create({
  baseURL: "https://thithithara.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("id")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    if (userId) {
      config.headers["User-Id"] = userId
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

