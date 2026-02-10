export default function sitemap() {
  return [
    {
      url: "https://deisolatiecheck.nl",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://deisolatiecheck.nl/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://deisolatiecheck.nl/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://deisolatiecheck.nl/blog/isde-subsidie-2026-complete-gids",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://deisolatiecheck.nl/blog/dakisolatie-kosten-besparing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://deisolatiecheck.nl/blog/combinatiebonus-dubbele-subsidie",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://deisolatiecheck.nl/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
