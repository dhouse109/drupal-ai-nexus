## Goal

On `src/pages/AIInPractice.tsx`, replace the existing "What this is not" section with content that matches the "Release standards" section from `src/pages/AppliedAI.tsx`.

## Current section (to be replaced)

- Eyebrow: "What this is not"
- Heading: "A few things 109.studio is not interested in releasing"
- Right column: a list rendered from the `nonGoals` array (4 items)

## New section content (mirrored from Applied AI)

- Eyebrow: "Release standards"
- Heading: "What needs to be true before anything goes live"
- Intro paragraph (under the heading): "109.studio produces applied AI that a team can understand, review, operate, and extend. If it cannot meet that bar, it is not ready for release."
- Right column list items:
  1. Human review stays in the loop for consequential decisions
  2. Governance burden should go down, not up
  3. The pattern has to hold up under real delivery conditions
  4. The system should reduce confusion for editors, developers, and operators

## Changes in `src/pages/AIInPractice.tsx`

1. Remove the `nonGoals` constant near the top of the file.
2. Add a new `releaseStandards` constant containing the 4 items above (matches the Applied AI shape).
3. In the JSX section that currently renders "What this is not":
   - Update the eyebrow text to "Release standards".
   - Update the H2 to "What needs to be true before anything goes live".
   - Add the intro paragraph beneath the H2 in the left column (same `mt-6 text-base leading-relaxed text-muted-foreground md:text-lg` styling used on Applied AI).
   - Map over `releaseStandards` instead of `nonGoals` in the right column. Keep the existing item styling (border-b dividers) so the section visually matches the rest of the AI In Practice page.

## Out of scope

- No changes to layout, spacing, typography tokens, or any other section on the page.
- No changes to `AppliedAI.tsx`.
- No changes to navigation, CTAs, or the closing section that follows.