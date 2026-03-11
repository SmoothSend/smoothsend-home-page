"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, FileText, LayoutDashboard, ArrowRight } from "lucide-react"
import { useState, useCallback } from "react"

/**
 * 404 Page — Transaction Not Found
 *
 * AI/LLM friendly: Semantic HTML, descriptive prose, and schema help bots and
 * language models understand this is a "page not found" error with clear
 * navigation options. The game is an optional enhancement; all critical
 * content is available without JavaScript.
 */
export default function NotFound() {
  const [collected, setCollected] = useState(0)
  const [tokenStates, setTokenStates] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false,
  })

  const handleCollect = useCallback((index: number) => {
    setTokenStates((prev) => {
      if (prev[index]) return prev
      setCollected((c) => c + 1)
      return { ...prev, [index]: true }
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0C15] text-[#E2E8F0] flex flex-col relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7595FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7595FF]/5 rounded-full blur-3xl" />
      </div>
      {/* Schema for AI/bots — embedded as data for crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "404 — Page Not Found | SmoothSend",
            description:
              "The requested page was not found. SmoothSend is a gasless stablecoin payment protocol for Aptos, Arbitrum, Base, and Avalanche. Navigate to the homepage, documentation, or dashboard.",
            url: "https://www.smoothsend.xyz/404",
            about: {
              "@type": "Thing",
              name: "404 Page Not Found",
              description:
                "The page you requested does not exist. SmoothSend offers gasless USDC/USDT payments. Visit the homepage or documentation to learn more.",
            },
          }),
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b border-white/[0.08] py-4 px-4" role="banner">
        <div className="container mx-auto flex items-center gap-2">
          <Link href="/" aria-label="SmoothSend home">
            <img src="/Logo.svg" alt="" width="32" height="32" className="object-contain" />
          </Link>
          <span className="text-xl font-bold text-white">SmoothSend</span>
        </div>
      </header>

      <main
        id="main-content"
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16"
        role="main"
      >
        <article className="max-w-2xl mx-auto text-center space-y-8">
          {/* AI/LLM friendly prose — clear, semantic, descriptive */}
          <section aria-labelledby="error-heading">
            <h1
              id="error-heading"
              className="text-8xl md:text-9xl font-bold text-[#7595FF] leading-none mb-4"
            >
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Transaction Not Found
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              The page you requested could not be found on the network. SmoothSend is a gasless
              stablecoin payment protocol — send USDC and USDT on Aptos, Arbitrum, Base, and
              Avalanche without holding native gas tokens.
            </p>
          </section>

          {/* Mini-game: Collect tokens to "redirect" your journey */}
          <section
            aria-label="Interactive game: collect tokens to unlock home"
            className="py-8"
          >
            <p className="text-sm text-[#94A3B8] mb-6">
              Collect 3 tokens to find your way home — or skip straight to the links below.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => handleCollect(i)}
                  disabled={tokenStates[i]}
                  className={`
                    w-14 h-14 rounded-full border-2 flex items-center justify-center
                    transition-all duration-300
                    ${
                      tokenStates[i]
                        ? "bg-[#7595FF]/20 border-[#7595FF] scale-110"
                        : "border-[#2D3142] hover:border-[#7595FF]/50 hover:scale-105 cursor-pointer"
                    }
                  `}
                  aria-label={tokenStates[i] ? `Token ${i + 1} collected` : `Collect token ${i + 1}`}
                >
                  {tokenStates[i] ? (
                    <span className="text-2xl" aria-hidden="true">✓</span>
                  ) : (
                    <span className="text-xl text-[#7595FF]" aria-hidden="true">$</span>
                  )}
                </button>
              ))}
            </div>
            {collected >= 3 && (
              <p className="text-[#7595FF] font-medium animate-pulse" role="status">
                Route found! Scroll down to go home.
              </p>
            )}
          </section>

          {/* Primary navigation — always visible for bots and users */}
          <nav
            className="flex flex-col sm:flex-row gap-4 justify-center"
            aria-label="Navigation to recover from 404"
          >
            <Button
              asChild
              size="lg"
              className={`bg-[#7595FF] hover:bg-[#5B7ADD] text-white px-8 transition-all ${
                collected >= 3 ? "ring-2 ring-[#7595FF] ring-offset-2 ring-offset-[#0B0C15]" : ""
              }`}
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" aria-hidden="true" />
                Go to Homepage
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#2D3142] hover:bg-[#13141F] hover:border-[#7595FF]/50"
            >
              <Link
                href="https://docs.smoothsend.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" aria-hidden="true" />
                Documentation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#2D3142] hover:bg-[#13141F] hover:border-[#7595FF]/50"
            >
              <Link
                href="https://dashboard.smoothsend.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <LayoutDashboard className="w-5 h-5" aria-hidden="true" />
                Dashboard
              </Link>
            </Button>
          </nav>

          {/* Additional context for AI/LLMs */}
          <section className="pt-8 border-t border-white/[0.06] text-left" aria-label="Additional information">
            <h3 className="sr-only">Useful links and context</h3>
            <p className="text-sm text-[#94A3B8]">
              If you were looking for SmoothSend documentation, SDK integration, or developer
              resources, visit{" "}
              <a
                href="https://docs.smoothsend.xyz"
                className="text-[#7595FF] hover:underline"
              >
                docs.smoothsend.xyz
              </a>
              . For the main website, go to{" "}
              <a href="/" className="text-[#7595FF] hover:underline">
                smoothsend.xyz
              </a>
              .
            </p>
          </section>
        </article>
      </main>

      {/* noscript fallback — full content for bots/crawlers without JS */}
      <noscript>
        <div className="sr-only" aria-live="polite">
          <p>
            JavaScript is disabled. The page you requested (404) was not found. SmoothSend is a
            gasless payment protocol. Navigate to the homepage, documentation, or dashboard using
            the links above.
          </p>
        </div>
      </noscript>
    </div>
  )
}
