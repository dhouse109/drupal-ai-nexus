export type JsonLd = Record<string, unknown>;

export type WebPageSchemaType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

export {
  createServiceSchema,
  createWebPageSchema,
  organizationSchema,
  personSchema,
  professionalServiceSchema,
  siteName,
  siteUrl,
  websiteSchema,
} from "./schema.shared.js";
