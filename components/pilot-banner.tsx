"use client"

import { useState } from "react"
import { X, Sparkles } from "lucide-react"

export function PilotBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      className="relative isolate flex items-center justify-center gap-x-3 overflow-hidden px-4 py-3 bg-gradient-to-r from-primary/20 via-primary/5 to-accent/20 backdrop-blur-xl border-b border-primary/20 z-50"
      role="banner"
      aria-label="Pilot program announcement"
    >
      <div className="flex items-center gap-3 text-sm font-medium text-primary-foreground sm:text-base w-full justify-center max-w-7xl pr-8">
        <div className="flex items-center justify-center rounded-full bg-primary/30 p-1.5 shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
          <Sparkles className="h-3.5 w-3.5 text-primary-foreground" aria-hidden="true" />
        </div>
        <p className="leading-tight">
          <strong className="font-semibold text-primary-foreground tracking-wide">Pilot Program Live</strong>
          <span className="hidden sm:inline text-primary-foreground/90 font-normal">
            {" "}— Get free gas credits for your Aptos dApp.
          </span>
          <span className="sm:hidden text-primary-foreground/90 font-normal"> Free dApp gas credits.</span>
        </p>
        <a
          href="https://pilot.smoothsend.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 sm:ml-3 inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] sm:text-sm border border-primary-foreground/10"
        >
          Apply Now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-primary-foreground/70 transition-colors hover:bg-white/10 hover:text-primary-foreground sm:right-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
