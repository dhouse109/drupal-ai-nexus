# SEO metadata workflow

This guide explains how route-level metadata, Open Graph tags, schema.org JSON-LD, prerendered route HTML, and sitemap generation are maintained for 109.studio.

The goal is simple: every important public page should have clear metadata that reflects the page's job in the business, not just its route name.

## Source of truth

SEO metadata is maintained in shared dependency-free JavaScript modules under `src/seo/`.

| File | Purpose |
| --- | --- |
| `src/seo/metadata.shared.js` | Route-level titles, descriptions, Open Graph copy, Open Graph images, page schema type, page-specific schema attachments, and the public route list used by prerendering and sitemap generation. |
| `src/seo/schema.shared.js` | Shared schema.org constructors and core identity objects such as Organization, Person, WebSite, ProfessionalService, WebPage, and Service. |
| `src/seo/siteIdentity.shared.js` | Durable 109.studio identity data such as site name, URL, founder, social profiles, practice areas, audience segments, and core offerings. |

The TypeScript files in the same directory are compatibility wrappers for the React app. They should usually stay thin.

| File | Purpose |
| --- | --- |
| `src/seo/siteMetadata.ts` | Re-exports shared route metadata for client-side React usage and provides TypeScript route metadata types. |
| `src/seo/schema.ts` | Re-exports shared schema helpers for TypeScript callers and provides TypeScript schema types. |
| `src/seo/siteIdentity.ts` | Re-exports shared site identity data for TypeScript callers. |

## Runtime and build-time usage

The same metadata is used in three places.

1. **Client-side navigation** uses the React SEO layer so metadata updates when a visitor moves between routes in the single-page app.
2. **Build-time prerendering** uses `scripts/prerender-seo.mjs` so static route HTML includes titles, descriptions, canonical URLs, Open Graph tags, Twitter Card fallback tags, and JSON-LD before React runs.
3. **Sitemap generation** uses `scripts/generate-sitemap.mjs` so `dist/sitemap.xml` stays aligned with the public route metadata.

This gives the site both a good browser experience and more reliable initial HTML for crawlers and social preview tools.

## Adding a new route

When adding a public route, update the metadata at the same time as the page.

1. Add the route in `src/App.tsx`.
2. Add a route entry in `src/seo/metadata.shared.js`.
3. Choose a page title that describes the page result or purpose.
4. Write a meta description that helps a visitor decide whether the page is relevant.
5. Add Open Graph title and description when the social preview should be more focused than the browser title.
6. Choose an Open Graph image.
7. Choose the most accurate page schema type.
8. Add page-specific schema when the page represents a service, collection, contact page, or identity page.
9. If the route needs a sitemap priority or change frequency different from the defaults, update `scripts/generate-sitemap.mjs`.
10. Run the build so the prerender and sitemap steps generate the route HTML and `dist/sitemap.xml`.

Example route entry pattern:

```js
"/example": page({
  title: "Example Service | 109.studio",
  description: "A clear description of the page and the problem it helps a visitor evaluate.",
  path: "/example",
  ogTitle: "Example Service | 109.studio",
  ogDescription: "Social preview copy that is useful when the page is shared.",
  ogImage: defaultOgImage,
  schema: [
    createServiceSchema({
      path: "/example",
      name: "Example Service",
      description: "A plain-language description of the service.",
      serviceType: "Example service type",
    }),
  ],
}),
```

## Sitemap generation

The sitemap is generated, not manually edited.

The production build writes the sitemap to:

```txt
dist/sitemap.xml
```

The generator reads the public routes from `src/seo/metadata.shared.js`, excludes fallback routes such as `/404`, and writes canonical URLs using the shared `https://109.studio` site identity.

Route-level sitemap tuning lives in `scripts/generate-sitemap.mjs`.

Use explicit sitemap options for priority landing pages, service pages, or pages expected to change more frequently. Routes without explicit options use safe defaults.

When future Insight articles and Portfolio project detail pages are created, extend the sitemap generator to read from their content source and include the generated detail routes. Do not add placeholder article or project URLs before the pages exist.

Avoid `lastmod` until pages have meaningful published or updated dates. A build-time timestamp can look precise while not accurately describing when page content changed.

## Choosing page titles

Good titles should be specific, useful, and not overly clever.

Use this pattern for most pages:

```txt
Page Purpose | 109.studio
```

For service pages, prefer:

