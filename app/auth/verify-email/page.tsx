import { Suspense } from 'react'
import VerifyEmailClient from './VerifyEmailClient'
import { AuthLayout } from '@/components/auth/auth-layout'


export const metadata = {
  title: "Verify Email | DocVault",
  description: "Verify your email address",
}

export default function VerifyEmailPage() {
  return (
    <AuthLayout
      title="Email Verification"
      subtitle="Verifying your email address"
    >
      <Suspense fallback={<LoadingFallback />}>
        <VerifyEmailClient />
      </Suspense>
    </AuthLayout>
  )
}
