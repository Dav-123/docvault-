"use client"

import { usePathname, useRouter } from "next/navigation"
import { Home, Search, BookOpen, Users, User, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: BookOpen, label: "Library", href: "/library" },
  { icon: Users, label: "Community", href: "/community" },
  { icon: User, label: "Profile", href: "/profile" },
]

export function BottomNav() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => router.push("/create")}
        className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#00FFC2] to-[#00B8D4] shadow-lg shadow-[#00FFC2]/50 flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
        aria-label="Create new"
      >
        <Plus className="w-6 h-6 text-[#0A0E27]" />
      </button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#0A0E27]/90 border-t border-white/5">
        <div className="flex items-center justify-around px-2 py-2 safe-area-inset-bottom">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <button
                key={item.href}
                onClick={() => router.push(item.href)}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all min-w-[60px]",
                  isActive
                    ? "text-[#00FFC2]"
                    : "text-white/50 hover:text-white/80"
                )}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className={cn("w-5 h-5", isActive && "drop-shadow-[0_0_8px_rgba(0,255,194,0.6)]")} />
                <span className="text-[10px] font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00FFC2] rounded-full" />
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
