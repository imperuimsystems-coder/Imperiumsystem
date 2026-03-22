"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image
              src="/images/imperium-logo.jpg"
              alt="Imperium Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-heading text-xl font-semibold uppercase tracking-[0.2em] text-foreground">
            Imperium
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Button
            asChild
            variant="outline"
            className="border-primary/30 font-heading text-sm uppercase tracking-wider hover:border-primary hover:bg-primary/10"
          >
            <a href="https://cal.com/imperuim-systems-vl0zgj/secret" target="_blank" rel="noopener noreferrer">
              Book Free Audit
            </a>
          </Button>
          <Button
            asChild
            className="bg-primary font-heading text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/pricing">
              Get Started
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 border-b border-border/30 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-base uppercase tracking-wider text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Button
              asChild
              variant="outline"
              className="w-full border-primary/30 font-heading text-sm uppercase tracking-wider hover:border-primary hover:bg-primary/10"
            >
              <a href="https://cal.com/imperuim-systems-vl0zgj/secret" target="_blank" rel="noopener noreferrer">
                Book Free Audit
              </a>
            </Button>
            <Button
              asChild
              className="w-full bg-primary font-heading text-sm uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/pricing">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
