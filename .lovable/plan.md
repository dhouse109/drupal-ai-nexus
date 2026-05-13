## What I found in the screenshot

Sampled key pixels from your reference image:

| Role | Sampled hex | HSL |
|---|---|---|
| Background (top) | `#2e2a25` | `33 11% 16%` |
| Background (mid) | `#292825` | `45 5% 15%` |
| Heading text | `#c7c3bf` | `30 7% 76%` |
| Body text | `~#a8a29a` | `~30 6% 64%` |
| Accent orange (large text) | `#bf7c3b` | `30 53% 49%` |
| Button bg orange | `#ab6b2b` | `30 60% 42%` |

Compared to the current tokens in `src/index.css`:

- Background is roughly the same darkness, but **warmer and slightly more saturated** (hue 30→33, sat 4%→11%).
- Foreground text is **much dimmer and less creamy** (lightness 92%→76%, sat 25%→7%) — the reference reads almost grey-bone, not ivory.
- Accent orange is **earthier, less neon** (hue 20→30, sat 75%→53%, lightness 58%→49%). The current orange is closer to a vivid coral; the reference is closer to terracotta / burnt sienna.

## Proposed token changes

Single edit to `src/index.css`. No component or Tailwind config changes — every component already reads from these tokens.

### `:root` (default / light system pref, still dim)

```text
--background:        30  9% 16%   (was 30 4% 17%)
--foreground:        30  8% 78%   (was 40 25% 92%)

--card:              30  9% 19%   (was 30 4% 20%)
--card-foreground:   30  8% 78%
--popover:           30  9% 19%
--popover-foreground:30  8% 78%

--primary:           30 55% 50%   (was 20 75% 58%)
--primary-foreground:30 10%  8%
--accent:            30 55% 50%
--accent-foreground: 30 10%  8%
--ring:              30 55% 50%
--glow:              30 55% 50%

--secondary:         30  7% 23%   (was 30 4% 24%)
--secondary-foreground: 30 8% 78%
--muted:             30  7% 23%
--muted-foreground:  30  6% 62%   (was 35 8% 65%)

--border:            30  6% 27%   (was 30 3% 27%)
--input:             30  6% 27%

--surface:           30  9% 19%
--surface-hover:     30  7% 23%
--text-dim:          30  6% 62%

(sidebar-* tokens shifted in parallel to match)
```

### `.dark` (deep variant, same hue family)

Same hue/saturation shifts, every lightness dropped ~6 points to keep the existing "dark mode goes deeper" relationship:

```text
--background:        30  9% 10%
--foreground:        30  8% 76%
--card:              30  9% 13%
--primary / accent:  30 60% 52%
--muted-foreground:  30  6% 58%
--border / input:    30  6% 21%
```

## What this changes visually

- Page surface reads slightly warmer and a touch browner — less neutral grey, more sepia.
- Headlines and body copy are noticeably **less bright**; the page feels calmer and more editorial. (If the resulting body copy is too dim for AA contrast against the new background, I'll bump `--foreground` lightness back up by 4–6 points.)
- Orange accent becomes **terracotta / burnt sienna** rather than vivid coral — buttons, the "complex products and platforms" highlight, eyebrows, and link rings all shift in unison.

## What does not change

- No font, layout, spacing, radius, or component changes.
- No Tailwind config edits — color tokens are the single source of truth.
- Memory rule "warm monochrome (cream bg, charcoal text, amber/rust accents)" still holds; this is a refinement of the same family.

## Memory follow-up

After applying, I'll update `mem://style/visual-direction` so the recorded palette matches the new tokens (less "cream/amber", more "sepia/terracotta").

## Scope

- Edit only `src/index.css` (`:root` and `.dark` blocks).
- One verification pass on the live preview to confirm contrast on body copy, muted text, and button labels; minor lightness nudges only if needed.
