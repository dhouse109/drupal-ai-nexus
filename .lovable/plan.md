## Default AI-assisted disclosure on projects + revise editorial policy copy

### 1. Seed projects with default AI-assisted disclosure

Currently only insights have a default editorial overlay (via `insights.qa-overrides.js`). Projects only show the chip when `aiAssisted: true` is set explicitly.

Mirror the insights pattern for projects so the chip appears on every project detail page by default:

- Create `src/data/projects.qa-overrides.js` exporting `applyProjectQaOverrides(project)` that merges a `DEFAULT_EDITORIAL` overlay (same shape as insights):
  ```
  {
    aiAssisted: true,
    aiDisclosureLabel: "AI-assisted · Human-reviewed",
    aiDisclosureNote:
      "Drafted with AI assistance from Damien House's research and prompts. Reviewed and edited before publication.",
    reviewedBy: "Damien House",
  }
  ```
  Project-level fields win when explicitly set, so a future project can opt out by setting `aiAssisted: false`.
- Wire it into `src/data/projects.ts` by mapping the shared project arrays through `applyProjectQaOverrides` (mirroring how `insights.ts` maps `sharedArticles`). All exports (`projects`, `getAllProjects`, `getProjectBySlug`, etc.) will return the overlaid objects.

No changes needed to `ProjectDetailHero.tsx` — it already renders the chip when `aiAssisted` is truthy.

### 2. Revise `src/pages/EditorialPolicy.tsx` copy

Rewrite the policy to reflect the actual workflow: AI generates most/all of the content from Damien's research and prompts; Damien reviews and edits before publication.

**Hero subheading** — replace current paragraph with:
> "Most content on 109.studio is drafted by AI from Damien House's research, notes, and prompts. Damien reviews and edits every published page so it reflects what 109.studio actually thinks. Damien House and 109.studio remain the accountable authors and publishers."

**"What we use AI for" section** — keep section title, replace lead + list with a workflow description:
- Lead: "AI is used as a writing partner across most of what gets published here. The typical workflow:"
- List items:
  1. Damien provides the research, source materials, prompts, and editorial direction.
  2. AI drafts the page — structure, prose, summaries, and supporting copy.
  3. Damien reviews and edits the draft for accuracy, voice, and judgment.
  4. The reviewed page is published under Damien House / 109.studio as the accountable author.

**"Who is accountable" section** — tighten to reinforce that AI volume does not change accountability:
- "Damien House and 109.studio are responsible for editorial judgment and final publication. The fact that AI drafted a page does not change who is accountable for it."
- "Author bylines on this site are never set to 'AI'. The AI-assisted chip discloses how the page was drafted; it does not replace the human author of record."

**"How we label projects" section** — change the closing paragraph from the old "most projects do not show the chip" wording to:
> "Most project pages on this site are AI-drafted from Damien's research and reviewed before publication, so the AI-assisted chip appears on them by default. The chip is omitted only when a specific project page was written end-to-end without AI assistance."

(Keep the existing project status taxonomy list — already reflects "released to production" wording.)

**"How AI assistance is disclosed" section** — minor clarification:
- Keep first paragraph (chip + note explanation).
- Replace second paragraph with: "If a page is published without a human review pass, it will not carry the 'Human-reviewed' label. That is the exception, not the rule — review is part of the standard workflow."

### 3. Verification

After implementation:
1. `/editorial-policy` reflects the new copy in all four sections.
2. Open any project detail page (e.g. `/portfolio/<slug>`) — the AI-assisted chip appears in the badge row alongside category + status.
3. Insight detail pages still show the block-variant disclosure as before.
4. Voice check: no use of "ship" / "shipping" in any new copy.

### Files touched

- `src/data/projects.qa-overrides.js` *(new)*
- `src/data/projects.ts` *(map shared projects through overrides)*
- `src/pages/EditorialPolicy.tsx` *(copy revisions)*
