import { AuthLayout } from "@/components/auth/auth-layout"
import { LoginForm } from "@/components/auth/login-form"

export const metadata = {
  title: "Sign In | DocVault",
  description: "Sign in to your DocVault account",
}

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue your learning journey"
    >
      <LoginForm />
    </AuthLayout>
  )
}
