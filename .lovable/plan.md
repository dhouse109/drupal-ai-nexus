## Why mobile rows have no dividers

`getCardGridBorderClass` in `src/lib/grid.ts` only emits border-color classes prefixed with `md:` and `xl:`. At the base (mobile) breakpoint each card keeps its `border-transparent` from the card component, so single-column rows have nothing between them. This affects every grid that uses the helper (Projects, Insights, related blocks, etc.).

## Fix

Extend `getCardGridBorderClass` to also emit a base-tier bottom divider for every non-last item, then explicitly clear it at `md:` for items that fall in the last `md` row (so the desktop layout stays clean and the existing `md:`/`xl:` rules continue to win).

### Class additions per item

- All but the final item: `border-b-border/40`
- Items in the last `md` row: `md:border-b-transparent`

The existing md/xl logic for `border-b-border/40` and `border-r-border/40` is unchanged.

### Tailwind safelist

Add `border-b-border/40` and `md:border-b-transparent` to the safelist comment at the top of the helper so JIT keeps them.

## Files touched

- `src/lib/grid.ts` — single function update + comment.

No component changes are needed; every grid (`ProjectGrid`, `InsightCard` lists in `Insights.tsx`, `RelatedProjects`, `RelatedInsights`, etc.) already calls this helper and will pick up mobile dividers automatically.

## Verification

1. `/portfolio` at 375px: horizontal divider visible between each project card, none under the last card.
2. `/portfolio` at md (≥768px): two-column layout with the existing dividers, no stray line under the last row.
3. Spot-check `/insights` and a project detail page's related blocks at mobile width.
