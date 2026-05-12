## Goal
Match the FocusSection internal dividers to the lighter/thinner dividers used elsewhere on the site (e.g. ExplorePathsSection), while keeping the right-edge fix from the previous turn.

## Why the current dividers look heavier
The previous fix swapped to `divide-x divide-border`, which paints a 1px CSS `border` on each child. Tailwind's divide utilities additionally apply `--tw-divide-opacity: 1`, and the rendered border sits inside the cell box rather than in a 1px gap between two backgrounds. Visually that reads slightly darker/thicker than the rest of the site, where dividers are produced by `gap-px bg-border` (a 1px slice of the parent's background showing between cells).

## Change (single file)
Return `FocusSection` to the project's standard divider technique and prevent the right-edge bleed by clipping the container.

`src/components/FocusSection.tsx`:
- Grid class: change `grid md:grid-cols-3 md:divide-x md:divide-border` back to `grid gap-px overflow-hidden bg-border md:grid-cols-3`. The added `overflow-hidden` clips the 1px subpixel bleed on the right edge that caused the original outer line.
- Cells unchanged: `group bg-background p-8 md:p-10`.

This restores divider weight and color to exactly match ExplorePathsSection and the rest of the site, with no outer border on any side.

## Verification
- Reload `/`, screenshot the section at 1429px viewport.
- Confirm the two internal dividers visually match the Explore Further dividers (same weight, same color).
- Confirm no vertical line on the right of "Research and prototype sprints", and no top/bottom/left outer borders.
