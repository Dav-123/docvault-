"use client"

import { Flame, TrendingUp, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

interface HeroCardProps {
  greeting: string
  userName: string
  xp: number
  level: number
  streak: number
}

export function HeroCard({ greeting, userName, xp, level, streak }: HeroCardProps) {
  const router = useRouter()
  const xpForNextLevel = level * 1000
  const xpProgress = (xp % xpForNextLevel) / xpForNextLevel * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 rounded-2xl space-y-4"
    >
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold mb-1">
          {greeting}, <span className="gradient-text">{userName}</span>!
        </h1>
        <p className="text-sm text-white/60">Ready to continue your learning journey?</p>
      </div>

      {/* Stats Row */}
      <div className="flex items-center gap-4">
        {/* XP Progress */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#00FFC2]" />
              <span className="text-sm font-medium">Level {level}</span>
            </div>
            <span className="text-xs text-white/60">{Math.round(xpProgress)}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${xpProgress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#00FFC2] to-[#00B8D4] rounded-full"
              style={{
                boxShadow: "0 0 10px rgba(0,255,194,0.5)"
              }}
            />
          </div>
          <p className="text-xs text-white/40 mt-1">
            {xp.toLocaleString()} / {xpForNextLevel.toLocaleString()} XP
          </p>
        </div>

        {/* Streak */}
        <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
          <Flame className="w-5 h-5 text-orange-500" />
          <div>
            <div className="text-lg font-bold">{streak}</div>
            <div className="text-[10px] text-white/60">day streak</div>
          </div>
        </div>
      </div>

      {/* Continue Reading Card */}
      <button
        onClick={() => router.push("/reader/last")}
        className="w-full p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-16 bg-gradient-to-br from-[#00FFC2]/20 to-[#00B8D4]/20 rounded-lg flex items-center justify-center">
            <span className="text-2xl">📚</span>
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm font-medium mb-1">Continue Reading</div>
            <div className="text-xs text-white/60">Python Documentation - Chapter 5</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[60%] bg-[#00FFC2]" />
              </div>
              <span className="text-xs text-white/60">60%</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#00FFC2] group-hover:translate-x-1 transition-all" />
        </div>
      </button>
    </motion.div>
  )
}
