# GGIT Systems Web — Replit Project

## Overview
Marketing/portfolio website for GGIT Systems — a strategic tech partner bridging Australia and Brazil, helping startups go from idea to product. Built with Next.js 16, React 19, Three.js (via React Three Fiber), Framer Motion, and Tailwind CSS v4.

## Architecture
- **Framework**: Next.js 16 (App Router)
- **Rendering**: Static/SSR via Next.js
- **Styling**: Tailwind CSS v4 with PostCSS
- **3D**: React Three Fiber + Three.js + drei (InteractiveCube in About section, with WebGL context loss handling)
- **Animations**: Framer Motion, Lenis (smooth scrolling), CSS keyframe animations (hero glow orbs)
- **Package manager**: npm

## Project Structure
- `app/` — Next.js App Router pages and layouts
- `components/3d/` — 3D components (InteractiveCube with WebGL fallback)
- `components/sections/` — Page sections (Hero, About, TechStack, LiveDemo, DirectContact, Services, Process, Portfolio, CTA)
- `components/layout/` — Layout components (Navbar, Footer)
- `components/ui/` — UI components (ReturnToTop, CookieBanner)
- `components/providers/` — Context providers (SmoothScrolling)
- `lib/` — Data and utility functions
- `public/` — Static assets
- `assets/` — Project assets

## Page Sections (top to bottom)
1. Navbar (fixed)
2. Hero (animated glow orbs background, tagline, CTAs)
3. About (two-column: company story left + 3D cube right, 4 pillar cards below incl. AI-Driven)
4. TechStack / "Under the Hood" (animated code block + tech tags grid — shows real architecture)
5. LiveDemo / "Startup speed. Enterprise quality." (split-screen: AI prompt → code typing left + live preview rendering right — fleet tracking card)
6. DirectContact / "How We Work" (3 advantage cards — talk to builders, fast loops, small team)
7. Services / "How We Build" (6 cards: PoC/MVP, No-Code to High-Code, Custom Software, Mobile, AI, IoT)
8. Process / "From idea to product" (4 steps: Discovery → Validate → Build → Scale)
9. Portfolio / "Selected Works" (8 real projects with impact metrics)
10. CTA / "Ready to build?" (call-to-action with gradient button)
11. Footer (contact info, social links to GitHub/LinkedIn/Email, services list)

## Mobile Performance (iOS Safari)
- **`backdrop-blur`**: Removed from all mobile contexts. Desktop-only via `md:backdrop-blur-xl` (Navbar).
- **`transition-all`**: Replaced globally with specific properties (`transition-colors`, `transition-opacity`, `transition-[width]`, `transition-[opacity,transform]`).
- **Section glow blurs**: All decorative `blur-[100px+]` divs use `.section-glow` class, hidden on mobile via CSS (`display: none` under 768px).
- **Hero glow orbs**: Mobile — smaller (300/250px), less blur (80px), slower animation (20s), third orb hidden.
- **SVG noise texture**: `.bg-noise::before` hidden on mobile. Inline SVG noise removed from service/portfolio cards.
- **Body grid lines**: Removed from mobile; only rendered on `md:` breakpoint.
- **`drop-shadow`**: Desktop-only via `md:drop-shadow-[...]` prefix.
- **Pattern**: Never use `backdrop-blur`, `transition-all`, `drop-shadow`, or large `blur` on mobile. Always scope them to `md:` or use the `.section-glow` class.

## Brand
- Colors: `brand-blue` (#f59e0b amber), `brand-cyan` (#06b6d4 cyan), dark background (#0a0a0a)
- Cube has 6 faces: THE CORE, THE STRUCTURE, THE BACKBONE, THE SHIELD, THE INTELLIGENCE, THE METHOD
- Founded 2023, "Cornerstone" brand philosophy

## Running the Project
- **Dev server**: `npm run dev` (port 5000, host 0.0.0.0)
- **Production build**: `npm run build`
- **Production start**: `npm run start` (port 5000, host 0.0.0.0)

## Replit Configuration
- Port 5000 is used for both dev and production (required by Replit webview)
- `allowedDevOrigins` in `next.config.ts` is set to allow Replit preview iframes
- Workflow: "Start application" runs `npm run dev`
- WebGL doesn't work in Replit preview (software renderer) — cube renders on real browsers, shows transparent in preview
