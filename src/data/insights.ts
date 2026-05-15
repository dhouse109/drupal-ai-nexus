import {
  articles as sharedArticles,
} from "./insights.shared.js";
import { applyInsightEditorialOverrides } from "./insights.editorial-overrides.js";

export type InsightBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | {
      type: "callout";
      variant: "guidance" | "warning" | "insight";
      title: string;
      text: string;
    }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export interface InsightArticle {
  slug: string;
  category: string;
  categoryId?: string;
  title: string;
  description: string;
  readTime: string;
  publishedDate: string;
  keyTakeaway: string;
  intro: string;
  featured?: boolean;
  status: "published" | "draft";
  body: InsightBlock[];
  themes?: string[];
  publicationChannels?: ("109.studio" | "damien.house")[];
  relatedProjectSlugs?: string[];
  relatedProjectIds?: string[];
  authorName?: string;
  authorRole?: string;
  reviewedBy?: string;
  aiAssisted?: boolean;
  aiDisclosureLabel?: string;
  aiDisclosureNote?: string;
  lastReviewedAt?: string;
}

export const articles = sharedArticles.map(applyInsightEditorialOverrides) as InsightArticle[];

export const getArticleBySlug = (slug: string): InsightArticle | undefined =>
  articles.find((article) => article.slug === slug && article.status === "published");

export const getFeaturedArticle = (): InsightArticle | undefined =>
  articles.find((article) => article.featured && article.status === "published");

export const getPublishedArticles = (): InsightArticle[] =>
  articles.filter((article) => article.status === "published");

export const getDraftArticles = (): InsightArticle[] =>
  articles.filter((article) => article.status === "draft");

export const getNonFeaturedArticles = (): InsightArticle[] =>
  articles.filter((article) => article.status === "published" && !article.featured);
