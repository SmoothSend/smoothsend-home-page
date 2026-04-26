"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Copy } from "lucide-react"
import Link from "next/link"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { useState } from "react"

export function HeroScrollStory() {
    const [copied, setCopied] = useState(false)

    const copyInstallCommand = async () => {
        await navigator.clipboard.writeText("npm install @smoothsend/sdk")
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-foreground mb-4 backdrop-blur-sm shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium">Live on Aptos Mainnet & Testnet</span>
                </div>

                <div className="text-3xl md:text-7xl font-bold text-white text-center">
                    Gas is History <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500">
                        True Gasless
                    </span>
                </div>

                <div className="font-light text-base md:text-2xl text-neutral-200 py-4 max-w-2xl text-center leading-relaxed">
                    Make transactions completely free for your users. Sponsor gas fees directly or let them pay in any token—SmoothSend handles the rest.
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-lg group cursor-hover" asChild>
                        <Link href="https://dashboard.smoothsend.xyz" target="_blank">
                            Get API Key
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-foreground/20 hover:bg-foreground/5 backdrop-blur-sm cursor-hover" asChild>
                        <Link href="https://docs.smoothsend.xyz" target="_blank">
                            View Documentation
                        </Link>
                    </Button>
                </div>

                {/* SDK Install Snippet */}
                <div className="mt-10 w-full max-w-2xl">
                    <div className="rounded-xl border border-white/15 bg-black/45 backdrop-blur-md overflow-hidden shadow-[0_0_35px_rgba(124,58,237,0.15)]">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                            <span className="text-xs uppercase tracking-[0.18em] text-neutral-400">SDK Quickstart</span>
                            <span className="text-xs text-neutral-500">Terminal</span>
                        </div>
                        <div className="flex items-center justify-between gap-3 px-4 py-3 font-mono text-sm text-neutral-200">
                            <code className="truncate">$ npm install @smoothsend/sdk</code>
                            <button
                                type="button"
                                onClick={copyInstallCommand}
                                className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1.5 text-xs text-neutral-300 hover:bg-white/10 transition-colors"
                                aria-label="Copy npm install command"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-3.5 h-3.5 text-green-400" />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" />
                                        Copy
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
            >
                <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
            </motion.div>
        </AuroraBackground>
    )
}
