import AuthForm from '@/components/Auth/AuthForm/AuthForm'
import LoginForm from '@/components/Auth/LoginForm/LoginForm'

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <AuthForm />
      </div>
    </div>
  )
}

