import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SmoothSend - Gasless Stablecoin Payments on Aptos & EVM',
  description: 'The first true gasless payment protocol. Send USDC/USDT without holding native gas tokens (APT/ETH). Works on Aptos, Arbitrum, Base, and Avalanche.',
  keywords: ['gasless', 'stablecoin', 'crypto payments', 'web3', 'usdc', 'usdt', 'aptos', 'arbitrum', 'base', 'avalanche', 'smoothsend', 'gas fees'],
  openGraph: {
    title: 'SmoothSend - Gasless Stablecoin Payments',
    description: 'Send stablecoins without gas fees. Pay network fees in the token you send. No more stranded assets.',
    url: 'https://smoothsend.xyz',
    siteName: 'SmoothSend',
    images: [
      {
        url: '/smoothsendlogo.png',
        width: 1200,
        height: 630,
        alt: 'SmoothSend - Gasless Payments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmoothSend - Gasless Stablecoin Payments',
    description: 'Send stablecoins without gas fees. Pay network fees in the token you send.',
    images: ['/smoothsendlogo.png'],
  },
  icons: {
    icon: [
      {
        url: '/Logo.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/Logo.svg',
    apple: '/Logo.svg',
  },
}

import { CustomCursor } from "@/components/ui/custom-cursor"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <CustomCursor />
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
