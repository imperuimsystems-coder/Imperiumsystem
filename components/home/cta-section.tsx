"use client"

import Link from "next/link"
import { ArrowRight, Shield, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-heading text-xs uppercase tracking-wider text-primary">
            Early Access Now Open
          </span>
        </div>

        <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">Ready to Stop Losing Leads</span>
          <br />
          <span className="text-primary">And Start Closing More Deals?</span>
        </h2>
        
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
          Join early access today to get ahead of your competitors. Book a free strategy call 
          and see exactly how Imperium can transform your lead conversion.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-body text-sm">Lock In Best Rates</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-body text-sm">Priority Onboarding</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-body text-sm">Get Ahead of Competitors</span>
          </div>
        </div>
      </div>
    </section>
  )
}
