# SEO release checklist

Use this checklist when a change affects route metadata, Open Graph assets, schema.org data, prerendering, sitemap generation, or priority landing-page copy.

## 1. Route coverage

- [ ] Every new public route has an entry in `src/seo/metadata.shared.js`.
- [ ] Removed routes no longer have stale metadata entries.
- [ ] Priority pages have specific titles and descriptions, not fallback metadata.
- [ ] The 404 fallback still has safe default metadata.

## 2. Titles and descriptions

- [ ] Each priority route has a unique `<title>`.
- [ ] Titles describe the page's purpose, service, or decision context.
- [ ] Meta descriptions are specific enough to help a visitor decide whether the page is relevant.
- [ ] Metadata uses 109.studio's principal-led voice and avoids generic agency claims.
- [ ] Metadata does not over-promise beyond what the page proves.

## 3. Canonical URLs

- [ ] Each route renders a canonical URL.
- [ ] Canonical URLs use `https://109.studio`.
- [ ] Canonical URLs match the public route path.
- [ ] No route points to a Lovable preview, temporary domain, or local development URL.

## 4. Sitemap

- [ ] `npm run build` generates `dist/sitemap.xml`.
- [ ] The sitemap uses absolute `https://109.studio` URLs.
- [ ] The sitemap includes every current public route from `src/seo/metadata.shared.js`.
- [ ] The sitemap excludes `/404`, wildcard routes, and routes that do not exist as public pages.
- [ ] Priority landing pages have intentional `priority` and `changefreq` values in `scripts/generate-sitemap.mjs`.
- [ ] Future Insight article and Portfolio project detail URLs are only added after those pages and content sources exist.
- [ ] `lastmod` is omitted unless meaningful published or updated dates are available.

## 5. Open Graph and Twitter Card fallback

- [ ] Each route has `og:title`.
- [ ] Each route has `og:description`.
- [ ] Each route has `og:url`.
- [ ] Each route has `og:image`.
- [ ] Each route has `twitter:card`.
- [ ] Each route has `twitter:title`.
- [ ] Each route has `twitter:description`.
- [ ] Each route has `twitter:image`.
- [ ] No `twitter:site` value is reintroduced unless 109.studio adopts an official X/Twitter presence.

## 6. Open Graph image assets

- [ ] Image references point to files under `public/og/`.
- [ ] Priority routes use the most relevant branded image.
- [ ] Default routes use `/og/og-image.svg` or a future replacement default.
- [ ] Image file names are stable and descriptive.
- [ ] Images use a 1200×630 composition.
- [ ] If social preview tools reject SVG, PNG replacements are exported and metadata is updated.

## 7. Schema.org JSON-LD

- [ ] Every indexed route includes a `WebPage`-family schema object.
- [ ] About uses `AboutPage`.
- [ ] Contact uses `ContactPage`.
- [ ] Collection-style pages use `CollectionPage` when appropriate.
- [ ] Service and offering pages include `Service` schema when appropriate.
- [ ] Site identity pages include or reference the shared `Organization` and `Person` objects where appropriate.
- [ ] JSON-LD uses stable `@id` references.
- [ ] JSON-LD does not include unsupported claims, fake reviews, fake ratings, or unavailable pricing.

## 8. Build and prerendering

- [ ] `npm run build` completes successfully.
- [ ] The prerender step logs the expected number of generated routes.
- [ ] The sitemap step logs the expected number of generated routes.
- [ ] `dist/index.html` includes the home-page metadata.
- [ ] At least one priority route, such as `dist/drupal-ai/index.html`, includes route-specific metadata.
- [ ] Generated HTML includes JSON-LD before React runs.
- [ ] No stale duplicated SEO tags appear in generated HTML.

## 9. Manual inspection

Inspect at least these generated files after a metadata change:

- [ ] `dist/index.html`
- [ ] `dist/drupal-ai/index.html`
- [ ] `dist/applied-ai/index.html`
- [ ] `dist/architecture-audit/index.html`
- [ ] `dist/contact/index.html`
- [ ] `dist/sitemap.xml`

For each inspected HTML file, check:

- [ ] `<title>` is correct.
- [ ] `meta name="description"` is correct.
- [ ] `link rel="canonical"` is correct.
- [ ] `og:image` points to the expected asset.
- [ ] JSON-LD is present and valid JSON.

For `dist/sitemap.xml`, check:

- [ ] The XML is valid.
- [ ] The home page appears as `https://109.studio/`.
- [ ] Priority routes such as `/services`, `/offerings`, `/drupal-ai`, `/applied-ai`, `/architecture-audit`, and `/insights` are present.
- [ ] Removed, fallback, or future placeholder routes are not present.

## 10. Post-deploy validation

After deployment:

- [ ] View source for the live home page and one priority route.
- [ ] Confirm route-specific metadata appears in initial HTML.
- [ ] Confirm `https://109.studio/sitemap.xml` loads.
- [ ] Submit or refresh the sitemap in Google Search Console and Bing Webmaster Tools when appropriate.
- [ ] Test priority pages in social preview/debugger tools.
- [ ] Validate JSON-LD for at least the home page and one service page.
- [ ] Confirm Google Analytics is still loading.
- [ ] Confirm Google Search Console and Bing verification tags remain in `index.html`.

## 11. Documentation updates

- [ ] If metadata source files change, update `docs/seo-metadata-workflow.md`.
- [ ] If the prerender or sitemap build strategy changes, update `docs/seo-prerendering.md`.
- [ ] If Open Graph asset conventions change, update `public/og/README.md`.
- [ ] If release review steps change, update this checklist.

## Review principle

Metadata and sitemap generation are part of the page experience. They should help the right visitor, crawler, or preview tool understand why the page exists, what decision it supports, and why 109.studio is credible enough to continue the conversation.
