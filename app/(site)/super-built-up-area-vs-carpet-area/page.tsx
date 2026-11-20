import type { Metadata } from "next";
import Link from "next/link";
import {
  FaSearch,
  FaFileSignature,
  FaFileContract,
  FaReceipt,
  FaDraftingCompass,
  FaTags,
  FaFileInvoiceDollar,
  FaCouch,
  FaBalanceScale,
} from "react-icons/fa";

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import GuideHero from "@/components/guides/GuideHero";
import ChapterNav from "@/components/guides/ChapterNav";
import StatStrip from "@/components/guides/StatStrip";
import SectionHeading from "@/components/guides/SectionHeading";
import Figure from "@/components/guides/Figure";
import InlineCta from "@/components/guides/InlineCta";
import CtaBand from "@/components/guides/CtaBand";
import CtaGroup from "@/components/guides/CtaGroup";
import AreaLayers from "@/components/guides/AreaLayers";
import AreaAnatomy from "@/components/guides/AreaAnatomy";
import RateConverter from "@/components/guides/RateConverter";
import VideoTheatre from "@/components/guides/VideoTheatre";
import FaqAccordion from "@/components/guides/FaqAccordion";
import GuideLeadSection from "@/components/guides/GuideLeadSection";
import RelatedGuides from "@/components/guides/RelatedGuides";
import { HOMES, fmt } from "@/components/guides/areaData";
import { relatedPool, SITE_URL } from "@/data/guidesData";

import heroImg from "@/assets-islandbygaurs/images/guides/carpet-area-blueprint-hero.webp";
import magnifierImg from "@/assets-islandbygaurs/images/guides/area-measurement-magnifier.webp";
import balconiesImg from "@/assets-islandbygaurs/images/guides/apartment-balconies.webp";
import interiorsImg from "@/assets-islandbygaurs/images/guides/interiors-budget-living-room.webp";
import calculatorImg from "@/assets-islandbygaurs/images/guides/price-per-sqft-calculator.webp";
import agreementImg from "@/assets-islandbygaurs/images/guides/agreement-signing.webp";
import facadeImg from "@/assets-islandbygaurs/images/guides/islands-golf-course-facade.webp";
import nightImg from "@/assets-islandbygaurs/images/guides/islands-night-pari-chowk.webp";

const SLUG = "super-built-up-area-vs-carpet-area";
const URL = `${SITE_URL}/${SLUG}`;
const TITLE = "Super Built-Up Area vs Carpet Area: Which One Is Used Where";
const DESCRIPTION =
  "Super built-up area vs carpet area in Greater Noida: which one sets the price, the agreement, maintenance and interiors, with figures from The Islands.";
const PUBLISHED = "2026-11-18";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "super built-up area vs carpet area",
    "saleable area vs carpet area",
    "maintenance charges on carpet area or super area",
    "loading factor",
    "price per sq ft on carpet area",
    "The Islands by Gaurs carpet area",
    "The Islands by Gaurs floor plans",
    "The Islands by Gaurs price",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "The Islands by Gaurs",
    locale: "en_IN",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    images: [{ url: heroImg.src, width: heroImg.width, height: heroImg.height, alt: "Architect drawing a floor plan" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [heroImg.src] },
};

const FAQS = [
  {
    q: "What is the difference between super built-up area and carpet area?",
    a: "Carpet area is the floor inside the home, including internal walls. Super built-up area adds the outer walls, balconies and a share of common areas such as lobbies, lifts and the club.",
  },
  {
    q: "Is saleable area the same as super built-up area?",
    a: "Yes. In Greater Noida, saleable area, super area and super built-up area are three names for the same figure.",
  },
  {
    q: "Which area is written in the builder-buyer agreement in UP?",
    a: "Carpet area. A January 2024 order from UP RERA limits apartment sales in the state to carpet area, so the agreement should state it.",
  },
  {
    q: "Are maintenance charges calculated on carpet area or super area?",
    a: "It depends on the project. Some bill on saleable area and some on carpet area, so ask before you sign and get the answer in writing.",
  },
  {
    q: "Should interiors be budgeted on carpet area or saleable area?",
    a: "On carpet area, with balconies added for flooring. Saleable area includes walls and common areas that you will never furnish.",
  },
  {
    q: "What is the carpet area at The Islands by Gaurs?",
    a: "The H-01 and I-01 home has 2,473 sq. ft. of carpet in 4,359 sq. ft. of saleable area. The UP RERA record files Tower A at 297 sq. m of carpet, which is about 3,197 sq. ft.",
  },
  {
    q: "What is the loading at The Islands by Gaurs?",
    a: "About 76% to 86% on the three homes worked out here, against an NCR average of 41%. Large balconies and only two homes on a floor account for much of it.",
  },
  {
    q: "How do I convert a rate on saleable area to a rate on carpet?",
    a: "Multiply it by saleable area ÷ carpet area. For the H-01 home that factor is about 1.76, so ₹1,000 on saleable area is about ₹1,760 on carpet.",
  },
];

