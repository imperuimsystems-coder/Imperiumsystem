"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    description: "Perfect for testing automation",
    price: "$399",
    period: "/month",
    features: [
      "Lead capture (1 source)",
      "SMS follow-up (basic templates)",
      "Email follow-up (basic sequences)",
      "Calendly integration",
      "Google Sheets tracking",
      "Email support (24-48 hour response)",
    ],
    bestFor: "New businesses, single location, <50 leads/month",
    stripeLink: "https://buy.stripe.com/aFafZibeOaZn9jVdap7N603",
    calLink: "https://cal.com/imperuim-systems-vl0zgj/secret",
    popular: false,
    badge: null,
  },
  {
    name: "Professional",
    description: "Everything you need to scale",
    price: "$749",
    period: "/month",
    features: [
      "Lead capture (unlimited sources)",
      "Advanced SMS sequences",
      "Advanced email sequences",
      "Lead scoring (hot/warm/cold)",
      "CRM integration",
      "Monthly optimization call",
      "Priority email support (24-hour response)",
    ],
    bestFor: "Established businesses, multiple locations, 50-200 leads/month",
    stripeLink: "https://buy.stripe.com/aFadRa5Uu1oN0Np0nD7N602",
    calLink: "https://cal.com/imperuim-systems-vl0zgj/secret",
    popular: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Enterprise",
    description: "For serious businesses",
    price: "$1,499",
    period: "/month",
    features: [
      "Everything in Professional",
      "Custom integrations (QuoteIQ, ServiceTitan, etc.)",
      "AI lead qualification",
      "Dedicated account manager",
      "Weekly optimization calls",
      "A/B testing + analytics dashboard",
      "Priority phone support (same-day response)",
      "Quarterly strategy sessions",
    ],
    bestFor: "High-volume businesses, complex workflows, 200+ leads/month",
    stripeLink: "https://buy.stripe.com/6oU00k82Cd7v8fRfix7N601",
    calLink: "https://cal.com/imperuim-systems-vl0zgj/secret",
    popular: false,
    badge: null,
  },
]

const yearlyPlan = {
  name: "Yearly Plan",
  description: "Lock in the best value for your business",
  price: "$8,988",
  period: "/year",
  billedAt: "Billed annually",
  savings: "BEST VALUE",
  features: [
    "Everything in Professional",
    "Priority onboarding and setup",
    "Quarterly strategy sessions",
    "Free tier upgrade if you outgrow",
    "Lead generation audit ($500 value)",
  ],
  comparison: {
    monthlyTotal: "$8,988 x 12 months",
    yearlyTotal: "$8,988.00 USD",
  },
  bestFor: "Committed businesses looking for the best value",
  stripeLink: "https://buy.stripe.com/7sY9AU5UuffD8fR8U97N604",
  calLink: "https://cal.com/imperuim-systems-vl0zgj/secret",
}

export function PricingSection() {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-7xl">
        {/* Monthly Plans Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5",
                plan.popular && "border-primary shadow-lg shadow-primary/10"
              )}
            >
              {plan.badge && (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-primary px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4 pt-8">
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {plan.description}
                </p>
                
                <div className="mt-6 flex items-baseline">
                  <span className="font-display text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="ml-1 font-body text-lg text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 pb-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="font-body text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 rounded-lg bg-secondary/50 p-3">
                  <p className="font-body text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Best for:</span> {plan.bestFor}
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col gap-3 pb-8 pt-4">
                <Button
                  asChild
                  className={cn(
                    "w-full font-heading text-sm uppercase tracking-wider",
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  )}
                  size="lg"
                >
                  <a href={plan.stripeLink} target="_blank" rel="noopener noreferrer">
                    Get Started Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary/30 font-heading text-sm uppercase tracking-wider text-foreground hover:border-primary hover:bg-primary/10"
                  size="lg"
                >
                  <a href={plan.calLink} target="_blank" rel="noopener noreferrer">
                    Book Free Audit
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Yearly Plan - Full Width */}
        <div className="mt-8">
          <Card className="relative overflow-hidden border-2 border-primary bg-gradient-to-br from-card via-card to-primary/5">
            <div className="absolute right-4 top-4 md:right-6 md:top-6">
              <span className="rounded-full bg-primary px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                BEST VALUE
              </span>
            </div>
            
            <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
              {/* Left side - Plan info */}
              <div>
                <h3 className="font-heading text-2xl font-semibold uppercase tracking-wide text-foreground">
                  {yearlyPlan.name}
                </h3>
                <p className="mt-1 font-body text-base text-muted-foreground">
                  {yearlyPlan.description}
                </p>
                
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-5xl font-bold text-foreground md:text-6xl">
                    {yearlyPlan.price}
                  </span>
                  <span className="font-body text-lg text-muted-foreground">
                    {yearlyPlan.period}
                  </span>
                </div>
                
                <p className="mt-2 font-body text-sm text-muted-foreground">
                  {yearlyPlan.billedAt}
                </p>
                
                <div className="mt-4 inline-block rounded-full bg-primary/20 px-4 py-2">
                  <span className="font-heading text-sm font-semibold text-primary">
                    {yearlyPlan.savings}
                  </span>
                </div>
                
                <ul className="mt-8 space-y-3">
                  {yearlyPlan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="font-body text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Right side - Savings breakdown & CTA */}
              <div className="flex flex-col justify-between">
                <div className="rounded-xl border border-border/50 bg-secondary/30 p-6">
                  <h4 className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
                    Annual Payment
                  </h4>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between border-b border-border/30 pb-3">
                      <span className="font-body text-sm text-foreground">Total:</span>
                      <span className="font-body text-sm font-semibold text-foreground">
                        {yearlyPlan.comparison.yearlyTotal}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-body text-sm text-muted-foreground">Per year</span>
                      <span className="font-heading text-sm font-semibold uppercase text-primary">
                        Best Value
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 rounded-lg bg-secondary/50 p-3">
                  <p className="font-body text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Best for:</span> {yearlyPlan.bestFor}
                  </p>
                </div>
                
                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    asChild
                    className="w-full bg-primary font-heading text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <a href={yearlyPlan.stripeLink} target="_blank" rel="noopener noreferrer">
                      Lock In Yearly Price
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/30 font-heading text-sm uppercase tracking-wider text-foreground hover:border-primary hover:bg-primary/10"
                    size="lg"
                  >
                    <a href={yearlyPlan.calLink} target="_blank" rel="noopener noreferrer">
                      Book Free Audit
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
