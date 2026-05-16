# Implementation Handoff Map — Version 2

## Goal

Produce a single read-only handoff that tells the user exactly what structured content to bring back so a future Project / Insight update is safe and predictable. No source files modified.

## Deliverable

One file written to `/mnt/documents/`:

- `109studio-implementation-handoff-version-2.md` — markdown handoff containing all sections below, with fenced JSON/JS code blocks for every schema example, plus an "Unresolved Decisions" section at the end.

(Per the request — a single downloadable file — schemas and JSON examples live inline as fenced blocks. If you'd prefer a separate `.json` companion, say so and I'll split.)

## Method

Read-only inspection of:

- `src/data/projects.shared.js`, `src/data/projects.ts`, `src/data/projects.editorial-overrides.js`
- `src/data/insights.shared.js`, `src/data/insights.ts`, `src/data/insights.editorial-overrides.js`
- `src/data/taxonomy.shared.js`, `src/data/taxonomy.ts`
- `src/seo/metadata.shared.js`, `src/seo/siteMetadata.ts`, `src/seo/schema.shared.js`
- `src/components/projects/ProjectDetailHero.tsx`, `src/components/content/EditorialDisclosure.tsx`, `src/pages/InsightArticle.tsx`, `src/pages/EditorialPolicy.tsx`
- `scripts/lint-editorial.mjs`, `scripts/generate-sitemap.mjs`, `scripts/prerender-seo.mjs`, `package.json` (for build/lint scripts)

Then assemble the handoff. The Project/Insight schemas are derived from the TypeScript interfaces in `projects.ts` / `insights.ts` plus the overlay defaults in the override files, so the handoff reflects exactly what the runtime expects.

## Markdown structure

1. **How the data flows** — one diagram showing `*.shared.js` → `*.editorial-overrides.js` → `*.ts` → components/SEO, and where `PUBLISHED_INSIGHT_SLUGS` slots in.
2. **Files likely involved** — table with: path · purpose · content type · expected fields · category (source data / type wrapper / editorial override / rendered component / SEO metadata / generated output / build script) · manual-edit vs generated · risks of direct edit.
3. **Project update schema** — annotated JS object with every field, marking which are required, which are overlay-supplied (`aiAssisted`, `aiDisclosureLabel`, `aiDisclosureNote`, `reviewedBy`), and which are optional opt-outs.
4. **Insight update schema** — annotated JS object including the discriminated `body` block shapes (`paragraph`, `heading`, `callout`, `list`, `quote`) and how raw `status` interacts with the allow-list.
5. **Published allow-list update schema** — exact `PUBLISHED_INSIGHT_SLUGS` array shape, publish/unpublish recipe, SEO/relationship impact callouts.
6. **Relationship update schema** — bidirectional examples for slug + id arrays, plus a note on reverse lookups (`getProjectsLinkingToInsightSlug`, footer/related modules).
7. **Validation checklist** — every item from the request, each phrased as a runnable check (rg pattern, node one-liner, or visual QA step).
8. **Recommended implementation sequence** — ordered steps with rationale, matching the categories the user listed (data → terminology → relationships → allow-list → disclosure → metadata → nav/CTA → QA).
9. **Unresolved decisions** — explicit list (e.g., keep vs rename "AI Collaborator" project; promote vs remove `managing-the-ai-collaborator-permissions-review-control`; whether to set `lastReviewedAt`; whether to drop "Damien House" from disclosure default; whether to add back-links to the two orphan insights).

## Out of scope

- No source edits, no allow-list changes, no SEO regeneration.
- No copy rewrites — schemas only.

On approval I will execute the inspection script and write the markdown file in one pass, returning a `<presentation-artifact>` for download.
