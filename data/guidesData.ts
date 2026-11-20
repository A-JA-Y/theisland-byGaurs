import villaHero from "@/assets-islandbygaurs/images/guides/villa-vs-flat-hero.webp";
import carpetHero from "@/assets-islandbygaurs/images/guides/carpet-area-blueprint-hero.webp";
import golfFacade from "@/assets-islandbygaurs/images/guides/islands-golf-course-facade.webp";
import nightView from "@/assets-islandbygaurs/images/guides/islands-night-pari-chowk.webp";
import rentVsBuyHero from "@/assets-islandbygaurs/images/guides/rent-vs-buy-keys-hero.webp";
import type { StaticImageData } from "next/image";

export const SITE_URL = "https://www.theislandsbygaurs.in";

/** Standalone buyer-guide pages (not part of /blogs). */
export const buyerGuides = [
  {
    href: "/villa-vs-flat-large-family-jaypee-greens",
    label: "Villa vs Flat for Large Families",
  },
  {
    href: "/super-built-up-area-vs-carpet-area",
    label: "Super Built-Up Area vs Carpet Area",
  },
  {
    href: "/rent-vs-buy-house-greater-noida",
    label: "Rent vs Buy House in Greater Noida",
  },
];

export type RelatedItem = {
  href: string;
  title: string;
  excerpt: string;
  tag: string;
  image: StaticImageData | string;
  imageAlt?: string;
};

export const relatedPool: Record<string, RelatedItem> = {
  villaVsFlat: {
    href: "/villa-vs-flat-large-family-jaypee-greens",
    title: "Villa vs Flat for Large Families",
    excerpt: "Can a 5 BHK apartment replace a villa? Space, layout, upkeep, commute and resale compared.",
    tag: "Buyer guide",
    image: villaHero,
    imageAlt: "Jaypee Greens golf course with villas and The Islands by Gaurs tower",
  },
  carpetArea: {
    href: "/super-built-up-area-vs-carpet-area",
    title: "Super Built-Up Area vs Carpet Area",
    excerpt: "Which area sets the price, the agreement, maintenance and interiors, with the project’s own figures.",
    tag: "Buyer guide",
    image: carpetHero,
    imageAlt: "Architect drawing a floor plan",
  },
  rentVsBuy: {
    href: "/rent-vs-buy-house-greater-noida",
    title: "Rent vs Buy House in Greater Noida",
    excerpt: "₹1.3 lakh rent vs EMI at 25%, 50% and full payment on a ₹9 crore golf-side home, with costs, tax and break-even.",
    tag: "Buyer guide",
    image: rentVsBuyHero,
    imageAlt: "A model house and a set of keys on a wooden table",
  },
  buyersGuide: {
    href: "/blogs/the-islands-by-gaurs-jaypee-greens-buyers-guide-2026",
    title: "The Islands by Gaurs: Complete Buyer’s Guide 2026",
    excerpt: "Configurations, amenities, location and the checks to run before booking.",
    tag: "Blog",
    image: "/blog-1.webp",
    imageAlt: "The Islands by Gaurs towers at Jaypee Greens",
  },
  pariChowk: {
    href: "/blogs/pari-chowk-jaypee-greens-smart-investment-2026",
    title: "Why Pari Chowk & Jaypee Greens Stand Out",
    excerpt: "Why Pari Chowk and Jaypee Greens are among Greater Noida’s smartest addresses.",
    tag: "Blog",
    image: "/blog-2.webp",
    imageAlt: "Pari Chowk and Jaypee Greens, Greater Noida",
  },
  floorPlans: {
    href: "/floor-plans",
    title: "Floor Plans",
    excerpt: "4, 5 and 6 BHK layouts with saleable areas, balconies and room arrangements.",
    tag: "Project",
    image: golfFacade,
    imageAlt: "The Islands by Gaurs seen from the golf course",
  },
  price: {
    href: "/price",
    title: "Price & Configurations",
    excerpt: "Every configuration at The Islands, with tower, saleable area and floor range.",
    tag: "Project",
    image: nightView,
    imageAlt: "The Islands by Gaurs at night from Pari Chowk",
  },
};
