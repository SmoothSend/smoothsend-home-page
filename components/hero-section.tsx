import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-8">
          <Zap className="w-4 h-4" />
          <span>Announcing gasless transfers on Aptos & Avalanche</span>
          <ArrowRight className="w-4 h-4" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
          Send Stablecoins
          <br />
          <span className="text-primary">Without Gas Fees</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 max-w-3xl mx-auto leading-relaxed">
          Pay everything in USDC/USDT. Never worry about native tokens again.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
            <a href="https://aptos.smoothsend.xyz" target="_blank" rel="noopener noreferrer">
              Try Aptos App
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/10 bg-transparent"
            asChild
          >
            <a href="https://avax.smoothsend.xyz" target="_blank" rel="noopener noreferrer">
              Try Avalanche App
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
