import { Card, CardContent } from "@/components/ui/card"
import { Zap, Globe, Layers } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Gasless by Default",
    description:
      "Give users seamless transactions without making them manage native gas tokens. SmoothSend handles sponsorship and fee-payer flows behind the scenes.",
  },
  {
    icon: Globe,
    title: "Multi-Chain Infrastructure",
    description:
      "Use one integration surface across Aptos and EVM networks today. Solana support is already in progress and coming soon.",
  },
  {
    icon: Layers,
    title: "Built for Fast Iteration",
    description:
      "Your product keeps moving, so SmoothSend is designed to evolve with your roadmap while keeping your integration stable.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Built for fast-moving teams
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Multi-chain gasless infrastructure that stays simple at the integration layer, even as your stack expands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          {features.map((feature, index) => (
            <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/20" role="listitem">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner shadow-primary/20" aria-hidden="true">
                  <feature.icon className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
