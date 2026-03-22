"use client"

const steps = [
  {
    number: "01",
    title: "Lead Capture",
    description: "We connect to your website, ads, and lead sources. Every inquiry is captured instantly.",
    details: ["Website forms", "Facebook/Google Ads", "Phone calls", "Email inquiries"],
  },
  {
    number: "02",
    title: "Instant Response",
    description: "Within 60 seconds, leads receive a personalized SMS or email. No delays, no missed opportunities.",
    details: ["Personalized messaging", "24/7 automation", "Multi-channel outreach", "Brand voice matching"],
  },
  {
    number: "03",
    title: "Smart Nurturing",
    description: "AI-powered sequences keep leads warm until they're ready to buy. Automated but personal.",
    details: ["Behavior-based triggers", "Automated follow-ups", "Lead scoring", "Conversion optimization"],
  },
  {
    number: "04",
    title: "Book & Close",
    description: "Qualified leads book directly into your calendar. You show up and close the deal.",
    details: ["Calendar integration", "Appointment reminders", "No-show reduction", "Revenue tracking"],
  },
]

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-card py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
            How It Works
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">From Lead to Booked</span>
            <br />
            <span className="text-primary">In 4 Simple Steps</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            We handle the entire journey so you can focus on what you do best - delivering exceptional service.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-px w-full bg-gradient-to-r from-primary/50 to-primary/10 lg:block" />
              )}
              
              <div className="relative rounded-2xl border border-border/50 bg-background p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                {/* Step Number */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-display text-5xl font-bold text-primary/20">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                
                {/* Details */}
                <ul className="mt-6 space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="font-body text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
