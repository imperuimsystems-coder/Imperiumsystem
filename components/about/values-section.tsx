"use client"

import { Target, Zap, Users, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure everything by one metric: your revenue growth. If we're not making you money, we're not doing our job.",
  },
  {
    icon: Zap,
    title: "Speed Obsessed",
    description: "In lead conversion, speed is everything. We've built our entire system around instant response and rapid follow-up.",
  },
  {
    icon: Users,
    title: "Partner Mindset",
    description: "We're not just a vendor, we're your growth partner. Your success is our success, and we're invested in your outcomes.",
  },
  {
    icon: Shield,
    title: "Relentlessly Reliable",
    description: "Your leads are too valuable to trust to an unreliable system. We guarantee 99.9% uptime and 24/7 monitoring.",
  },
]

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
            Our Values
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Built on Principles That</span>
            <br />
            <span className="text-primary">Drive Your Success</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
