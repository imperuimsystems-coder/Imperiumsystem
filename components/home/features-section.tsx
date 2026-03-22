"use client"

import { MessageSquare, Mail, Users, BarChart3, Plug, Headphones } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "SMS Automation",
    description: "Personalized text message sequences that feel human. Engage leads where they actually respond.",
    stats: "98% open rate",
  },
  {
    icon: Mail,
    title: "Email Sequences",
    description: "Automated email campaigns that nurture leads through your sales funnel.",
    stats: "45% response rate",
  },
  {
    icon: Users,
    title: "Lead Scoring",
    description: "AI identifies your hottest leads so you know exactly who to call first.",
    stats: "3x conversion boost",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time visibility into your lead pipeline, conversion rates, and ROI.",
    stats: "Complete visibility",
  },
  {
    icon: Plug,
    title: "CRM Integration",
    description: "Works with your existing tools. QuoteIQ, ServiceTitan, HubSpot, and more.",
    stats: "50+ integrations",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Your success is our priority. Get help from real humans who know your business.",
    stats: "24hr response",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
            Features
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Everything You Need To</span>
            <br />
            <span className="text-primary">Dominate Your Market</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            A complete lead automation system built specifically for service businesses like yours.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                  {feature.stats}
                </span>
              </div>
              
              <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
