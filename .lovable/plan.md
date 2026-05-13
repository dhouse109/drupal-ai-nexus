# Dim-Mode Palette Exploration for 109.studio

## Current state (for reference)

`src/index.css` defines a single `:root` block — there is no `.dark` variant today. The current palette is a warm cream (`--background: 40 20% 95%`) with a copper/rust primary (`--primary: 30 60% 42%`) and warm graphite text. There is no system dark-mode handling. Tailwind is configured `darkMode: ["class"]`, so a `.dark` class on `<html>` would activate a second token set if we add one.

All five options below keep the same token names already in use (`background`, `foreground`, `card`, `popover`, `muted`, `muted-foreground`, `border`, `input`, `ring`, `primary`, `accent`, `surface`, `surface-hover`, `text-dim`, `glow`) so no component code needs to change. Both schemes stay in the dim register — light mode is a softened mid-tone, dark mode is a deeper version of the same hue family. Nothing inverts.

## Approach for all five options

- **Light mode** = "dim" — a desaturated mid-neutral background (L roughly 18–24 in HSL), never above ~L 26. No white, no near-white surfaces.
- **Dark mode** = "deep dim" — same hue, lowered to L ~10–14. Surfaces stay close to background (delta ~3–5 L) so the page reads as one calm field, not a stack of bright cards.
- **Foreground text** sits at L ~85–92 against background to hold ~10:1 contrast (AAA body).
- **Muted text** sits at L ~58–65 (~4.6:1, AA body, AAA large).
- **Borders** sit ~6–8 L above background — visible but not loud.
- **Primary/accent** are used sparingly: eyebrows, single-word CTAs, the headline highlight word, and link underlines. Buttons keep the current pattern (solid primary fill + primary-foreground text).
- **CTA treatment** stays identical to today's pattern in `HeroSection.tsx`: filled primary + bordered secondary. Only the token values change.

All HSL values are written in the same `H S% L%` format `index.css` already uses.

---

## Option 1 — Graphite & Ember

Warm graphite neutral with a restrained copper-amber accent. Closest to the current brand feel; lowest-risk migration.

| Token | Light (dim) | Dark |
|---|---|---|
| `--background` | `30 6% 18%` | `30 6% 11%` |
| `--surface` / `--card` | `30 6% 21%` | `30 6% 14%` |
| `--surface-hover` | `30 6% 25%` | `30 6% 17%` |
| `--border` / `--input` | `30 5% 28%` | `30 5% 22%` |
| `--foreground` | `35 10% 90%` | `35 10% 88%` |
| `--muted-foreground` / `--text-dim` | `30 6% 62%` | `30 6% 58%` |
| `--primary` / `--accent` / `--ring` / `--glow` | `25 70% 55%` | `25 75% 58%` |
| `--primary-foreground` | `30 10% 10%` | `30 10% 10%` |

- **Light behavior:** warm graphite page, slightly lifted cards, copper eyebrows and CTA glow. Reads as "studio at dusk."
- **Dark behavior:** same hue, ~7 L deeper. Accent gains a touch of luminosity to compensate.
- **Accessibility:** foreground 10.5:1, muted 4.7:1, primary on background 4.8:1 (large/UI text only — fine for buttons and eyebrows).

---

## Option 2 — Slate & Cyan

Deep cool slate with a muted, dusty cyan accent. Pulls the brand toward "infrastructure/architecture" without going SaaS-blue.

| Token | Light (dim) | Dark |
|---|---|---|
| `--background` | `215 12% 19%` | `215 14% 11%` |
| `--surface` / `--card` | `215 12% 22%` | `215 14% 14%` |
| `--surface-hover` | `215 12% 26%` | `215 14% 18%` |
| `--border` / `--input` | `215 10% 30%` | `215 10% 24%` |
| `--foreground` | `210 15% 90%` | `210 15% 88%` |
| `--muted-foreground` / `--text-dim` | `215 8% 64%` | `215 8% 60%` |
| `--primary` / `--accent` / `--ring` / `--glow` | `190 45% 62%` | `190 50% 65%` |
| `--primary-foreground` | `215 20% 10%` | `215 20% 10%` |

- **Light behavior:** cool quiet slate; cyan reads as instrument-panel, not neon.
- **Dark behavior:** deeper graphite-blue, accent slightly brighter.
- **Accessibility:** foreground 10.2:1, muted 4.9:1, primary 5.6:1.

---

## Option 3 — Charcoal & Ivory (with restrained orange)

Near-neutral charcoal with warm ivory text and a single restrained orange accent. The most editorial of the five.

