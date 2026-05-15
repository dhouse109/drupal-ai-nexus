## Goal

Replace all user-facing references to "Alien Coworker" and "Autotron" with "AI Collaborator" across data, slugs, copy, themes, and generated SEO output. No other behavior changes.

## Scope of references found

Search results (case-insensitive) returned matches in only two source files plus generated SEO artifacts. Nothing in `docs/`, `public/`, `scripts/`, or QA overrides.

### `src/data/insights.shared.js`

- L221 `slug: "managing-the-alien-coworker-ai-permissions-review-control"` → `managing-the-ai-collaborator-permissions-review-control`
- L224 title "Managing the Alien Coworker: AI Permissions, Review, and Control" → "Managing the AI Collaborator: Permissions, Review, and Control"
- L296 body paragraph: "The Autotron content audit project…" → "The AI Collaborator content audit project…"
- L300 `relatedProjectSlugs: ["ai-content-audit-system-autotron"]` → `["ai-content-audit-system-ai-collaborator"]`
- L323 body paragraph: "…Context Control Center work and the Autotron content audit pattern." → "…Context Control Center work and the AI Collaborator content audit pattern."
- L327 `relatedProjectSlugs: [..., "ai-content-audit-system-autotron"]` → `[..., "ai-content-audit-system-ai-collaborator"]`

### `src/data/projects.shared.js`

- L308 relatedInsightSlugs entry → new insight slug
- L325 relatedInsightsIntro: "permissions and alien-coworker articles" → "permissions and AI Collaborator articles"
- L339 project slug → `ai-content-audit-system-ai-collaborator`
- L340 project title "AI Content Audit System / Autotron" → "AI Content Audit System / AI Collaborator"
- L351 themes entry "Autotron" → "AI Collaborator"
- L374 cardTitle "AI Content Audit System / Autotron" → "AI Content Audit System / AI Collaborator"
- L420 relatedInsightSlugs entry → new insight slug
- L435 relatedInsightsIntro: "alien-coworker article" → "AI Collaborator article"

### Generated SEO artifacts

After data updates, regenerate so sitemap and prerender HTML reflect new slugs:

- `node scripts/generate-sitemap.mjs`
- `node scripts/prerender-seo.mjs`
- `node scripts/prerender-qa-insights.mjs` (the renamed insight is still `status: "draft"` and not in `QA_PUBLISHED_INSIGHT_SLUGS`, so no QA route exists for it; the renamed project route is auto-derived from data)

`src/data/insights.qa-overrides.js` does not list the alien-coworker slug, so no override edit is needed.

`src/seo/metadata.shared.js` derives project/insight metadata from the data files at runtime — no manual edit needed.

## Verification

1. `grep -rni "alien\|autotron" src/ docs/ public/ scripts/ supabase/ .lovable/` returns no matches.
2. `npm run lint:editorial` (scripts/lint-editorial.mjs) passes.
3. Build passes.
4. Spot-check `/portfolio/ai-content-audit-system-ai-collaborator` route resolves and related-insight links navigate correctly.

## Implementation order

1. Edit `src/data/insights.shared.js` (title, slug, body copy, related project slugs).
2. Edit `src/data/projects.shared.js` (slug, title, theme, cardTitle, related insight slugs, intro copy).
3. Regenerate sitemap and prerender output.
4. Run repo-wide grep + editorial lint + build to confirm clean.
