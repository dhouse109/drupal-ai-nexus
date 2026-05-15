## Remove duplicate AI-assisted disclosure on Project detail hero

In `src/components/projects/ProjectDetailHero.tsx`:

1. Compute `const shouldShowBlockDisclosure = project.aiAssisted && SHOW_BLOCK_DISCLOSURE_STATUSES.has(project.status);` at the top of the component body.
2. Change the inline disclosure condition in the metadata row from `{project.aiAssisted && (...)}` to `{project.aiAssisted && !shouldShowBlockDisclosure && (...)}`.
3. Replace the block disclosure condition `{project.aiAssisted && SHOW_BLOCK_DISCLOSURE_STATUSES.has(project.status) && (...)}` with `{shouldShowBlockDisclosure && (...)}`.

No other changes: category label, status badge, headline, subheadline, theme chips, block disclosure copy, and the `publicationChannels` omission comment all stay as-is.

### Verification
- Abstracted/planned/lab/internal/sample/ecosystem projects: only the block disclosure renders below the subheadline.
- Real past-work projects (with `aiAssisted`): only the inline chip renders in the metadata row.
- No project detail hero renders "AI-assisted · Human-reviewed" twice.