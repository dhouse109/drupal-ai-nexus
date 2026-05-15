## Goal

Lighten the site background to match the warmer, slightly lifted charcoal shown in the two uploaded screenshots, without altering the rest of the palette (text, primary orange, borders).

## Observation

Current tokens in `src/index.css`:
- `:root` `--background: 30 9% 16%` (light scheme baseline)
- `.dark` `--background: 30 9% 10%` (currently active via system dark mode)

The uploaded screenshots show a noticeably lighter, warmer charcoal — closer to the existing `:root` value than the deep `.dark` value. The site currently renders the `.dark` variant because `main.tsx` follows `prefers-color-scheme: dark`, which is why it looks darker than the screenshots.

## Change

Update only the `--background` token in `.dark` (and the matching `--sidebar-background`) so the dark scheme renders at the lighter level seen in the screenshots. Leave the light `:root` values, foreground, primary, accent, borders, and surfaces untouched.

Proposed values (matched by eye to the screenshots):
- `.dark` `--background: 30 9% 14%` (up from 10%)
- `.dark` `--sidebar-background: 30 9% 15%` (up from 11%) — keeps the subtle sidebar lift

Card/popover/surface tokens stay where they are so cards continue to read slightly lifted from the new background.

## Files

- `src/index.css` — two HSL lightness bumps inside the `.dark` block.

## Verification

1. Reload `/` at the current viewport — background should match the warmer charcoal in the uploads, hero copy and orange accents unchanged.
2. Spot-check `/portfolio` and `/insights` — card surfaces still read as lifted against the new background, grid dividers still visible.
