export const siteIdentity = {
  name: "109.studio",
  url: "https://109.studio",
  description:
    "109.studio is a principal-led practice for platform architecture, product engineering, and applied AI work.",
  businessDescription:
    "Principal-led platform architecture, product engineering, and applied AI strategy for organizations that need senior technical leadership.",
  email: "hello@109.studio",
  founder: {
    name: "Damien House",
    title: "Principal, 109.studio",
    url: "https://109.studio/about",
  },
  socialProfiles: [
    "https://www.linkedin.com/company/109studio",
    "https://github.com/109studio",
    "https://www.youtube.com/@109studiotube",
  ],
  schemaIds: {
    organization: "https://109.studio/#organization",
    person: "https://109.studio/#person",
    website: "https://109.studio/#website",
    professionalService: "https://109.studio/#professional-service",
  },
} as const;

export const practiceAreas = [
  "Platform architecture",
  "Product engineering",
  "Drupal architecture",
  "Enterprise CMS architecture",
  "Applied AI strategy",
  "AI implementation",
  "Workflow engineering",
  "Technical strategy",
  "Fractional technical leadership",
] as const;

export const audienceSegments = [
  "Founders and business leaders who need senior technical judgment",
  "Technical leaders who need architecture, delivery, or applied AI support",
  "Drupal and enterprise CMS teams evaluating AI-enabled platform workflows",
] as const;

export const coreOfferings = [
  {
    name: "Platform Architecture",
    description: "Senior architecture guidance for complex platforms, CMS ecosystems, and delivery systems.",
  },
  {
    name: "Product Engineering",
    description: "Principal-led product engineering support for teams that need practical execution and technical direction.",
  },
  {
    name: "Applied AI Strategy",
    description: "Governed AI strategy and workflow engineering for teams introducing AI into real operating systems.",
  },
  {
    name: "Drupal AI Strategy",
    description: "Applied AI strategy and implementation support for Drupal teams and enterprise CMS workflows.",
  },
] as const;
