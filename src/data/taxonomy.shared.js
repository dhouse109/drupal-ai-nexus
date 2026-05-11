// Canonical taxonomy for Projects (and, later, Insights).
// Keep this file as plain JS so build-time scripts can import it.

export const PROJECT_CATEGORIES = [
  {
    id: "product-platform-architecture",
    label: "Product & Platform Architecture",
    shortLabel: "Product & Platform",
  },
  {
    id: "applied-ai-workflow-systems",
    label: "Applied AI & Workflow Systems",
    shortLabel: "Applied AI",
  },
  {
    id: "developer-tooling-delivery-systems",
    label: "Developer Tooling & Delivery Systems",
    shortLabel: "Tooling & Delivery",
  },
  {
    id: "rd-labs-learning-experiments",
    label: "R&D, Labs & Learning Experiments",
    shortLabel: "R&D & Labs",
  },
];

export const getCategoryById = (id) =>
  PROJECT_CATEGORIES.find((c) => c.id === id);

export const PROJECT_STATUSES = [
  { id: "abstracted-past-work", label: "Abstracted Past Work", tone: "neutral" },
  { id: "planned-service-proof", label: "Planned Service Proof", tone: "accent" },
  { id: "lab", label: "Lab", tone: "accent" },
  { id: "sample-only", label: "Sample Only", tone: "muted" },
  { id: "real-past-work", label: "Past Work", tone: "neutral" },
  { id: "ecosystem-contribution", label: "Open Source / Ecosystem", tone: "neutral" },
  { id: "internal-tool", label: "Internal Tool", tone: "muted" },
];

export const getStatusById = (id) =>
  PROJECT_STATUSES.find((s) => s.id === id);

export const PUBLICATION_CHANNELS = ["109.studio", "damien.house"];
