export {
  PROJECT_CATEGORIES,
  PROJECT_STATUSES,
  PUBLICATION_CHANNELS,
  getCategoryById,
  getStatusById,
} from "./taxonomy.shared.js";

export type ProjectCategoryId =
  | "product-platform-architecture"
  | "applied-ai-workflow-systems"
  | "developer-tooling-delivery-systems"
  | "rd-labs-learning-experiments";

export type ProjectStatusId =
  | "abstracted-past-work"
  | "planned-service-proof"
  | "lab"
  | "sample-only"
  | "real-past-work"
  | "ecosystem-contribution"
  | "internal-tool";

export type PublicationChannel = "109.studio" | "damien.house";

export type StatusTone = "neutral" | "accent" | "muted";
