import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-8" role="banner">
          <Zap className="w-4 h-4" aria-hidden="true" />
          <span>Announcing gasless transfers on Aptos, Avalanche, Base & Arbitrum</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </div>

        <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
          Send Stablecoins
          <br />
          <span className="text-primary">Without Gas Fees</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 max-w-3xl mx-auto leading-relaxed">
          Pay everything in USDC/USDT. Never worry about native tokens again.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
            <a 
              href="https://aptos.smoothsend.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Try Aptos App (opens in new tab)"
            >
              Try Aptos App
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/10 bg-transparent"
            asChild
          >
            <a 
              href="https://evm.smoothsend.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Try EVM Demo - Avalanche, Base & Arbitrum testnets (opens in new tab)"
            >
              Try EVM Demo
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
