## Goal
Eliminate the right-edge vertical line on the homepage "How 109.studio helps" grid. The previous transparent-border fix did not solve it because the line is the grid container's `bg-border` showing past the rightmost cell, not a per-card border.

## Root cause
`FocusSection` uses `grid gap-px bg-border md:grid-cols-3` to draw dividers via the parent background showing through 1px gaps. With 3 equal columns the math should be exact, but at this container width the grid track sizing rounds such that 1px of `bg-border` remains visible on the right edge of the container, past the last card's background. The Explore Further grid happens to land on a sub-pixel boundary that hides this; Focus does not.

A per-cell transparent border cannot cover this because the bleed is outside the cell, on the grid container itself.

## Change (single file)
`src/components/FocusSection.tsx` — switch the divider technique for this single-row grid from "gap-px + bg-border" to Tailwind's `divide-x` utility, which only paints lines *between* children and never around the container.

- Grid class: change `grid gap-px bg-border md:grid-cols-3` to `grid md:grid-cols-3 md:divide-x md:divide-border`.
- Cell class: revert the earlier `border border-transparent` addition; keep `group bg-background p-8 md:p-10`.

This produces identical internal vertical dividers between the three cards, with zero possibility of an outside border on any side.

Revert note: also undo the transparent-border addition from the previous turn so we don't leave dead classes behind.

## Verification
- Reload `/`, screenshot the "How 109.studio helps" section at 1429px viewport.
- Crop the right edge of the third card and confirm no vertical line.
- Confirm two internal vertical dividers between the three cards remain.
- Confirm no top, bottom, or left outer borders appear.
