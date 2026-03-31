"use client"

const reasons = [
  {
    title: "Built for All Trades",
    description: "Unlike generic automation tools, Imperium was designed specifically for trade and service businesses. We understand your workflows, your customers, and your challenges.",
  },
  {
    title: "Human-First Automation",
    description: "Our AI does not sound like a robot. Messages are personalized, contextual, and feel genuinely human. Your leads will not know they are talking to an automated system.",
  },
  {
    title: "Done-For-You Setup",
    description: "No technical skills required. We handle the entire setup process, from connecting your lead sources to configuring your follow-up sequences. You are up and running fast.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees, no surprise charges. You know exactly what you are paying, and you can cancel anytime if we are not delivering results.",
  },
  {
    title: "Real Support from Real Humans",
    description: "When you need help, you get a real person who knows your business, not a chatbot or a ticketing system. We are invested in your success.",
  },
  {
    title: "Early Access Advantage",
    description: "Join now during early access to lock in the best rates and get priority onboarding. Get ahead of your competitors before they catch on.",
  },
]

export function WhyImperium() {
  return (
    <section className="relative overflow-hidden bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">What Makes Imperium</span>
            <br />
            <span className="text-primary">Different</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group rounded-2xl border border-border/50 bg-background p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-display text-lg font-bold text-primary">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
