"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for casual learners",
    icon: Zap,
    features: [
      "3 content packs",
      "Basic search",
      "50 bookmarks",
      "3 collections",
      "Community access",
      "Mobile PWA app",
      "Reading history (30 days)",
      "Light & dark themes"
    ],
    cta: "Get Started Free",
    href: "/register",
    popular: false,
    variant: "outline" as const
  },
  {
    name: "Pro",
    price: "$3",
    period: "per month",
    description: "For serious developers",
    icon: Sparkles,
    features: [
      "Everything in Free, plus:",
      "Unlimited content packs",
      "Advanced semantic search",
      "Unlimited bookmarks & collections",
      "Cross-device sync",
      "Study groups & real-time chat",
      "Highlights & personal notes",
      "API access & webhooks",
      "Browser & VS Code extensions",
      "Code playground",
      "Reading analytics & streaks",
      "Custom themes",
      "Earn rewards program",
      "Priority support"
    ],
    cta: "Start Free Trial",
    href: "/register?plan=pro",
    popular: true,
    variant: "gradient" as const
  },
  {
    name: "Lifetime",
    price: "$20",
    period: "one-time",
    description: "Best value - limited to 500 spots!",
    icon: Crown,
    features: [
      "All Pro features",
      "Forever - no recurring fees",
      "Priority support for life",
      "Early access to new features",
      "Exclusive lifetime badge",
      "Vote on feature roadmap",
      "Private Discord channel",
      "1-on-1 onboarding call"
    ],
    cta: "Claim Lifetime Access",
    href: "/register?plan=lifetime",
    popular: false,
    variant: "default" as const,
    badge: "Only 327 spots left!"
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when ready. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "border-primary shadow-2xl shadow-primary/20 scale-105"
                  : "border-border bg-card"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Limited Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium animate-pulse">
                  {plan.badge}
                </div>
              )}

              {/* Icon */}
              <div className="inline-flex p-3 rounded-xl bg-secondary mb-4">
                <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              {/* CTA Button */}
              <Link href={plan.href} className="block mb-6">
                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Link>

              {/* Features List */}
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-primary' : 'text-muted-foreground'} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">Can I switch from Free to Pro anytime?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! Upgrade or downgrade anytime. No long-term commitments.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
              <p className="text-sm text-muted-foreground">
                We accept all major credit/debit cards via Paystack. Secure and instant.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">Is the Lifetime deal really one-time?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! Pay $20 once, get Pro forever. Limited to 500 spots total.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">Can I earn money as a Free user?</h4>
              <p className="text-sm text-muted-foreground">
                No, earning rewards requires Pro or Lifetime. But invites work for everyone!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">30-Day Money-Back Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
