import { audienceSegments, coreOfferings, practiceAreas, siteIdentity } from "./siteIdentity";

export type JsonLd = Record<string, unknown>;

export const siteUrl = siteIdentity.url;
export const siteName = siteIdentity.name;

const reference = (id: string) => ({ "@id": id });

export const organizationSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": siteIdentity.schemaIds.organization,
  name: siteIdentity.name,
  url: siteIdentity.url,
  description: siteIdentity.description,
  email: siteIdentity.email,
  founder: reference(siteIdentity.schemaIds.person),
  sameAs: [...siteIdentity.socialProfiles],
  knowsAbout: [...practiceAreas],
};

export const personSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": siteIdentity.schemaIds.person,
  name: siteIdentity.founder.name,
  url: siteIdentity.founder.url,
  jobTitle: siteIdentity.founder.title,
  worksFor: reference(siteIdentity.schemaIds.organization),
  affiliation: reference(siteIdentity.schemaIds.organization),
  knowsAbout: [...practiceAreas],
  sameAs: [...siteIdentity.socialProfiles],
};

export const websiteSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": siteIdentity.schemaIds.website,
  name: siteIdentity.name,
  url: siteIdentity.url,
  description: siteIdentity.description,
  publisher: reference(siteIdentity.schemaIds.organization),
  author: reference(siteIdentity.schemaIds.person),
  inLanguage: "en-US",
};

export const professionalServiceSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": siteIdentity.schemaIds.professionalService,
  name: siteIdentity.name,
  url: siteIdentity.url,
  description: siteIdentity.businessDescription,
  email: siteIdentity.email,
  provider: reference(siteIdentity.schemaIds.organization),
  founder: reference(siteIdentity.schemaIds.person),
  areaServed: "United States",
  audience: audienceSegments.map((audienceType) => ({
    "@type": "Audience",
    audienceType,
  })),
  serviceType: [...practiceAreas],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "109.studio Services",
    itemListElement: coreOfferings.map((offering) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: offering.name,
        description: offering.description,
        provider: reference(siteIdentity.schemaIds.organization),
      },
    })),
  },
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
  isPartOf: reference(siteIdentity.schemaIds.website),
  about: reference(siteIdentity.schemaIds.organization),
  author: reference(siteIdentity.schemaIds.person),
  publisher: reference(siteIdentity.schemaIds.organization),
  inLanguage: "en-US",
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
  provider: reference(siteIdentity.schemaIds.organization),
  isRelatedTo: reference(siteIdentity.schemaIds.professionalService),
});
