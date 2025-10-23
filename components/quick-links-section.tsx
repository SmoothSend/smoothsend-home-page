import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Github, Twitter, Coins, Droplets } from "lucide-react"

const links = [
  {
    title: "EVM Demo",
    description: "Test gasless transactions on Base, Arbitrum & Avalanche",
    url: "https://evm.smoothsend.xyz",
    icon: "⚡",
    color: "bg-primary/10 border-primary/20",
  },
  {
    title: "Aptos dApp",
    description: "Launch the Aptos application",
    url: "https://aptos.smoothsend.xyz",
    icon: "🔴",
    color: "bg-primary/10 border-primary/20",
  },
  {
    title: "Avalanche dApp",
    description: "Launch the Avalanche application",
    url: "https://avax.smoothsend.xyz",
    icon: "🔺",
    color: "bg-primary/10 border-primary/20",
  },
  {
    title: "Developer Dashboard",
    description: "get the api key for developement",
    url: "https://dashboard.smoothsend.xyz",
    icon: FileText,
    color: "bg-primary/10 border-primary/20",
  },
  {
    title: "Developer Docs",
    description: "Integration guides and API reference",
    url: "https://docs.smoothsend.xyz",
    icon: FileText,
    color: "bg-primary/10 border-primary/20",
  },
  {
    title: "Thala Faucet",
    description: "Get testnet USDC for Aptos testing",
    url: "https://www.thala.dev/faucet",
    icon: Droplets,
    color: "bg-primary/10 border-primary/20",
  },
  {
    title: "Get Test USDC",
    description: "Circle testnet faucet for development",
    url: "https://faucet.circle.com/",
    icon: Coins,
    color: "bg-primary/10 border-primary/20",
  },
  {
    title: "GitHub",
    description: "Open source code and contributions",
    url: "https://github.com/smoothsend",
    icon: Github,
    color: "bg-primary/10 border-primary/20",
  },
  {
    title: "Twitter",
    description: "Latest updates and announcements",
    url: "https://x.com/smoothsend",
    icon: Twitter,
    color: "bg-primary/10 border-primary/20",
  },
]

export function QuickLinksSection() {
  return (
    <section id="links" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Quick Access</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Everything you need to get started with SmoothSend
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Card
              key={index}
              className={`card-glow bg-card/50 backdrop-blur-sm border-border/20 hover:scale-105 transition-transform ${link.color}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {typeof link.icon === "string" ? (
                      <span className="text-2xl">{link.icon}</span>
                    ) : (
                      <link.icon className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-2">{link.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{link.description}</p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Visit <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
