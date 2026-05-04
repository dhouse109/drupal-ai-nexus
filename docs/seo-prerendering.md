# SEO prerendering

The site is a Vite/React single-page application. Client-side route metadata is still useful for browser navigation, but social preview tools and crawlers often inspect the initial HTML before React has a chance to update the document head.

To make route-level titles, descriptions, Open Graph tags, canonical URLs, and JSON-LD schema available in the initial HTML, the production build runs a post-build prerender step:

```sh
npm run build
```

That command runs:

```sh
vite build && node scripts/prerender-seo.mjs
```

The prerender script reads `dist/index.html`, injects route-specific SEO metadata, and writes static `index.html` files for priority routes such as:

- `/about/`
- `/services/`
- `/offerings/`
- `/architecture-audit/`
- `/applied-ai/`
- `/drupal-ai/`
- `/ai-in-practice/`
- `/portfolio/`
- `/contact/`
- `/insights/`

## Why this approach

This is intentionally lighter than adopting a full SSR framework. It keeps the existing React app and routing model intact while improving the HTML that crawlers, validators, and social preview tools see first.

## Shared metadata source

Route metadata, Open Graph image paths, and schema definitions live in shared dependency-free JavaScript modules under `src/seo/`:

- `src/seo/metadata.shared.js`
- `src/seo/schema.shared.js`
- `src/seo/siteIdentity.shared.js`

The React app imports these through TypeScript compatibility wrappers such as `src/seo/siteMetadata.ts`. The prerender script imports the shared JavaScript modules directly. This keeps client-side navigation metadata and build-time static HTML generation aligned from the same source of truth.

## Maintenance note

When route metadata changes, update `src/seo/metadata.shared.js`. The change will be used by both the React app and the prerender script.

When identity-level details change, update `src/seo/siteIdentity.shared.js`.

When schema construction changes, update `src/seo/schema.shared.js`.
