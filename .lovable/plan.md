
# Implementation Handoff Map — Version 2-1

## Goal

Deliver the same handoff content as v2, but split into two downloadable files so the JSON schemas can be consumed by tooling without parsing markdown.

## Deliverables

Two files written to `/mnt/documents/`:

1. **`109studio-implementation-handoff-version-2-1.md`** — Markdown handoff containing:
   - How the data flows (`*.shared.js` → `*.editorial-overrides.js` → `*.ts` → components/SEO, with `PUBLISHED_INSIGHT_SLUGS` slot)
   - Files likely involved (table: path · purpose · content type · expected fields · category · manual-edit vs generated · edit risks)
   - Project update schema (prose + field annotations; full JS example lives in companion JSON)
   - Insight update schema (prose + body block notes; full JS example in JSON)
   - Published allow-list update schema (publish/unpublish recipe, SEO + relationship impact)
   - Relationship update schema (bidirectional, reverse lookup behavior via `getProjectsLinkingToInsightSlug`)
   - Validation checklist (each item as a runnable `rg`/node/visual QA step)
   - Recommended implementation sequence (data → terminology → relationships → allow-list → disclosure → metadata → nav/CTA → QA)
   - **Unresolved decisions** section (AI Collaborator naming, draft permissions insight, orphan back-links, `lastReviewedAt` policy, Damien House default note, weak CTAs, `projects.shared.js` auto-gen banner, publication channel rendering)

2. **`109studio-implementation-handoff-version-2-1.json`** — Pure JSON containing keyed schema examples:
   - `project` — annotated example Project object with every field, `_meta` describing required / overlay-supplied / optional opt-out per field
   - `insight` — annotated example Insight object plus a `bodyBlocks` map showing each discriminated shape (`paragraph`, `heading`, `callout`, `list`, `quote`)
   - `publishedAllowList` — example `PUBLISHED_INSIGHT_SLUGS` array shape and publish/unpublish diff example
   - `relationships` — paired examples for Project↔Insight slug + id arrays
   - `validation` — machine-readable checklist mirroring the markdown
   - `sequence` — ordered step list

## Method

Read-only inspection of (already partially in context):

- `src/data/projects.shared.js`, `src/data/projects.ts`, `src/data/projects.editorial-overrides.js`
- `src/data/insights.shared.js`, `src/data/insights.ts`, `src/data/insights.editorial-overrides.js`
- `src/data/taxonomy.shared.js`, `src/data/taxonomy.ts`
- `src/seo/metadata.shared.js`, `src/seo/siteMetadata.ts`, `src/seo/schema.shared.js`
- `src/components/projects/ProjectDetailHero.tsx`, `src/components/content/EditorialDisclosure.tsx`, `src/pages/InsightArticle.tsx`, `src/pages/EditorialPolicy.tsx`
- `scripts/lint-editorial.mjs`, `scripts/generate-sitemap.mjs`, `scripts/prerender-seo.mjs`, `package.json`

Schemas derived from the TypeScript interfaces in `projects.ts` / `insights.ts` plus overlay defaults in the override files, so the handoff reflects exactly what the runtime expects.

## Out of scope

- No source edits, no allow-list changes, no SEO regeneration, no copy rewrites.

On approval I will inspect the remaining files, write both deliverables in one pass, and return `<presentation-artifact>` tags for download.
