"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, ChevronUp, Calculator, Atom, Palette, Trophy, Clock, TrendingUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const moreTools = [
  { icon: Calculator, label: "Math Playground", href: "/playground/math", color: "from-blue-500 to-indigo-500" },
  { icon: Atom, label: "Science Lab", href: "/playground/science", color: "from-green-500 to-teal-500" },
  { icon: Palette, label: "Arts Canvas", href: "/playground/arts", color: "from-pink-500 to-purple-500" },
  { icon: Trophy, label: "Leaderboard", href: "/leaderboard", color: "from-yellow-500 to-orange-500" },
  { icon: Clock, label: "Pomodoro", href: "/pomodoro", color: "from-red-500 to-pink-500" },
  { icon: TrendingUp, label: "Analytics", href: "/analytics", color: "from-cyan-500 to-blue-500" },
]

export function MoreTools() {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()

  return (
    <div id="more-tools" className="space-y-3">
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 glass-card rounded-xl hover:bg-white/5 transition-colors"
      >
        <span className="font-medium">More Tools</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-[#00FFC2]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/60" />
        )}
      </button>

      {/* Expandable Grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-3">
              {moreTools.map((tool, index) => {
                const Icon = tool.icon

                return (
                  <motion.button
                    key={tool.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => router.push(tool.href)}
                    className="glass-card p-4 rounded-xl hover:scale-105 active:scale-95 transition-all group relative overflow-hidden"
                  >
                    <div className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br",
                      tool.color
                    )} />

                    <div className={cn(
                      "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 mx-auto",
                      tool.color
                    )}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="text-sm font-medium text-center">{tool.label}</div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
