"use client"

import Link from "next/link"
import { ArrowRight, Zap, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16 md:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-primary/5 blur-2xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center md:min-h-[calc(100vh-5rem)]">
        {/* Early Access Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-heading text-xs uppercase tracking-wider text-primary">
            Early Access Now Open
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-5xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-balance">Stop Losing Jobs to</span>
          <br />
          <span className="text-primary">Missed Calls & Slow Replies</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:mt-8 md:text-xl">
          Imperium AI Agents respond to your leads in under 60 seconds, 24/7. No more 
          missed calls, no more forgotten follow-ups, no more lost revenue. Get more 
          value than overpriced marketers who charge $500 to $2,000 a month.
        </p>

        {/* Early Access CTA Box */}
        <div className="mt-10 rounded-xl border border-primary/20 bg-card/50 p-6 backdrop-blur-sm md:p-8">
          <p className="mb-2 font-heading text-lg font-semibold uppercase tracking-wider text-foreground">
            Join Early Access Today
          </p>
          <p className="mb-6 max-w-md font-body text-sm text-muted-foreground">
            Get ahead of your competitors. Early access members lock in the best rates 
            and receive priority onboarding.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="h-14 gap-2 bg-primary px-8 font-heading text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
            >
              <a href="https://cal.com/imperuim-systems-vl0zgj/secret" target="_blank" rel="noopener noreferrer">
                Book Free Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 gap-2 border-border/50 px-8 font-heading text-sm uppercase tracking-wider hover:border-primary hover:bg-primary/10"
            >
              <Link href="/pricing">
                View Early Access Pricing
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground">
            Built for All Trades and Service Businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["HVAC", "Roofing", "Plumbing", "Electrical", "Construction", "Auto Services"].map((industry) => (
              <span key={industry} className="font-heading text-sm uppercase tracking-wider text-foreground">
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Feature Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">Under 60 Seconds</span>
            <span className="font-body text-sm text-muted-foreground">Average Response Time</span>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">24/7 Availability</span>
            <span className="font-body text-sm text-muted-foreground">Always Working for You</span>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">Zero Leads Lost</span>
            <span className="font-body text-sm text-muted-foreground">Every Lead Tracked and Followed Up</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-body text-xs uppercase tracking-wider">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>
    </section>
  )
}
