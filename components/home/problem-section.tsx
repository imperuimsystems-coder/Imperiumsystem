"use client"

import { AlertTriangle, Clock, PhoneOff, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: PhoneOff,
    title: "Missed Calls Equal Missed Money",
    description: "78% of leads choose the first business that responds. If you are not answering instantly, your competitors are getting the job.",
  },
  {
    icon: Clock,
    title: "Slow Follow-Ups Kill Deals",
    description: "The average trade business takes 47 hours to follow up. By then, your lead has already hired someone else.",
  },
  {
    icon: TrendingDown,
    title: "Overpriced Marketers Underdeliver",
    description: "You are paying $500 to $2,000 a month for marketers who do basic SEO and make you chase them for results. There is a better way.",
  },
  {
    icon: AlertTriangle,
    title: "Leads Fall Through the Cracks",
    description: "Without a proper system, warm leads go cold. You are paying for marketing that never converts into actual jobs.",
  },
]

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-card py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-destructive/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-destructive">
            The Problem
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">You Are Losing Leads Every Day.</span>
            <br />
            <span className="text-muted-foreground">Here Is Why.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            Most trade businesses lose leads because they cannot respond fast enough or 
            follow up consistently. That means jobs going to your competitors.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group rounded-2xl border border-border/50 bg-background p-6 transition-all duration-300 hover:border-destructive/30 hover:shadow-lg hover:shadow-destructive/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 transition-colors group-hover:bg-destructive/20">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 rounded-2xl border border-destructive/20 bg-destructive/5 p-8 md:p-12">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div>
              <div className="font-display text-4xl font-bold text-destructive md:text-5xl">
                78%
              </div>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                of leads choose the first responder
              </p>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-destructive md:text-5xl">
                47 hrs
              </div>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                average response time for trade businesses
              </p>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-destructive md:text-5xl">
                $50K+
              </div>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                lost revenue per year from missed leads
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
