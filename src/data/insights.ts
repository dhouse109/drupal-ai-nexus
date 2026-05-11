import {
  articles as sharedArticles,
  getArticleBySlug as getSharedArticleBySlug,
  getDraftArticles as getSharedDraftArticles,
  getFeaturedArticle as getSharedFeaturedArticle,
  getNonFeaturedArticles as getSharedNonFeaturedArticles,
  getPublishedArticles as getSharedPublishedArticles,
} from "./insights.shared.js";

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
}

export const articles = sharedArticles as InsightArticle[];

export const getArticleBySlug = (slug: string): InsightArticle | undefined =>
  getSharedArticleBySlug(slug) as InsightArticle | undefined;

export const getFeaturedArticle = (): InsightArticle | undefined =>
  getSharedFeaturedArticle() as InsightArticle | undefined;

export const getPublishedArticles = (): InsightArticle[] =>
  getSharedPublishedArticles() as InsightArticle[];

export const getDraftArticles = (): InsightArticle[] =>
  getSharedDraftArticles() as InsightArticle[];

export const getNonFeaturedArticles = (): InsightArticle[] =>
  getSharedNonFeaturedArticles() as InsightArticle[];
