'use client'

import { useState } from 'react'
import { Check, Copy, ArrowLeft, Download, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BrandingPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const [copiedLogo, setCopiedLogo] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: 'color' | 'font') => {
    navigator.clipboard.writeText(text)
    if (type === 'color') {
      setCopiedColor(text)
      setTimeout(() => setCopiedColor(null), 2000)
    }
  }

  const copyUrlToClipboard = (src: string) => {
    const url = window.location.origin + src
    navigator.clipboard.writeText(url)
    setCopiedLogo(src)
    setTimeout(() => setCopiedLogo(null), 2000)
  }

  const colors = [
    { name: 'SmoothSend Blue', hex: '#7595FF', class: 'bg-[#7595FF]', border: 'border-transparent', textClass: 'text-white' },
    { name: 'Darker Secondary', hex: '#163188', class: 'bg-[#163188]', border: 'border-transparent', textClass: 'text-white' },
    { name: 'White', hex: '#EAECF2', class: 'bg-[#EAECF2]', border: 'border-gray-200', textClass: 'text-gray-900' },
    { name: 'Black', hex: '#0D0E12', class: 'bg-[#0D0E12]', border: 'border-[#333]', textClass: 'text-white' },
  ]

  const logos = [
    { name: 'Full Color (SVG)', src: '/Logo.svg', bg: 'bg-[#0A0A0A]' },
    { name: 'Solid White', src: '/White.svg', bg: 'bg-brand-blue' },
    { name: 'Solid Black', src: '/Black.svg', bg: 'bg-brand-white' },
    { name: 'Full Color (PNG)', src: '/TransparentLogo.png', bg: 'bg-[#0A0A0A]' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Header */}
      <div className="border-b border-border/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <Image src="/Logo.svg" alt="SmoothSend Logo" width={24} height={24} />
            <span className="font-semibold text-sm">Brand Guidelines</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 space-y-32">
        {/* Hero */}
        <section className="space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Our Brand <br /> Identity
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The SmoothSend brand is designed to be fast, reliable, and inherently modern. Explore our official assets and guidelines below to ensure consistent representation across all platforms.
          </p>
        </section>

        {/* Logos Section */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Logos</h2>
            <p className="text-muted-foreground">Download the official SmoothSend logo in various formats and colorways.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logos.map((logo) => (
              <div key={logo.name} className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card transition-all hover:border-border">
                <div className={`aspect-square w-full flex items-center justify-center p-12 ${logo.bg}`}>
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                    <Image 
                      src={logo.src} 
                      alt={logo.name} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between bg-card">
                  <span className="font-medium text-sm">{logo.name}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyUrlToClipboard(logo.src)}
                      className="p-2 bg-muted/50 hover:bg-muted rounded-full transition-colors relative"
                      title={`Copy URL for ${logo.name}`}
                    >
                      {copiedLogo === logo.src ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                    </button>
                    <a 
                      href={logo.src} 
                      download 
                      className="p-2 bg-muted/50 hover:bg-muted rounded-full transition-colors"
                      title={`Download ${logo.name}`}
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Colors Section */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Color Palette</h2>
            <p className="text-muted-foreground">Our curated palette brings the SmoothSend brand to life. Click to copy the hex code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colors.map((color) => (
              <div key={color.name} className="space-y-3">
                <button
                  onClick={() => copyToClipboard(color.hex, 'color')}
                  className={`w-full aspect-square rounded-2xl ${color.class} ${color.border} border p-6 flex flex-col justify-between items-start text-left transition-transform hover:scale-[1.02] active:scale-[0.98] group`}
                >
                  <span className={`font-medium ${color.textClass}`}>{color.name}</span>
                  <div className={`flex items-center gap-2 ${color.textClass} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <span className="font-mono text-sm tracking-wider">{color.hex}</span>
                    {copiedColor === color.hex ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">Typography</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-muted-foreground">We use Inter for all web typography to ensure maximum legibility and a modern aesthetic.</p>
              <a 
                href="https://fonts.google.com/specimen/Inter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline text-[#7595FF]"
              >
                Get Inter from Google Fonts
              </a>
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-3xl border border-border/50 bg-card space-y-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center justify-between border-b border-border/40 pb-12">
              <div className="space-y-2" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                <h3 className="text-6xl md:text-8xl font-bold tracking-tighter">Inter</h3>
                <p className="text-muted-foreground font-medium">Primary Typeface</p>
              </div>
              <div className="text-2xl md:text-4xl leading-relaxed break-all font-medium tracking-widest text-muted-foreground" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz <br />
                0123456789 <br />
                !@#$%^&*()_+
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Display (Bold)</p>
                  <h1 className="text-5xl font-bold tracking-tight text-foreground">The quick brown fox</h1>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Heading (SemiBold)</p>
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground">Jumps over the lazy dog</h2>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Subheading (Medium)</p>
                  <h3 className="text-xl font-medium text-foreground">A fast and secure way to send stablecoins.</h3>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Body (Regular)</p>
                  <p className="text-base text-foreground leading-relaxed">
                    SmoothSend enables developers to integrate gasless stablecoin payments natively into their applications. By leveraging account abstraction and sponsored transactions, users can send USDC and USDT instantly across multiple networks without ever holding a native gas token.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Caption (Regular)</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built on advanced ERC-4337 infrastructure to abstract the complexities of Web3 from the end-user. The future of payments is inherently seamless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
