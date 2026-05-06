# Deploy VibeVault to Cloudflare Pages

Use Cloudflare Pages with GitHub integration. This gives the site a free public
`*.pages.dev` domain, automatic deploys from GitHub, and preview deployments for
branches and pull requests.

## Cloudflare Pages Settings

- Framework preset: `React (Vite)` or `None`
- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`

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

## Included Deployment Files

- `public/_redirects`: SPA fallback so direct URL refreshes resolve to `index.html`.
- `public/_headers`: long-lived caching for built assets and basic security headers.
