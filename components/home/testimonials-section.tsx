"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Imperium transformed our lead response. We went from 48-hour response times to under 60 seconds. Our booking rate increased by 40% in the first month.",
    author: "Michael Torres",
    role: "Owner, Torres HVAC Solutions",
    rating: 5,
  },
  {
    quote: "I was skeptical about automation, but Imperium made it personal. Our leads don't even realize they're talking to a system. It feels human.",
    author: "Sarah Mitchell",
    role: "CEO, Premier Roofing Co.",
    rating: 5,
  },
  {
    quote: "The ROI speaks for itself. We're closing 3x more leads with half the effort. Imperium pays for itself within the first week.",
    author: "David Chen",
    role: "Founder, Chen Contracting",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-card py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.3em] text-primary">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Trusted By Service</span>
            <br />
            <span className="text-primary">Industry Leaders</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col rounded-2xl border border-border/50 bg-background p-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="mt-6 flex-1 font-body text-lg leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div className="mt-8 flex items-center gap-4 border-t border-border/30 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-heading text-lg font-semibold text-primary">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-heading text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
