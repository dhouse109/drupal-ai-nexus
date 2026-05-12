## Diagnosis

The bug is in `getCardGridBorderClass` (`src/lib/grid.ts`), not in `ProjectGrid`.

The helper computes border classes independently at the `md` (2-col) and `xl` (3-col) breakpoints. The problem: `md:border-r` / `md:border-b` keep applying at the `xl` breakpoint too — Tailwind responsive prefixes are min-width, not range. So once a cell has `md:border-r`, it still has it at `xl` unless explicitly overridden.

With 9 projects on `/portfolio`:

- **At `md` (2 cols, 5 rows):** indices 0,2,4,6,8 are in column 0 → get `md:border-r`. Indices 0–7 are not in the last row → get `md:border-b`.
- **At `xl` (3 cols, 3 rows):** the layout reflows. Index 2 is now the right edge of row 1, index 8 is the right edge of row 3 — but both still carry `md:border-r` from above → **stray right border on rows 1 and 3**. Indices 6 and 7 are now in the bottom row but still carry `md:border-b` → **stray bottom border on the first two cells of the bottom row**.

This didn't surface on the smaller related-projects grids because their item counts happened to avoid the conflict; on a 9-item 2→3 reflow it shows up clearly.

## Fix

Update `getCardGridBorderClass` in `src/lib/grid.ts` so that when an `xl` column count is provided, we explicitly reset borders at the `xl` breakpoint for cells that are in the last `xl` column or last `xl` row. Concretely, add:

- `xl:border-r-0` when `xlCol === xlColumns - 1`
- `xl:border-b-0` when `xlRow === xlRows - 1`

These override the inherited `md:border-r` / `md:border-b` at `xl` and above. The existing `xl:border-r` / `xl:border-b` additions for non-last cells stay as they are.

Also extend the Tailwind safelist comment above the function to include `xl:border-r-0` and `xl:border-b-0` so JIT keeps them.

No changes needed in `ProjectGrid`, `RelatedProjects`, or `RelatedWorkBlock` — they all benefit from the same fix.

## Verification

- `/portfolio` with 9 cards: no outer right border, no outer bottom border, internal dividers match `border/20` weight.
- Re-check `/applied-ai` and any insight pages using `RelatedProjects` / `RelatedWorkBlock` to confirm no regression at item counts that previously looked correct.