```txt
Service Name | Outcome, Problem, or Decision Context
```

Avoid using the same title across multiple pages. Avoid keyword stuffing. A title should help a human understand the page first.

## Writing meta descriptions

Descriptions should explain what the page helps the visitor evaluate, decide, or do.

A good description usually answers three questions:

1. Who is this page for?
2. What problem or decision does it address?
3. What kind of confidence does the page create?

Keep descriptions direct and concrete. Avoid inflated claims that sound larger than the page can prove.

## Open Graph images

Open Graph assets live in `public/og/`.

Current assets:

- `/og/og-image.svg` for the default site preview.
- `/og/og-drupal-ai.svg` for the Drupal AI page.
- `/og/og-applied-ai.svg` for Applied AI and AI in Practice.
- `/og/og-architecture-audit.svg` for the 2-Week Architecture Audit.

When adding a new Open Graph image:

1. Use a 1200×630 canvas.
2. Keep text large enough to read in small previews.
3. Use the 109.studio symbol and visual system consistently.
4. Add the file under `public/og/`.
5. Add or update the image constant in `src/seo/metadata.shared.js`.
6. Wire the relevant route to the image with `ogImage`.

Some social platforms prefer PNG or JPG over SVG. If a preview validator fails to load an SVG reliably, export a PNG version and update the route metadata to point to the PNG file.

## Schema.org guidance

Use schema to clarify what a page represents. Do not add schema just to add more tags.

Common page-level choices:

| Page type | Use when |
| --- | --- |
| `WebPage` | Default for standard pages. |
| `AboutPage` | About page or founder/studio identity page. |
| `ContactPage` | Contact page. |
| `CollectionPage` | Portfolio, Insights, AI in Practice, or other pages collecting multiple items. |

Common structured data objects:

| Schema object | Use when |
| --- | --- |
| `Organization` | Site-wide 109.studio identity. |
| `Person` | Damien House founder/principal identity. |
| `WebSite` | Site-wide website identity. |
| `ProfessionalService` | Site-wide professional service identity. |
| `Service` | Service or offering pages. |
| `WebPage` | Every indexed page. |

Identity-level schema should usually be edited in `src/seo/siteIdentity.shared.js` or `src/seo/schema.shared.js`, not directly inside a route.

## Prerendering and sitemap output

The production build runs:

```sh
vite build && node scripts/prerender-seo.mjs && node scripts/generate-sitemap.mjs
```

The prerender script reads the built `dist/index.html`, strips old route-level SEO tags, injects metadata from `src/seo/metadata.shared.js`, and writes route-specific `index.html` files.

The sitemap script then writes `dist/sitemap.xml` from the same route metadata source.

After metadata changes, inspect generated HTML for at least one updated route. Confirm the initial HTML includes:

- `<title>`
- `meta name="description"`
- `link rel="canonical"`
- `og:title`
- `og:description`
- `og:url`
- `og:image`
- `twitter:title`
- `twitter:description`
- `twitter:image`
- `script type="application/ld+json"`

Also confirm `dist/sitemap.xml` includes the expected route URL and excludes removed or non-public routes.

## Validation workflow

Before merging metadata changes:

1. Run the normal build.
2. Confirm prerendering completes without errors.
3. Confirm sitemap generation completes without errors.
4. Inspect `dist/<route>/index.html` for at least one changed route.
5. Inspect `dist/sitemap.xml` when routes are added, removed, or reprioritized.
6. Confirm route titles are unique.
7. Confirm canonical URLs are absolute and point to `https://109.studio`.
8. Confirm sitemap URLs are absolute and point to `https://109.studio`.
9. Confirm Open Graph image URLs resolve to real files in `public/og/`.
10. Validate JSON-LD with a structured data testing tool after deployment.
11. Validate link previews after deployment for priority pages.

## When to update metadata

Update metadata when:

- A new public route is added.
- A page's purpose changes.
- A page becomes a priority landing page.
- A CTA or offer changes enough that the page's promise changes.
- A branded Open Graph image is added or replaced.
- 109.studio identity details change.
- A service or offering is renamed.

Update sitemap options when:

- A route becomes a higher-priority landing page.
- A route's expected update frequency changes.
- Future Insight article or Portfolio project detail routes are added through a content source.
- A public route is removed and should no longer be discoverable.

Do not treat metadata or sitemap generation as a final polish step. They are part of the page strategy.
