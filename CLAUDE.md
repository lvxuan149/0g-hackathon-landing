# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for the 0G AI Vibe Coding Hackathon (深圳站), built with Next.js 16, React 19, and Tailwind CSS 4.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Single-page application** with all content in `src/app/page.tsx`:
- Navigation (fixed header)
- Hero section (Vibe logo + Coding card)
- Tracks section (two hackathon tracks)
- Highlights section
- Event info section
- Registration CTA
- Footer

**Styling approach:**
- Tailwind CSS for utility classes
- Custom CSS classes in `src/app/globals.css` for reusable components
- CSS variables for theme colors (yellow `#FFD500`, purple `#9B7FD8`, pink `#F5A8D9`)

**Key custom CSS classes:**
- `.yellow-card` - Main yellow card with 3D shadow and rotation
- `.track-card`, `.track-card-1`, `.track-card-2` - Track section cards with hover effects
- `.gradient-text`, `.gradient-text-purple`, `.gradient-text-yellow` - Gradient text effects
- `.cta-button`, `.secondary-button` - Button styles with 3D effects
- `.flow-item`, `.flow-yellow`, `.flow-purple` - Flow diagram items

**Static assets** in `/public`:
- `0G-Logo.svg` - 0G Labs logo
- `Vibe.svg` - VIBE 3D cube logo

## Path Alias

`@/*` maps to `./src/*`
