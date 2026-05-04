export type JsonLd = Record<string, unknown>;

export const siteUrl = "https://109.studio";
export const siteName = "109.studio";

export const organizationSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  founder: {
    "@id": `${siteUrl}/#person`,
  },
  description:
    "109.studio is a principal-led practice for platform architecture, product engineering, and applied AI work.",
  sameAs: ["https://www.linkedin.com/company/109studio", "https://github.com/109studio", "https://www.youtube.com/@109studiotube"],
};

export const personSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Damien House",
  jobTitle: "Principal, 109.studio",
  worksFor: {
    "@id": `${siteUrl}/#organization`,
  },
  knowsAbout: [
    "Platform architecture",
    "Product engineering",
    "Drupal",
    "Applied AI",
    "Technical strategy",
    "Enterprise CMS architecture",
    "Workflow engineering",
  ],
};

export const websiteSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export const professionalServiceSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#professional-service`,
  name: siteName,
  url: siteUrl,
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
  founder: {
    "@id": `${siteUrl}/#person`,
  },
  description:
    "Principal-led platform architecture, product engineering, and applied AI strategy for organizations that need senior technical leadership.",
  areaServed: "United States",
  serviceType: ["Platform architecture", "Product engineering", "Applied AI strategy", "Drupal architecture"],
};

export const createWebPageSchema = ({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}${path}#webpage`,
  url: `${siteUrl}${path}`,
  name,
  description,
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  about: {
    "@id": `${siteUrl}/#organization`,
  },
});

export const createServiceSchema = ({
  path,
  name,
  description,
  serviceType,
}: {
  path: string;
  name: string;
  description: string;
  serviceType: string | string[];
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}${path}#service`,
  url: `${siteUrl}${path}`,
  name,
  description,
  serviceType,
  provider: {
    "@id": `${siteUrl}/#organization`,
  },
});
