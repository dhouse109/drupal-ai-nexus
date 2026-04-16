

## Reusable Insights Article Template

Goal: a single component-driven layout for publishing essays under `/insights/:slug`, so research notes become publishable quickly while staying on-brand.

### Architecture

- **Data**: `src/data/insights.ts` exporting an `articles` array typed by an `InsightArticle` interface. Each article has: `slug`, `title`, `category`, `readTime`, `publishedDate`, `keyTakeaway`, `intro`, and `body` (an array of typed blocks).
- **Block types** (discriminated union for the body):
  - `{ type: "paragraph", text }`
  - `{ type: "heading", text }`
  - `{ type: "callout", variant: "guidance" | "warning" | "insight", title, text }` — bordered block with mono eyebrow, used for practical guidance
  - `{ type: "list", items }`
  - `{ type: "quote", text, attribution? }`
- **Route**: `/insights/:slug` registered in `src/App.tsx`.
- **New page**: `src/pages/InsightArticle.tsx` that:
  - Looks up article by slug, 404s via `<Navigate to="/insights" />` if missing
  - Renders the template

### Template sections (visual system aligned)

1. **Title area** — `grid-bg` hero with mono eyebrow (category), large H1, meta row (read time · published date), Framer Motion entrance. Matches Insights/Offerings hero pattern.
2. **Key takeaway** — bordered `bg-surface` card directly below hero with mono eyebrow `Key takeaway` and a single strong sentence/paragraph. Sets the thesis up front.
3. **Article body** — single-column max-w-3xl prose rendered from the body blocks:
   - Paragraphs in `text-muted-foreground` reading size
   - Section headings in mono
   - **Callout blocks**: bordered, `bg-surface`, mono eyebrow (`Practical guidance` / `Watch out for` / `Key insight` based on variant), title in mono, body text. No hover effects (per interactivity rule).
   - Lists and quotes styled to match existing typographic system
4. **CTA at the end** — reuses the existing `bg-surface` CTA card pattern from `Insights.tsx`: primary `Start a conversation` → `/contact`, secondary `See starting points` → `/offerings`. Per CTA guidelines.

### Integration with existing Insights page

- Update `src/pages/Insights.tsx` so the featured article and recent articles list render as `<Link>`s to `/insights/:slug` instead of static cards.
- Move the existing hardcoded article list into `src/data/insights.ts` and write **one full sample article** ("Applied AI starts with the workflow, not the model") using all block types, so the template is immediately usable as a reference for future entries.
- Other listed articles remain in the data file as metadata-only stubs (no body) and render as "coming soon" — or we can author them later. For this task: only the featured one gets a full body, the others link to a simple "Notes in progress" placeholder rendered by the same template when `body` is empty.

### Voice & rules followed

- No "ship/shipping"
- "109" for studio, "Damien" only in author/bio context
- Mono eyebrows, border-divided sections, no hover highlights on informational cards
- CTAs follow `docs/cta-copy-guidelines.md` (proof-led page → `Start a conversation` + `See starting points`)

### Files touched

- `src/data/insights.ts` (new — data + types + sample article)
- `src/pages/InsightArticle.tsx` (new — template renderer)
- `src/App.tsx` (add `/insights/:slug` route)
- `src/pages/Insights.tsx` (link cards to detail pages, source from data file)

