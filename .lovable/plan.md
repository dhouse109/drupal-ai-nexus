# 109.studio Content Inventory — Version 2

## Goal

Perform a fresh read-only audit of the current codebase (routes, data, taxonomy, disclosure, CTAs, navigation, relationships) and deliver two downloadable artifacts the user can feed into external AI tools to finalize Portfolio Project and Insight Article content.

No source files will be modified. Only files under `/mnt/documents/` will be created.

## Deliverables

Two files written to `/mnt/documents/`:

1. `109studio-content-inventory-version-2.md` — narrative report with the sections below.
2. `109studio-content-inventory-version-2.json` — structured inventory matching the requested JSON shape.

## Audit method

Pure read-only inspection using `code--view`, `rg`, and a small Node script to evaluate the editorial overlays so the report reflects **effective** values, not raw data.

### Files to read

- Routing & layout: `src/App.tsx`, `src/components/Layout.tsx`, `src/components/NavLink.tsx`, `src/components/ScrollToTop.tsx`, footer/header components
- Pages: every file under `src/pages/`
- Project data: `src/data/projects.shared.js`, `src/data/projects.ts`, `src/data/projects.editorial-overrides.js`
- Insight data: `src/data/insights.shared.js`, `src/data/insights.ts`, `src/data/insights.editorial-overrides.js`
- Taxonomy: `src/data/taxonomy.shared.js`, `src/data/taxonomy.ts`
- SEO: `src/seo/metadata.shared.js`, `src/seo/siteMetadata.ts`, `src/seo/schema.shared.js`, `src/seo/siteIdentity.shared.js`
- Content components: `src/components/content/*`, `src/components/projects/*`, `src/components/insights/*`, `src/components/Layout.tsx`, any `ContentCTA`, `RelatedInsights`, `RelatedProjects`, `EditorialDisclosure`, `ChannelBadge`, `StatusBadge`, `ThemeChips`, `PAVBlock`, `ProofArtifactBlock`
- Policy: `src/pages/EditorialPolicy.tsx`
- Supporting: `public/llms.txt`, `public/robots.txt`, `scripts/generate-sitemap.mjs`, `scripts/lint-editorial.mjs`, `docs/prelaunch-content-cleanup.md`

### Derivation steps

1. Enumerate routes from `src/App.tsx` and label data-driven vs hard-coded.
2. Map each route to its surfacing (header, footer, homepage modules, service pages, related-content, SEO route metadata).
3. Run a Node script that imports the shared data plus override modules to produce effective Project and Insight records, then writes intermediate JSON for the report.
4. Cross-reference Project ↔ Insight slug/id links against effective published sets to find broken, hidden, and orphan links.
5. Diff category IDs / labels across `taxonomy.shared.js`, project records, insight overlays, filters, cards. Search for legacy terms (`Alien Coworker`, `Autotron`, `AI Collaborator`).
6. Locate every render site of `EditorialDisclosure`, confirm `/editorial-policy` linkage, and check for redundant or duplicated chips.
7. Locate every CTA component usage (homepage, service pages, project detail, insight detail, contact, footer) and check for duplicate stacks and weak destinations.
8. Apply the voice standard heuristically to surface risky copy in headlines, subheadlines, disclosure notes, and CTA text.

## Report structure (markdown)

1. Executive summary
2. Route & content-surface inventory
3. Data file & effective schema inventory (Projects, Insights, overrides, SEO)
4. Effective published Insights (with raw vs effective status)
5. Project readiness review (per project, with all requested fields, render mode, gaps, risks)
6. Insight readiness review (per insight, with all requested fields, link/render presence, gaps, risks)
7. Relationship rendering review (Project→Insight, Insight→Project, broken, hidden, orphan, minimum additional allow-list additions)
8. Taxonomy & terminology issues + recommended canonical label set
9. Editorial disclosure & policy review
10. CTA & navigation review (incl. footer CTA suppression check)
11. Implementation risks
12. Recommended next steps / next prompts

## JSON shape

Exactly the keys requested:

```json
{
  "routes": [],
  "implementationFiles": [],
  "projectInventory": [],
  "insightInventory": [],
  "effectivePublishedInsights": [],
  "relationshipInventory": [],
  "taxonomyIssues": [],
  "terminologyIssues": [],
  "editorialDisclosureIssues": [],
  "ctaIssues": [],
  "navigationIssues": [],
  "publishReadiness": [],
  "recommendedNextPrompts": []
}
```

Each `projectInventory` entry includes every field listed in the request (id, slug, title, effective titles, status, statusLabel, statusTone, categories, themes, channels, related slugs/ids, relatedOffer, CTA fields, proofArtifact summary, aiAssisted effective, disclosure label/note, reviewer, lastReviewedAt, disclosure render mode, publishable-as-is, missing/weak fields, implementation/voice/overclaiming risks).

Each `insightInventory` entry includes slug, title, rawStatus, effectiveStatus, featured, categoryId, raw + effective category labels, description, keyTakeaway, readTime, publishedDate, themes, channels, related project slugs/ids, aiAssisted effective, disclosure label/note, reviewer, lastReviewedAt, linkedFromProject, appearsInRelatedModules, hasSeoMetadata, publishableAsIs, contentGaps, voiceRisks, overclaimingRisks.

## Out of scope

- No source file edits.
- No dependency installs, builds, or deploys.
- No design changes.

On approval I will execute the audit and produce both files in a single pass, then return `<presentation-artifact>` tags for download.
