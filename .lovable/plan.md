## Goal
Remove the stray right-edge line on the homepage "How 109.studio helps" grid so it matches the clean internal-only dividers of "Choose the path that fits where you are" below it.

## Root cause
Both sections use `grid gap-px bg-border` to render 1px internal dividers. In `ExplorePathsSection`, each cell wraps its content in a `<Link>` with `border border-transparent bg-background ...`, so every cell paints an opaque background plus a transparent 1px border that absorbs any sub-pixel bleed from the grid's `bg-border` layer.

In `FocusSection`, the cell is just `motion.div` with `bg-background p-8` — no transparent border. With 3 columns and 3 items the grid math is exact, but the `bg-border` layer still bleeds 1px on the right edge (visible in the screenshot as a vertical line past the third card). The Explore grid hides this by virtue of the per-cell `border border-transparent`.

## Change (single file)
`src/components/FocusSection.tsx` — on the `motion.div` inside the grid, add `border border-transparent` so each cell mirrors the Explore pattern:

```
className="group border border-transparent bg-background p-8 md:p-10"
```

No other changes. No copy, spacing, layout, animation, or structural edits. `ExplorePathsSection` is untouched.

## Verification
- Reload `/`, screenshot the "How 109.studio helps" section at desktop.
- Confirm: no right-edge vertical line, no top/bottom/left outer borders, internal vertical dividers between the three cards remain.
- Compare side-by-side with the "Explore further" grid — divider behavior should now be identical.
