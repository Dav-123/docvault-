"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Full Stack Developer",
    company: "Tech Startup",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "DocVault saved me during a 12-hour flight to a conference. Had all the React and Python docs I needed offline. Built an entire prototype mid-air. Absolute game-changer!",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "CS Student",
    company: "State University",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    content: "Our entire bootcamp cohort uses DocVault for our groups. We share collections, discuss concepts, and track progress together. The $20 lifetime deal is insanely good value!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Tech Lead",
    company: "Fortune 500",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    content: "Finally, a dev tool that respects my privacy AND works offline. The semantic search is incredibly accurate. I've recommended it to my entire team. Worth every penny.",
    rating: 5
  },
  {
    name: "Ahmed Hassan",
    role: "Software Engineer",
    company: "Remote",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
    content: "I live in an area with spotty internet. DocVault changed my life. I can learn at my own pace without worrying about connectivity. The offline mode is flawless.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Freelance Developer",
    company: "Self-Employed",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    content: "The API access is fantastic. I integrated DocVault search into my VS Code workflow. Now I can look up docs without leaving my editor. Productivity through the roof!",
    rating: 5
  },
  {
    name: "Kenji Tanaka",
    role: "Junior Developer",
    company: "Software Agency",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kenji",
    content: "I earned $50 last month just from inviting friends and maintaining a popular study group. DocVault pays me to learn and help others. How cool is that?!",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">10,000+</span> Developers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our community is saying about DocVault
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm leading-relaxed mb-6 text-muted-foreground">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-secondary"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Join thousands of developers learning smarter, not harder
          </p>
        </motion.div>
      </div>
    </section>
  )
}
