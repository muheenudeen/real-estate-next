'use client'

import { useState } from 'react'
import { useApi } from '@/hooks/UseApi'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function OtpVerification({ email, isLogin }) {
  const [otp, setOtp] = useState('')
  const { mutate, isPending } = useApi(isLogin ? '/verify-login-otp' : '/verify-email')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(
      { email, otp },
      {
        onSuccess: (data) => {
          if (isLogin) {
            localStorage.setItem('token', data.data.token)
            toast.success('Login successful')
            router.push('/dashboard')
          } else {
            toast.success('Email verified successfully')
            router.push('/auth')
          }
        },
        onError: () => {
          toast.error('Verification failed. Please try again.')
        },
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full p-2 bg-purple-500 text-white rounded"
        disabled={isPending}
      >
        {isPending ? 'Verifying...' : 'Verify OTP'}
      </button>
    </form>
  )
}

