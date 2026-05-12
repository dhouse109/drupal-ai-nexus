## Plan

1. **Replace the mixed divider approach**
   - Stop using `gap-px bg-border` for the affected one-row card grids, because it creates divider lines via the parent background and can leak outer/right/bottom edges at breakpoint transitions.
   - Use item-level border color logic consistently instead: each card keeps `border border-transparent`, and only interior right/bottom borders get a visible color.

2. **Tighten the shared grid helper**
   - Update `getCardGridBorderClass` so breakpoint-specific column counts fully override smaller breakpoint divider colors.
   - Preserve transparent right/bottom borders on outer cells so hover states still draw a complete square.
   - Account for short final rows and spanning last items without producing phantom dividers.

3. **Apply the helper to the affected one-row grids**
   - Home: `ExplorePathsSection` and `IndustriesSection`.
   - Applied AI: `Selected proof` and `Working standards` grids.
   - Also update matching AI card grids that use the same one-row pattern so the behavior stays consistent across related pages.

4. **Validate visually at the reported viewport**
   - Check `/` and `/applied-ai` around the one-row grids at the user’s 1800px-wide viewport.
   - Confirm there are interior dividers only, with no right/bottom outside borders and no missing divider between adjacent cells.