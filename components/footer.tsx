import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                  src="/images/imperium-logo.jpg"
                  alt="Imperium Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-heading text-xl font-semibold uppercase tracking-[0.2em] text-foreground">
                Imperium
              </span>
            </Link>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-muted-foreground">
              The AI Automation System That Turns Lost Leads Into Locked Revenue. 
              We help elite service businesses capture, nurture, and convert leads on autopilot.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Get Started
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a 
                  href="https://cal.com/imperuim-systems-vl0zgj/secret" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Book Free Audit
                </a>
              </li>
              <li>
                <Link href="/pricing" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                  View Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Imperium Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
