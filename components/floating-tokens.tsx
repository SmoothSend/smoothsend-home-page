'use client'

import { useEffect, useState } from 'react'

interface Token {
  id: number
  name: string
  symbol: string
  iconUrl: string
  size: number
  top: string
  left?: string
  right?: string
  animationDelay: number
  animationDuration: number
}

const cryptoTokens: Token[] = [
  // USDC tokens (5 times)
  {
    id: 1,
    name: 'USD Coin',
    symbol: 'USDC',
    iconUrl: '/usd-coin-usdc-logo.svg',
    size: 60,
    top: '10%',
    left: '10%',
    animationDelay: 0,
    animationDuration: 25,
  },
  {
    id: 2,
    name: 'USD Coin',
    symbol: 'USDC',
    iconUrl: '/usd-coin-usdc-logo.svg',
    size: 45,
    top: '65%',
    left: '50%',
    animationDelay: -8,
    animationDuration: 26,
  },
  {
    id: 3,
    name: 'USD Coin',
    symbol: 'USDC',
    iconUrl: '/usd-coin-usdc-logo.svg',
    size: 42,
    top: '25%',
    left: '30%',
    animationDelay: -7,
    animationDuration: 27,
  },
  {
    id: 4,
    name: 'USD Coin',
    symbol: 'USDC',
    iconUrl: '/usd-coin-usdc-logo.svg',
    size: 38,
    top: '80%',
    right: '20%',
    animationDelay: -15,
    animationDuration: 29,
  },
  {
    id: 5,
    name: 'USD Coin',
    symbol: 'USDC',
    iconUrl: '/usd-coin-usdc-logo.svg',
    size: 52,
    top: '40%',
    left: '85%',
    animationDelay: -20,
    animationDuration: 32,
  },
  
  // Aptos tokens (5 times)
  {
    id: 6,
    name: 'Aptos',
    symbol: 'APT',
    iconUrl: '/aptos-apt-logo.svg',
    size: 48,
    top: '20%',
    right: '15%',
    animationDelay: -5,
    animationDuration: 30,
  },
  {
    id: 7,
    name: 'Aptos',
    symbol: 'APT',
    iconUrl: '/aptos-apt-logo.svg',
    size: 35,
    top: '15%',
    left: '70%',
    animationDelay: -12,
    animationDuration: 38,
  },
  {
    id: 8,
    name: 'Aptos',
    symbol: 'APT',
    iconUrl: '/aptos-apt-logo.svg',
    size: 46,
    top: '90%',
    left: '15%',
    animationDelay: -28,
    animationDuration: 36,
  },
  {
    id: 9,
    name: 'Aptos',
    symbol: 'APT',
    iconUrl: '/aptos-apt-logo.svg',
    size: 41,
    top: '55%',
    left: '25%',
    animationDelay: -18,
    animationDuration: 24,
  },
  {
    id: 10,
    name: 'Aptos',
    symbol: 'APT',
    iconUrl: '/aptos-apt-logo.svg',
    size: 44,
    top: '35%',
    right: '35%',
    animationDelay: -22,
    animationDuration: 28,
  },

  // Avalanche tokens (5 times)
  {
    id: 11,
    name: 'Avalanche',
    symbol: 'AVAX',
    iconUrl: '/avalanche-avax-logo.svg',
    size: 70,
    top: '60%',
    left: '5%',
    animationDelay: -10,
    animationDuration: 35,
  },
  {
    id: 12,
    name: 'Avalanche',
    symbol: 'AVAX',
    iconUrl: '/avalanche-avax-logo.svg',
    size: 50,
    top: '75%',
    left: '70%',
    animationDelay: -25,
    animationDuration: 22,
  },
  {
    id: 13,
    name: 'Avalanche',
    symbol: 'AVAX',
    iconUrl: '/avalanche-avax-logo.svg',
    size: 38,
    top: '45%',
    right: '25%',
    animationDelay: -30,
    animationDuration: 33,
  },
  {
    id: 14,
    name: 'Avalanche',
    symbol: 'AVAX',
    iconUrl: '/avalanche-avax-logo.svg',
    size: 55,
    top: '5%',
    left: '85%',
    animationDelay: -16,
    animationDuration: 31,
  },
  {
    id: 15,
    name: 'Avalanche',
    symbol: 'AVAX',
    iconUrl: '/avalanche-avax-logo.svg',
    size: 43,
    top: '85%',
    left: '55%',
    animationDelay: -33,
    animationDuration: 26,
  },

  // PayPal USD tokens (5 times)
  {
    id: 16,
    name: 'PayPal USD',
    symbol: 'PYUSD',
    iconUrl: '/paypal-usd-pyusd-logo.svg',
    size: 55,
    top: '70%',
    right: '10%',
    animationDelay: -15,
    animationDuration: 28,
  },
  {
    id: 17,
    name: 'PayPal USD',
    symbol: 'PYUSD',
    iconUrl: '/paypal-usd-pyusd-logo.svg',
    size: 48,
    top: '30%',
    left: '25%',
    animationDelay: -22,
    animationDuration: 31,
  },
  {
    id: 18,
    name: 'PayPal USD',
    symbol: 'PYUSD',
    iconUrl: '/paypal-usd-pyusd-logo.svg',
    size: 41,
    top: '50%',
    left: '20%',
    animationDelay: -35,
    animationDuration: 23,
  },
  {
    id: 19,
    name: 'PayPal USD',
    symbol: 'PYUSD',
    iconUrl: '/paypal-usd-pyusd-logo.svg',
    size: 46,
    top: '15%',
    left: '30%',
    animationDelay: -11,
    animationDuration: 29,
  },
  {
    id: 20,
    name: 'PayPal USD',
    symbol: 'PYUSD',
    iconUrl: '/paypal-usd-pyusd-logo.svg',
    size: 39,
    top: '95%',
    right: '30%',
    animationDelay: -26,
    animationDuration: 34,
  },

  // Sui tokens (5 times)
  {
    id: 21,
    name: 'Sui',
    symbol: 'SUI',
    iconUrl: '/sui-sui-logo.svg',
    size: 40,
    top: '35%',
    left: '15%',
    animationDelay: -20,
    animationDuration: 32,
  },
  {
    id: 22,
    name: 'Sui',
    symbol: 'SUI',
    iconUrl: '/sui-sui-logo.svg',
    size: 55,
    top: '8%',
    left: '55%',
    animationDelay: -18,
    animationDuration: 29,
  },
  {
    id: 23,
    name: 'Sui',
    symbol: 'SUI',
    iconUrl: '/sui-sui-logo.svg',
    size: 52,
    top: '65%',
    right: '40%',
    animationDelay: -14,
    animationDuration: 24,
  },
  {
    id: 24,
    name: 'Sui',
    symbol: 'SUI',
    iconUrl: '/sui-sui-logo.svg',
    size: 37,
    top: '25%',
    right: '8%',
    animationDelay: -31,
    animationDuration: 27,
  },
  {
    id: 25,
    name: 'Sui',
    symbol: 'SUI',
    iconUrl: '/sui-sui-logo.svg',
    size: 49,
    top: '88%',
    left: '35%',
    animationDelay: -19,
    animationDuration: 25,
  },
]

