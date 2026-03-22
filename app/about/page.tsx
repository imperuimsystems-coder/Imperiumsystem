import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { MissionSection } from "@/components/about/mission-section"
import { ValuesSection } from "@/components/about/values-section"
import { WhyImperium } from "@/components/about/why-imperium"
import { AboutCTA } from "@/components/about/about-cta"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <WhyImperium />
        <AboutCTA />
      </div>
      <Footer />
    </main>
  )
}
