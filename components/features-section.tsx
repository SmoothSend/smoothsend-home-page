import { Card, CardContent } from "@/components/ui/card"
import { Zap, Globe, Code } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "True Gasless Experience",
    description: "Users only need stablecoins - no native tokens required for transactions",
  },
  {
    icon: Globe,
    title: "Multi-Chain Support",
    description: "Works seamlessly on Aptos, Avalanche, Base, and Arbitrum networks",
  },
  {
    icon: Code,
    title: "Developer-Friendly",
    description: "Easy to integrate SDK with comprehensive documentation",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Built for the Future of Web3 Payments
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Experience seamless stablecoin transfers without the complexity of gas management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          {features.map((feature, index) => (
            <Card key={index} className="card-glow bg-card/50 backdrop-blur-sm border-border/20" role="listitem">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                  <feature.icon className="w-8 h-8 text-primary" />
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
