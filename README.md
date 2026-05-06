# VibeVault

VibeVault is a personal portfolio showcase for AI-era creations built with Codex and Claude. The site opens directly into a work-first gallery: real project screenshots, focused project descriptions, technology tags, and quick links to demos or source code.

## Featured Work

- **Mood2Know CN** — WeChat mini program for anonymous mood check-ins and emotional map visualization.
- **Bili Live Danmu Analyzer** — realtime Bilibili live danmaku analysis dashboard for operators.
- **Workout Page** — personal strength-training analytics site powered by Hevy workout history.
- **Xmchx's Blog** — personal writing system for technical notes, life records, and long-term archives.
- **Cutline** — Rust CLI for declarative ffmpeg-based video cutting workflows.

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

## Deploy to Cloudflare Pages

Use Cloudflare Pages with GitHub integration.

Recommended settings:

```text
Framework preset: React (Vite) or None
Build command: pnpm build
Build output directory: dist
Production branch: main
Node version: 20
```

Cloudflare will provide a free public domain:

```text
https://<project-name>.pages.dev
```

This repo includes:

- `public/_redirects` for SPA fallback.
- `public/_headers` for asset caching and basic security headers.
- `DEPLOYMENT.md` for deployment steps.
