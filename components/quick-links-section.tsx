import { HoverEffect } from "@/components/ui/card-hover-effect"
import { ExternalLink, FileText, Github, Twitter, Coins, Droplets, Zap, Globe, LayoutDashboard } from "lucide-react"

const links = [
  {
    title: "EVM Demo",
    description: "Test gasless transactions on Base, Arbitrum & Avalanche.",
    link: "https://evm.smoothsend.xyz",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Aptos dApp",
    description: "Launch the Aptos application. Live on Mainnet & Testnet.",
    link: "https://aptos.smoothsend.xyz",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Developer Dashboard",
    description: "Get your API key and manage your projects.",
    link: "https://dashboard.smoothsend.xyz",
    icon: <LayoutDashboard className="w-6 h-6" />,
  },
  {
    title: "Developer Docs",
    description: "Integration guides and API reference.",
    link: "https://docs.smoothsend.xyz",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Get Test USDC",
    description: "Circle testnet faucet for development.",
    link: "https://faucet.circle.com/",
    icon: <Coins className="w-6 h-6" />,
  },
  {
    title: "GitHub",
    description: "Open source code and contributions.",
    link: "https://github.com/smoothsend",
    icon: <Github className="w-6 h-6" />,
  },
  {
    title: "Twitter",
    description: "Latest updates and announcements.",
    link: "https://x.com/smoothsend",
    icon: <Twitter className="w-6 h-6" />,
  },
]

export function QuickLinksSection() {
  return (
    <section id="links" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Quick Access</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Everything you need to get started with SmoothSend
          </p>
        </div>

        <HoverEffect items={links} />
      </div>
    </section>
  )
}
