# Deploy VibeVault to Cloudflare

Use Cloudflare Workers Static Assets with GitHub integration. This path gives
the site a free public `*.workers.dev` domain, supports a non-empty deploy
command, and uses `wrangler.jsonc` as the source of truth for SPA fallback.

## Cloudflare Settings

- Framework preset: `React (Vite)` or `None`
- Build command: `pnpm build`
- Deploy command: `pnpm run deploy`
- Output directory: `dist`
- Root directory: `/`
- Production branch: `main`

If Cloudflare asks for Node configuration, set:

- `NODE_VERSION`: `22`

## Steps

1. Push this repository to GitHub.
2. Open Cloudflare Dashboard.
3. Go to `Workers & Pages`.
4. Create a Workers project from Git.
5. Select `Connect to Git`.
6. Choose the GitHub repository.
7. Use the settings above.
8. Deploy.

After the first deployment, Cloudflare provides a free public domain:

```text
https://vibevault.<your-account>.workers.dev
```

Every push to the production branch will rebuild and redeploy the site.

## Why the Deploy Command Matters

The previous failed deployment log ran:

```bash
npx wrangler deploy
```

Without an explicit repository config, Wrangler can fall back to interactive
project setup or an existing default Worker, which is how a deployed site can
still show `Hello World`. Use the repo script instead:

```bash
pnpm run deploy
```

That script expands to:

```bash
wrangler deploy --config wrangler.jsonc
```

For Workers Static Assets, SPA fallback must be configured in `wrangler.jsonc`,
not with a Pages-style `_redirects` file.

This repo includes:

```jsonc
{
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

Use:

```bash
pnpm build
pnpm run deploy
```

If the public URL still shows `Hello World` after this change, open Cloudflare
and delete or disable the older `vibevault` Worker/route, then redeploy from the
GitHub-connected project. Also confirm you are visiting the latest
`*.workers.dev` URL for this project, not an older Worker URL.

## Included Deployment Files

- `public/_headers`: long-lived caching for built assets and basic security headers.
- `wrangler.jsonc`: Workers Static Assets config with SPA fallback.
