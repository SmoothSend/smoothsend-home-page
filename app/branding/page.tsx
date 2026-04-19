import type { Metadata } from 'next'
import BrandingContent from './branding-content'

export const metadata: Metadata = {
  title: 'Brand Guidelines | SmoothSend',
  description:
    'Official SmoothSend brand assets and guidelines, including logos, color palette, and typography standards for consistent use.',
  alternates: {
    canonical: 'https://www.smoothsend.xyz/branding',
  },
  openGraph: {
    title: 'Brand Guidelines | SmoothSend',
    description:
      'Download official SmoothSend logos and review brand colors and typography guidelines.',
    url: 'https://www.smoothsend.xyz/branding',
    siteName: 'SmoothSend',
    images: [
      {
        url: 'https://www.smoothsend.xyz/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SmoothSend Brand Guidelines',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Guidelines | SmoothSend',
    description:
      'Official SmoothSend logos, color palette, and typography guidelines.',
    creator: '@smoothsend',
    images: ['https://www.smoothsend.xyz/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BrandingPage() {
  return <BrandingContent />
}
