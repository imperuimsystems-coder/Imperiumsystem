"use client"

import { Zap, Bot, Calendar, TrendingUp, Shield, Clock } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Instant Response",
    description: "Respond to leads in under 60 seconds, 24/7. Never miss an opportunity again.",
  },
  {
    icon: Bot,
    title: "AI-Powered Nurturing",
    description: "Smart follow-up sequences that adapt to lead behavior and maximize conversions.",
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description: "Leads book directly into your calendar without any back-and-forth.",
  },
  {
    icon: TrendingUp,
    title: "Lead Scoring",
    description: "Know exactly which leads are hot and ready to buy.",
  },
  {
    icon: Shield,
    title: "Zero Leads Lost",
    description: "Every lead is tracked, followed up, and converted.",
  },
  {
    icon: Clock,
    title: "Time Freedom",
    description: "No more worrying about missed calls or late texts. Imperium handles it all so you can focus on the job.",
  },
]

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
              The Solution
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">Imperium Automates Your</span>
              <br />
              <span className="text-primary">Entire Lead Pipeline</span>
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              From the moment a lead comes in to the moment they book, Imperium handles everything. 
              No more missed calls, no more forgotten follow-ups, no more lost revenue. Replace 
              overpriced marketers with AI that works 24/7 and costs a fraction of the price.
            </p>

            {/* Feature List */}
            <div className="mt-10 space-y-4">
              {["Lead capture from any source", "Instant SMS and email response", "Smart follow-up sequences", "Automatic appointment booking", "Real-time analytics dashboard"].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <svg className="h-3.5 w-3.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-body text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                  index === 0 || index === 5 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
