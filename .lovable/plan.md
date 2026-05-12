## Goal
Make the per-cell border helper actually paint on the `RelatedWorkBlock` and `RelatedProjects` grids (which use `ProjectCard` / `InsightCard`), so the "Concrete proof tied to this service" grid on `/applied-ai` renders internal-only dividers at the correct weight with no right outer border.

## Why the previous fix didn't take effect
`ProjectCard` and `InsightCard` always render with `border border-transparent` on their non-featured variant. `border-transparent` sets *all four* `border-color` properties to `transparent`. The grid helper added `md:border-r-border/20`, which only sets the right-side color, but Tailwind emits `.border-transparent` after `.md\:border-r-border\/20` in the stylesheet (the `border-r-{color}` utilities are emitted before the global `border-{color}` utilities in v3's layer order). Result: the right-side color is overridden back to `transparent` at all breakpoints. The cards have a 1px transparent border on every side and our helper classes are inert.

The grid container itself is now `grid md:grid-cols-2 xl:grid-cols-3` (no `gap-px bg-border`), so any line you still see on the right edge is either (a) a stale preview before HMR caught up, or (b) coming from a *different* section on the page — there are still two `gap-px bg-border` grids further down `AppliedAI.tsx` (lines 249 and 307) that we have not touched yet.

## Change (two parts)

### Part 1 — make the helper win on cards (real fix)
`src/lib/grid.ts` — switch the helper to use Tailwind's `!important` modifier so it always overrides the cards' base `border-transparent`. Replace each generated class pair like `md:border-r md:border-r-border/20` with `md:border-r md:!border-r-border/20`. The bang only marks the *color* override important; the width utility doesn't conflict so it stays normal.

This is a surgical, contained use of `!` — only the four side-color overrides in this single helper. It avoids any structural changes to `ProjectCard` / `InsightCard` and preserves their hover-border behavior.

### Part 2 — apply the same per-cell technique to the remaining two `AppliedAI.tsx` grids
`src/pages/AppliedAI.tsx` lines 249 and 307 — both are `grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4` blocks. These don't use `ProjectCard`/`InsightCard` so there's no specificity conflict — apply the same approach as `Services.tsx` (inline row/col-aware classes) or extend `getCardGridBorderClass` to support `xlColumns: 4`. Cleaner: extend the helper to accept `4` for `xlColumns` (one-line type widening, no logic change since the math is generic), then call it from those two grids.

## Verification
- Hard-refresh `/applied-ai`.
- Confirm "Concrete proof tied to this service" grid: two internal vertical dividers between the three cards at the correct light weight, no right outer line, no top/bottom outer lines.
- Confirm the two other 4-col grids on the page (around lines 249 and 307) also have no right outer line and matching divider weight.
- Quick sanity check on `/portfolio` and `/insights` to confirm the existing `getCardGridBorderClass` users still render correctly.
