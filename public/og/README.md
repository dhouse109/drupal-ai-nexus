# Open Graph assets

These 1200×630 assets are used by route-level metadata for social and link previews.

## Social preview format

PNG is the default format referenced by `src/seo/metadata.shared.js` because LinkedIn and other social preview tools are more consistent with PNG or JPG assets than SVG assets.

Current generated PNG assets:

- `og-image.png` — default site preview
- `og-drupal-ai.png` — Drupal AI page preview
- `og-applied-ai.png` — Applied AI, AI in Practice, and Insight article preview
- `og-architecture-audit.png` — 2-Week Architecture Audit preview

The production build generates these files before Vite builds the site:

```sh
npm run og:png
```

The normal build runs this automatically:

```sh
npm run build
```

## Source assets

The SVG files remain in this directory as editable source/reference assets:

- `og-image.svg`
- `og-drupal-ai.svg`
- `og-applied-ai.svg`
- `og-architecture-audit.svg`

If the brand system changes, update the SVG source assets and then update `scripts/generate-og-pngs.mjs` so the generated PNG previews stay aligned.

## Validation

After deployment, use LinkedIn Post Inspector and other social preview tools to refresh cached previews and confirm the PNG image is detected.
