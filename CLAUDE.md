# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **SH Event Management**, a Next.js 16 event services showcase website for an event equipment rental and photography company in Accra, Ghana. The site is a single-page application (`/` route only) featuring a 3-slide hero carousel, 13+ homepage sections, modals for contact and quote requests, and live database persistence via Prisma + SQLite.

The design faithfully reproduces the [ayuf-holding.com](https://ayuf-holding.com) visual identity: indigo #353895 brand, dark night-blue sections (#12144B, #202369, #181B77), purple accents (#A886CD, #605BE5), and Roboto typography.

## Tech Stack

- **Framework**: Next.js 16 (App Router, standalone output)
- **Runtime**: Bun (development and production)
- **UI**: React 19 + shadcn/ui (Radix primitives) + Tailwind CSS v4
- **Database**: Prisma 6 + SQLite (file-based at `db/custom.db`)
- **State**: Zustand (UI modals and search)
- **Styling**: Tailwind v4 + tailwindcss-animate + tw-animate-css
- **Icons**: lucide-react
- **Forms**: react-hook-form + zod

## Development Commands

```bash
# Install dependencies
bun install

# Database setup (push schema without migrations)
bun run db:push

# Generate Prisma Client
bun run db:generate

# Full development environment (installs deps, pushes DB, starts dev server on port 3000, starts mini-services in background)
./.zscripts/dev.sh

# Development server only (port 3000)
bun run dev

# Lint
bun run lint

# Build for production (output: .next/standalone)
bun run build

# Production server (must run build first)
bun run start

# Database migrations (dev)
bun run db:migrate

# Database reset (destructive)
bun run db:reset
```

**Preferred workflow**: Use `./.zscripts/dev.sh` for full local development. It handles dependency installation, database push, dev server startup, health checks, and background mini-services in one command.

## Build & Deployment

- **Build target**: `output: "standalone"` in `next.config.ts` (required for production deployment)
- **Build script**: `./.zscripts/build.sh` performs full standalone build, auto-heals missing `output: "standalone"` config if necessary, builds mini-services, bundles database and Python runtimes, and packages everything into `/tmp/build_fullstack_$BUILD_ID.tar.gz`
- **Production start**: `./.zscripts/start.sh` boots Next.js standalone server, mini-services, and Caddy reverse proxy

## Architecture

### Single-Page Structure

All user-facing content lives on the `/` route (`src/app/page.tsx`). The page is composed of 13+ section components imported from `src/components/site/`:

1. **Header** (sticky navigation)
2. **Hero** (3-slide carousel: Equipment Rental / Comfort & Logistics / Photography)
3. **Presentation** (diamond motif background)
4. **Services** (3 dark-indigo text cards with outline buttons)
5. **FeaturedProducts** (2-column image + text)
6. **RealizationsCarousel** (dot pagination, prev/next arrows)
7. **ConversionBanner**
8. **PhotoBanner** (full-width aerial image)
9. **EquipmentDetail** (service detail with sidebar)
10. **ComfortDetail** (service detail with sidebar)
11. **PhotographyDetail** (service detail with sidebar)
12. **InterventionZone** (service area map/description)
13. **InspirationGrid** (3-column image gallery)
14. **Testimonials** (carousel with client quotes)
15. **WhyChooseUs** (value propositions)
16. **AboutUs** (company history)
17. **DevisForm** (2-step quote form modal)
18. **ContactSection** (contact form)
19. **Footer** (mega-footer with full sitemap)
20. **WhatsAppWidget** (floating button)
21. **SearchModal** (global search, Esc-closable)

### Data Layer

- **Database**: Prisma schema at `prisma/schema.prisma` with User, Post, and ContactSubmission models
- **Environment**: `.env` defines `DATABASE_URL=file:/home/z/my-project/db/custom.db` (update path if necessary)
- **Site Data**: Static content centralized in `src/lib/site-data.ts` (company info, services, realizations, testimonials, nav links)
- **UI Store**: Zustand store at `src/lib/ui-store.ts` (search modal, devis modal state)

### API Routes

- **Contact API**: `src/app/api/contact/route.ts` (POST handler persists form submissions to ContactSubmission model)
- **Root API**: `src/app/api/route.ts` (basic health check)

### Components Organization

- **Site Components**: `src/components/site/` — all page sections, header, footer, widgets, modals
- **UI Components**: `src/components/ui/` — shadcn/ui primitives (buttons, dialogs, carousels, forms, etc.)
- **Utilities**: `src/lib/utils.ts` — `cn()` Tailwind class merger

### Styling

- **Global CSS**: `src/app/globals.css` defines custom brand palette, diamond-motif SVG pattern, scrollbar styles, and animations
- **Brand Palette**:
  - Brand: `#353895` (indigo)
  - Dark nights: `#12144B`, `#202369`, `#181B77`
  - Purple accents: `#A886CD`, `#605BE5`
  - Text: `#333333`, `#ADADAD`
  - Light bg: `#FAFAFA`
- **Legacy aliases**: `gold`, `gold-light`, `tan` utility classes now map to purple accent values for backward compatibility
- **Typography**: Roboto (300/400/500/700/900) loaded via `next/font` in `src/app/layout.tsx`

### Image Generation

- **Script**: `scripts/gen-images.ts` generates all brand images via z-ai-web-dev-sdk
- **Output**: `/public/images/` (hero, services, realizations, inspirations, banners)
- **Logo**: `src/app/icon.svg` — indigo tent pictogram, auto-served by Next.js as favicon

## Key Behaviors & Constraints

- **No multi-route navigation**: The site is a single-page scroll experience with anchor links (e.g., `#location-evenementiel`, `#nos-realisations`)
- **Hero carousel**: 3 slides, auto-advance every 6.5s, crossfade transitions, pause-on-hover, manual dots + arrows
- **Devis form**: 2-step modal (step 1: event type selection; step 2: contact details)
- **Contact data**: Real contact info hardcoded in `src/lib/site-data.ts` (phones: 0244 154 664 / 0257 572 090, email: sheventmgt@gmail.com, location: Opposite Hannah School Complex, Madina, Accra)
- **Placeholder fields**: Any `[À FOURNIR]` fields in original French content are left as qualifiers/placeholders — do not fabricate factual data

## Mini-Services

The project supports optional `mini-services/` subdirectories (Node.js services with their own `package.json` and `dev` script). If present, `.zscripts/dev.sh` and `.zscripts/build.sh` will automatically install dependencies, start them in background, and bundle them into the deployment package.

- **Install**: `.zscripts/mini-services-install.sh`
- **Build**: `.zscripts/mini-services-build.sh`
- **Start**: `.zscripts/mini-services-start.sh` (production)

## Database Runtime

The `.zscripts/database-runtime-build.sh` script handles database setup during build:
- If `db/custom.db` exists (Preview database), it copies the existing data
- Otherwise, it initializes an empty SQLite database in the deployment package
- Template source code does not carry `db/custom.db`, so `dev.sh` does not need to succeed before deployment

## Python Runtime (Optional)

If the project includes Python source code or dependency manifests (`requirements.txt`, `pyproject.toml`, `Pipfile`), `.zscripts/python-runtime-build.sh` will:
- Install production dependencies into the deployment package
- Preserve Python source code's project-relative paths
- Python does not inherit workspace-agent's `/home/z/.venv`

## Configuration Notes

- **TypeScript**: `ignoreBuildErrors: true` in `next.config.ts` — build proceeds despite type errors (remove once types are clean)
- **React Strict Mode**: Disabled (`reactStrictMode: false`)
- **Standalone output**: Required for production deployment — `.zscripts/build.sh` auto-heals if missing

## Worklog

See `worklog.md` for a detailed task history from the original agent build sessions. Key milestones:
- Task 0: Foundation setup (fonts, theme, diamond motif)
- Task 1: Full single-page showcase build (13+ sections, contact API, Prisma integration)
- Task 2: Visual identity rewrite to match ayuf-holding.com (exact indigo/purple palette, Roboto fonts, favicon)
- Task 3: Hero carousel implementation (3 slides, auto-advance, crossfade)

## Design Reference

The site's visual design is based on [ayuf-holding.com](https://ayuf-holding.com):
- Dark indigo text service cards with outline buttons (no image-on-top cards)
- Near-black hero background with light uppercase headlines
- Clean indigo mega-footer
- No emoji icons — use lucide line icons instead
- Purple pill buttons (42px height)
- Navy service-card footers
