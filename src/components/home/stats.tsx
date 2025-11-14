"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, Clock, TrendingUp } from "lucide-react"
import { formatNumber } from "@/lib/utils"

const stats = [
  {
    icon: Users,
    label: "Active Users",
    value: 10000,
    suffix: "+",
    color: "text-blue-500"
  },
  {
    icon: BookOpen,
    label: "Documentation Pages",
    value: 500000,
    suffix: "+",
    color: "text-purple-500"
  },
  {
    icon: Users,
    label: "Study Groups",
    value: 1200,
    suffix: "+",
    color: "text-pink-500"
  },
  {
    icon: Clock,
    label: "Hours Saved",
    value: 50000,
    suffix: "+",
    color: "text-green-500"
  }
]

export function Stats() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background shadow-lg mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {formatNumber(stat.value)}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
