

## New Page: 2-Week Architecture Audit

A productized landing page for the front-door offer. Aligned with the existing Offerings/Services design system (border-divided grid sections, mono uppercase eyebrows, grid-bg hero, `bg-surface` CTA card).

### Route & file
- New route: `/architecture-audit`
- New file: `src/pages/ArchitectureAudit.tsx`
- Register in `src/App.tsx` alongside existing routes.

### Page sections (matches your structure)

1. **Hero** — eyebrow `Front-door engagement`, H1 *"A 2-Week Architecture Audit for teams that need clarity before the next big technical decision"*, supporting paragraph, two CTAs (`Start a conversation` primary → `/contact`, `See other starting points` secondary → `/offerings`). Uses the same `grid-bg` + Framer Motion entrance pattern as Offerings/Services hero.

2. **What this is** — two-column intro: short principal-led definition on the left, a small "At a glance" panel on the right (Duration: 2 weeks · Format: remote, principal-led · Output: written findings + executive debrief).

3. **Who it is for** — four "fit" cards in a 2-col bordered grid (founders preparing a build decision, CTOs inheriting a platform, agencies needing a senior outside read, teams weighing AI-readiness investment).

4. **What Damien reviews** — 2-col bordered grid of review areas, each with a short description:
   - Platform architecture & system boundaries
   - Technical debt & change-cost
   - Delivery risk & release confidence
   - Data, integration, and content surfaces
   - AI readiness (where relevant)
   - Team capacity & decision-making structure

5. **What the client receives** — bordered grid of deliverables: prioritized findings document, architecture map, risk register, recommended next steps, executive debrief session, optional roadmap outline.

6. **What happens over the 2 weeks** — numbered timeline (matches the `processSteps` pattern used on Offerings/Services). Days 1–2 intake & access, Days 3–7 review, Days 8–10 synthesis, Days 11–14 debrief & recommendation.

7. **Why this is a strong first step** — three short reasoned cards (low-risk shape, principal-led judgment, decision-ready output) using the same bordered grid card pattern.

8. **CTA** — final `bg-surface` card matching the existing footer-style CTA, primary `Start a conversation` → `/contact` and secondary `See other starting points` → `/offerings`. Per CTA guidelines.

### Cross-linking (no top-nav change)

Top nav already feels full (Home, About, How We Help, Offerings, Applied AI, Contact + the conversation button). Adding another item would crowd the collision we just fixed. So instead:

- **Offerings page**: Update the existing first card ("2-Week architecture audit") title/heading to link to `/architecture-audit` via a small `Learn more →` link below `nextStep` (non-disruptive — keeps the card structure intact).
- **Contact page**: Add a brief inline mention near the form intro pointing visitors who want a productized first step toward `/architecture-audit`.
- **Services page**: Update the `guideItems` recommendation row "Start with the 2-Week architecture audit." so the phrase becomes a link to the new page.

### Voice & copy rules followed
- Principal-led, plainspoken, outcome-focused.
- "109" for studio identity in CTAs; "Damien" reserved for the bio/review-author context (used in section 4 framing as "What Damien reviews", consistent with current usage on the homepage CTA card).
- No "ship/shipping" — use "release software" / "release confidence".
- CTAs follow `docs/cta-copy-guidelines.md`: primary `Start a conversation` first, secondary `See other starting points` (variant of `See starting points` because we're already in offer-selection territory; will use exact `See starting points` to stay on the approved list).
- No hover highlights on informational cards.

### Files touched
- `src/pages/ArchitectureAudit.tsx` (new)
- `src/App.tsx` (route)
- `src/pages/Offerings.tsx` (link first card to detail page)
- `src/pages/Services.tsx` (link the recommendation phrase)
- `src/pages/Contact.tsx` (small inline mention)

