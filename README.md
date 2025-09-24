# SmoothSend Homepage

This is the SmoothSend marketing homepage — a Next.js + Tailwind project showcasing the SmoothSend brand and visuals.

## 🌟 Key Features
- **Floating cryptocurrency tokens** in the page background (USDC, APT, AVAX, PYUSD, SUI)
- **WCAG 2.1 AA Compliant** - Full accessibility support for users with disabilities
- **Responsive design** with mobile-first approach
- **Interactive hover + click effects** on floating tokens
- **SmoothSend brand integration** with logo and consistent theming

## ♿ Accessibility Features
- **High contrast colors** meeting WCAG 2.1 AA standards (4.5:1 ratio)
- **Full keyboard navigation** with visible focus indicators
- **Screen reader support** with proper ARIA labels and semantic HTML
- **Skip navigation link** for keyboard users
- **Reduced motion support** for users with vestibular disorders
- **Proper heading hierarchy** and landmark navigation

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for detailed testing guide and compliance information.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (compatible with Next.js v14)

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

### Key Directories
- `app/` - Next.js app pages and global styles
- `components/` - React components (header, hero, floating tokens, etc.)
- `public/` - Static assets including cryptocurrency logos
- `app/globals.css` - Global stylesheet with accessibility improvements

### Important Files
- `components/floating-tokens.tsx` - Interactive floating cryptocurrency tokens
- `app/globals.css` - WCAG-compliant styles and accessibility features
- `ACCESSIBILITY.md` - Comprehensive accessibility testing guide

### Static Assets
All cryptocurrency logos are stored locally in `public/` to avoid CORS issues:
- `usd-coin-usdc-logo.svg` - USD Coin logo
- `aptos-apt-logo.svg` - Aptos blockchain logo
- `avalanche-avax-logo.svg` - Avalanche logo
- `paypal-usd-pyusd-logo.svg` - PayPal USD logo
- `sui-sui-logo.svg` - Sui blockchain logo
- `smoothsendlogo.png` - SmoothSend brand logo

## 🛠️ Development Notes

### Floating Tokens
- Implemented in `components/floating-tokens.tsx`
- Uses local images to avoid external resource blocking
- Keyboard accessible with proper ARIA labels
- Respects reduced motion preferences

### Accessibility Testing
Run accessibility tests with:
```bash
# Install testing tools
npm install -g @axe-core/cli pa11y

# Run accessibility audits
axe http://localhost:3000
pa11y http://localhost:3000
```

## 📊 Performance & Standards
- **Next.js 14** with optimized builds
- **Tailwind CSS** for efficient styling
- **TypeScript** for type safety
- **WCAG 2.1 AA Compliant** for accessibility
- **Responsive design** across all devices
- **Fast loading** with optimized assets

## 📄 License
MIT

---

Built with ❤️ by the SmoothSend Team
# smoothsend-home-page
