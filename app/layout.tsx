import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SmoothSend - Gasless Stablecoin Transfers',
  description: 'Send stablecoins without gas fees. Pay everything in USDC/USDT. Never worry about native tokens again.',
  icons: {
    icon: [
      {
        url: '/smoothsendlogo.png',
        sizes: 'any',
        type: 'image/png',
      }
    ],
    shortcut: '/smoothsendlogo.png',
    apple: '/smoothsendlogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
