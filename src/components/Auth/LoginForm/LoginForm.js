'use client'

import { useState } from 'react'
import { useApi } from '@/hooks/UseApi'
import { toast } from 'react-hot-toast'

export default function LoginForm({ onOtpSent }) {
  const [email, setEmail] = useState('')
  const { mutate, isPending } = useApi('/sendlogin')

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(
      { email },
      {
        onSuccess: () => {
          toast.success('OTP sent to your email')
          onOtpSent(email)
        },
        onError: () => {
          toast.error('Failed to send OTP. Please try again.')
        },
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
        disabled={isPending}
      >
        {isPending ? 'Sending...' : 'Login'}
      </button>
    </form>
  )
}

