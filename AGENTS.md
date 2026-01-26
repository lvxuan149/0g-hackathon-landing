# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **landing page for the 0G Vibe Coding Hackathon** (Shenzhen, January 31 - February 1, 2026). The site is built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS 4**.

The landing page promotes a hackathon focused on two tracks:
1. **Agent-native payment infrastructure** - solving trust, service discovery, and identity gaps in x402 protocol
2. **Decentralized AI Trading Arena** - making AI trading transparent and verifiable

## Common Commands

### Development
```bash
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Run ESLint
```

### Key Notes
- The development server runs on **port 3000** by default
- Hot reload is enabled - editing `src/app/page.tsx` will auto-update the browser
- No test framework is configured in this project

## Architecture

### Project Structure
```
src/
  app/
    layout.tsx      # Root layout with metadata, fonts (Geist Sans/Mono), and <html> wrapper
    page.tsx        # Single-page landing with all sections (Hero, Why, Tracks, 0G Solution, etc.)
    globals.css     # Tailwind imports + extensive custom CSS (animations, gradients, cards)
    favicon.ico
```

### Key Architectural Points

**Single-Page Application**
- All content lives in `src/app/page.tsx` - one large component with multiple sections
- Navigation uses anchor links (`#why`, `#tracks`, `#0g-solution`, `#register`)
- Smooth scrolling enabled via `scroll-behavior: smooth` in globals.css

**Styling Approach**
- Tailwind CSS 4 with inline utility classes throughout JSX
- Extensive custom CSS in `globals.css` for:
  - CSS variables for theme colors (primary: #00f5d4 cyan, secondary: #7b61ff purple, accent: #ff6b6b red)
  - Custom gradient text classes (`.gradient-text`, `.gradient-text-cyan`, `.gradient-text-purple`)
  - Custom component classes (`.track-card`, `.problem-card`, `.solution-card`, `.cta-button`)
  - Animations (`@keyframes float`, `@keyframes pulse-glow`)
- No component library - all UI is custom-built

**Metadata & SEO**
- Configured in `layout.tsx` with Chinese title/description
- Language set to `zh-CN` (Chinese)
- OpenGraph metadata included

**Path Aliasing**
- `@/*` maps to `./src/*` (configured in tsconfig.json)

**TypeScript Configuration**
- Strict mode enabled
- Target: ES2017
- Using Next.js JSX transform (`jsx: "react-jsx"`)

## Important Context

### Content Language
All user-facing content is in **Chinese (Simplified)**. When making content changes, maintain Chinese language throughout.

### Design System
The site uses a dark theme with a **cyberpunk/tech aesthetic**:
- Background: `#0a0a0f` (near-black)
- Primary gradient: cyan (#00f5d4) → purple (#7b61ff) → red (#ff6b6b)
- Cards use subtle gradients and borders with hover effects
- Animated background grid and glowing blur effects

### Critical Sections in page.tsx
1. **Hero** (lines 23-82): Event date/location badge, main title, stats, CTA buttons
2. **Why** (lines 85-243): 4 problem cards explaining industry gaps + market data
3. **Tracks** (lines 250-416): 2 detailed track cards with example projects/mechanisms
4. **0G Solution** (lines 422-617): Comparison table + 3 tech stack cards (DA/Compute/Chain)
5. **Prizes** (lines 624-673): Prize pool breakdown (800/500/300 USDT)
6. **Judging Criteria** (lines 680-732): 5 criteria cards with percentages
7. **Register CTA** (lines 739-787): Final registration section with Luma link
8. **Footer** (lines 791-827): Logo, links to 0G resources

### External Dependencies
- Uses Google Fonts via `next/font/google` (Geist, Geist_Mono)
- Registration link points to `https://lu.ma` (placeholder - likely needs updating)
- External links to 0G ecosystem (0g.ai, docs.0g.ai, GitHub, Twitter)

### Build Configuration
- Next.js config (`next.config.ts`) is minimal with no custom options
- PostCSS configured for Tailwind (`postcss.config.mjs`)
- ESLint uses Next.js recommended configs (`eslint.config.mjs`)

## Development Guidelines

When editing this codebase:
- **Maintain the single-page structure** - all sections should remain in `page.tsx` unless explicitly refactoring
- **Preserve the gradient/animation system** - custom CSS classes are tightly coupled to the design
- **Use Tailwind utilities first** - only add custom CSS when needed for complex effects
- **Keep Chinese language** for all content modifications
- **Test responsive design** - the layout has mobile (`md:`, `lg:`) breakpoints throughout
- **Maintain color consistency** - use the defined CSS variables or Tailwind color tokens that match the theme
