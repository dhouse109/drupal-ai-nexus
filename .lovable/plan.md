## Add AI-assisted editorial disclosure pattern (revised)

### 1. Data model: types + seeded values

**Type updates (TypeScript):**
- `src/data/insights.ts` — add optional `authorName`, `authorRole`, `reviewedBy`, `aiAssisted: boolean`, `aiDisclosureLabel`, `aiDisclosureNote`, `lastReviewedAt` to `InsightArticle`.
- `src/data/projects.ts` — add optional `aiAssisted: boolean`, `aiDisclosureLabel`, `aiDisclosureNote`, `reviewedBy`, `lastReviewedAt` to `Project`.

**Actually seed data (so the disclosure renders):**
- Extend `src/data/insights.qa-overrides.js`. Currently it sets `category` + `status`. Add a default editorial overlay applied to every published insight inside `applyInsightQaOverrides`:
  ```
  const DEFAULT_EDITORIAL = {
    authorName: "Damien House",
    authorRole: "109.studio",
    aiAssisted: true,
    aiDisclosureLabel: "AI-assisted · Human-reviewed",
    aiDisclosureNote:
      "Drafted with AI assistance from Damien House's notes and source materials. Reviewed and edited before publication.",
    reviewedBy: "Damien House",
  };
  ```
  Merge as defaults (article fields win if already present), and only apply when the resolved status is `published`. This guarantees every currently-published insight shows the disclosure without touching the auto-generated `insights.shared.js`.
- Projects: do **not** apply a blanket override. Disclosure only renders when `aiAssisted === true` is explicitly set on a project. No project data is changed in this pass; project detail pages will simply omit the disclosure until a project is later marked `aiAssisted: true`. (Documented in the editorial-policy page.)

### 2. Reusable component: `EditorialDisclosure`

`src/components/content/EditorialDisclosure.tsx`

```
interface Props {
  aiAssisted?: boolean;
  label?: string;
  note?: string;
  reviewedBy?: string;
  lastReviewedAt?: string;
  variant?: "inline" | "block";
  className?: string;
}
```

- Returns `null` unless `aiAssisted === true`.
- Resolved label defaults to `"AI-assisted · Human-reviewed"`; resolved note defaults to the standard sentence above.
- Voice rule: only use `Human-reviewed` phrasing because every seeded entry is reviewed before publication. If a future entry is unreviewed, callers must pass an explicit `label` (e.g. `AI-assisted · Draft`).
- `inline` variant: small bordered chip styled like `StatusBadge` (border, mono, uppercase, tracking-[0.25em], `text-text-dim`). Carries `aria-label={\`${label}. ${note}\`}` plus a visually-hidden `<span class="sr-only">{note}</span>` so the note is in the accessibility tree, not just a `title` attribute. Optional `title` mirrors the note for sighted hover.
- `block` variant: same chip, then a visible `text-xs text-muted-foreground` paragraph showing the note, plus an optional mono uppercase line `Reviewed by {reviewedBy} · Last reviewed {lastReviewedAt}` when those fields are present. No background color, no warning iconography.

### 3. Wire into pages

- `src/pages/InsightArticle.tsx` — inside the hero meta block (where read time / date already live), add a byline row `By {authorName ?? "Damien House"} · {authorRole ?? "109.studio"}` and render `<EditorialDisclosure variant="block" ... />` directly under it. Field reads from the article object.
- `src/components/projects/ProjectDetailHero.tsx` — append `<EditorialDisclosure variant="inline" ... />` to the existing badge row (category + status). Renders only when the project has `aiAssisted: true`; otherwise the row is unchanged.
- No changes to insight cards or project cards — disclosure is detail-page only.

### 4. `/editorial-policy` page

`src/pages/EditorialPolicy.tsx` — full route, mirroring `InsightArticle` styling: grid-bg hero, mono headings, `border-b border-border` sections, `max-w-3xl` body. Sections:

1. Hero — eyebrow `Editorial policy`, H1 `How 109 uses AI in published work`.
2. **What we use AI for** — list: research synthesis, drafting, summarization, review support.
3. **Who is accountable** — Damien House / 109.studio remains responsible for editorial judgment and final publication; AI assistance never replaces author attribution. Author bylines are never set to "AI".
4. **How we label projects** — list of project status taxonomy (real client work, abstracted past-work, planned, internal, lab, sample-only) and a note that the AI-assistance chip only appears when a project is explicitly marked `aiAssisted`.
5. **How AI assistance is disclosed** — describe the inline/block disclosure pattern and what `AI-assisted · Human-reviewed` means.
6. Reuse `ContentCTA` to send to `/contact`.

Register route in `src/App.tsx` (`<Route path="/editorial-policy" element={<EditorialPolicy />} />`).

### 5. SEO metadata (shared)

In `src/seo/metadata.shared.js`, add an entry to `routeMetadata`:

```
"/editorial-policy": page({
  title: "Editorial policy | 109.studio",
  description:
    "How 109.studio uses AI for research, drafting, and review while keeping human editorial responsibility.",
  path: "/editorial-policy",
  pageType: "WebPage",
}),
```

This is the source `siteMetadata.ts` wraps, so the page picks up real metadata instead of the 404 fallback. No change to `siteMetadata.ts` is required.

Optional: add `/editorial-policy` to `scripts/generate-sitemap.mjs` if it enumerates a static route list (will check during implementation; if it pulls from `routeMetadata`, no change needed).

### 6. Footer link — edit the **rendered** footer

The live footer is in `src/components/Layout.tsx` (the `<footer>` block). `src/components/Footer.tsx` is unused and stale.

- Add `{ label: "Editorial policy", to: "/editorial-policy" }` to `footerNavItems` in `Layout.tsx` so the link appears in the rendered Navigation column.
- Delete `src/components/Footer.tsx` to prevent confusion (no imports reference it).

### 7. Verification (after implementation)

Run as a final pass:
1. Navigate to `/editorial-policy` — page renders with hero + sections, not 404.
2. View page source / `getRouteMetadata("/editorial-policy")` returns the new entry, not `notFoundMetadata`.
3. Open any published insight (e.g. the current `/insights/prompts-cannot-replace-permissions-...`) — byline + `AI-assisted · Human-reviewed` chip + visible note appear under the hero meta.
4. Open a project detail page — confirm **no** disclosure chip appears (no project has `aiAssisted: true` yet).
5. Footer renders `Editorial policy` link in the Navigation column, points to `/editorial-policy`, and `src/components/Footer.tsx` no longer exists.
6. Inspect the inline chip in DOM — accessible name includes the disclosure note via `aria-label` or `sr-only` span (not a `title`-only fallback).

### Files touched
- `src/data/insights.ts` *(types)*
- `src/data/projects.ts` *(types)*
- `src/data/insights.qa-overrides.js` *(seed editorial defaults for published insights)*
- `src/components/content/EditorialDisclosure.tsx` *(new)*
- `src/pages/InsightArticle.tsx`
- `src/components/projects/ProjectDetailHero.tsx`
- `src/pages/EditorialPolicy.tsx` *(new)*
- `src/App.tsx`
- `src/components/Layout.tsx` *(footer nav)*
- `src/components/Footer.tsx` *(delete)*
- `src/seo/metadata.shared.js`
