// app/(auth)/verify-email/page.tsx   ← SERVER COMPONENT

import { Suspense } from 'react'
import VerifyEmailClient from './VerifyEmailClient'
import { AuthLayout } from '@/components/auth/auth-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

export const metadata = {
  title: "Verify Email | DocVault",
  description: "Verify your email address",
}

function LoadingFallback() {
  return (
    <Card className="border-2">
      <CardContent className="pt-6 text-center">
        <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
        <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
      </CardContent>
    </Card>
  )
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
