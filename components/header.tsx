import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border/20 backdrop-blur-sm bg-background/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="block">
              <img
                src="/smoothsendlogo.png"
                alt="SmoothSend"
                className="w-8 h-8 object-contain rounded-lg"
              />
            </a>
            <div>
              <h1 className="text-xl font-bold text-foreground">SmoothSend</h1>
              <p className="text-xs text-muted-foreground">Gasless Stablecoin Transfers</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#links" className="text-foreground/80 hover:text-foreground transition-colors">
              Resources
            </a>
          </nav>

          <Button asChild variant="outline" className="hidden md:inline-flex bg-transparent">
            <a href="https://www.npmjs.com/package/@smoothsend/sdk" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
