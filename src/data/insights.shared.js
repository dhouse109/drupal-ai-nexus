export const articles = [
  {
    slug: "applied-ai-starts-with-the-workflow",
    category: "Applied AI",
    title: "Applied AI starts with the workflow, not the model",
    description:
      "A practical look at how teams get more value from AI when they start with the publishing, search, or delivery problem they actually need to improve.",
    readTime: "6 min read",
    publishedDate: "April 2026",
    featured: true,
    status: "published",
    keyTakeaway:
      "Teams that get real value from AI start by naming the workflow they want to improve. The model selection comes later, and it usually matters less than the surrounding system.",
    intro:
      "Most AI conversations begin with a model. The more useful ones begin with a workflow. When a team can describe the publishing, search, or delivery problem in front of them in plain language, the technical choices that follow get much easier to make and much easier to defend.",
    body: [
      {
        type: "paragraph",
        text: "There is a familiar pattern when AI enters a roadmap conversation. Someone names a model, someone else names a vendor, and within a few minutes the discussion is about capabilities and pricing tiers rather than about the work the team is actually responsible for operating. The result is usually a pilot that demos well and changes very little.",
      },
      {
        type: "paragraph",
        text: "The teams getting durable value from AI tend to invert that order. They start with a workflow they already understand, and they look for the one or two places where review, retrieval, or generation can take real friction out of the day.",
      },
      {
        type: "heading",
        text: "Start with the workflow, not the capability",
      },
      {
        type: "paragraph",
        text: "A workflow is concrete. It has owners, inputs, outputs, and a rhythm. When you describe AI work against a workflow, the conversation gets sharper because you can point to where the output lands, who reviews it, and what it replaces or augments.",
      },
      {
        type: "callout",
        variant: "guidance",
        title: "A useful framing question",
        text: "Before naming a model, name the workflow. What is the input, who owns the output, and where does the result need to land for it to matter?",
      },
      {
        type: "heading",
        text: "Reviewable work beats impressive work",
      },
      {
        type: "paragraph",
        text: "AI output that cannot be reviewed by the people responsible for the workflow tends to stall. The teams that get furthest treat AI as a draft layer that a human can edit, approve, or override inside the same surface they already use.",
      },
      {
        type: "list",
        items: [
          "The output appears in a place the owner already checks",
          "The owner can edit or reject it without leaving that surface",
          "The system records what was kept, changed, or discarded",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Watch out for",
        text: "Pilots that look impressive in a demo but produce work nobody on the team is set up to review. That gap is usually where the value disappears.",
      },
      {
        type: "heading",
        text: "The model is rarely the constraint",
      },
      {
        type: "paragraph",
        text: "Once the workflow is clear, model choice becomes a tradeoff between latency, cost, and quality on a specific task. That is a useful conversation to have, but it is not the conversation that determines whether the work becomes part of how the team operates.",
      },
      {
        type: "quote",
        text: "The interesting question is not which model. It is which decision the model is helping a person make, and whether the surrounding system makes that decision easier to live with.",
      },
      {
        type: "heading",
        text: "What this looks like in practice",
      },
      {
        type: "paragraph",
        text: "On content-rich platforms it usually means tying generation to the editorial flow that already exists, with retrieval grounded in structured content. On delivery work it means assistive tools that respect the team's release process rather than bypassing it. In both cases, the AI sits inside the workflow rather than alongside it.",
      },
      {
        type: "callout",
        variant: "insight",
        title: "Key insight",
        text: "Applied AI is mostly a workflow design problem with a model attached. Get the workflow right and the model choices become tractable. Get the workflow wrong and no model will save the project.",
      },
    ],
  },
  {
    slug: "modernization-architecture-and-delivery",
    category: "Platform work",
    title: "Modernization is easier when architecture and delivery stay connected",
    description:
      "Why platform modernization work goes better when migration planning, technical foundations, and delivery systems are treated as part of the same problem.",
    readTime: "5 min read",
    publishedDate: "April 2026",
    status: "draft",
    keyTakeaway:
      "Modernization slows down when architecture decisions and delivery decisions are owned by different conversations. Keeping them connected is what makes the work feel finishable.",
    intro:
      "Notes in progress. This essay will explore why modernization plans benefit from treating architecture and delivery as one problem rather than two.",
    body: [],
  },
  {
    slug: "reviewable-ai-work",
    category: "Applied AI",
    title: "What reviewable AI work looks like on a real team",
    description:
      "A short essay on keeping AI output visible, editable, and grounded in the workflows people are already responsible for operating.",
    readTime: "4 min read",
    publishedDate: "April 2026",
    status: "draft",
    keyTakeaway:
      "AI output that cannot be reviewed by the people who own the workflow tends to stall. Reviewability is a design decision, not a feature.",
    intro:
      "Notes in progress. This essay will detail the patterns that make AI work reviewable inside a real team's daily operating rhythm.",
    body: [],
  },
  {
    slug: "search-and-content-structure",
    category: "Search and retrieval",
    title: "Search gets better when content structure does more of the work",
    description:
      "How structured content, retrieval, and AI-assisted querying can reinforce each other on content-rich platforms without turning search into a black box.",
    readTime: "5 min read",
    publishedDate: "April 2026",
    status: "draft",
    keyTakeaway:
      "The fastest way to improve search on a content platform is usually to give the content more structure, not to add another retrieval layer.",
    intro:
      "Notes in progress. This essay will look at how structured content and retrieval reinforce each other on content-rich platforms.",
    body: [],
  },
  {
    slug: "technical-path-delivery",
    category: "Delivery",
    title: "The technical path matters: reducing friction in day-to-day delivery",
    description:
      "A practical note on environments, deployments, documentation, and the infrastructure decisions that shape how confidently teams can release software.",
    readTime: "4 min read",
    publishedDate: "April 2026",
    status: "draft",
    keyTakeaway:
      "Release confidence is mostly a function of small, accumulated decisions about environments, documentation, and feedback loops.",
    intro:
      "Notes in progress. This essay will cover the small infrastructure decisions that make day-to-day delivery feel steady.",
    body: [],
  },
  {
    slug: "research-reuse-publishing-patterns",
    category: "Open source and practice",
    title: "Research, reuse, and why some patterns are worth publishing",
    description:
      "An explanation of how internal experiments, delivery lessons, and open-source habits can become better starting points for future work.",
    readTime: "3 min read",
    publishedDate: "April 2026",
    status: "draft",
    keyTakeaway:
      "Patterns become more valuable when they are written down and shared, even when the original context is narrow.",
    intro:
      "Notes in progress. This essay will explore how internal patterns become reusable when they are documented and published.",
    body: [],
  },
];

export const getArticleBySlug = (slug) =>
  articles.find((article) => article.slug === slug && article.status === "published");

export const getFeaturedArticle = () =>
  articles.find((article) => article.featured && article.status === "published");

export const getPublishedArticles = () =>
  articles.filter((article) => article.status === "published");

export const getDraftArticles = () =>
  articles.filter((article) => article.status === "draft");

export const getNonFeaturedArticles = () =>
  articles.filter((article) => !article.featured && article.status === "published");
