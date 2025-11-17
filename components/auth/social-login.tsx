import { Button } from "@/components/ui/button"
import { Github, Chrome } from "lucide-react"

export function SocialLogin() {
  const googleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/oauth/google`
  }

  const githubLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/oauth/github`
  }

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-muted" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          size="lg"
          onClick={googleLogin}
          className="w-full font-medium"
        >
          <Chrome className="mr-2 h-5 w-5" />
          Google
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={githubLogin}
          className="w-full font-medium"
        >
          <Github className="mr-2 h-5 w-5" />
          GitHub
        </Button>
      </div>
    </div>
  )
}
