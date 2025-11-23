'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollStoryContainer } from "@/components/scroll-story-container"
import { HeroScrollStory } from "@/components/hero-scroll-story"
import { ScrollSection } from "@/components/scroll-section"
import { FeaturesSection } from "@/components/features-section"
import { ChainShowcaseSection } from "@/components/chain-showcase-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { QuickLinksSection } from "@/components/quick-links-section"
import { HowItWorksSection } from "@/components/how-it-works-section"

export default function HomePage() {
  return (
    <ScrollStoryContainer>
      <Header />

      <main className="flex flex-col">
        {/* Hero Section - Full Screen 3D Experience */}
        <HeroScrollStory />

        {/* Content Sections - Scroll Revealed */}
        <div className="relative z-10">
          <ScrollSection className="bg-background/50 backdrop-blur-sm">
            <FeaturesSection />
          </ScrollSection>

          <ScrollSection>
            <ChainShowcaseSection />
          </ScrollSection>

          <ScrollSection className="bg-background/50 backdrop-blur-sm">
            <HowItWorksSection />
          </ScrollSection>

          <ScrollSection>
            <TestimonialsSection />
          </ScrollSection>

          <ScrollSection className="mb-20">
            <QuickLinksSection />
          </ScrollSection>
        </div>
      </main>

      <Footer />
    </ScrollStoryContainer>
  )
}
