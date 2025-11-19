"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Globe, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"
import { BorderTrail } from "@/components/ui/border-trail"

const features = [
  {
    icon: Zap,
    title: "Works for Any Transaction",
    description: "Whether you're sending $100 or $100,000, our AI analyzes every available route to find the optimal path for your specific transfer.",
  },
  {
    icon: TrendingDown,
    title: "Save 50-80% on Every Transfer",
    description: "Automatically compare rates across all payment rails and choose the cheapest option for each transaction.",
  },
  {
    icon: Globe,
    title: "200+ Countries Supported",
    description: "Send money anywhere in the world with the same intelligent routing and cost savings.",
  },
]

export function FeaturesCreditCardShowcase() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Credit Card Showcase */}
          <div className="relative" style={{ minHeight: '320px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Bottom Card (Back Layer) */}
              <div className="absolute top-8 left-8 w-full bg-gradient-to-br from-neutral-900 via-black to-neutral-950 rounded-2xl p-8 min-h-[280px] flex flex-col justify-between shadow-2xl border-2 border-white/10 opacity-60 -z-0">
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                </div>
                
                {/* Card Top */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="text-white">
                    <div className="text-xs text-white/50 mb-2 tracking-wider">PONTUS</div>
                    <div className="text-sm font-medium text-white/90">AI PAYMENT ROUTING</div>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Card Chip */}
                <div className="relative z-10 mb-8">
                  <div className="w-12 h-10 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-md border border-amber-400/30 flex items-center justify-center">
                    <div className="w-8 h-6 bg-gradient-to-br from-amber-300/40 to-amber-500/40 rounded-sm"></div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="relative z-10 mb-6">
                  <div className="text-white/90 text-xl font-mono tracking-wider mb-2">
                    •••• •••• •••• 4242
                  </div>
                  <div className="text-white/60 text-xs">
                    Valid for any transaction amount
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="relative z-10 flex justify-between items-end">
                  <div>
                    <div className="text-xs text-white/50 mb-1 tracking-wider">CARDHOLDER</div>
                    <div className="text-sm font-medium text-white/90">PONTUS AI</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/50 mb-1 tracking-wider">EXPIRES</div>
                    <div className="text-sm font-medium text-white/90">∞</div>
                  </div>
                </div>
              </div>

              {/* Top Card (Front Layer with Border Trail) */}
              <div className="relative bg-gradient-to-br from-neutral-900 via-black to-neutral-950 rounded-2xl p-8 min-h-[280px] flex flex-col justify-between shadow-2xl border-2 border-white/20 z-10">
                {/* Border Trail Animation */}
                <BorderTrail 
                  className="bg-white" 
                  size={40}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'linear',
                  }}
                />
                
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                </div>
                
                {/* Card Top */}
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="text-white">
                    <div className="text-xs text-white/50 mb-2 tracking-wider">PONTUS</div>
                    <div className="text-sm font-medium text-white/90">AI PAYMENT ROUTING</div>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Card Chip */}
                <div className="relative z-10 mb-8">
                  <div className="w-12 h-10 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-md border border-amber-400/30 flex items-center justify-center">
                    <div className="w-8 h-6 bg-gradient-to-br from-amber-300/40 to-amber-500/40 rounded-sm"></div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="relative z-10 mb-6">
                  <div className="text-white/90 text-xl font-mono tracking-wider mb-2">
                    •••• •••• •••• 4242
                  </div>
                  <div className="text-white/60 text-xs">
                    Valid for any transaction amount
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="relative z-10 flex justify-between items-end">
                  <div>
                    <div className="text-xs text-white/50 mb-1 tracking-wider">CARDHOLDER</div>
                    <div className="text-sm font-medium text-white/90">PONTUS AI</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/50 mb-1 tracking-wider">EXPIRES</div>
                    <div className="text-sm font-medium text-white/90">∞</div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>

          {/* Simple Features List */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Works for Any Transaction
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Pontus analyzes every available payment route in real time for any amount, any currency pair, and any destination. Our AI automatically finds the cheapest, fastest path for your specific transfer.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

