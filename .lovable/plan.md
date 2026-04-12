

## Plan: Swap CTA button order on Services "Starting offers" section

In `src/pages/Services.tsx`, the "Starting offers" section (~lines 213-228) has the buttons in the wrong order. Swap them so "Start a conversation" (linking to `/contact`) is the primary button (first, with filled style) and "See starting points" (linking to `/offerings`) is the secondary button (second, with border style).

### Changes in `src/pages/Services.tsx`

Swap the two `<Link>` elements in the "Starting offers" section so the primary CTA reads "Start a conversation" (→ `/contact`) and the secondary reads "See starting points" (→ `/offerings`).

