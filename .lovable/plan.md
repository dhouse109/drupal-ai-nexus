# Content Readiness Review — Version 2

## Goal

Produce a readiness verdict per Project and per Insight based on **effective** rendered data (raw + overrides + published allow-list), plus the lists, recommendations, and field-fill checklist the request enumerates. Deliver as two downloadable files. No source files modified.

## Deliverables (written to `/mnt/documents/`)

1. `109studio-content-readiness-version-2.md` — narrative review
2. `109studio-content-readiness-version-2.json` — structured publish queue

## Method

Reuse the inventory script from the prior audit to compute effective project + insight records, then layer readiness judgments on top. Reads only — `code--view`, `rg`, and a Node script that imports `projects.shared.js` + `projects.editorial-overrides.js` and `insights.shared.js` + `insights.editorial-overrides.js`.

### Inputs

- `src/data/projects.shared.js`, `src/data/projects.editorial-overrides.js`
- `src/data/insights.shared.js`, `src/data/insights.editorial-overrides.js` (incl. `PUBLISHED_INSIGHT_SLUGS`)
- `src/data/taxonomy.shared.js`
- `src/components/projects/ProjectDetailHero.tsx` (disclosure render rule), `src/components/content/EditorialDisclosure.tsx`
- `src/pages/InsightArticle.tsx`, `src/pages/ProjectDetail.tsx` (to confirm render points)
- `src/components/Layout.tsx` (CTA suppression context)

### Per-Project rubric → classification

For each of the 10 projects, evaluate:
- **Status honesty**: status + statusLabel match the actual nature (abstracted past work vs planned proof vs lab vs ecosystem) and the hero renders the right disclosure.
- **Proof artifact concreteness**: `detail.proofArtifact` is specific (named artifact, methodology, or output), not a vague claim.
- **Related Insight that renders**: at least one entry in `relatedInsightSlugs` is in the effective published set.
- **CTA appropriateness**: text + primary/secondary hrefs route to a relevant service/page, not a generic fallback.
- **AI-assisted disclosure**: `aiAssisted` value + render mode (block for current statuses) is appropriate; reviewer + note are correct.
- **Voice risks**: scan headline, subheadline, cardSummary, problem, approach, resultValue, proofArtifact, CTA text, and relatedInsightsIntro for AI-marketing tone, overclaiming, slogans, "ship/shipping", and legacy "AI Collaborator" usage.

Output one of: `ready` / `needs light revision` / `needs evidence` / `hold`, with a 1–3 sentence rationale and a per-criterion checklist.

### Per-Insight rubric → classification

For each of the 16 insights, evaluate:
- **Raw vs effective status** and **allow-list membership**.
- **Role**: supports a Project, supports a service page (`/services`, `/architecture-audit`, `/applied-ai`, `/drupal-ai`, `/offerings`, `/ai-in-practice`), or standalone POV.
- **Related projects render**: every entry in `relatedProjectSlugs` resolves to an existing project.
- **Body completeness**: block count + presence of intro, keyTakeaway, body sections.
- **AI-assisted disclosure**: overlay-applied label + note are correct; reviewer present.
- **Voice risks**: title, description, intro, body samples, and any embedded CTA.

Output one of: `ready to publish` / `already effectively published` / `needs light revision` / `needs article expansion` / `hold`, with rationale.

### Cross-cutting lists

- `effectivePublishedInsights` (11 slugs known from inventory)
- `draftOnlyInsights` (5 slugs)
- **Top 5 Insights to feature/promote** — pick from effectively published, balanced across categories, weighted toward Project linkage and CTA leverage.
- **Top 5 Projects to feature/promote** — weighted toward concreteness, evidence, and category coverage.
- **Weak relationships to remove** — Project↔Insight links that are thematically thin or point to drafts.
- **Missing relationships to add** — orphans (`applied-ai-starts-with-the-workflow`, `modernization-architecture-and-delivery`) + suggested back-links from projects.
- **Category labels to normalize** — single canonical set across taxonomy, project records, insight overlays, filters.
- **CTA simplifications** — tighten weak or generic CTAs.
- **Editorial disclosure adjustments** — drop "Damien House" from default note (identity rule), confirm `/editorial-policy` linkage.
- **Exact data fields to fill before implementation** — itemized list per Project / per Insight (e.g., `lastReviewedAt`, missing themes, missing relatedProjectSlugs, weak CTA href).

## JSON shape

```json
{
  "projects": [{ "slug": "...", "classification": "...", "rationale": "...",
    "statusHonesty": "ok|weak", "proofArtifactConcrete": true,
    "hasRenderingRelatedInsight": true, "ctaAppropriate": "ok|weak",
    "disclosureAppropriate": true, "voiceRisks": [], "fieldsToFill": [] }],
  "insights": [{ "slug": "...", "rawStatus": "...", "effectiveStatus": "...",
    "inAllowList": true, "classification": "...", "rationale": "...",
    "supports": "project|service|standalone", "relatedProjectsRender": true,
    "shouldFeature": false, "disclosureAppropriate": true,
    "voiceRisks": [], "fieldsToFill": [] }],
  "effectivePublishedInsights": [],
  "draftOnlyInsights": [],
  "recommendedTop5Insights": [],
  "recommendedTop5Projects": [],
  "weakRelationshipsToRemove": [],
  "missingRelationshipsToAdd": [],
  "categoryLabelsToNormalize": [],
  "ctaSimplifications": [],
  "editorialDisclosureAdjustments": [],
  "fieldsToFillBeforeImplementation": []
}
```

## Out of scope

- No source file edits, no overlay/allow-list changes, no copy rewrites.
- Recommendations only — implementation comes in a follow-up prompt.

On approval I will execute the script + write both files in a single pass and return `<presentation-artifact>` tags for download.
