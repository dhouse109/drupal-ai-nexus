## Goal
Remove the duplicate name in the article header. Replace "By" with "Generated and reviewed by" and stop rendering the separate "Reviewed by" line beneath the disclosure note when it duplicates the author.

## Changes

1. **`src/pages/InsightArticle.tsx`** — Update the meta line:
   - From: `By {authorName} · {authorRole} · {readTime} · {publishedDate}`
   - To: `Generated and reviewed by {authorName} · {authorRole} · {readTime} · {publishedDate}`

2. **`src/components/content/EditorialDisclosure.tsx`** — Suppress the trailing `Reviewed by … · Last reviewed …` line in `variant="block"` when the parent already shows the reviewer in the byline. Add an optional `showReviewer?: boolean` prop (default `true`) so:
   - Insight article page passes `showReviewer={false}` (byline already covers it; keep `lastReviewedAt` rendering only if present and reviewer is hidden — drop both for now since insights don't set `lastReviewedAt`).
   - Project detail hero (which uses the chip without a separate byline) keeps default behavior.

3. **No data changes.** `reviewedBy` stays in the data model so future guest-authored pieces can show a distinct reviewer.

## Verification
- `/insights/why-your-ai-prototype-is-not-a-product` shows: `Generated and reviewed by Damien House · 109.studio · 6 min read · May 2026`, the AI-assisted chip, the disclosure sentence with "Editorial policy" link, and no second "Reviewed by Damien House" line.
- Project detail pages still render the chip exactly as before.
