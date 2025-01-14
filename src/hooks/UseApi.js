import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

const api = axios.create({ baseURL: 'http://localhost:4040/api' })

export const useApi = (endpoint, method = 'post') => {
  return useMutation({
    mutationFn: (data) => api[method](endpoint, data),
    onError: (error) => {
      toast.error(error.response?.data?.message || 'An error occurred')
    }
  })
}

