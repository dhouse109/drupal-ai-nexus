// Canonical editorial overlay for Projects.
//
// Mirrors src/data/insights.editorial-overrides.js: every project is treated
// as AI-assisted by default so the disclosure chip appears on each project
// detail page. Project-level fields win when explicitly set, so a project can
// opt out by setting `aiAssisted: false` on the source record.

const DEFAULT_EDITORIAL = {
  aiAssisted: true,
  aiDisclosureLabel: "AI-assisted · Human-reviewed",
  aiDisclosureNote:
    "Drafted with AI assistance from Damien House's research and prompts. Reviewed and edited before publication.",
  reviewedBy: "Damien House",
};

export const applyProjectEditorialOverrides = (project) => ({
  ...project,
  aiAssisted:
    project.aiAssisted !== undefined
      ? project.aiAssisted
      : DEFAULT_EDITORIAL.aiAssisted,
  aiDisclosureLabel:
    project.aiDisclosureLabel ?? DEFAULT_EDITORIAL.aiDisclosureLabel,
  aiDisclosureNote:
    project.aiDisclosureNote ?? DEFAULT_EDITORIAL.aiDisclosureNote,
  reviewedBy: project.reviewedBy ?? DEFAULT_EDITORIAL.reviewedBy,
  lastReviewedAt: project.lastReviewedAt,
});
