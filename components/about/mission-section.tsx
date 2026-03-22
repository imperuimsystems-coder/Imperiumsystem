"use client"

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
              Our Mission
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              <span className="text-balance">Empowering Service Businesses</span>
              <br />
              <span className="text-primary">To Compete & Win</span>
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              We believe that every service business deserves enterprise-level automation 
              without the enterprise price tag. Our mission is to level the playing field 
              and give small and medium businesses the tools they need to dominate their markets.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
              Too many great businesses lose out on revenue because they can't respond 
              fast enough or follow up consistently. We're here to fix that.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { value: "50+", label: "Businesses Served" },
              { value: "$2M+", label: "Revenue Generated" },
              { value: "25K+", label: "Leads Captured" },
              { value: "99.9%", label: "Uptime Guaranteed" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/50 bg-background p-8 text-center"
              >
                <div className="font-display text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 font-body text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
