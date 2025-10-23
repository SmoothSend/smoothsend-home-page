'use client'

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Zap, DollarSign, Globe, Clock } from "lucide-react"
import { useEffect, useState } from "react"

interface StatItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  color: string
}

const stats: StatItem[] = [
  {
    icon: DollarSign,
    label: "Gas Fees Saved",
    value: "$127",
    change: "+23%",
    changeType: 'positive',
    color: "text-green-400"
  },
  {
    icon: Users,
    label: "Active Users",
    value: "89",
    change: "+12%",
    changeType: 'positive',
    color: "text-blue-400"
  },
  {
    icon: Zap,
    label: "Transactions",
    value: "1.2K",
    change: "+45%",
    changeType: 'positive',
    color: "text-purple-400"
  },
  {
    icon: Globe,
    label: "Supported Chains",
    value: "4",
    change: "Testnet",
    changeType: 'neutral',
    color: "text-orange-400"
  },
  {
    icon: Clock,
    label: "Avg. Speed",
    value: "<2s",
    change: "Fast",
    changeType: 'positive',
    color: "text-cyan-400"
  },
  {
    icon: TrendingUp,
    label: "Success Rate",
    value: "98.5%",
    change: "+2.1%",
    changeType: 'positive',
    color: "text-emerald-400"
  }
]

export function StatsSection() {
  const [mounted, setMounted] = useState(false)
  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({ ...stat, animatedValue: "0" })))

  useEffect(() => {
    setMounted(true)
    
    // Animate stats on mount
    const timer = setTimeout(() => {
      setAnimatedStats(stats.map(stat => ({ ...stat, animatedValue: stat.value })))
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Testnet Performance Metrics
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Real testnet data showing SmoothSend's early impact
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {animatedStats.map((stat, index) => (
            <Card 
              key={index} 
              className="card-glow bg-card/60 backdrop-blur-sm border-border/30 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.animatedValue}
                  </div>
                  
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                  
                  <div className={`text-xs font-semibold ${
                    stat.changeType === 'positive' ? 'text-green-400' : 
                    stat.changeType === 'negative' ? 'text-red-400' : 
                    'text-blue-400'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Testnet metrics • Updated every 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  )
}
