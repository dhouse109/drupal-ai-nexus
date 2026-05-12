## Goal

Remove the outer right border on the portfolio grid and match the thinner divider weight (`border/20`) used elsewhere.

## Why the same fix works here

`ProjectGrid` (used on `/portfolio`) currently uses the old pattern:

```
grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3
```

The `gap-px bg-border` trick paints dividers via background bleed-through, which produces a full-weight outer frame on the right edge.

This is the same pattern we already replaced in `RelatedProjects` and `RelatedWorkBlock` using the `getCardGridBorderClass` helper in `src/lib/grid.ts`. `ProjectCard` already accepts a `className` prop and uses a transparent border (`border-transparent`) that won't conflict with per-cell border classes — same shape as `RelatedProjects`. So the fix transfers cleanly.

## Change

Edit `src/components/projects/ProjectGrid.tsx`:

1. Import `getCardGridBorderClass` alongside `getLastGridItemSpanClass`.
2. Change the grid container from:
   ```
   grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3
   ```
   to:
   ```
   grid md:grid-cols-2 xl:grid-cols-3
   ```
3. For each `ProjectCard`, compute both `span` and `border` and pass `className={`${border} ${span}`.trim()}` (same pattern as `RelatedProjects`).

No changes to `ProjectCard`, `Portfolio.tsx`, or `grid.ts` — the helper already supports 2/3 column layouts at `md`/`xl`.

## Verification

- Visit `/portfolio` and confirm: no right outer border, no bottom outer border, internal dividers match the lighter `border/20` weight used on Applied AI / Services / FocusSection grids.
- Confirm filtered views (which can produce uneven last rows) still look correct — the helper only adds borders on non-last rows/cols, so the trailing edges stay clean.
