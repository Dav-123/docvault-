
'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function VerifyEmailClient() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      return
    }
    setTimeout(() => setStatus('success'), 2000) // Replace with real API later
  }, [token])

  return (
    <Card className="border-2">
      <CardContent className="pt-6 text-center space-y-6">
        {status === 'loading' && (
          <>
            <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
            <h3 className="font-semibold text-lg">Verifying your email...</h3>
            <p className="text-sm text-muted-foreground">Please wait while we confirm your email address</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email verified!</h3>
            <p className="text-sm text-muted-foreground">Welcome to DocVault!</p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
              <XCircle className="w-10 h-10 text-destructive" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Invalid link</h3>
            <p className="text-sm text-muted-foreground">This verification link is invalid or has expired.</p>
          </>
        )}
      </CardContent>

      <CardFooter className="flex justify-center">
        {status === 'success' ? (
          <Link href="/dashboard" className="w-full max-w-xs">
            <Button size="lg" className="w-full">Go to Dashboard</Button>
          </Link>
        ) : (
          <Link href="/login" className="w-full max-w-xs">
            <Button variant="outline" className="w-full">Back to Login</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
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
