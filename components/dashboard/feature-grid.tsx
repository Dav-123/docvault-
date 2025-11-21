"use client"

import { useRouter } from "next/navigation"
import {
  BookOpen,
  Search,
  Brain,
  Code,
  Layers,
  ListChecks,
  StickyNote,
  Users,
  Wallet,
  Sparkles
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const features = [
  { icon: BookOpen, label: "Document Reader", href: "/library", color: "from-blue-500 to-cyan-500" },
  { icon: Search, label: "Search", href: "/search", color: "from-purple-500 to-pink-500" },
  { icon: Brain, label: "AI Study Buddy", href: "/ai-buddy", color: "from-orange-500 to-red-500", badge: "NEW" },
  { icon: Code, label: "Code Playground", href: "/playground/code", color: "from-green-500 to-emerald-500" },
  { icon: Layers, label: "Flashcards", href: "/flashcards", color: "from-yellow-500 to-orange-500" },
  { icon: ListChecks, label: "Quizzes", href: "/quizzes", color: "from-indigo-500 to-purple-500" },
  { icon: StickyNote, label: "Notes", href: "/notes", color: "from-pink-500 to-rose-500" },
  { icon: Users, label: "Groups", href: "/groups", color: "from-teal-500 to-cyan-500" },
  { icon: Wallet, label: "Earnings", href: "/earnings", color: "from-[#00FFC2] to-[#00B8D4]", currency: "₦" },
  { icon: Sparkles, label: "More Tools", href: "#more", color: "from-violet-500 to-purple-500" },
]

export function FeatureGrid() {
  const router = useRouter()

  return (
    <div className="grid grid-cols-2 gap-3">
      {features.map((feature, index) => {
        const Icon = feature.icon

        return (
          <motion.button
            key={feature.href}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => {
              if (feature.href === "#more") {
                document.getElementById("more-tools")?.scrollIntoView({ behavior: "smooth" })
              } else {
                router.push(feature.href)
              }
            }}
            className="glass-card p-4 rounded-xl hover:scale-105 active:scale-95 transition-all group relative overflow-hidden"
          >
            {/* Gradient background on hover */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br",
              feature.color
            )} />

            {/* Badge */}
            {feature.badge && (
              <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#00FFC2] text-[#0A0E27] text-[8px] font-bold rounded-full">
                {feature.badge}
              </div>
            )}

            {/* Icon */}
            <div className={cn(
              "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 mx-auto",
              feature.color
            )}>
              <Icon className="w-6 h-6 text-white" />
            </div>

            {/* Label */}
            <div className="text-sm font-medium text-center">
              {feature.currency && (
                <span className="text-[#00FFC2] mr-1">{feature.currency}</span>
              )}
              {feature.label}
            </div>
          </motion.button>
        )
      })}
    </div>
  )
}
