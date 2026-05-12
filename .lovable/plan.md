## Goal
Eliminate the right-edge outer border on the FocusSection grid (and document the same fix to apply elsewhere later) by replacing the fragile `gap-px + bg-border` divider technique with explicit per-cell borders.

## Why the current technique is fragile
`grid gap-px bg-border` draws dividers by letting the parent's `bg-border` show through 1px gaps between children. Browsers compute column tracks as fractional pixels, and any sub-pixel remainder at the right edge gets painted by the container — visible as a thin outer line. Whether it shows depends on column count vs container width, so the same pattern appears clean in some grids (ExplorePaths, 4 cols at 1429px) and shows a right edge in others (Focus, 3 cols at 1429px). Per-cell `border border-transparent` cannot mask it (the bleed is outside the cell), and `overflow-hidden` cannot clip it (the bleed is the container's own background, inside its bounds).

## Change (single file, this turn)
`src/components/FocusSection.tsx` — switch to explicit per-cell right borders:

- Grid: change `grid gap-px overflow-hidden bg-border md:grid-cols-3` to `grid md:grid-cols-3`.
- Cells: append a conditional border class on each `motion.div`:
  - `md:border-r md:border-border` for all cells except the last
  - last cell gets no border
- Implement by passing `i` from the existing `services.map((service, i) => ...)` and adding ``${i < services.length - 1 ? "md:border-r md:border-border" : ""}`` to the `motion.div` className.

Result: exact 1px dividers between the three cards, identical color/weight to the rest of the site, and no possible outer border on any side at any viewport width.

## Follow-up (separate turn, not this one)
Apply the same per-cell-border pattern to the other grids that currently use `gap-px bg-border`:
- `ExplorePathsSection` (4-col, single row)
- `ProjectGrid` and the Insights `Published notes` grid (multi-row, need row/col-aware borders)
- For the multi-row grids, extend `src/lib/grid.ts` with a helper that returns `md:border-r md:border-b md:border-border` minus the last-column right border and last-row bottom border, using the same column-count + index math already in `getLastGridItemSpanClass`.

Doing FocusSection first proves the pattern; the helper rollout is a bigger, separate change.

## Verification (this turn)
- Reload `/`, screenshot the "How 109.studio helps" section at 1429px.
- Confirm: two internal vertical dividers between the three cards, identical weight to ExplorePaths dividers, no right/left/top/bottom outer borders.
- Resize the preview to a couple of widths and confirm the right edge stays clean.
