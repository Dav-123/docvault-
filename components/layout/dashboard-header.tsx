"use client"

import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import { Bell, ChevronLeft, BookOpen } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { useState } from "react"

export function DashboardHeader() {
  const { user } = useAuth()
  const router = useRouter()
  const [unreadCount] = useState(3) // Mock unread notifications

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0E27]/80 border-b border-white/5">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gradient-to-br from-[#00FFC2] to-[#00B8D4] rounded-lg">
            <BookOpen className="w-4 h-4 text-[#0A0E27]" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-[#00FFC2] to-white bg-clip-text text-transparent">
            DocVault
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <button
            onClick={() => router.push("/notifications")}
            className="relative p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label={`Notifications (${unreadCount} unread)`}
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Avatar */}
          <button
            onClick={() => router.push("/profile")}
            className="relative"
            aria-label="Profile"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00FFC2] to-[#00B8D4] p-0.5">
              <div className="w-full h-full rounded-full bg-[#0A0E27] flex items-center justify-center text-sm font-bold">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