const CHAPTERS = [
  { id: "saleable-vs-carpet", label: "Definitions" },
  { id: "carpet-at-the-islands", label: "Areas at The Islands" },
  { id: "which-area-where", label: "Which Area Where" },
  { id: "price-per-sq-ft", label: "Price per Sq. Ft." },
  { id: "films", label: "Videos" },
  { id: "before-you-sign", label: "Before You Sign" },
  { id: "the-islands", label: "The Islands" },
  { id: "faqs", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

const VIDEOS = [
  {
    id: "9jhQL-lOxwA",
    title: "Carpet Area, Built-Up Area, Super Built-Up Area as per RERA",
    channel: "Engineering Motive",
    duration: "6:44",
    tag: "Explainer",
    poster: "https://i.ytimg.com/vi/9jhQL-lOxwA/sddefault.jpg",
    note: "A general explainer of the three areas and how RERA defines carpet.",
  },
  {
    id: "BmSdBIcFWOM",
    title: "Property Explained: What Is Loading Factor?",
    channel: "NDTV · The Property Show",
    duration: "7:31",
    tag: "Explainer",
    poster: "https://i.ytimg.com/vi/BmSdBIcFWOM/hqdefault.jpg",
    note: "What loading is, and why it changes how far a quoted rate really goes.",
  },
  {
    id: "dkgSh_IjHqU",
    title: "September 2026 Construction Update | The Islands by Gaurs",
    channel: "Gaurs | Luxury",
    duration: "0:52",
    tag: "Site progress",
    poster: "https://i.ytimg.com/vi/dkgSh_IjHqU/maxresdefault.jpg",
    note: "The completion date on record is 3 April 2030. Follow the build as it rises.",
  },
  {
    id: "FZTsf3CdY2k",
    title: "A Grand Voyage to the Luxe Living at The Islands by Gaurs",
    channel: "Gaurs Group",
    duration: "7:02",
    tag: "Official project film",
    poster: "https://i.ytimg.com/vi/FZTsf3CdY2k/maxresdefault.jpg",
    note: "The developer’s own film of the towers, the residences and the clubhouse.",
  },
];

const USES = [
  { icon: FaTags, doing: "Reading the price list", area: "Saleable area", check: "Ask for the same price as a rate on carpet" },
  { icon: FaFileSignature, doing: "Signing the builder-buyer agreement", area: "Carpet area", check: "It should match the UP RERA record" },
  { icon: FaFileInvoiceDollar, doing: "Paying maintenance and deposits", area: "Varies by project", check: "Ask which area the bill is worked on" },
  { icon: FaCouch, doing: "Budgeting interiors, flooring and air-conditioning", area: "Carpet area, plus balconies for flooring", check: "Don’t budget on saleable area" },
  { icon: FaBalanceScale, doing: "Comparing two projects", area: "Carpet area", check: "Use total cost ÷ carpet" },
];

const CHECKS = [
  {
    icon: FaSearch,
    title: "Look up the record.",
    body: (
      <>
        Search UPRERAPRJ734569 on{" "}
        <a href="https://up-rera.in/" target="_blank" rel="noopener noreferrer">
          up-rera.in
        </a>
        . It lists carpet by tower and floor in sq. m, so multiply by 10.764.
      </>
    ),
  },
  {
    icon: FaReceipt,
    title: "Get carpet and balcony areas in writing.",
    body: "Ask for both figures for your exact home. The portal shows balcony and terrace measurements separately from carpet.",
  },
  {
    icon: FaFileContract,
    title: "Read the area on the agreement.",
    body: "It should be the carpet area. The completion date on record is 3 April 2030, so ask how a difference between the agreed and the final measured carpet is settled.",
  },
  { icon: FaFileInvoiceDollar, title: "Ask which area maintenance is billed on.", body: "Get the answer on the cost sheet." },
  {
    icon: FaDraftingCompass,
    title: "Ask for a plan with room dimensions.",
    body: (
      <>
        Start with the <Link href="/floor-plans">The Islands by Gaurs floor plans</Link>.
      </>
    ),
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      url: URL,
      mainEntityOfPage: URL,
      image: `${SITE_URL}${heroImg.src}`,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: "en-IN",
      author: { "@type": "Organization", name: "Dealbridge" },
      publisher: { "@type": "Organization", name: "Dealbridge", url: `${SITE_URL}/` },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Super Built-Up Area vs Carpet Area", item: URL },
      ],
    },
  ],
};

