"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">Ready to Join the</span>
          <br />
          <span className="text-primary">Imperium Family?</span>
        </h2>
        
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
          See how Imperium can transform your lead conversion. Book a free audit 
          and we'll show you exactly how much revenue you're leaving on the table.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
              View Pricing Plans
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
