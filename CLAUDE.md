# Ally Docs

Documentation site for Ally AI, built with SvelteKit.

## Architecture

- **Framework**: SvelteKit with MDsveX for markdown processing
- **Styling**: Tailwind CSS
- **Deployment**: Cloudflare Workers (via `@sveltejs/adapter-cloudflare`)
- **Repo**: https://github.com/heyally-ai/ally-docs

## Base Path Configuration

The site is served at `heyally.ai/docs` (not at the root), so SvelteKit is configured with:

```js
// svelte.config.js
kit: {
    paths: {
        base: '/docs'
    }
}
```

This means:
- All routes are prefixed with `/docs` (e.g., `/docs/getting-started`)
- Assets are served at `/docs/_app/...` and `/docs/logo.svg`
- Internal links should use `{base}` from `$app/paths` (e.g., `href="{base}/getting-started"`)
- Static asset references need `{base}` prefix (e.g., `src="{base}{siteConfig.logo}"`)

## Deployment

### GitHub → Cloudflare

The repo is connected to Cloudflare Pages with automatic deployments on push to `main`.

### Router Architecture

A separate Cloudflare Worker acts as a router for `heyally.ai`, proxying `/docs/*` requests to this docs worker. The router is managed separately.

## Project Structure

```
src/
├── content/           # Markdown documentation files
│   ├── index.md       # Docs homepage
│   ├── getting-started.md
│   ├── features.md
│   └── troubleshooting.md
├── routes/
│   ├── +layout.svelte # Main layout with sidebar
│   ├── +layout.ts     # Loads navigation and search index
│   ├── +page.svelte   # Renders index.md
│   └── [...slug]/     # Dynamic route for all other docs
└── lib/
    ├── components/
    │   ├── app-sidebar.svelte        # Navigation sidebar
    │   ├── doc-navigation.svelte.ts  # Generates nav from content files
    │   ├── doc-search.svelte.ts      # Search indexing
    │   └── search-bar.svelte         # Search UI
    └── config.ts                     # Site config (title, logo, links)
```

## Key Files

- `svelte.config.js` - SvelteKit config including base path
- `wrangler.toml` - Cloudflare Workers config (just compatibility flags)
- `src/lib/config.ts` - Site title, version, logo paths, quick links

## Adding Documentation

1. Create a `.md` file in `src/content/`
2. Add frontmatter with `title` and `description`
3. Navigation is auto-generated from the content folder structure

## Local Development

```bash
npm install
npm run dev
```

Note: Local dev runs at `localhost:5173/docs` due to the base path.

## Build

```bash
npm run build
```

Output goes to `.svelte-kit/cloudflare/`.
