import * as React from "react"
import { cn } from "@/lib/utils"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null
  alt?: string
  fallback: string // Usually first letter(s) of name
  className?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = "", fallback, ...props }, ref) => {
  const [error, setError] = React.useState(false)

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[#00FFC2]/20",
        className
      )}
      {...props}
    >
      {src && !error ? (
        <img
          src={src}
          alt={alt}
          className="aspect-square h-full w-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#00FFC2] to-[#00B8D4] text-[#0A0E27] font-bold text-sm uppercase">
          {fallback}
        </div>
      )}
    </div>
  )
})
Avatar.displayName = "Avatar"

export { Avatar }
