import { AuthLayout } from "@/components/auth/auth-layout"
import { RegisterForm } from "@/components/auth/register-form"

export const metadata = {
  title: "Create Account | DocVault",
  description: "Create your DocVault account and start learning offline",
}

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your learning journey with 500K+ documents"
    >
      <RegisterForm />
    </AuthLayout>
  )
}
