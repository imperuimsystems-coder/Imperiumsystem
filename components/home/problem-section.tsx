"use client"

import { AlertTriangle, Clock, PhoneOff, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: PhoneOff,
    title: "Missed Calls = Missed Money",
    description: "78% of leads go to the first business that responds. If you're not answering instantly, your competitors are.",
  },
  {
    icon: Clock,
    title: "Slow Follow-Ups Kill Deals",
    description: "The average service business takes 47 hours to follow up. By then, your lead has already hired someone else.",
  },
  {
    icon: TrendingDown,
    title: "Manual Processes Don't Scale",
    description: "You're spending hours on admin work instead of closing deals. Your time is worth more than data entry.",
  },
  {
    icon: AlertTriangle,
    title: "Leads Fall Through Cracks",
    description: "Without a system, warm leads go cold. You're paying for marketing that never converts.",
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
            <span className="text-balance">You're Losing Leads Every Day.</span>
            <br />
            <span className="text-muted-foreground">Here's Why.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            Most service businesses lose 40-60% of their leads due to slow response times 
            and inconsistent follow-up. That's thousands of dollars walking out the door.
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
                average response time for service businesses
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
