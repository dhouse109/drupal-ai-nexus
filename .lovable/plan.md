# Phase 5 — Content Completion & Deferred Items

Picks up from the Phases 3–4 summary. Goal: turn the 10 draft insights into publishable articles, run a deliberate copy review pass on the 10 projects, and close out the two deferred items (home portfolio teaser, editorial-guardrail lint).

Pause point preserved: no schema changes, no taxonomy changes, no new routes.

---

## 1. Insight bodies (the big one)

The 10 new insights from `109studio-content-treatments-2.json` currently live in `src/data/insights.shared.js` as drafts with `intro` only and an empty `body: []`. They cannot be promoted to `published` until each has a real body.

Approach:

1. **Source of truth for body content** — confirm before writing. Three options:
   - (A) Draft each body from the dataset's `intro`, `keyTakeaway`, themes, and category alone. Fast, but content is essentially expanded from one paragraph.
   - (B) You provide a short brief (3–6 bullet points) per insight, I expand into the `InsightBlock[]` structure. Highest quality.
   - (C) You paste a rough draft per insight, I structure and edit it into blocks. Closest to your voice.
   
   Default if unspecified: **(B)**, asked one insight at a time so you can steer voice early.

2. **Structure per article** — reuse the existing `InsightBlock` union (`paragraph`, `heading`, `callout`, `list`, `quote`). Target shape:
   - 1 intro paragraph (already present)
   - 2–4 `heading` + `paragraph` sections
   - 1 `callout` (guidance/insight) tied to `keyTakeaway`
   - Optional `list` where the topic is enumerable
   - 1 closing paragraph that bridges to the project or service the insight supports

3. **Promote to published** — only after body is written and you approve. Flip `status: "draft"` → `"published"` per insight, in batches as they're approved (not all at once).

4. **Backfill `relatedProjectSlugs`** — for each newly published insight, set the explicit forward link to any project whose `relatedInsightSlugs` already includes it. The reverse-lookup in `RelatedProjects` covers this functionally, but the explicit field makes the relationship visible in the data file and lets us order related projects deliberately.

5. **Editorial guardrails enforced while writing**:
   - Never use "ship" / "shipping" — use "release software".
   - Use "109" for studio identity, never "Damien" outside bio context.
   - No claims that abstracted/sample/lab work was delivered to a client.
   - Match the existing 6 published articles' tone (plainspoken, technical, direct).

## 2. Per-project copy review

The 10 projects in `src/data/projects.shared.js` were generated from the dataset with minimal editorial intervention. This pass is a deliberate review, not a rewrite.

Per project, check and adjust:

1. **`detail.headline` and `subheadline`** — read aloud. Cut filler. Confirm headline is a claim, not a label.
2. **`detail.cardSummary`** — under ~160 chars, ends with a period, no marketing adjectives.
3. **`detail.problem` / `approach` / `resultValue`** — confirm:
   - `problem` describes a real constraint, not a generic pain point.
   - `approach` describes what 109 actually did or would do, not a methodology lecture.
   - `resultValue` is specific. For `abstracted-past-work` and `planned-service-proof`, confirm phrasing matches the status (no implied client delivery for planned items).
4. **`detail.proofArtifact`** — confirm the artifact named actually exists or is realistic to produce. Flag anything aspirational.
5. **`detail.cta`** — confirm `primaryHref` and `secondaryHref` point to the right destinations. The current values were parsed heuristically from `ctaDestinationRecommendation`; PROJ-005 specifically was flagged for review against `/applied-ai`.
6. **`statusLabel` and `statusTone`** — confirm "Planned Service Proof" and "Lab" should keep the `accent` tone, or step them down to `neutral`/`muted`.
7. **`editorialGuardrail`** — read the stored string for each project. If any project's actual rendered copy violates its own guardrail, fix the copy (not the guardrail).

Output of this pass: a single markdown review file at `/mnt/documents/projects-copy-review.md` with one section per project, listing what was changed and what was left. Edits applied directly to `projects.shared.js`.

## 3. Deferred items

### 3a. Home page portfolio teaser
- Add a new section to `src/pages/Index.tsx` between the existing services/lab sections (exact placement TBD after viewing the current order).
- Renders the `featured` project (PROJ-001) as a single large card + a "View all work" link to `/portfolio`.
- Reuses `ProjectCard` with a `variant="featured"` prop (small additive change to `ProjectCard`, no new component file).
- Respects existing home-page rhythm: section uses `grid-bg`, mono eyebrow, motion entrance pattern from neighboring sections.

### 3b. Editorial-guardrail lint script
- New file: `scripts/lint-editorial.mjs`.
- Reads `src/data/projects.shared.js` and `src/data/insights.shared.js`.
- Fails (exit 1) on:
  - Any occurrence of "ship", "shipping", "shipped" outside an explicit allowlist.
  - Any occurrence of "Damien" inside project/insight body or detail copy (allowed only in `src/pages/About.tsx`, which the script does not scan).
  - Any project whose `status` is `planned-service-proof`, `sample-only`, or `lab` whose `detail.resultValue` contains delivery-implying verbs (`delivered`, `shipped`, `launched for`, `rolled out to`).
- Wired as a manual `node scripts/lint-editorial.mjs` step. Not added to the build pipeline this pass — surfaced in the summary so you can decide whether to gate CI on it later.
- Output is a list of violations with file + field path, no autofix.

## 4. SEO / build hygiene

- After insights are promoted to `published`, re-run `scripts/generate-sitemap.mjs` and `scripts/prerender-seo.mjs` to confirm the 10 new insight slugs are enumerated.
- Confirm per-insight metadata in `src/seo/metadata.shared.js` has entries for the newly published slugs. Add any missing ones using the existing pattern.

## 5. Sequence

```text
1. Confirm content sourcing for insight bodies (A/B/C above).
2. Project copy review pass — applied to projects.shared.js, review file written.
3. Insight bodies — drafted in batches of 2–3, promoted to published as approved.
4. Backfill relatedProjectSlugs on each newly published insight.
5. Home portfolio teaser.
6. Editorial-guardrail lint script.
7. Re-run sitemap + prerender. Confirm route count grows from 22 by however many insights were promoted.
8. Write /mnt/documents/projects-insights-phase-5-summary.md.
```

## 6. Pause / review gates

- **Gate A (before step 3):** you approve the project copy review file.
- **Gate B (after each insight batch):** you approve the bodies before they flip to `published`.
- **Gate C (before step 5):** you confirm the home page should get the teaser at all (some sites prefer to keep the home page lean).

## 7. Out of scope this pass

- Any new routes, new categories, new statuses, or new components beyond `RelatedWorkBlock` reuse and the optional `ProjectCard` `variant="featured"`.
- Adding the lint script to CI.
- Visual redesign of any existing page.
- Touching `damien.house` external links (policy unchanged: hardcoded absolute, `target="_blank"`, `rel="noopener"`, only when destination exists).

## 8. Deliverables

- Edits to `src/data/insights.shared.js`, `src/data/projects.shared.js`, `src/pages/Index.tsx`.
- New file: `scripts/lint-editorial.mjs`.
- Possibly small additive edit to `src/components/projects/ProjectCard.tsx` for the featured variant.
- `/mnt/documents/projects-copy-review.md`
- `/mnt/documents/projects-insights-phase-5-summary.md`

## 9. One question to answer before I start

Which content-sourcing mode do you want for the insight bodies — A (I draft from the dataset alone), B (you give me 3–6 bullets per insight, I expand), or C (you paste rough drafts, I structure and edit)?
