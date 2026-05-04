# Open Graph assets

These 1200×630 SVG assets are used by route-level metadata for social and link previews.

Current assets:

- `og-image.svg` — default site preview
- `og-drupal-ai.svg` — Drupal AI page preview
- `og-applied-ai.svg` — Applied AI and AI in Practice preview
- `og-architecture-audit.svg` — 2-Week Architecture Audit preview

The assets use the 109.studio symbol as the visual anchor and should be replaced with final designed exports if the brand system changes.

Some social preview tools prefer PNG or JPG over SVG. If validation shows inconsistent rendering, export PNG versions from these SVG sources and update `src/seo/metadata.shared.js` to reference the PNG files.
