import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border/20 backdrop-blur-sm bg-background/10" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="block" aria-label="SmoothSend home">
              <img
                src="/Logo.svg"
                alt="SmoothSend logo"
                className="w-8 h-8 object-contain"
              />
            </a>
            <div>
              <h1 className="text-xl font-bold text-foreground">SmoothSend</h1>
              <p className="text-xs text-muted-foreground">Gasless Token Transfers</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <a
              href="#features"
              className="text-foreground/80 hover:text-foreground transition-colors focus:text-foreground"
              aria-describedby="features-desc"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-foreground transition-colors focus:text-foreground"
              aria-describedby="how-it-works-desc"
            >
              How It Works
            </a>
            <a
              href="#links"
              className="text-foreground/80 hover:text-foreground transition-colors focus:text-foreground"
              aria-describedby="resources-desc"
            >
              Resources
            </a>
          </nav>

          <Button asChild variant="outline" className="hidden md:inline-flex bg-transparent">
            <a
              href="https://www.npmjs.com/package/@smoothsend/sdk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get started with SmoothSend SDK (opens in new tab)"
            >
              Get Started
            </a>
          </Button>
        </div>
      </div>

      {/* Screen reader descriptions */}
      <div className="sr-only">
        <span id="features-desc">Learn about SmoothSend's key features</span>
        <span id="how-it-works-desc">Understand how SmoothSend works</span>
        <span id="resources-desc">Access documentation and resources</span>
      </div>
    </header>
  )
}
