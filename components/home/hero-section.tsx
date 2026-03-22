"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
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
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-heading text-xs uppercase tracking-wider text-primary">
            AI-Powered Lead Automation
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-5xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-balance">The AI System That Turns</span>
          <br />
          <span className="text-primary">Lost Leads Into Locked Revenue</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:mt-8 md:text-xl">
          Stop losing leads to slow follow-ups and missed calls. Imperium automates your entire 
          lead capture, nurturing, and scheduling process so you can close more deals while you sleep.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 gap-2 bg-primary px-8 font-heading text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            <a href="https://cal.com/imperuim-systems-vl0zgj/secret" target="_blank" rel="noopener noreferrer">
              Book Your Free Audit
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
              <Play className="h-4 w-4" />
              See Pricing
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground">
            Trusted by Leading Service Businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["HVAC Pros", "Roofers", "Contractors", "Home Services", "Auto Shops"].map((industry) => (
              <span key={industry} className="font-heading text-sm uppercase tracking-wider text-foreground">
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "300%", label: "Average ROI" },
            { value: "24/7", label: "Lead Response" },
            { value: "10x", label: "Faster Follow-up" },
            { value: "50%", label: "More Conversions" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-body text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
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