| Token | Light (dim) | Dark |
|---|---|---|
| `--background` | `30 4% 17%` | `30 4% 10%` |
| `--surface` / `--card` | `30 4% 20%` | `30 4% 13%` |
| `--surface-hover` | `30 4% 24%` | `30 4% 16%` |
| `--border` / `--input` | `30 3% 27%` | `30 3% 21%` |
| `--foreground` | `40 25% 92%` | `40 25% 90%` |
| `--muted-foreground` / `--text-dim` | `35 8% 65%` | `35 8% 60%` |
| `--primary` / `--accent` / `--ring` / `--glow` | `20 75% 58%` | `20 80% 60%` |
| `--primary-foreground` | `30 10% 10%` | `30 10% 10%` |

- **Light behavior:** flat charcoal with creamy text — feels like printed matter on toned stock.
- **Dark behavior:** same character, slightly heavier ink.
- **Accessibility:** foreground 11.3:1, muted 5.0:1, primary 4.7:1.

---

## Option 4 — Dark Stone (editorial studio)

Warm taupe/stone neutrals, lowest-saturation accent of the set. Closest to a printed monograph or architecture studio site.

| Token | Light (dim) | Dark |
|---|---|---|
| `--background` | `35 8% 20%` | `35 8% 12%` |
| `--surface` / `--card` | `35 8% 23%` | `35 8% 15%` |
| `--surface-hover` | `35 8% 27%` | `35 8% 19%` |
| `--border` / `--input` | `35 6% 31%` | `35 6% 25%` |
| `--foreground` | `38 18% 89%` | `38 18% 87%` |
| `--muted-foreground` / `--text-dim` | `35 8% 62%` | `35 8% 58%` |
| `--primary` / `--accent` / `--ring` / `--glow` | `32 45% 62%` | `32 50% 65%` |
| `--primary-foreground` | `35 15% 10%` | `35 15% 10%` |

- **Light behavior:** warm stone, soft sand accent. Quietest of the five.
- **Dark behavior:** deepens into raw umber.
- **Accessibility:** foreground 10.0:1, muted 4.6:1, primary 5.3:1. Accent is the lowest-contrast — fine for type and borders, less suited to small icons.

---

## Option 5 — Navy-Slate & Pale Blue

Low-glare navy-slate with a cool pale-blue accent. Reads "platform/infra" but stays calm.

| Token | Light (dim) | Dark |
|---|---|---|
| `--background` | `220 18% 18%` | `220 20% 10%` |
| `--surface` / `--card` | `220 18% 21%` | `220 20% 13%` |
| `--surface-hover` | `220 18% 25%` | `220 20% 17%` |
| `--border` / `--input` | `220 14% 30%` | `220 14% 23%` |
| `--foreground` | `215 20% 92%` | `215 20% 90%` |
| `--muted-foreground` / `--text-dim` | `215 12% 65%` | `215 12% 62%` |
| `--primary` / `--accent` / `--ring` / `--glow` | `210 55% 70%` | `210 60% 72%` |
| `--primary-foreground` | `220 25% 10%` | `220 25% 10%` |

- **Light behavior:** dim navy with pale-blue highlights. Most "technical/credible" of the five.
- **Dark behavior:** deep navy; pale-blue stays legible.
- **Accessibility:** foreground 10.4:1, muted 5.1:1, primary 7.0:1 (highest of the set).

---

## Quick comparison

| Option | Mood | Accent register | Risk vs. current |
|---|---|---|---|
| 1 Graphite & Ember | Warm, current-brand-adjacent | Copper | Lowest |
| 2 Slate & Cyan | Cool, infrastructural | Dusty cyan | Medium |
| 3 Charcoal & Ivory | Editorial, printed | Restrained orange | Low |
| 4 Dark Stone | Quiet, architectural | Sand | Medium (lowest accent contrast) |
| 5 Navy-Slate & Pale Blue | Technical, calm | Pale blue | Medium-high (largest hue shift) |

## Implementation outline (for whichever option you pick)

1. Replace the `:root` block in `src/index.css` with the chosen light (dim) token set.
2. Add a `.dark` block with the dark token set.
3. Add a tiny `prefers-color-scheme` bootstrap (toggles `.dark` on `<html>`) — no UI toggle, just system-following.
4. Verify `grid-bg`, `text-glow`, and `border-glow` utilities still read correctly (they reference `--border` and `--glow`, both already in the token set).
5. Spot-check `Footer`, `HeroSection`, `ProjectCard`, `InsightCard`, and the unified hover pattern (`hover:bg-muted/20`, `hover:bg-surface-hover`) — all already token-based, so no component edits expected.
6. No changes to copy, routing, layout, or CTAs.

## What I need from you

Pick one option (or a hybrid — e.g., "Option 1 background with Option 5 accent") and I'll implement it as the next step. If none feel right, tell me which dimension to push (warmer, cooler, more saturated accent, deeper background, etc.) and I'll iterate.
