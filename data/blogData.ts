export type BlogMeta = {
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
  tags: string[];
  featured: boolean;

  /* JSON-LD */
  schemaMarkup?:
  | Record<string, unknown>
  | Record<string, unknown>[];
  faqSchema?: Record<string, unknown>;
};

export const blogData: BlogMeta[] = [
  {
    id: "blog-1",

    /* SEO */
    title: "The Islands by Gaurs at Jaypee Greens: Complete Buyer's Guide 2026",
    slug: "the-islands-by-gaurs-jaypee-greens-buyers-guide-2026",
    excerpt:
      "Configurations, amenities, location advantages and everything you need to know before booking a residence at The Islands by Gaurs.",
    metaTitle:
      "The Islands by Gaurs Buyer's Guide 2026 | Configurations, Amenities & Location",
    metaDescription:
      "A complete buyer's guide to The Islands by Gaurs — 4, 5 & 6 BHK condominiums at Jaypee Greens, Pari Chowk. Configurations, amenities, location and investment perspective.",
    keywords: [
      "The Islands by Gaurs",
      "The Islands by Gaurs Jaypee Greens",
      "The Islands by Gaurs price",
      "Gaurs Group Greater Noida",
      "Luxury condominiums Pari Chowk",
    ],
    canonical:
      "https://www.theislandsbygaurs.in/blogs/the-islands-by-gaurs-jaypee-greens-buyers-guide-2026",

    /* Display */
    image: "/blog-1.webp",
    altText: "Luxury golf-view condominium towers at The Islands by Gaurs, Jaypee Greens",
    date: "2026-07-01",
    updatedAt: "2026-07-01",
    author: "Admin",
    category: "Real Estate",
    readTime: "10 min read",
    tags: ["jaypee greens", "pari chowk", "gaurs group", "greater noida", "luxury condominiums"],
    featured: true,

    /* JSON-LD */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "The Islands by Gaurs at Jaypee Greens: Complete Buyer's Guide",
      author: { "@type": "Person", name: "Admin" },
      publisher: { "@type": "Organization", name: "The Islands by Gaurs" },
    },
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What configurations are available at The Islands by Gaurs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Islands by Gaurs offers 4, 5 & 6 BHK condominiums across 506 units in 9 towers, with saleable areas ranging from approximately 3,595 sq.ft. (Tower E) to 5,962 sq.ft. (Tower A Premium), plus a 5 BHK in Blocks H-01/I-01 and curated 6 BHK / duplex / penthouse options."
          }
        },
        {
          "@type": "Question",
          "name": "Where is The Islands by Gaurs located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Islands by Gaurs is located inside the 452-acre Jaypee Greens township at Pari Chowk, Greater Noida — minutes from the Pari Chowk and Alpha 1 metro stations and the Noida–Greater Noida Expressway."
          }
        },
        {
          "@type": "Question",
          "name": "How many towers and units does The Islands by Gaurs have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The project has 9 towers rising up to 37 storeys, with only 506 condominiums in total — just two per floor."
          }
        },
        {
          "@type": "Question",
          "name": "What amenities does The Islands by Gaurs offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amenities are organised across three zones — The Ivory Coast open-air activity zone, The Gold Coast 30,000 sq.ft. clubhouse, and The Orbit, a skywalk 90 metres above the ground connecting 8 towers."
          }
        },
        {
          "@type": "Question",
          "name": "What is the RERA registration number of The Islands by Gaurs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Islands by Gaurs is registered under UPRERAPRJ734569, verifiable at up-rera.in/projects."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the developer behind The Islands by Gaurs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Islands by Gaurs is developed by Gaurs Group, which has been active in Indian real estate since 1995, with 65,000+ delivered units and over one lakh happy families across the NCR."
          }
        }
      ]
    }
  },
  {
    id: "pari-chowk-jaypee-greens-investment-2026",

    /* SEO */
    title:
      "Why Pari Chowk & Jaypee Greens Are Among Greater Noida's Smartest Addresses in 2026",
    slug: "pari-chowk-jaypee-greens-smart-investment-2026",
    excerpt:
      "A look at why an address inside the established Jaypee Greens township at Pari Chowk combines lifestyle and long-term value for buyers of The Islands by Gaurs.",
    metaTitle:
      "Pari Chowk & Jaypee Greens Real Estate 2026 | The Islands by Gaurs",
    metaDescription:
      "Why Pari Chowk and Jaypee Greens are drawing attention from Greater Noida homebuyers in 2026 — connectivity, the upcoming Noida International Airport, and life inside an established golf township.",
    keywords: [
      "Pari Chowk real estate",
      "Jaypee Greens Greater Noida",
      "The Islands by Gaurs",
      "Gaurs Group",
      "Noida International Airport real estate",
      "Greater Noida investment 2026",
    ],
    canonical:
      "https://www.theislandsbygaurs.in/blogs/pari-chowk-jaypee-greens-smart-investment-2026",
    altText:
      "Golf course and township view near Pari Chowk, Jaypee Greens, Greater Noida",

    /* Display */
    image: "/blog-2.webp",
    date: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "Admin",
    category: "Real Estate Investment",
    readTime: "8 min read",
    tags: ["pari chowk", "jaypee greens", "the islands by gaurs", "greater noida", "gaurs group"],
    featured: true,

    /* JSON-LD */
    schemaMarkup: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline":
          "Why Pari Chowk & Jaypee Greens Are Among Greater Noida's Smartest Addresses in 2026",
        "description":
          "Why an address inside the established Jaypee Greens township at Pari Chowk combines lifestyle and long-term value for buyers considering The Islands by Gaurs.",
        "image": "https://www.theislandsbygaurs.in/blog-2.webp",
        "author": { "@type": "Person", "name": "Admin" },
        "publisher": {
          "@type": "Organization",
          "name": "The Islands by Gaurs",
          "logo": { "@type": "ImageObject", "url": "https://www.theislandsbygaurs.in/blog-2.webp" }
        },
        "datePublished": "2026-07-05",
        "dateModified": "2026-07-05",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.theislandsbygaurs.in/blogs/pari-chowk-jaypee-greens-smart-investment-2026"
        },
        "articleSection": "Real Estate Investment",
        "inLanguage": "en-IN"
      }
    ],
    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is The Islands by Gaurs from the upcoming Noida International Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The upcoming Noida International Airport at Jewar is approximately 30 minutes from The Islands by Gaurs via the Yamuna Expressway."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose an address inside Jaypee Greens?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jaypee Greens is an established, delivered 452-acre township with a golf course, schools, hospitals and retail already operating — reducing the uncertainty that comes with a greenfield location."
          }
        },
        {
          "@type": "Question",
          "name": "Can NRIs invest in The Islands by Gaurs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prospective NRI buyers should speak with the project's sales team to understand current documentation and purchase process for The Islands by Gaurs."
          }
        }
      ]
    }
  },
];
