"use client"

export function PricingHeader() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
          Transparent Pricing
        </p>
        
        <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Simple, Transparent Pricing.</span>
          <br />
          <span className="text-primary">No Hidden Fees.</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
          Choose the plan that fits your business. Upgrade anytime. 
          Every plan comes with our 30-day money-back guarantee.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-body">No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-body">Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-body">30-day money-back</span>
          </div>
        </div>
      </div>
    </section>
  )
}
