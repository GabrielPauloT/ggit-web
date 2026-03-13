# GGIT Systems Web — Replit Project

## Overview
Marketing/portfolio website for GGIT Systems — a strategic tech partner bridging Australia and Brazil, helping startups go from idea to product. Built with Next.js 16, React 19, Three.js (via React Three Fiber), Framer Motion, and Tailwind CSS v4.

## Architecture
- **Framework**: Next.js 16 (App Router)
- **Rendering**: Static/SSR via Next.js
- **Styling**: Tailwind CSS v4 with PostCSS
- **3D**: React Three Fiber + Three.js + drei (with CSS fallback for non-WebGL environments)
- **Animations**: Framer Motion, Lenis (smooth scrolling)
- **Package manager**: npm

## Project Structure
- `app/` — Next.js App Router pages and layouts
- `components/3d/` — 3D components (InteractiveCube with WebGL fallback, ThreeJSCube, HeroBackground)
- `components/sections/` — Page sections (Hero, Stats, About, Services, Portfolio)
- `components/layout/` — Layout components (Navbar, Footer)
- `components/ui/` — UI components (ReturnToTop)
- `components/providers/` — Context providers (SmoothScrolling)
- `lib/` — Data and utility functions
- `public/` — Static assets
- `assets/` — Project assets

## Page Sections (top to bottom)
1. Navbar (fixed)
2. Hero (with 3D cube + WebGL fallback)
3. Stats (key metrics)
4. About (company story + 3 pillars: Validate First, Scale When Ready, AU-BR Bridge)
5. Services (6 cards: PoC/MVP, No-Code to High-Code, Custom Software, Mobile, AI, IoT)
6. Portfolio (8 real projects with impact metrics)
7. Footer (contact, social links)

## Running the Project
- **Dev server**: `npm run dev` (port 5000, host 0.0.0.0)
- **Production build**: `npm run build`
- **Production start**: `npm run start` (port 5000, host 0.0.0.0)

## Replit Configuration
- Port 5000 is used for both dev and production (required by Replit webview)
- `allowedDevOrigins` in `next.config.ts` is set to allow Replit preview iframes
- Workflow: "Start application" runs `npm run dev`
