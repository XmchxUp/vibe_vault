# VibeVault

VibeVault is a personal portfolio showcase for AI-era creations built with Codex and Claude. The site opens directly into a work-first gallery: real project screenshots, focused project descriptions, technology tags, and quick links to demos or source code.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react

## Local Development

```bash
pnpm install
pnpm dev
```

Open:

```text
http://localhost:5173/
```

## Build

```bash
pnpm build
```

The production output is generated in:

```text
dist/
```

## Deploy to Cloudflare

Use Cloudflare Workers Static Assets with GitHub integration. This gives the
site a free public `*.workers.dev` domain and keeps SPA fallback in
`wrangler.jsonc`.

Recommended settings:

```text
Framework preset: React (Vite) or None
Build command: pnpm build
Deploy command: pnpm run deploy
Output directory: dist
Production branch: main
Node version: 22
```

Cloudflare will provide a free public domain:

```text
https://vibevault.<your-account>.workers.dev
```

This repo includes:

- `public/_headers` for asset caching and basic security headers.
- `wrangler.jsonc` for Workers Static Assets SPA fallback if using Wrangler deploy.
- `DEPLOYMENT.md` for deployment steps.
