'use client'

import { useState } from 'react'
import { useApi } from '@/hooks/UseApi'
import { toast } from 'react-hot-toast'

export default function SignupForm({ onSignupSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    usertype: 'Individual',
  })

  const { mutate, isPending } = useApi('/signup')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(
      formData,
      {
        onSuccess: () => {
          toast.success('Signup successful. Please verify your email.')
          onSignupSuccess(formData.email)
        },
        onError: () => {
          toast.error('Signup failed. Please try again.')
        },
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-2 border rounded"
        required
      />
      <select
        name="usertype"
        value={formData.usertype}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="Individual">Individual</option>
        <option value="Builder">Builder</option>
        <option value="Agent">Agent</option>
      </select>
      <button
        type="submit"
        className="w-full p-2 bg-green-500 text-white rounded"
        disabled={isPending}
      >
        {isPending ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  )
}
