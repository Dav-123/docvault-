"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { AuthLayout } from "@/components/auth/auth-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  
  const token = searchParams.get('token')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      return
    }

    // Simulate verification
    setTimeout(() => {
      setStatus('success')
    }, 2000)
  }, [token])

  return (
    <AuthLayout
      title="Email Verification"
      subtitle="Verifying your email address"
    >
      <Card className="border-2">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            {status === 'loading' && (
              <>
                <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Verifying your email...</h3>
                  <p className="text-sm text-muted-foreground">
                    Please wait while we verify your email address
                  </p>
                </div>
              </>
            )}

            {status === 'success' && (
              <>
                <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email verified!</h3>
                  <p className="text-sm text-muted-foreground">
                    Your email has been successfully verified. You can now access all features.
                  </p>
                </div>
              </>
            )}

            {status === 'error' && (
              <>
                <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Verification failed</h3>
                  <p className="text-sm text-muted-foreground">
                    The verification link is invalid or has expired.
                  </p>
                </div>
              </>
            )}
          </div>
        </CardContent>

        <CardFooter>
          {status === 'success' && (
            <Link href="/dashboard" className="w-full">
              <Button variant="gradient" size="lg" className="w-full">
                Go to Dashboard
              </Button>
            </Link>
          )}

          {status === 'error' && (
            <Link href="/login" className="w-full">
              <Button variant="outline" className="w-full">
                Back to Login
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}
