import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { QuickLinksSection } from "@/components/quick-links-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { Footer } from "@/components/footer"
import { FloatingTokens } from "@/components/floating-tokens"

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      <FloatingTokens />

      <div className="relative z-10">
        <Header />
        <main id="main-content" role="main">
          <HeroSection />
          <FeaturesSection />
          <QuickLinksSection />
          <HowItWorksSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
