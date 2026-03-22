"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can I change plans?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. When you upgrade, you'll get immediate access to all new features. When you downgrade, the change takes effect at the start of your next billing cycle.",
  },
  {
    question: "What if I'm not happy?",
    answer:
      "We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied with Imperium within the first 30 days, we'll refund your payment in full—no questions asked.",
  },
  {
    question: "Do you offer discounts for multiple locations?",
    answer:
      "Yes! If you have multiple business locations, we offer volume discounts. Contact us during your free audit, and we'll put together a custom package that fits your needs.",
  },
  {
    question: "What's included in the free audit?",
    answer:
      "During your 15-minute automation audit, we'll analyze your current lead capture and follow-up processes, identify gaps where you're losing leads, and show you exactly how Imperium can increase your close rate. You'll walk away with actionable insights—whether you choose to work with us or not.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "We deploy your complete automation system within 48 hours of signup. You'll have a dedicated onboarding specialist who will configure everything for your specific business needs.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "We integrate with most major CRMs, scheduling tools, and industry-specific software including ServiceTitan, QuoteIQ, Housecall Pro, Jobber, and many more. If you use a tool we don't currently support, let us know—custom integrations are available on Enterprise plans.",
  },
]

export function PricingFAQ() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-heading text-sm uppercase tracking-[0.3em] text-primary">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border/50"
            >
              <AccordionTrigger className="font-heading text-left text-base font-medium hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Still have questions?
          </h3>
          <p className="mt-2 font-body text-muted-foreground">
            Book a free 15-minute call and we'll answer everything.
          </p>
          <a
            href="https://cal.com/imperuim-systems-vl0zgj/secret"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-heading text-sm uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Your Free Audit
          </a>
        </div>
      </div>
    </section>
  )
}
