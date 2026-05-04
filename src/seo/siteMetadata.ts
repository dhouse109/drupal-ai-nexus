import {
  createServiceSchema,
  createWebPageSchema,
  organizationSchema,
  personSchema,
  professionalServiceSchema,
  siteName,
  siteUrl,
  websiteSchema,
  type JsonLd,
} from "./schema";

export type RouteMetadata = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  schema?: JsonLd[];
};

const page = ({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage,
  schema = [],
}: RouteMetadata): RouteMetadata => ({
  title,
  description,
  path,
  ogTitle: ogTitle ?? title,
  ogDescription: ogDescription ?? description,
  ogType,
  ogImage,
  schema: [createWebPageSchema({ path, name: title, description }), ...schema],
});

export const defaultMetadata: RouteMetadata = page({
  title: "109.studio | Platform Architecture, Product Engineering, and Applied AI",
  description:
    "Principal-led platform architecture, product engineering, and applied AI strategy for organizations that need senior technical leadership.",
  path: "/",
  ogDescription: "109.studio is Damien House’s principal-led practice for platform architecture, product engineering, and applied AI work.",
  schema: [organizationSchema, personSchema, websiteSchema, professionalServiceSchema],
});

export const routeMetadata: Record<string, RouteMetadata> = {
  "/": defaultMetadata,
  "/about": page({
    title: "About 109.studio | Principal-Led Technical Strategy and Product Engineering",
    description:
      "Learn about Damien House and the principal-led technical strategy, platform architecture, and product engineering practice behind 109.studio.",
    path: "/about",
    schema: [organizationSchema, personSchema],
  }),
  "/services": page({
    title: "Services | Platform Architecture, Product Engineering, and Applied AI",
    description:
      "Explore how 109.studio supports platform architecture, product engineering, applied AI, technical advisory, and delivery leadership.",
    path: "/services",
    schema: [
      createServiceSchema({
        path: "/services",
        name: "Platform Architecture, Product Engineering, and Applied AI Services",
        description:
          "Principal-led technical strategy and implementation support across platform architecture, product engineering, and applied AI.",
        serviceType: ["Platform architecture", "Product engineering", "Applied AI strategy"],
      }),
    ],
  }),
  "/offerings": page({
    title: "Offerings | Strategic Technical Services from 109.studio",
    description:
      "Review focused starting points for working with 109.studio, from architecture assessment to applied AI and strategic technical advisory.",
    path: "/offerings",
    schema: [
      createServiceSchema({
        path: "/offerings",
        name: "Strategic Technical Offerings",
        description:
          "Focused engagement models for architecture assessment, technical strategy, product engineering, and applied AI adoption.",
        serviceType: ["Technical advisory", "Architecture assessment", "Applied AI strategy"],
      }),
    ],
  }),
  "/architecture-audit": page({
    title: "Two-Week Architecture Audit | 109.studio",
    description:
      "A focused architecture assessment for teams that need a senior technical read on platform health, delivery risk, and practical next steps.",
    path: "/architecture-audit",
    schema: [
      createServiceSchema({
        path: "/architecture-audit",
        name: "Two-Week Architecture Audit",
        description:
          "A focused architecture assessment that surfaces platform risk, delivery constraints, and practical next steps.",
        serviceType: "Architecture assessment",
      }),
    ],
  }),
  "/applied-ai": page({
    title: "Applied AI Strategy and Workflow Engineering | 109.studio",
    description:
      "Applied AI strategy and workflow engineering for teams that need practical, governed ways to introduce AI into real operating systems.",
    path: "/applied-ai",
    schema: [
      createServiceSchema({
        path: "/applied-ai",
        name: "Applied AI Strategy and Workflow Engineering",
        description:
          "Practical applied AI strategy, workflow design, and implementation support for teams adopting AI responsibly.",
        serviceType: ["Applied AI strategy", "Workflow engineering", "AI implementation"],
      }),
    ],
  }),
  "/drupal-ai": page({
    title: "Drupal AI Strategy, Architecture, and Implementation | 109.studio",
    description:
      "Applied AI strategy and implementation for Drupal teams working through architecture, governance, editorial workflows, and practical adoption.",
    path: "/drupal-ai",
    schema: [
      createServiceSchema({
        path: "/drupal-ai",
        name: "Drupal AI Strategy, Architecture, and Implementation",
        description:
          "Applied AI strategy and implementation support for Drupal teams connecting AI capabilities with governed editorial and platform workflows.",
        serviceType: ["Drupal architecture", "Applied AI strategy", "AI implementation"],
      }),
    ],
  }),
  "/ai-in-practice": page({
    title: "AI in Practice | Field Notes from 109.studio",
    description:
      "Field notes, experiments, and practical observations from 109.studio on applied AI, platform systems, and workflow design.",
    path: "/ai-in-practice",
  }),
  "/portfolio": page({
    title: "Portfolio | Selected Work and Technical Case Studies from 109.studio",
    description:
      "Selected work, technical case studies, and proof points from principal-led platform architecture, product engineering, and applied AI engagements.",
    path: "/portfolio",
  }),
  "/contact": page({
    title: "Contact 109.studio | Start a Strategic Technical Conversation",
    description:
      "Start a conversation with 109.studio about platform architecture, product engineering, applied AI, or a technical decision that needs senior judgment.",
    path: "/contact",
  }),
  "/insights": page({
    title: "Insights | 109.studio",
    description:
      "Writing and perspective from 109.studio on platform architecture, product engineering, applied AI, and technical strategy.",
    path: "/insights",
  }),
};

export const notFoundMetadata: RouteMetadata = page({
  title: "Page Not Found | 109.studio",
  description: "The requested page could not be found on 109.studio.",
  path: "/404",
});

export const getRouteMetadata = (pathname: string): RouteMetadata => routeMetadata[pathname] ?? notFoundMetadata;

export const absoluteUrl = (path: string): string => new URL(path, siteUrl).toString();

export { siteName, siteUrl };
