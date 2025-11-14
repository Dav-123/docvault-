use client"

import { motion } from "framer-motion"
import {
  Zap,
  Wifi,
  BookOpen,
  Users,
  DollarSign,
  Shield,
  Search,
  Bookmark,
  Download,
  Palette,
  Globe,
  Code,
  MessageSquare,
  TrendingUp,
  Lock,
  Smartphone
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant search and navigation. No loading screens, ever.",
    color: "text-yellow-500"
  },
  {
    icon: Wifi,
    title: "Offline First",
    description: "Download docs once, access forever. Works on planes, trains, and basements.",
    color: "text-blue-500"
  },
  {
    icon: BookOpen,
    title: "Massive Library",
    description: "500,000+ pages from 20+ sources. Python, JavaScript, React, FastAPI, and more.",
    color: "text-purple-500"
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Create groups, share collections, learn with friends in real-time.",
    color: "text-pink-500"
  },
  {
    icon: DollarSign,
    title: "Earn Rewards",
    description: "Get paid for invites, contributions, popular content, and active groups.",
    color: "text-green-500"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No tracking, no ads, no nonsense. Your data stays yours, always.",
    color: "text-red-500"
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Semantic search, typo tolerance, filters. Find exactly what you need.",
    color: "text-indigo-500"
  },
  {
    icon: Bookmark,
    title: "Personal Library",
    description: "Bookmarks, highlights, notes, collections. Organize your learning.",
    color: "text-orange-500"
  },
  {
    icon: Download,
    title: "Unlimited Downloads",
    description: "Pro users get unlimited content packs. Free users get 3 forever.",
    color: "text-cyan-500"
  },
  {
    icon: Palette,
    title: "Beautiful Themes",
    description: "20+ premium themes. Light, dark, sepia. Customize everything.",
    color: "text-violet-500"
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "UI in 20+ languages. Content in original languages with translations.",
    color: "text-teal-500"
  },
  {
    icon: Code,
    title: "Code Playground",
    description: "Run Python, JavaScript, HTML/CSS in browser. No setup needed.",
    color: "text-amber-500"
  },
  {
    icon: MessageSquare,
    title: "Community",
    description: "Share snippets, discuss docs, help others. 10,000+ active members.",
    color: "text-rose-500"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Reading streaks, goals, analytics. Gamify your learning journey.",
    color: "text-emerald-500"
  },
  {
    icon: Lock,
    title: "API Access",
    description: "RESTful API, webhooks, CLI tools. Integrate with your workflow.",
    color: "text-slate-500"
  },
  {
    icon: Smartphone,
    title: "PWA + Extensions",
    description: "Install as app. Browser extensions for Chrome, Firefox, Edge, VS Code.",
    color: "text-fuchsia-500"
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Learn Offline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DocVault packs powerful features that make learning accessible, 
            organized, and rewarding—no matter where you are.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-secondary mb-4 ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">And that's just the beginning...</p>
          <a 
            href="#pricing" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            See all features in Pro →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
