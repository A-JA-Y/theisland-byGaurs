export type NewsMeta = {
  id: string;

  /* SEO */
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  altText?: string;

  /* Display */
  image: string;
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];

  /* Extra */
  location?: string;
  newsType?: string;

  /* Structured Data */
  schemaMarkup?: Record<string, unknown>;
  faqSchema?: Record<string, unknown>;
};

const NewsData: NewsMeta[] = [
  {
    id: "news-1",

    /* SEO */
    title:
      "The Islands by Gaurs Opens Select Bookings Inside Jaypee Greens, Pari Chowk",
    slug: "the-islands-by-gaurs-opens-select-bookings-2026",
    excerpt:
      "Gaurs Group opens select bookings for The Islands — 506 golf-view condominiums across 9 towers inside the established Jaypee Greens township at Pari Chowk.",
    metaTitle:
      "The Islands by Gaurs Opens Select Bookings | Jaypee Greens, Pari Chowk",
    metaDescription:
      "The Islands by Gaurs, a 506-unit golf-view condominium development by Gaurs Group inside Jaypee Greens, Pari Chowk, has opened select bookings. RERA No. UPRERAPRJ734569.",
    keywords: [
      "The Islands by Gaurs",
      "Gaurs Group",
      "Jaypee Greens Pari Chowk",
      "Greater Noida luxury condominiums",
      "UPRERAPRJ734569",
    ],
    canonical:
      "https://www.theislandsbygaurs.in/news/the-islands-by-gaurs-opens-select-bookings-2026",

    /* Display */
    image: "/news-1.webp",
    altText:
      "The Islands by Gaurs tower boulevard inside Jaypee Greens, Pari Chowk, Greater Noida",
    date: "2026-07-06",
    updatedAt: "2026-07-06",
    author: "Admin",
    category: "Real Estate News",
    readTime: "5 min read",
    featured: true,
    tags: [
      "greater noida",
      "jaypee greens",
      "pari chowk",
      "the islands by gaurs",
      "gaurs group",
      "real estate",
    ],

    /* Extra */
    location: "Greater Noida",
    newsType: "Project Update",

    /* Structured Data */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "The Islands by Gaurs Opens Select Bookings Inside Jaypee Greens, Pari Chowk",
      description:
        "Gaurs Group opens select bookings for The Islands — 506 golf-view condominiums across 9 towers inside the established Jaypee Greens township at Pari Chowk.",
      image: ["https://www.theislandsbygaurs.in/news-1.webp"],
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      author: {
        "@type": "Person",
        name: "Admin",
      },
      publisher: {
        "@type": "Organization",
        name: "The Islands by Gaurs",
        logo: {
          "@type": "ImageObject",
          url: "https://www.theislandsbygaurs.in/news-1.webp",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.theislandsbygaurs.in/news/the-islands-by-gaurs-opens-select-bookings-2026",
      },
      articleSection: "Real Estate",
      keywords:
        "The Islands by Gaurs, Jaypee Greens, Pari Chowk, Gaurs Group, Greater Noida",
      about: [
        {
          "@type": "Place",
          name: "Pari Chowk, Greater Noida",
        },
        {
          "@type": "Residence",
          name: "The Islands by Gaurs",
        },
      ],
    },
  },
];

export default NewsData;
