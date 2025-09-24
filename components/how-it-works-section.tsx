import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Send, FileSignature, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Wallet,
    title: "Connect your wallet",
    description: "Link your Web3 wallet to get started",
  },
  {
    icon: Send,
    title: "Enter recipient and amount",
    description: "Specify the destination address and USDC/USDT amount",
  },
  {
    icon: FileSignature,
    title: "Sign message (no gas needed)",
    description: "Authorize the transaction with just a signature",
  },
  {
    icon: CheckCircle,
    title: "Transfer completes automatically",
    description: "Your stablecoins are sent without any gas fees",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Send stablecoins in four simple steps - no gas tokens required
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="card-glow bg-card/50 backdrop-blur-sm border-border/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                    <step.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
