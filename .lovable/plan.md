

## Self-referential CTA audit

### Findings

I checked every `<Link to="...">` and `<NavLink to="...">` across all pages and shared components. Page-specific in-body CTAs (in `About`, `Services`, `Offerings`, `ArchitectureAudit`, `AppliedAI`, `AIInPractice`, `Insights`, `InsightArticle`, `Contact`) all point to *other* pages — none are self-referential.

The redundancy lives in two **global** components that render on every page:

**1. Footer "Next step" CTA card in `src/components/Layout.tsx` (lines 94–118)**

This card is shown on every page except `/contact`. It always renders:
- Primary: `Start a conversation` → `/contact`
- Secondary: `See how 109 helps` → `/services`

So on `/services` the secondary button points back to the page you're already on. This is the example you flagged.

**2. Header "Start a conversation" button in `src/components/Layout.tsx` (lines 45–51 desktop, 77–84 mobile)**

This button shows on every page including `/contact`, so on `/contact` it points to `/contact`. (The footer CTA card already correctly hides itself on `/contact` — the header button is the remaining inconsistency.)

### Recommended improvements

A clean, low-risk pattern: when a CTA's target matches the current route, **swap it for a different relevant destination** rather than hide it (preserves the visual rhythm of the two-button pair).

**Footer CTA card (`Layout.tsx`)** — make the secondary button route-aware:

| Current page | Secondary CTA |
|---|---|
| `/services` | `See starting points` → `/offerings` |
| `/offerings` | `See how 109 helps` → `/services` |
| `/architecture-audit` | `See starting points` → `/offerings` |
| `/about` | `See how 109 helps` → `/services` |
| `/applied-ai` | `Read insights` → `/insights` |
| `/ai-in-practice` | `See how 109 helps` → `/services` |
| `/insights` and `/insights/:slug` | `See how 109 helps` → `/services` |
| `/` (homepage) | `See how 109 helps` → `/services` (current default — fine) |

Implementation: derive `secondaryCta` from `location.pathname` with a small lookup, defaulting to the current `{ label: "See how 109 helps", to: "/services" }`.

**Header "Start a conversation" button (`Layout.tsx`)** — hide the button when already on `/contact` (mirrors the footer-card pattern that's already in place via `isContactPage`). Apply to both desktop (line 45) and mobile (line 77).

### Files touched

- `src/components/Layout.tsx` — add route-aware secondary CTA in the footer card; conditionally hide the header `Start a conversation` button on `/contact`.

No other files need changes. Voice, visual system, and CTA two-button pattern preserved (per `mem://style/ui-components/cta` and `docs/cta-copy-guidelines.md`).

