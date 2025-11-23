import { Github, Twitter, FileText } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/Logo.svg"
                  alt="SmoothSend Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">SmoothSend</h3>
                <p className="text-xs text-muted-foreground">Gasless Transactions</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
              Built for the future of Web3 payments. Send tokens without worrying about gas fees.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/smoothsend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/smoothsend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://docs.smoothsend.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Applications</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://aptos.smoothsend.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Aptos dApp
                </a>
              </li>
              <li>
                <a
                  href="https://evm.smoothsend.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  EVM dApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:contact@smoothsend.xyz" className="hover:text-primary transition-colors">
                  contact@smoothsend.xyz
                </a>
              </li>
              <li>
                <a href="https://twitter.com/smoothsend" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/smoothsend" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.smoothsend.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://faucet.circle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Test USDC Faucet
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/smoothsend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2025 SmoothSend. Built for the future of Web3 payments.</p>
        </div>
      </div>
    </footer>
  )
}
