import Link from "next/link"
import { BookOpen } from "lucide-react"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 justify-center">
            <div className="p-2 bg-primary rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">DocVault</span>
          </Link>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          {/* Form */}
          {children}
        </div>
      </div>

      {/* Right Side - Image/Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 items-center justify-center p-8">
        <div className="max-w-md text-center space-y-6">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-3xl font-bold">
            Access Knowledge <br />
            <span className="gradient-text">Anywhere, Anytime</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            500,000+ documents available offline. Learn without limits.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-lg bg-background/50 backdrop-blur">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            <div className="p-4 rounded-lg bg-background/50 backdrop-blur">
              <div className="text-2xl font-bold">500K+</div>
              <div className="text-sm text-muted-foreground">Docs</div>
            </div>
            <div className="p-4 rounded-lg bg-background/50 backdrop-blur">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Offline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
