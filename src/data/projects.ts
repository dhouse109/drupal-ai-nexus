import {
  projects as sharedProjects,
  getAllProjects as sharedGetAll,
  getProjectBySlug as sharedGetBySlug,
  getFeaturedProject as sharedGetFeatured,
  getProjectsByCategory as sharedGetByCategory,
  getProjectsLinkingToInsightSlug as sharedGetByInsight,
} from "./projects.shared.js";
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
}

export const projects = sharedProjects as Project[];

export const getAllProjects = (): Project[] => sharedGetAll() as Project[];

export const getProjectBySlug = (slug: string): Project | undefined =>
  sharedGetBySlug(slug) as Project | undefined;

export const getFeaturedProject = (): Project | undefined =>
  sharedGetFeatured() as Project | undefined;

export const getProjectsByCategory = (
  categoryId: ProjectCategoryId | "all" | undefined,
): Project[] => sharedGetByCategory(categoryId) as Project[];

export const getProjectsLinkingToInsightSlug = (slug: string): Project[] =>
  sharedGetByInsight(slug) as Project[];
