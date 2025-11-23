'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Clock, DollarSign, Shield, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

interface Chain {
  id: string
  name: string
  logo: string
  color: string
  description: string
  features: string[]
  stats: {
    transactions: string
    avgTime: string
    gasSaved: string
  }
  testnetUrl: string
  mainnetUrl?: string
}

const chains: Chain[] = [
  {
    id: "aptos",
    name: "Aptos",
    logo: "/aptos-apt-logo.png",
    color: "bg-primary/20",
    description: "Next-gen blockchain with Move language",
    features: ["Move language", "Parallel execution", "High throughput", "Developer friendly"],
    stats: {
      transactions: "980K+",
      avgTime: "<2s",
      gasSaved: "$420K"
    },
    testnetUrl: "https://aptos.smoothsend.xyz",
    mainnetUrl: "https://aptos.smoothsend.xyz"
  },
  {
    id: "base",
    name: "Base",
    logo: "/base-logo.svg",
    color: "bg-primary/20",
    description: "Coinbase's L2 for the next billion users",
    features: ["Low fees", "Fast finality", "EVM compatible", "Coinbase integration"],
    stats: {
      transactions: "2.1M+",
      avgTime: "<1s",
      gasSaved: "$890K"
    },
    testnetUrl: "https://evm.smoothsend.xyz",
    mainnetUrl: "https://evm.smoothsend.xyz"
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    logo: "/arbitrum-arb-logo.svg",
    color: "bg-accent/20",
    description: "Leading Ethereum L2 scaling solution",
    features: ["High throughput", "Low costs", "EVM compatible", "DeFi ecosystem"],
    stats: {
      transactions: "1.8M+",
      avgTime: "<2s",
      gasSaved: "$1.2M"
    },
    testnetUrl: "https://evm.smoothsend.xyz",
    mainnetUrl: "https://evm.smoothsend.xyz"
  },
  {
    id: "avalanche",
    name: "Avalanche",
    logo: "/avalanche-avax-logo.svg",
    color: "bg-secondary/20",
    description: "Fast, low-cost blockchain platform",
    features: ["Sub-second finality", "Low fees", "Custom VMs", "Institutional grade"],
    stats: {
      transactions: "1.5M+",
      avgTime: "<1s",
      gasSaved: "$650K"
    },
    testnetUrl: "https://evm.smoothsend.xyz",
    mainnetUrl: "https://evm.smoothsend.xyz"
  }
]

export function ChainShowcaseSection() {
  const [mounted, setMounted] = useState(false)
  const [selectedChain, setSelectedChain] = useState(chains[0])
  const [hoveredChain, setHoveredChain] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="chains" className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Multi-Chain Support
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Experience gasless transactions across multiple blockchain networks
          </p>
        </div>

        {/* Chain Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {chains.map((chain) => (
            <Button
              key={chain.id}
              variant={selectedChain.id === chain.id ? "default" : "outline"}
              className={`px-6 py-3 transition-all duration-300 ${selectedChain.id === chain.id
                ? 'bg-primary text-primary-foreground border-primary'
                : 'hover:bg-primary/10 border-primary/30'
                }`}
              onClick={() => setSelectedChain(chain)}
              onMouseEnter={() => setHoveredChain(chain.id)}
              onMouseLeave={() => setHoveredChain(null)}
            >
              <img
                src={chain.logo}
                alt={chain.name}
                className="w-6 h-6 mr-2"
              />
              {chain.name}
            </Button>
          ))}
        </div>

        {/* Selected Chain Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Chain Info */}
          <Card className="card-glow bg-card/60 backdrop-blur-sm border-border/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20 overflow-hidden">
                  <img
                    src={selectedChain.logo}
                    alt={selectedChain.name}
                    className={`w-10 h-10 ${selectedChain.id === 'aptos' ? 'rounded-full' : ''}`}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {selectedChain.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedChain.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedChain.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {selectedChain.stats.transactions}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Transactions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {selectedChain.stats.avgTime}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Avg. Time
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {selectedChain.stats.gasSaved}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Gas Saved
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={selectedChain.testnetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try {selectedChain.name} Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Chain Benefits */}
          <Card className="card-glow bg-card/60 backdrop-blur-sm border-border/30">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Why {selectedChain.name} + SmoothSend?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Zero Gas Fees
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Send tokens without holding native gas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Lightning Fast
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Transactions complete in under 2 seconds
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Cost Effective
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Save up to 90% compared to traditional methods
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Secure & Reliable
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      99.9% uptime with enterprise-grade security
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* All Chains Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {chains.map((chain) => (
            <Card
              key={chain.id}
              className={`card-glow bg-card/50 backdrop-blur-sm border-border/20 hover:scale-105 transition-all duration-300 cursor-pointer ${hoveredChain === chain.id ? 'ring-2 ring-primary/50' : ''
                }`}
              onClick={() => setSelectedChain(chain)}
              onMouseEnter={() => setHoveredChain(chain.id)}
              onMouseLeave={() => setHoveredChain(null)}
            >
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-primary/20 overflow-hidden">
                  <img
                    src={chain.logo}
                    alt={chain.name}
                    className={`w-8 h-8 ${chain.id === 'aptos' ? 'rounded-full' : ''}`}
                  />
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {chain.name}
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {chain.stats.transactions} txs
                </p>
                <Badge variant="outline" className="text-xs">
                  {chain.stats.avgTime}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
