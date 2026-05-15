import {
  projects as sharedProjects,
} from "./projects.shared.js";
import { applyProjectQaOverrides } from "./projects.qa-overrides.js";
import type {
  ProjectCategoryId,
  ProjectStatusId,
  PublicationChannel,
  StatusTone,
} from "./taxonomy";

export interface ProjectCTA {
  text: string;
  primaryHref: string;
  secondaryHref: string;
}

export interface ProjectDetail {
  headline: string;
  subheadline: string;
  cardTitle: string;
  cardSummary: string;
  problem: string;
  approach: string;
  resultValue: string;
  proofArtifact: string;
  relatedInsightsIntro: string;
  cta: ProjectCTA;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  status: ProjectStatusId;
  statusLabel: string;
  statusTone: StatusTone;
  primaryCategory: ProjectCategoryId;
  primaryCategoryLabel: string;
  secondaryCategories: ProjectCategoryId[];
  themes: string[];
  publicationChannels: PublicationChannel[];
  relatedOffer: string;
  relatedInsightSlugs: string[];
  relatedInsightIds: string[];
  detail: ProjectDetail;
  editorialGuardrail: string;
  confidence: "high" | "medium" | "low";
  overclaimingRisk: "high" | "medium" | "low";
  featured?: boolean;
  aiAssisted?: boolean;
  aiDisclosureLabel?: string;
  aiDisclosureNote?: string;
  reviewedBy?: string;
  lastReviewedAt?: string;
}

export const projects = (sharedProjects as Project[]).map(applyProjectQaOverrides) as Project[];

export const getAllProjects = (): Project[] => projects;

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProject = (): Project | undefined =>
  projects.find((p) => p.featured);

export const getProjectsByCategory = (
  categoryId: ProjectCategoryId | "all" | undefined,
): Project[] => {
  if (!categoryId || categoryId === "all") return projects;
  return projects.filter(
    (p) =>
      p.primaryCategory === categoryId ||
      p.secondaryCategories.includes(categoryId),
  );
};

export const getProjectsLinkingToInsightSlug = (slug: string): Project[] =>
  projects.filter((p) => p.relatedInsightSlugs.includes(slug));
