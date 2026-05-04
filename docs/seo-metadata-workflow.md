# SEO metadata workflow

This guide explains how route-level metadata, Open Graph tags, and schema.org JSON-LD are maintained for 109.studio.

The goal is simple: every important public page should have clear metadata that reflects the page's job in the business, not just its route name.

## Source of truth

SEO metadata is maintained in shared dependency-free JavaScript modules under `src/seo/`.

| File | Purpose |
| --- | --- |
| `src/seo/metadata.shared.js` | Route-level titles, descriptions, Open Graph copy, Open Graph images, page schema type, and page-specific schema attachments. |
| `src/seo/schema.shared.js` | Shared schema.org constructors and core identity objects such as Organization, Person, WebSite, ProfessionalService, WebPage, and Service. |
| `src/seo/siteIdentity.shared.js` | Durable 109.studio identity data such as site name, URL, founder, social profiles, practice areas, audience segments, and core offerings. |

The TypeScript files in the same directory are compatibility wrappers for the React app. They should usually stay thin.

| File | Purpose |
| --- | --- |
| `src/seo/siteMetadata.ts` | Re-exports shared route metadata for client-side React usage and provides TypeScript route metadata types. |
| `src/seo/schema.ts` | Re-exports shared schema helpers for TypeScript callers and provides TypeScript schema types. |
| `src/seo/siteIdentity.ts` | Re-exports shared site identity data for TypeScript callers. |

## Runtime and build-time usage

The same metadata is used in two places.

1. **Client-side navigation** uses the React SEO layer so metadata updates when a visitor moves between routes in the single-page app.
2. **Build-time prerendering** uses `scripts/prerender-seo.mjs` so static route HTML includes titles, descriptions, canonical URLs, Open Graph tags, Twitter Card fallback tags, and JSON-LD before React runs.

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
9. Run the build so the prerender step generates the route HTML.

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

## Prerendering

The production build runs:

```sh
vite build && node scripts/prerender-seo.mjs
```

The prerender script reads the built `dist/index.html`, strips old route-level SEO tags, injects metadata from `src/seo/metadata.shared.js`, and writes route-specific `index.html` files.

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

## Validation workflow

Before merging metadata changes:

1. Run the normal build.
2. Confirm prerendering completes without errors.
3. Inspect `dist/<route>/index.html` for at least one changed route.
4. Confirm route titles are unique.
5. Confirm canonical URLs are absolute and point to `https://109.studio`.
6. Confirm Open Graph image URLs resolve to real files in `public/og/`.
7. Validate JSON-LD with a structured data testing tool after deployment.
8. Validate link previews after deployment for priority pages.

## When to update metadata

Update metadata when:

- A new public route is added.
- A page's purpose changes.
- A page becomes a priority landing page.
- A CTA or offer changes enough that the page's promise changes.
- A branded Open Graph image is added or replaced.
- 109.studio identity details change.
- A service or offering is renamed.

Do not treat metadata as a final polish step. It is part of the page strategy.
