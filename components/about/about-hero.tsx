"use client"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
          About Imperium
        </p>
        
        <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">Bridging AI and the Trades</span>
          <br />
          <span className="text-primary">For Smarter Business Growth</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
          Imperium was founded to bring powerful AI automation to trade businesses, 
          replacing overpriced marketers with intelligent systems that work around the clock.
        </p>
      </div>
    </section>
  )
}
