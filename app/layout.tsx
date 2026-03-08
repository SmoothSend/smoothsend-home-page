import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// JSON-LD structured data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.smoothsend.xyz/#organization',
  name: 'SmoothSend',
  url: 'https://www.smoothsend.xyz',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.smoothsend.xyz/smoothsendlogo.png',
    width: 512,
    height: 512,
  },
  description:
    'Gasless stablecoin payment protocol for Web3 developers. Send USDC/USDT on Aptos, Arbitrum, Base, and Avalanche without native gas tokens via ERC-4337 account abstraction.',
  sameAs: [
    'https://github.com/smoothsend',
    'https://x.com/smoothsend',
    'https://www.npmjs.com/package/@smoothsend/sdk',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'technical support',
    url: 'https://docs.smoothsend.xyz',
    email: 'contact@smoothsend.xyz',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.smoothsend.xyz/#website',
  name: 'SmoothSend',
  url: 'https://www.smoothsend.xyz',
  publisher: { '@id': 'https://www.smoothsend.xyz/#organization' },
  inLanguage: 'en-US',
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://www.smoothsend.xyz/#sdk',
  name: '@smoothsend/sdk',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Node.js, Browser',
  url: 'https://www.npmjs.com/package/@smoothsend/sdk',
  description:
    'JavaScript/TypeScript SDK for gasless stablecoin payments on Aptos, Avalanche, Base, and Arbitrum. ERC-4337 account abstraction and Aptos sponsored transactions.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description:
      'Free to integrate. Small fee deducted from token amount per transaction. Testnet is free.',
  },
  featureList: [
    'True gasless transactions — users pay fees in the token they send',
    'Multi-chain: Aptos, Avalanche C-Chain, Base, Arbitrum',
    'ERC-4337 account abstraction for EVM chains',
    'Aptos sponsored transactions',
    'USDC and USDT support',
    'React wallet adapter integration',
    'Full TypeScript types',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    ratingCount: '1',
    reviewCount: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Bacardi Sharma' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'The gasless transaction experience is incredible. Users love not having to worry about gas fees. This is the future of Web3 UX!',
      url: 'https://x.com/bacardisharma/status/1971117164389347564',
    },
  ],
  author: { '@id': 'https://www.smoothsend.xyz/#organization' },
}

export const metadata: Metadata = {
  title: 'SmoothSend — Gasless USDC & USDT Payments on Aptos, Arbitrum, Base & Avalanche',
  description:
    'Send USDC/USDT without holding native gas tokens. ERC-4337 account abstraction on Arbitrum, Base & Avalanche, plus Aptos sponsored transactions. Pay fees in the token you send.',
  authors: [{ name: 'SmoothSend' }],
  creator: 'SmoothSend',
  publisher: 'SmoothSend',
  alternates: {
    canonical: 'https://www.smoothsend.xyz',
  },
  openGraph: {
    title: 'SmoothSend — Gasless USDC & USDT Payments',
    description:
      'Send stablecoins without gas fees. ERC-4337 account abstraction on Arbitrum, Base & Avalanche. Aptos sponsored transactions. No ETH or APT required.',
    url: 'https://www.smoothsend.xyz',
    siteName: 'SmoothSend',
    images: [
      {
        url: 'https://www.smoothsend.xyz/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SmoothSend — Gasless Stablecoin Payments for Web3 Developers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmoothSend — Gasless USDC & USDT Payments',
    description:
      'Send stablecoins without gas fees on Aptos, Arbitrum, Base & Avalanche. ERC-4337 account abstraction — no ETH or APT required.',
    creator: '@smoothsend',
    images: ['https://www.smoothsend.xyz/og-image.png'],
  },
  icons: {
    icon: [{ url: '/Logo.svg', type: 'image/svg+xml' }],
    shortcut: '/Logo.svg',
    apple: '/Logo.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://va.vercel-insights.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
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
