# SEO prerendering and sitemap generation

The site is a Vite/React single-page application. Client-side route metadata is still useful for browser navigation, but social preview tools and crawlers often inspect the initial HTML before React has a chance to update the document head.

To make route-level titles, descriptions, Open Graph tags, canonical URLs, JSON-LD schema, and sitemap discovery available in the production artifact, the build runs post-build SEO steps:

```sh
npm run build
```

That command runs:

```sh
vite build && node scripts/prerender-seo.mjs && node scripts/generate-sitemap.mjs
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

The sitemap script writes `dist/sitemap.xml` from the same public route metadata source. It excludes fallback routes such as `/404` and uses canonical `https://109.studio` URLs.

## Why this approach

This is intentionally lighter than adopting a full SSR framework. It keeps the existing React app and routing model intact while improving the HTML that crawlers, validators, social preview tools, and sitemap consumers see first.

Generating the sitemap from the same route metadata keeps the site from accumulating another manually maintained SEO artifact.

## Shared metadata source

Route metadata, Open Graph image paths, schema definitions, and sitemap route discovery live in shared dependency-free JavaScript modules under `src/seo/`:

- `src/seo/metadata.shared.js`
- `src/seo/schema.shared.js`
- `src/seo/siteIdentity.shared.js`

The React app imports these through TypeScript compatibility wrappers such as `src/seo/siteMetadata.ts`. The prerender and sitemap scripts import the shared JavaScript modules directly. This keeps client-side navigation metadata, build-time static HTML generation, and sitemap output aligned from the same source of truth.

## Sitemap maintenance

Sitemap priority and change frequency are configured in `scripts/generate-sitemap.mjs`.

Use explicit options for high-priority landing pages and routes with a meaningful update cadence. Routes without explicit options use defaults.

Do not add future Insight article or Portfolio project URLs until those detail pages and content sources exist. When they are introduced, extend the generator to derive those URLs from the content source.

Do not add `lastmod` until pages have meaningful published or updated dates.

## Standalone commands

Use the full production build for normal validation:

```sh
npm run build
```

Use the standalone prerender command only when the Vite build has already produced a fresh `dist/` directory:

```sh
npm run prerender:seo
```

Use the standalone sitemap command only when the Vite build has already produced a fresh `dist/` directory:

```sh
npm run sitemap
```

## Maintenance note

When route metadata changes, update `src/seo/metadata.shared.js`. The change will be used by the React app, prerender script, and sitemap script.

When identity-level details change, update `src/seo/siteIdentity.shared.js`.

When schema construction changes, update `src/seo/schema.shared.js`.

When route priority or expected update frequency changes, update `scripts/generate-sitemap.mjs`.

## Related documentation

- `docs/seo-metadata-workflow.md` explains how to add and maintain route metadata, Open Graph assets, schema.org objects, and sitemap output.
- `docs/seo-release-checklist.md` provides the review checklist to use before merging metadata, prerendering, or sitemap changes.
