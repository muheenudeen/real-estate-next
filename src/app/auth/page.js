import AuthForm from '@/components/Auth/AuthForm/AuthForm'

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <AuthForm />
      </div>
    </div>
  )
}

