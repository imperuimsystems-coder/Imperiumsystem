import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/pricing-section"
import { PricingHeader } from "@/components/pricing-header"
import { PricingGuarantee } from "@/components/pricing-guarantee"
import { PricingFAQ } from "@/components/pricing-faq"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <PricingHeader />
        <PricingSection />
        <PricingGuarantee />
        <PricingFAQ />
      </div>
      <Footer />
    </main>
  )
}
