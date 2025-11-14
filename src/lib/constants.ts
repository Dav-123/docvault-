export const APP_NAME = "DocVault"
export const APP_DESCRIPTION = "Your offline-first documentation library. Access thousands of docs anytime, anywhere."
export const APP_URL = "https://docvault.vercel.app"

export const FEATURES = [
  {
    icon: "Zap",
    title: "Lightning Fast",
    description: "Instant search and navigation. No loading screens, ever."
  },
  {
    icon: "Wifi",
    title: "Offline First",
    description: "Download docs once, access forever. Works on planes, trains, and basements."
  },
  {
    icon: "BookOpen",
    title: "Massive Library",
    description: "20+ documentation sources. Python, JavaScript, React, and more."
  },
  {
    icon: "Users",
    title: "Study Together",
    description: "Create study groups, share collections, learn with friends."
  },
  {
    icon: "DollarSign",
    title: "Earn Rewards",
    description: "Get paid for invites, contributions, and popular content."
  },
  {
    icon: "Shield",
    title: "Privacy First",
    description: "No tracking, no ads. Your data stays yours."
  }
]

export const PRICING = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for casual learners",
    features: [
      "3 content packs",
      "Basic search",
      "50 bookmarks",
      "3 collections",
      "Community access",
      "Mobile app"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$3",
    period: "per month",
    description: "For serious developers",
    features: [
      "Unlimited downloads",
      "Advanced search",
      "Unlimited bookmarks",
      "Cross-device sync",
      "Study groups",
      "API access",
      "Browser extensions",
      "Earn rewards"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Lifetime",
    price: "$20",
    period: "one-time",
    description: "Best value - limited spots!",
    features: [
      "All Pro features",
      "Forever",
      "Priority support",
      "Early access",
      "Lifetime badge",
      "No recurring fees"
    ],
    cta: "Claim Lifetime",
    popular: false
  }
]

export const STATS = [
  { label: "Active Users", value: "10K+", icon: "Users" },
  { label: "Docs Available", value: "500K+", icon: "BookOpen" },
  { label: "Study Groups", value: "1.2K+", icon: "Users" },
  { label: "Hours Saved", value: "50K+", icon: "Clock" }
]

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Full Stack Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "DocVault saved me during a 12-hour flight. Had all the docs I needed offline. Absolute game-changer!",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "CS Student",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    content: "Study groups are amazing! Our bootcamp cohort uses DocVault to learn together. Worth every penny.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Tech Lead",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    content: "Finally, a dev tool that respects my privacy AND works offline. The lifetime deal is a steal!",
    rating: 5
  }
]
