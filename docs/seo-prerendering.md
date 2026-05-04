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

## Maintenance note

Route metadata currently lives in two places:

1. `src/seo/siteMetadata.ts` for client-side navigation.
2. `scripts/prerender-seo.mjs` for build-time static HTML generation.

When route metadata changes, update both places until the metadata source is moved into a shared dependency-free module.

## Future improvement

A later pass can move the shared metadata and schema definitions into a framework-neutral JavaScript module imported by both the React app and the prerender script. That would remove duplication while keeping the post-build prerender strategy intact.
