"use client"

import { Shield, CreditCard, Calendar, Eye } from "lucide-react"

const guarantees = [
  {
    icon: Shield,
    title: "30-day money-back guarantee",
    description: "Not satisfied? Get a full refund within 30 days, no questions asked.",
  },
  {
    icon: CreditCard,
    title: "No credit card required for audit",
    description: "Book your free automation audit with zero commitment.",
  },
  {
    icon: Calendar,
    title: "Cancel anytime",
    description: "For monthly plans, cancel whenever you want. No long-term contracts.",
  },
  {
    icon: Eye,
    title: "Transparent pricing",
    description: "What you see is what you pay. No hidden fees or surprise charges.",
  },
]

export function PricingGuarantee() {
  return (
    <section className="border-t border-border/30 bg-secondary/20 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((guarantee) => (
            <div key={guarantee.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <guarantee.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                {guarantee.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
