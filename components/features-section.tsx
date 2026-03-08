import { Card, CardContent } from "@/components/ui/card"
import { Zap, Globe, Code } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "True Gasless Experience",
    description:
      "Users pay fees in the stablecoin they are sending — no ETH, AVAX, or APT required. The SmoothSend paymaster relayer sponsors gas via ERC-4337 account abstraction.",
  },
  {
    icon: Globe,
    title: "Multi-Chain Support",
    description:
      "One SDK, four chains: Aptos (sponsored transactions), Avalanche C-Chain, Base (Coinbase L2), and Arbitrum One. Mainnet and testnet supported.",
  },
  {
    icon: Code,
    title: "Developer-Friendly",
    description:
      "Integrate gasless transfers with @smoothsend/sdk in minutes. Full TypeScript support, React wallet adapter, REST API, and comprehensive documentation.",
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
            ERC-4337 account abstraction and Aptos sponsored transactions — gasless transfers without the complexity
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
