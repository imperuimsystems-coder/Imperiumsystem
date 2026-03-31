"use client"

export function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Founder Story */}
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-center font-heading text-sm uppercase tracking-[0.3em] text-primary">
            Meet the Founder
          </p>
          <h2 className="text-center font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Marco Perretta
          </h2>
          
          <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-muted-foreground">
            <p>
              I come from a family business in the steel industry. Growing up around hard work 
              and discipline taught me the value of doing things right and the importance of 
              every customer relationship.
            </p>
            <p>
              I have always been good with computers and had a passion for business in general. 
              When I started looking at how trade businesses operate, I saw a massive gap 
              between what AI could do and how the trades were actually using technology.
            </p>
            <p>
              Here is the problem I kept seeing: businesses would hire a marketer who charges 
              $500 to $2,000 a month, does some SEO and other basic services, and you have to 
              constantly check in to make sure they are actually doing their job and finding you work. 
              It is frustrating, expensive, and unreliable.
            </p>
            <p>
              That is when it clicked. AI can replace these overpriced marketers with a system that 
              runs 24/7, responds to leads instantly, and never takes a day off. You get more for 
              your money, and you do not have to worry about a missed call or a late text costing 
              you the job.
            </p>
            <p className="text-foreground">
              That is why I built Imperium. AI Agents that fix this problem for good, at a fraction 
              of the cost. Stay ahead of your competitors, or better yet, book a meeting or check out 
              the pricing to see how we can help your business today.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { value: "8+", label: "Businesses Served" },
              { value: "24/7", label: "AI Availability" },
              { value: "Early Access", label: "Now Open" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/50 bg-background p-8 text-center"
              >
                <div className="font-display text-3xl font-bold text-primary md:text-4xl">
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