function PlanOutline() {
  return (
    <svg viewBox="0 0 380 320" fill="none" className="plan-draw h-auto w-full drop-shadow-[0_0_24px_rgba(220,165,74,0.25)]">
      <rect x="4" y="4" width="372" height="312" rx="10" stroke="#F6E7C1" strokeOpacity="0.5" strokeWidth="1.5" />
      <rect x="48" y="56" width="284" height="214" rx="4" stroke="#DCA54A" strokeWidth="2.5" className="delay-1" />
      <line x1="150" y1="56" x2="150" y2="270" stroke="#DCA54A" strokeWidth="1.5" className="delay-2" />
      <line x1="150" y1="168" x2="332" y2="168" stroke="#DCA54A" strokeWidth="1.5" className="delay-2" />
      <line x1="246" y1="168" x2="246" y2="270" stroke="#DCA54A" strokeWidth="1.5" className="delay-2" />
      <line x1="48" y1="34" x2="332" y2="34" stroke="#F6E7C1" strokeOpacity="0.7" strokeWidth="1" className="delay-2" />
      <line x1="48" y1="28" x2="48" y2="40" stroke="#F6E7C1" strokeOpacity="0.7" strokeWidth="1" className="delay-2" />
      <line x1="332" y1="28" x2="332" y2="40" stroke="#F6E7C1" strokeOpacity="0.7" strokeWidth="1" className="delay-2" />
      <text x="240" y="120" textAnchor="middle" fill="#F6E7C1" fontSize="13" letterSpacing="3" style={{ animation: "fadeIn 1s ease 2.6s both" }}>
        CARPET
      </text>
      <text x="22" y="300" fill="#F6E7C1" fillOpacity="0.75" fontSize="11" letterSpacing="3" style={{ animation: "fadeIn 1s ease 3s both" }}>
        SALEABLE
      </text>
      <text x="190" y="24" textAnchor="middle" fill="#F6E7C1" fillOpacity="0.75" fontSize="10" letterSpacing="2" style={{ animation: "fadeIn 1s ease 3s both" }}>
        ROOMS + INTERNAL WALLS
      </text>
    </svg>
  );
}

const wrap = "mx-auto max-w-3xl px-5 md:px-6";
const sectionPad = "scroll-mt-[130px] py-20 md:py-28";

