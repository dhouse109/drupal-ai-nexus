# Projects & Insights — Phases 0–2 Implementation Plan

Source dataset: `109studio-content-treatments-2.json` (10 Projects, 10 Insights).
Scope: Phases 0–2 from the approved plan. Pause for review before Phase 3+.

After implementation, a summary file (`/mnt/documents/projects-insights-implementation-summary.md`) will list files changed, routes added, components added, data structures added, assumptions, and items to review manually.

---

## Scope this pass

In:
- Refactor: extract `InsightCard` and shared `ContentCTA` (no visible change).
- Taxonomy module (categories, statuses, channels, label maps).
- Projects data layer (10 projects from dataset).
- Projects index `/portfolio` (rebuild stub) with 4-category `CategoryFilter` (URL query-param driven).
- Project detail `/portfolio/:slug` with hero, Problem/Approach/Value, Proof Artifact, Related Insights, CTA.
- Sitemap + per-slug SEO metadata + prerender enumeration for project pages.
- Navbar surfaces "Portfolio" link.

Out (deferred to Phase 3+):
- Insight category filters.
- `RelatedProjects` on insight detail pages.
- Backfilling `relatedProjectIds` / themes on existing insights.
- Footer Work/Writing columns.
- Service-page cross-links and home Portfolio teaser.
- Editorial-guardrail lint script.

---

## Key dataset alignment

The dataset's insight slugs do not match the existing `src/data/insights.shared.js` slugs. Therefore:
- Project → `relatedInsightIds` will be **resolved through the dataset's insight slugs**, but we will only render an insight card if a matching slug exists in the current `insights.shared.js`. Missing matches are silently filtered (logged in dev).
- A note will be added to the summary listing unmatched IDs so insight backfill in Phase 3 has a clear todo list.

---

## Phase 0 — Refactor prep (no visible change)

1. `src/components/insights/InsightCard.tsx` — extract from `src/pages/Insights.tsx`. Use existing markup verbatim. Update `Insights.tsx` to import it.
2. `src/components/content/ContentCTA.tsx` — extract the "Related next move" block from `InsightArticle.tsx` (lines ~178–207). Props: `eyebrow`, `headline`, `body`, `primary {label, to}`, `secondary {label, to}`. Update `InsightArticle.tsx` to use it.
3. `src/data/taxonomy.shared.js` + `src/data/taxonomy.ts` — exports:
   - `PROJECT_CATEGORIES` (4 entries: id, label, shortLabel)
   - `PROJECT_STATUSES` (id, label, tone) — `tone` ∈ `neutral | accent | muted` to drive `StatusBadge`
   - `PUBLICATION_CHANNELS` (`109.studio`, `damien.house`)

## Phase 1 — Projects data + index

4. `src/data/projects.shared.js` — 10 projects, transformed from the dataset to a flat shape:
   ```
   { id, slug, title, status, statusLabel, primaryCategory, secondaryCategories,
     themes, publicationChannels, relatedOffer, relatedInsightSlugs[],
     detail: { headline, subheadline, cardSummary, problem, approach,
               resultValue, proofArtifact, relatedInsightsIntro,
               cta: { text, primaryHref, secondaryHref } },
     editorialGuardrail, confidence, overclaimingRisk, featured }
   ```
   - `relatedInsightSlugs`: derived by mapping each `INS-xxx` to the dataset's slug (NOT an existing site slug). The component layer reconciles to existing slugs.
   - `cta.primaryHref` / `secondaryHref`: parsed from `ctaDestinationRecommendation` heuristically; default to `/contact` + `/services` if parsing is ambiguous.
   - `featured`: PROJ-001 only (highest-confidence flagship per dataset framing).
5. `src/data/projects.ts` — `Project` type, plus `getAllProjects`, `getProjectBySlug`, `getProjectsByCategory`, `getFeaturedProject`, `getProjectsLinkingToInsightSlug(slug)`.
6. Components:
   - `src/components/content/StatusBadge.tsx` — small mono pill, border-only, no fill.
   - `src/components/content/ChannelBadge.tsx` — same shape, distinct accent. **No external link rendered** even when channel includes `damien.house` (per gate decision).
   - `src/components/content/ThemeChips.tsx` — border-only chips, max N visible with `+X more`.
   - `src/components/content/CategoryFilter.tsx` — horizontal mono pill row, active state = `text-primary` + bottom border. Uses `useSearchParams` so deep links work.
   - `src/components/projects/ProjectCard.tsx` — title, status badge, primary category eyebrow, summary, themes (max 3). Interactive: border color shift on hover only.
   - `src/components/projects/ProjectGrid.tsx` — responsive grid + empty state.
7. `src/pages/Portfolio.tsx` — replace stub:
   - Hero (existing pattern with `grid-bg`, motion entrance).
   - Optional featured project card (large variant of `ProjectCard`).
   - `CategoryFilter`.
   - `ProjectGrid`.
   - `ContentCTA` at the bottom (primary `/contact`, secondary `/services`).
