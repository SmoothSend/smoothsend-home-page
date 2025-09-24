# SmoothSend Homepage

This is the SmoothSend marketing homepage — a Next.js + Tailwind project showcasing the SmoothSend brand and visuals.

Key features
- Floating cryptocurrency tokens in the page background (USDC, APT, AVAX, PYUSD, SUI).
- Tokens use local assets stored in the `public/` folder to avoid external CORS issues.
- Interactive hover + click effects on the floating tokens.
- SmoothSend brand logo included at `public/smoothsendlogo.png` and used in the header.

Getting started

Prerequisites
- Node.js 18+ (compatible with Next.js v14)

Install dependencies
```bash
npm install
```

Run the dev server
```bash
npm run dev

# Open http://localhost:3000 in your browser
```

Build for production
```bash
npm run build
npm start
```

Project layout (relevant files)
- `app/` - Next.js app pages and global styles
- `components/` - React components (header, hero, floating tokens, etc.)
- `public/` - Static assets (logos live here: `usd-coin-usdc-logo.svg`, `aptos-apt-logo.svg`, `avalanche-avax-logo.svg`, `paypal-usd-pyusd-logo.svg`, `sui-sui-logo.svg`, `smoothsendlogo.png`)
- `app/globals.css` - global stylesheet and floating token CSS

Notes
- The floating tokens are implemented in `components/floating-tokens.tsx` and are intentionally using local images under `public/` to avoid external resource blocking.
- If you want to add/remove tokens, edit `components/floating-tokens.tsx` and adjust positions/sizes/delays.

License
- MIT
# smoothsend-home-page
