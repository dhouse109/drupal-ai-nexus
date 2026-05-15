## Refine AI-assisted editorial disclosure

### 1. InsightArticle byline (src/pages/InsightArticle.tsx, line 150)
Change byline back to:
`By {authorName} · {authorRole} · {readTime} · {publishedDate}`
Leave `<EditorialDisclosure block showReviewer={false}>` below as the sole place that explains AI involvement.

### 2. EditorialPolicy hero copy (src/pages/EditorialPolicy.tsx)
Replace hero `<motion.p>` body with:
> "Some published pages on 109.studio are developed with AI assistance from Damien House's notes, research, prompts, and source materials. Damien reviews and edits published work so it reflects 109.studio's actual judgment, voice, and point of view."

### 3. EditorialPolicy section copy
- In **"How AI assistance is disclosed"**, replace the second paragraph ("If a page is published without a human review pass…") with:
  > "Published pages that carry this label have been reviewed before publication. Drafts, experiments, or unreviewed notes should be labeled separately."
- In **"How we label projects"**, replace the trailing "Most project pages…" paragraph with:
  > "Some project pages are developed with AI-assisted drafting from Damien's research, prompts, and source materials. Pages that use this workflow carry the AI-assisted chip; pages written without AI assistance omit it."

### 4. Block disclosure on Project detail pages
In `src/components/projects/ProjectDetailHero.tsx`:
- Keep the inline chip in the metadata row.
- Add a block-variant `<EditorialDisclosure>` after the subheadline and before the themes/channels row, gated by `project.status` being one of:
  - `abstracted-past-work`
  - `planned-service-proof`
  - `lab`
  - `sample-only`
  - `internal-tool`
  - `ecosystem-contribution`
- Do NOT branch on `statusTone` (abstracted-past-work and real-past-work can share a tone).
- Pass `showReviewer={false}` to avoid the duplicate "Reviewed by Damien House" line.
- Helper: `const SHOW_BLOCK_DISCLOSURE_STATUSES = new Set([...])` at module scope; render block disclosure only when `aiAssisted` is true AND status is in the set.

Confirm exact status string identifiers in `src/data/projects.ts` before wiring (the IDs above are the contract).

### 5. Rename QA override files to editorial overlay

Files:
- `src/data/insights.qa-overrides.js` → `src/data/insights.editorial-overrides.js`
- `src/data/projects.qa-overrides.js` → `src/data/projects.editorial-overrides.js`

Renamed exports:
- `applyInsightQaOverrides` → `applyInsightEditorialOverrides`
- `applyProjectQaOverrides` → `applyProjectEditorialOverrides`
- `QA_PUBLISHED_INSIGHT_SLUGS` → `PUBLISHED_INSIGHT_SLUGS`

Update **every** call site, including:
- `src/data/insights.ts`
- `src/data/projects.ts`
- `src/seo/metadata.shared.js`
- Any other importer (verify via `rg "qa-overrides"` and `rg "applyInsightQaOverrides|applyProjectQaOverrides|QA_PUBLISHED_INSIGHT_SLUGS"`).

Update file header comments to describe each file as the canonical editorial overlay (defaults + publish allow-list), not a temporary QA shim. Add a brief note at the top of `docs/prelaunch-content-cleanup.md` pointing to the new filenames.

No data shape changes; canonical content data stays the source of truth and per-record fields still win over defaults.

### Verification
- `/insights/why-your-ai-prototype-is-not-a-product` shows `By Damien House · 109.studio · …` plus the AI-assisted block (chip + sentence + Editorial policy link), no second "Reviewed by" line.
- `/editorial-policy` reflects the new hero, disclosure, and labels copy.
- A `lab` or `sample-only` project detail page renders the inline chip in the meta row plus the block disclosure below the subheadline. A `real-past-work` project shows only the inline chip.
- `rg "qa-overrides"` returns no matches; site builds.
