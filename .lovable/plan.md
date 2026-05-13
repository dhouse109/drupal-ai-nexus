## Problem

On project detail pages, the bottom CTA renders two buttons with fixed labels:

- "Start a conversation" → `detail.cta.primaryHref`
- "See starting points" → `detail.cta.secondaryHref`

But in `src/data/projects.shared.js`, projects are inconsistent about which slot holds `/contact`. For some (e.g. `drupal-canvas-ai-integration-suite`), `primaryHref` is `/drupal-ai` and `secondaryHref` is `/contact`, so the labels point at the wrong routes.

## Fix

In `src/pages/ProjectDetail.tsx`, stop trusting the slot order. Derive:

- `contactHref` = whichever of `primaryHref` / `secondaryHref` equals `/contact` (fallback `/contact`)
- `learnMoreHref` = the other one (fallback `detail.cta.secondaryHref`)

Then render:

- Primary button "Start a conversation" → `contactHref`
- Secondary button "See starting points" → `learnMoreHref`

This keeps the existing data file untouched and fixes every project page in one change. No data migration, no label changes.

## Scope

- Edit only `src/pages/ProjectDetail.tsx` (the `ContentCTA` props block).
- No changes to data, no changes to `ContentCTA`, no changes to other pages.