export function FloatingTokens() {
  const [mounted, setMounted] = useState(false)
  const [clickedToken, setClickedToken] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTokenClick = (tokenId: number, tokenName: string) => {
    setClickedToken(tokenId)
    // Add a subtle notification or tooltip effect
    console.log(`Clicked on ${tokenName}`)
    
    setTimeout(() => {
      setClickedToken(null)
    }, 500)
  }

  if (!mounted) return null

  return (
    <div 
      className="floating-tokens" 
      role="img" 
      aria-label="Decorative floating cryptocurrency tokens including USDC, Aptos, Avalanche, PayPal USD, Sui, and SmoothSend logos"
    >
      {cryptoTokens.map((token) => (
        <div
          key={token.id}
          className={`token ${clickedToken === token.id ? 'token-clicked' : ''} ${token.symbol === 'APT' ? 'token-aptos' : ''}`}
          style={{
            width: `${token.size}px`,
            height: `${token.size}px`,
            top: token.top,
            left: token.left,
            right: token.right,
            backgroundImage: `url('${token.iconUrl}')`,
            animationDelay: `${token.animationDelay}s`,
            animationDuration: `${token.animationDuration}s`,
          }}
          onClick={() => handleTokenClick(token.id, token.name)}
          title={`${token.name} (${token.symbol})`}
          role="button"
          tabIndex={0}
          aria-label={`Decorative ${token.name} token`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleTokenClick(token.id, token.name)
            }
          }}
        />
      ))}
    </div>
  )
}