8. `src/components/Layout.tsx` — add "Portfolio" link in primary nav (already in nav order per plan).
9. `scripts/generate-sitemap.mjs` — `/portfolio` already implicit if added to `routeMetadata`; ensure it's included with sensible changefreq/priority.

## Phase 2 — Project detail

10. `src/App.tsx` — register `/portfolio/:slug` inside the `<Layout />` block, before `*`.
11. Components:
    - `src/components/projects/ProjectDetailHero.tsx` — eyebrow (primary category) + `StatusBadge` + headline + subheadline + meta row (themes + channel badge). Reuses motion pattern from `InsightArticle`.
    - `src/components/projects/PAVBlock.tsx` — three sections (Problem, Approach, Value), each with mono section label + body in a `bg-surface` card.
    - `src/components/projects/ProofArtifactBlock.tsx` — single `bg-surface` callout with eyebrow "Proof artifact".
    - `src/components/content/RelatedInsights.tsx` — grid of `InsightCard`. Resolves project's `relatedInsightSlugs` against current `insights.shared.js`, silently drops misses. Lead copy = `relatedInsightsIntro`.
12. `src/pages/ProjectDetail.tsx` — assembles hero → PAV → proof → related insights → `ContentCTA`. 404 fallback = `<Navigate to="/portfolio" replace />` like `InsightArticle.tsx`. Optional small footer note when `publicationChannels` includes `damien.house` (badge only, no link).
13. SEO:
    - `src/seo/metadata.shared.js`: add a per-slug resolver branch for `/portfolio/:slug` that synthesizes title + description from `detail.headline` + `cardSummary`.
    - `src/seo/schema.shared.js`: add `createProjectSchema` (`CreativeWork` JSON-LD).
14. `scripts/prerender-seo.mjs`: enumerate project slugs from `projects.shared.js` and render each `/portfolio/:slug`.
15. `scripts/generate-sitemap.mjs`: enumerate project slugs and include them with `changefreq: monthly, priority: 0.7`.

---

## Routing additions

| Route | Source | Notes |
|---|---|---|
| `/portfolio` | replaces stub | Filter via `?category=...` |
| `/portfolio/:slug` | new | 10 slugs from dataset |

## Components added (final list)

`InsightCard`, `ContentCTA`, `StatusBadge`, `ChannelBadge`, `ThemeChips`, `CategoryFilter`, `ProjectCard`, `ProjectGrid`, `ProjectDetailHero`, `PAVBlock`, `ProofArtifactBlock`, `RelatedInsights`.

## Data files added

`src/data/projects.shared.js`, `src/data/projects.ts`, `src/data/taxonomy.shared.js`, `src/data/taxonomy.ts`.

---

## Design rules (enforced)

- Semantic tokens only (`bg-surface`, `border-border`, `text-primary`, `text-text-dim`).
- Source Code Pro mono uppercase eyebrows, `tracking-[0.3em]`.
- `grid-bg` overlay on every detail hero.
- No hover background shift on informational cards. Interactive cards animate border color only.
- Framer Motion entrance pattern reused from `InsightArticle.tsx`.
- Voice: never use "ship/shipping" — "release software" instead. Use "109" for studio identity.

## Editorial labeling rules (enforced in UI)

- Every project card and project hero shows `StatusBadge` with `statusLabelRecommendation`.
- Planned / sample / lab / abstracted projects are never displayed without their badge.
- The literal `editorialGuardrail` string is stored in data and surfaced as an HTML comment in the prerendered detail page (so it shows up in source review without affecting visible UI). This is a low-cost CI hook for later.

## Risks and mitigations

- **Insight slug mismatch** — dataset INS-* slugs differ from existing site insight slugs. Mitigation: `RelatedInsights` filters silently against current data; mismatches logged in summary file for backfill in Phase 3.
- **CTA destination parsing** — `ctaDestinationRecommendation` is free text ("Primary: /contact. Secondary: /services."). Mitigation: simple regex; fall back to `/contact` + `/services` defaults.
- **Prerender + sitemap drift** — both scripts must enumerate the new slugs. Mitigation: both import from the same `projects.shared.js`.
- **Layout nav density** — adding "Portfolio" pushes nav toward 7 items. Acceptable per plan; no further nav changes this pass.

## Pause point

After Phase 2, stop. Do not start Phase 3 (insight filters, RelatedProjects on insights, footer columns, backfill) until you review the live `/portfolio` and `/portfolio/:slug` pages and the summary file.

## Deliverable

`/mnt/documents/projects-insights-implementation-summary.md` listing:
- files changed / added
- routes added
- components added
- data structures added
- assumptions made (CTA parsing, featured selection, channel-link policy, slug mismatch handling)
- items to review manually (insight slug backfill list, copy approval per project, status-label tone choices)