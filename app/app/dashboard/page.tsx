"use client"

import { useAuth } from "@/hooks/useAuth"
import { HeroCard } from "@/components/dashboard/hero-card"
import { FeatureGrid } from "@/components/dashboard/feature-grid"
import { MoreTools } from "@/components/dashboard/more-tools"

export default function DashboardPage() {
  const { user } = useAuth()

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  return (
    <div className="min-h-screen p-4 space-y-6">
      <HeroCard
        greeting={getGreeting()}
        userName={user?.name || "User"}
        xp={user?.xp || 0}
        level={user?.level || 1}
        streak={user?.streak || 0}
      />

      <FeatureGrid />

      <MoreTools />
    </div>
  )
}
