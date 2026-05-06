# Deploy VibeVault to Cloudflare

Use Cloudflare with GitHub integration. The simplest path is Cloudflare Pages,
which gives the site a free public `*.pages.dev` domain and automatic deploys
from GitHub.

## Cloudflare Pages Settings

- Framework preset: `React (Vite)` or `None`
- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`
- Deploy command: leave empty

If Cloudflare asks for Node configuration, set:

- `NODE_VERSION`: `20`

## Steps

1. Push this repository to GitHub.
2. Open Cloudflare Dashboard.
3. Go to `Workers & Pages`.
4. Create a Pages project.
5. Select `Connect to Git`.
6. Choose the GitHub repository.
7. Use the settings above.
8. Deploy.

After the first deployment, Cloudflare provides a free public domain:

```text
https://<project-name>.pages.dev
```

Every push to the production branch will rebuild and redeploy the site.

## If You Use Wrangler Deploy

Your failed deployment log shows Cloudflare ran:

```bash
npx wrangler deploy
```

That path deploys with Workers Static Assets instead of plain Pages output.
For that mode, SPA fallback must be configured in `wrangler.jsonc`, not with
Pages-style `_redirects`.

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
npx wrangler deploy
```

## Included Deployment Files

- `public/_headers`: long-lived caching for built assets and basic security headers.
- `wrangler.jsonc`: Workers Static Assets config with SPA fallback.