export default function CarpetAreaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ModalWrapper />
      <ChapterNav items={CHAPTERS} ctaLabel="Cost Sheet" />

      <GuideHero
        image={heroImg}
        imageAlt="An architect marking up a floor plan with a scale ruler"
        objectPosition="60% center"
        eyebrow="Buyer Guide · Area Explained"
        title="Super Built-Up Area vs Carpet Area:"
        titleAccent="Which One Is Used Where"
        subtitle="One number is on the price list and one is on the agreement. Here’s which one sets the price, the agreement, the monthly bills and the interiors, worked through with figures from The Islands by Gaurs."
        chips={["Saleable = super = super built-up", "Loading ≈ 76–86% here", "NCR average 41%", "UP RERA No. UPRERAPRJ734569"]}
        breadcrumbLabel="Super Built-Up vs Carpet Area"
        primaryLabel="Get the Cost Sheet"
        filmLabel="Watch the Explainer"
        updated="Updated 18 Nov 2026"
        readTime="8 min read"
        decoration={<PlanOutline />}
      />

      <StatStrip
        stats={[
          { text: "76–86%", label: "Loading on three homes" },
          { end: 41, suffix: "%", label: "NCR average loading" },
          { text: "×10.764", label: "Sq. m to sq. ft." },
          { text: "Jan 2024", label: "UP RERA carpet order" },
          { text: "3 Apr 2030", label: "Completion on record" },
        ]}
      />

      {/* ---------- Intro ---------- */}
      <section id="guide-start" className="scroll-mt-[130px] bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="guide-prose" data-reveal="left">
            <p className="text-xl leading-relaxed text-[#1a1a1a] first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[4.2rem] first-letter:leading-[0.85] first-letter:text-[#C49A2B] md:text-[1.35rem]">
              Two numbers describe every new flat. One is on the price list and one is on the agreement, and in a large home
              the gap between them can be the size of a 3 BHK.
            </p>
            <p>
              This guide explains <strong>super built-up area vs carpet area</strong> by asking a practical question: which
              number is used for the price, the agreement, the monthly bills and the interiors? The figures come from The
              Islands by Gaurs in Jaypee Greens, Greater Noida.
            </p>
          </div>
          <Figure
            src={magnifierImg}
            alt="A model house resting on floor plans next to a magnifying glass"
            caption="The price list and the agreement measure the same home in two different ways."
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>
      </section>

      {/* ---------- Definitions ---------- */}
      <section id="saleable-vs-carpet" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="01" eyebrow="Three names, one figure">
            Saleable Area vs Carpet Area
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              In Greater Noida, super built-up area is usually called <strong>saleable area</strong> or{" "}
              <strong>super area</strong>. All three mean the same thing.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 px-5 md:grid-cols-3 md:px-6">
          {[
            {
              term: "Carpet area",
              body: "The floor inside the home. Rooms and internal walls count. Outer walls, shafts, balconies and terraces don’t.",
              dark: true,
            },
            {
              term: "Saleable area",
              body: "Carpet area plus the outer walls, the balconies and a share of the lobbies, lifts, staircases, club and other common areas.",
            },
            {
              term: "Loading",
              body: "The gap between the two, as a percentage of carpet: (saleable area − carpet area) ÷ carpet area × 100.",
            },
          ].map((d, i) => (
            <div
              key={d.term}
              className={`card-lift rounded-2xl p-7 ${d.dark ? "bg-[#1d1507] text-white" : "border border-[#e5dcc5] bg-white"}`}
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <p className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${d.dark ? "text-[#DCA54A]" : "text-[#a8841e]"}`}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className={`font-display mt-3 text-2xl ${d.dark ? "text-[#F6E7C1]" : "text-[#1a1a1a]"}`}>{d.term}</h3>
              <p className={`mt-3 text-[15px] leading-relaxed ${d.dark ? "text-white/75" : "text-gray-600"}`}>{d.body}</p>
            </div>
          ))}
        </div>
        <div className={wrap}>
          <AreaLayers />
          <div className="guide-prose" data-reveal>
            <p>
              A January 2024 order from UP RERA limits apartment sales in the state to carpet area. Price lists still quote
              saleable area, so both numbers stay in play.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Carpet at The Islands ---------- */}
      <section id="carpet-at-the-islands" className={`${sectionPad} bg-white`}>
        <div className={wrap}>
          <SectionHeading index="02" eyebrow="The project’s own figures">
            Carpet Area at The Islands by Gaurs
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              Here are three homes in the project, with the saleable area from the floor plans and the carpet area filed with
              UP RERA or given by the project:
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-4xl px-5 md:px-6">
          <div className="overflow-x-auto rounded-2xl border border-[#e5dcc5] shadow-[0_20px_50px_-35px_rgba(44,31,14,0.5)]" data-reveal>
            <table className="guide-table w-full min-w-[620px] text-left text-sm">
              <thead className="bg-[#1d1507] text-[11px] uppercase tracking-[0.15em] text-[#F6E7C1]">
                <tr>
                  <th scope="col" className="px-5 py-4">Home</th>
                  <th scope="col" className="px-5 py-4">Saleable area</th>
                  <th scope="col" className="px-5 py-4">Carpet area</th>
                  <th scope="col" className="px-5 py-4">Carpet as % of saleable</th>
                  <th scope="col" className="px-5 py-4">Loading</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {HOMES.map((h) => (
                  <tr key={h.key} className="border-t border-[#efe6cf]">
                    <th scope="row" className="font-display px-5 py-4 text-base font-normal text-[#1a1a1a]">{h.name}</th>
                    <td className="px-5 py-4 text-gray-700">{fmt(h.saleable)} sq. ft.</td>
                    <td className="px-5 py-4 text-gray-700">{h.key === "h01" ? "" : "about "}{fmt(h.carpet)} sq. ft.</td>
                    <td className="px-5 py-4 text-gray-700">{h.carpetPct}%</td>
                    <td className="px-5 py-4 font-semibold text-[#8a6b14]">about {h.loading}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs italic leading-relaxed text-gray-500">
            Saleable areas are indicative. Carpet for Tower A and for Towers B and I is taken from the UP RERA record (297 and
            244 sq. m) and converted at 10.764. Verify on up-rera.in.
          </p>
          <AreaAnatomy />
        </div>
        <div className={wrap}>
          <div className="guide-prose" data-reveal>
            <p>
              The gap runs from about 1,900 to 2,800 sq. ft. a home. ANAROCK’s research puts NCR’s average loading at 41%, so
              these homes carry about twice that.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[1fr_1.1fr] md:px-6">
          <Figure
            src={balconiesImg}
            alt="An apartment building with deep balconies on every floor"
            caption="Balconies are counted in saleable area, never in carpet."
            aspect="aspect-[4/5]"
            sizes="(min-width: 768px) 440px, 100vw"
          />
          <div className="guide-prose" data-reveal="right">
            <h3 className="font-display text-2xl text-[#1a1a1a]">What fills the gap?</h3>
            <p>
              The Tower A and H-01 homes have three balconies each, and balconies sit outside carpet. With only two homes on a
              floor, each has long outer walls and its own share of the lift lobby. The towers also carry lobbies, staircases
              and a 30,000 sq. ft. clubhouse. All of it is saleable area. None of it is carpet.
            </p>
            <p>
              That doesn’t make the homes poor value. It means the saleable figure is a weak guide to how much floor you get,
              so every comparison should start from carpet.
            </p>
          </div>
        </div>
        <div className={wrap}>
          <InlineCta
            eyebrow="For your exact home"
            title="Get the carpet and balcony areas in writing"
            text="We’ll send both figures for the unit you’re considering, with the floor plan and the current cost sheet."
            primaryLabel="Request Area Details"
            secondary={{ href: "/floor-plans", label: "Floor Plans" }}
          />
        </div>
      </section>

      {/* ---------- Which area where ---------- */}
      <section id="which-area-where" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="03" eyebrow="Price, agreement, bills, interiors">
            Which Area Is Used Where
          </SectionHeading>
        </div>
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          {/* Desktop: table */}
          <div className="hidden overflow-hidden rounded-2xl border border-[#e5dcc5] bg-white shadow-[0_20px_50px_-35px_rgba(44,31,14,0.5)] md:block" data-reveal>
            <table className="guide-table w-full text-left text-[15px]">
              <thead className="bg-[#FBF6E8] text-[11px] uppercase tracking-[0.18em] text-[#8a6b14]">
                <tr>
                  <th scope="col" className="px-6 py-4">What you’re doing</th>
                  <th scope="col" className="px-6 py-4">Area that applies</th>
                  <th scope="col" className="px-6 py-4">What to check</th>
                </tr>
              </thead>
              <tbody>
                {USES.map((u) => (
                  <tr key={u.doing} className="border-t border-[#efe6cf]">
                    <th scope="row" className="px-6 py-5 font-normal text-[#1a1a1a]">
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1d1507] text-[#DCA54A]">
                          <u.icon size={14} aria-hidden="true" />
                        </span>
                        {u.doing}
                      </span>
                    </th>
                    <td className="px-6 py-5 font-semibold text-[#8a6b14]">{u.area}</td>
                    <td className="px-6 py-5 text-gray-600">{u.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile: cards */}
          <ul className="space-y-3 md:hidden">
            {USES.map((u) => (
              <li key={u.doing} className="rounded-2xl border border-[#e5dcc5] bg-white p-5" data-reveal>
                <p className="flex items-center gap-3 font-semibold text-[#1a1a1a]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1d1507] text-[#DCA54A]">
                    <u.icon size={14} aria-hidden="true" />
                  </span>
                  {u.doing}
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-gray-400">Area that applies</p>
                <p className="font-semibold text-[#8a6b14]">{u.area}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">What to check</p>
                <p className="text-sm text-gray-600">{u.check}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[1.1fr_1fr] md:px-6">
          <div className="guide-prose" data-reveal="left">
            <p>
              The interiors line is the one buyers miss. On the H-01 home, a quote worked on 4,359 sq. ft. instead of 2,473
              sq. ft. would be overstated by about <strong>76%</strong>.
            </p>
            <p>
              Maintenance deserves a direct question too. On homes this size, the choice of area changes the monthly bill by
              the same proportion.
            </p>
          </div>
          <Figure
            src={interiorsImg}
            alt="A furnished living room with sofas, plants and large windows"
            caption="You furnish carpet, not lobbies. Budget interiors on carpet area, plus balconies for flooring."
            aspect="aspect-[4/3]"
            sizes="(min-width: 768px) 460px, 100vw"
          />
        </div>
      </section>

      <CtaBand
        image={nightImg}
        imageAlt="The Islands by Gaurs at night from Pari Chowk (artist's impression)"
        eyebrow="Numbers, not guesswork"
        title="Ask for a cost sheet with carpet area on it"
        text="We’ll share the current sheet for the home you like, with the carpet and balcony areas, so you can compare every project on the same base."
        primaryLabel="Get the Cost Sheet"
        secondary={{ href: "/price", label: "Configurations" }}
        waMessage="Hi, please share the cost sheet and carpet area for a home at The Islands by Gaurs."
        impression
      />

      {/* ---------- Price per sq ft ---------- */}
      <section id="price-per-sq-ft" className={`${sectionPad} bg-white`}>
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[1.15fr_1fr] md:px-6">
          <div>
            <SectionHeading index="04" eyebrow="The method, not a figure">
              Price per Sq. Ft. on Carpet Area
            </SectionHeading>
            <div className="guide-prose" data-reveal>
              <p>
                Prices at The Islands by Gaurs are shared on request, so here is the method instead of a figure. Multiply any
                rate quoted on saleable area by saleable ÷ carpet:
              </p>
            </div>
          </div>
          <Figure
            src={calculatorImg}
            alt="A person holding a model house while working on a calculator"
            aspect="aspect-[4/3]"
            sizes="(min-width: 768px) 440px, 100vw"
          />
        </div>
        <div className={wrap}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {HOMES.map((h, i) => (
              <li key={h.key} className="card-lift rounded-2xl border border-[#e5dcc5] bg-[#FDFBF5] p-5 text-center" data-reveal data-reveal-delay={String(i + 1)}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">{h.name}</p>
                <p className="font-display mt-2 text-4xl text-[#8a6b14]">× {h.factor.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="guide-prose mt-10" data-reveal>
            <p>
              So every ₹1,000 per sq. ft. on saleable area is about <strong>₹1,760 to ₹1,860 per sq. ft. on carpet</strong>.
            </p>
            <p>
              Then add every other line on the cost sheet, such as PLC, club, parking, GST and stamp duty, and divide the total
              by carpet. That last figure is the one to compare across projects. Ask for the current sheet through the{" "}
              <Link href="/price">The Islands by Gaurs price</Link> page.
            </p>
          </div>
          <RateConverter />
        </div>
      </section>

      <VideoTheatre
        eyebrow="Videos"
        title="Area, explained on screen"
        intro="Two general explainers on carpet area and loading, plus official films from the project. For this project, the UP RERA record and your agreement are what count."
        videos={VIDEOS}
        primaryLabel="Get the Cost Sheet"
        waMessage="Hi, I'd like the cost sheet and carpet area for a home at The Islands by Gaurs."
      />

      {/* ---------- Before you sign ---------- */}
      <section id="before-you-sign" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-[140px] lg:self-start">
            <SectionHeading index="05" eyebrow="Five checks">
              Before You Sign
            </SectionHeading>
            <Figure
              src={agreementImg}
              alt="Two people celebrating at a desk with documents and a laptop"
              caption="Read the area on the agreement before you celebrate."
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 460px, 100vw"
            />
          </div>
          <ol className="space-y-4">
            {CHECKS.map((c, i) => (
              <li
                key={c.title}
                className="row-nudge guide-prose flex items-start gap-5 rounded-2xl border border-[#e5dcc5] bg-white p-5 !text-[15px] md:p-6"
                data-reveal
                data-reveal-delay={String(i + 1)}
              >
                <span className="icon-pop flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1d1507] text-[#DCA54A]">
                  <c.icon size={16} aria-hidden="true" />
                </span>
                <p className="!mt-0">
                  <strong>{c.title}</strong> {c.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- The Islands ---------- */}
      <section id="the-islands" className={`relative isolate overflow-hidden ${sectionPad} bg-white`}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading index="06" eyebrow="The project">
              The Islands by Gaurs
            </SectionHeading>
            <div className="guide-prose" data-reveal>
              <p>
                <Link href="/about-the-islands-by-gaurs">The Islands by Gaurs</Link> has 506 condominiums in nine towers of up
                to 37 storeys, with two homes to a floor, inside Jaypee Greens, Greater Noida. The developer is{" "}
                <Link href="/about-gaurs">Gaurs Group</Link>.
              </p>
              <ul className="diamond-list">
                <li>
                  <strong>More:</strong> <Link href="/amenities">amenities</Link>,{" "}
                  <Link href="/location-connectivity">location and connectivity</Link>, <Link href="/gallery">gallery</Link>,
                  and the{" "}
                  <Link href="/blogs/the-islands-by-gaurs-jaypee-greens-buyers-guide-2026">The Islands by Gaurs buyer’s guide</Link>
                </li>
              </ul>
            </div>
          </div>
          <Figure
            src={facadeImg}
            alt="The Islands by Gaurs seen from the golf course (artist's impression)"
            caption="Artist’s impression."
            aspect="aspect-[16/11]"
            sizes="(min-width: 1024px) 600px, 100vw"
          />
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section id="faqs" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="07" eyebrow="Answers">
            FAQs
          </SectionHeading>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* ---------- Conclusion ---------- */}
      <section id="conclusion" className={`${sectionPad} bg-white`}>
        <div className={wrap}>
          <SectionHeading index="08" eyebrow="In short">
            Conclusion
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              On super built-up area vs carpet area, each number has its own job. Saleable area sets the price list. Carpet
              area goes on the agreement, and it is the right base for interiors and for comparing projects. Ask which one your
              maintenance follows, and convert every quote to carpet before you decide.
            </p>
            <p>
              For the cost sheet and the carpet area of any home at The Islands by Gaurs,{" "}
              <Link href="/contact-us">contact us</Link> or call <a href="tel:+919810890353">+91 98108 90353</a>.
            </p>
          </div>
          <div className="mt-8" data-reveal>
            <CtaGroup tone="light" primaryLabel="Get the Cost Sheet" secondary={{ href: "/contact-us", label: "Contact Us" }} showPhone={false} />
          </div>
          <p className="mt-12 border-t border-[#e5dcc5] pt-6 text-xs italic leading-relaxed text-gray-500">
            This page comes from an authorised channel partner and not from the developer. Areas are indicative. RERA figures
            are taken from the public record and converted to sq. ft. Verify all areas on up-rera.in and in the builder-buyer
            agreement.
          </p>
        </div>
      </section>
      <div id="guide-end" aria-hidden="true" />

      <GuideLeadSection
        image={facadeImg}
        eyebrow="Cost sheet, one-to-one"
        title="Get the cost sheet and carpet area for your home"
        text="Tell us which configuration you’re considering. We’ll send the figures that matter, in writing."
        points={[
          "Saleable, carpet and balcony areas for the exact unit",
          "The current cost sheet, line by line",
          "Which area maintenance is billed on",
          "A floor plan with room dimensions",
        ]}
        waMessage="Hi, please share the cost sheet and carpet area for a home at The Islands by Gaurs."
      />

      <RelatedGuides items={[relatedPool.villaVsFlat, relatedPool.rentVsBuy, relatedPool.floorPlans, relatedPool.price]} />

      <StickyDownloadButton />
    </>
  );
}
