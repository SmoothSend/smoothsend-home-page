import { Card, CardContent } from "@/components/ui/card"
import { Code2, Settings2, Route, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Code2,
    title: "Integrate SDK",
    description: "Add SmoothSend to your app with a minimal SDK or API integration.",
  },
  {
    icon: Settings2,
    title: "Configure sponsorship rules",
    description: "Set chain, project policy, and function-level sponsorship in the dashboard.",
  },
  {
    icon: Route,
    title: "Route transactions through SmoothSend",
    description: "Gateway and relayer infrastructure handles fee-payer execution for your users.",
  },
  {
    icon: BarChart3,
    title: "Observe and iterate",
    description: "Track usage, credits, and project performance while shipping new features quickly.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            A developer-first flow for shipping gas abstraction without maintaining relayer infrastructure.
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
