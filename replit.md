# GGIT Systems Web — Replit Project

## Overview
Marketing/portfolio website for GGIT Systems built with Next.js 16, React 19, Three.js (via React Three Fiber), Framer Motion, and Tailwind CSS v4.

## Architecture
- **Framework**: Next.js 16 (App Router)
- **Rendering**: Static/SSR via Next.js
- **Styling**: Tailwind CSS v4 with PostCSS
- **3D**: React Three Fiber + Three.js + drei
- **Animations**: Framer Motion, Lenis (smooth scrolling)
- **Package manager**: npm

## Project Structure
- `app/` — Next.js App Router pages and layouts
- `components/` — Shared UI components, providers, sections
- `lib/` — Utility functions
- `public/` — Static assets
- `assets/` — Project assets

## Running the Project
- **Dev server**: `npm run dev` (port 5000, host 0.0.0.0)
- **Production build**: `npm run build`
- **Production start**: `npm run start` (port 5000, host 0.0.0.0)

## Replit Configuration
- Port 5000 is used for both dev and production (required by Replit webview)
- `allowedDevOrigins` in `next.config.ts` is set to allow Replit preview iframes
- Workflow: "Start application" runs `npm run dev`
