import type { Metadata } from "next";
import Link from "next/link";
import { FaReceipt, FaStamp, FaTools, FaKey, FaPercent, FaHome, FaBalanceScale, FaArrowRight } from "react-icons/fa";

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import GuideHero from "@/components/guides/GuideHero";
import ChapterNav from "@/components/guides/ChapterNav";
import StatStrip from "@/components/guides/StatStrip";
import SectionHeading from "@/components/guides/SectionHeading";
import Figure from "@/components/guides/Figure";
import InlineCta from "@/components/guides/InlineCta";
import InlineVideo from "@/components/guides/InlineVideo";
import CtaBand from "@/components/guides/CtaBand";
import CtaGroup from "@/components/guides/CtaGroup";
import OpenModalButton from "@/components/guides/OpenModalButton";
import VideoTheatre from "@/components/guides/VideoTheatre";
import FaqAccordion from "@/components/guides/FaqAccordion";
import GuideLeadSection from "@/components/guides/GuideLeadSection";
import RelatedGuides from "@/components/guides/RelatedGuides";
import RentVsEmiCalculator from "@/components/guides/RentVsEmiCalculator";
import RentDuringWait from "@/components/guides/RentDuringWait";
import BreakEvenGrid from "@/components/guides/BreakEvenGrid";
import RentOrBuyFinder from "@/components/guides/RentOrBuyFinder";
import { PLANS, MONTHLY_RENT, EXAMPLE_PRICE, buyingCosts, inr } from "@/components/guides/rentBuyData";
import { relatedPool, SITE_URL } from "@/data/guidesData";

import heroImg from "@/assets-islandbygaurs/images/guides/rent-vs-buy-keys-hero.webp";
import livingRoomImg from "@/assets-islandbygaurs/images/guides/luxury-rental-living-room.webp";
import deedImg from "@/assets-islandbygaurs/images/guides/sale-deed-signing.webp";
import coinsImg from "@/assets-islandbygaurs/images/guides/emi-coins-stack.webp";
import cranesImg from "@/assets-islandbygaurs/images/guides/high-rise-construction-cranes.webp";
import growthImg from "@/assets-islandbygaurs/images/guides/savings-growth-coins.webp";
import taxImg from "@/assets-islandbygaurs/images/guides/tax-papers-calculator.webp";
import familyRoomImg from "@/assets-islandbygaurs/images/guides/sunlit-family-living-room.webp";
import facadeImg from "@/assets-islandbygaurs/images/guides/islands-golf-course-facade.webp";
import lakeGolfImg from "@/assets-islandbygaurs/images/guides/islands-lake-golf-view.webp";
import nightImg from "@/assets-islandbygaurs/images/guides/islands-night-pari-chowk.webp";

const SLUG = "rent-vs-buy-house-greater-noida";
const URL = `${SITE_URL}/${SLUG}`;
const TITLE = "Rent vs Buy House in Greater Noida: Loan or Own Funds?";
const DESCRIPTION =
  "Rent vs buy house in Greater Noida for a ₹9 crore golf-side home: ₹1.3 lakh rent vs EMI at 25%, 50% and full payment, with costs and tax.";
const PUBLISHED = "2026-11-19";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "rent vs buy house",
    "rent vs buy house in Greater Noida",
    "is it better to rent or buy a house",
    "rent vs EMI",
    "flat for rent in Jaypee Greens",
    "home loan down payment",
    "4 BHK in Jaypee Greens Greater Noida",
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
    images: [{ url: heroImg.src, width: heroImg.width, height: heroImg.height, alt: "A model house and a set of keys on a table" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [heroImg.src] },
};

const FAQS = [
  {
    q: "Is it better to rent or buy a house in Greater Noida?",
    a: "For a large golf-side home, renting costs much less each month. A ₹9 crore home rents for about ₹1.3 lakh, under 2% of its price a year. Buying comes out level if the home gains about 8.3% a year over ten years, with 25% down and a tenant who invests the difference at 9%.",
  },
  {
    q: "How does rent compare with EMI on a ₹9 crore home?",
    a: "Rent is about ₹1.3 lakh a month. The EMI at 8% over 20 years is about ₹5.65 lakh with 25% down, and about ₹3.76 lakh with 50% down.",
  },
  {
    q: "What is the rent for a large flat in Jaypee Greens?",
    a: "Flats of about 3,850 sq. ft. ask around ₹1.25 lakh to ₹1.3 lakh a month. A 4,600 sq. ft. 4 BHK asks about ₹2 lakh.",
  },
  {
    q: "What is the minimum home loan down payment on a ₹9 crore home?",
    a: "25%, or ₹2.25 crore, because banks lend at most 75% on loans above ₹75 lakh. Add ₹45 lakh of GST and ₹72 lakh of stamp duty and registration, and you need about ₹3.42 crore of your own.",
  },
  {
    q: "Should I take a bigger loan or pay more myself?",
    a: "It depends on what your money earns elsewhere. If it earns more than the loan costs, a larger loan leaves you better off on paper. If it earns about the same, it makes little difference. A discount for paying upfront can tip it the other way.",
  },
  {
    q: "Do I pay GST on an under-construction flat?",
    a: "Yes, 5% of the price. A home bought after its completion certificate carries none.",
  },
  {
    q: "Do I have to deduct TDS on rent?",
    a: "Yes, if you’re an individual paying more than ₹50,000 a month. You deduct 2% and deposit it, and the landlord gets credit. On ₹1.3 lakh a month that is ₹31,200 a year.",
  },
  {
    q: "Do I get tax benefits on rent or a home loan?",
    a: "Only in the old tax regime. A tenant can claim HRA relief, with a 40% salary limit in Greater Noida. An owner can deduct up to ₹2 lakh of interest a year. The new regime gives neither.",
  },
];

const CHAPTERS = [
  { id: "rent-and-price", label: "Rent & Price" },
  { id: "buying-costs", label: "Buying Costs" },
  { id: "rent-vs-emi", label: "Rent vs EMI" },
  { id: "wait-until-2030", label: "The Wait" },
  { id: "break-even", label: "Break-Even" },
  { id: "films", label: "Videos" },
  { id: "tax", label: "Tax" },
  { id: "rent-or-buy", label: "Rent or Buy?" },
  { id: "the-islands", label: "The Islands" },
  { id: "faqs", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

const VIDEOS = [
  {
    id: "HRVED93mXoY",
    title: "HOUSE - Rent or Buy (The 420 Rule)",
    channel: "Zero1 by Zerodha",
    duration: "10:08",
    tag: "Explainer",
    poster: "https://i.ytimg.com/vi/HRVED93mXoY/sddefault.jpg",
    note: "A widely watched general explainer on when renting beats buying, built around a simple rule of thumb.",
  },
  {
    id: "hQrNEUpcRFI",
    title: "Buy or Rent in 2025? The Real Math Behind Home Loans",
    channel: "NDTV Profit",
    duration: "12:30",
    tag: "Explainer",
    poster: "https://i.ytimg.com/vi/hQrNEUpcRFI/maxresdefault.jpg",
    note: "The arithmetic of a home loan against renting, from a business news channel.",
  },
  {
    id: "QkaTdEINJJk",
    title: "The Untold Truth About Homeownership: Hidden Costs & EMIs",
    channel: "Finance With Sharan",
    duration: "10:52",
    tag: "Hidden costs",
    poster: "https://i.ytimg.com/vi/QkaTdEINJJk/maxresdefault.jpg",
    note: "The costs of owning that never show up in the EMI.",
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
  {
    id: "osy_kEGYPQA",
    title: "Rendezvous by the Greens | Stories from The Islands by Gaurs",
    channel: "Gaurs | Luxury",
    duration: "1:58",
    tag: "Official film",
    poster: "https://i.ytimg.com/vi/osy_kEGYPQA/maxresdefault.jpg",
    note: "A short film from the developer’s series on life beside the golf course.",
  },
];

const CONSTRUCTION_VIDEO = {
  id: "dkgSh_IjHqU",
  title: "September 2026 Construction Update | The Islands by Gaurs",
  channel: "Gaurs | Luxury",
  duration: "0:52",
  poster: "https://i.ytimg.com/vi/dkgSh_IjHqU/maxresdefault.jpg",
};

const COSTS = buyingCosts(EXAMPLE_PRICE);

const COST_LINES = [
  {
    icon: FaReceipt,
    label: "GST at 5%",
    amount: "₹45 lakh",
    body: "since the home is under construction",
  },
  {
    icon: FaStamp,
    label: "Stamp duty at 7% and registration at 1%",
    amount: "₹72 lakh",
    body: "on the sale deed in Uttar Pradesh",
  },
  {
    icon: FaTools,
    label: "Upkeep a tenant wouldn’t pay",
    amount: "₹30,000 / mo",
    body: "say, after possession",
  },
];

const TAX = [
  {
    icon: FaKey,
    title: "Tenants:",
    body: "HRA relief is available only in the old regime, and the salary-based limit in Greater Noida is 40%.",
  },
  {
    icon: FaPercent,
    title: "TDS on rent:",
    body: "an individual paying more than ₹50,000 a month must deduct 2%. On ₹1.3 lakh a month that is ₹31,200 a year.",
  },
  {
    icon: FaHome,
    title: "Owners, old regime:",
    body: "up to ₹2 lakh of interest a year on a self-occupied home, which now includes the yearly share of interest paid before possession.",
  },
  {
    icon: FaBalanceScale,
    title: "New regime:",
    body: "neither HRA nor the interest deduction.",
  },
];

const TAKEAWAYS = [
  {
    lead: "The more of your own money goes in, the higher the bar,",
    body: "if that money would otherwise earn more than the loan costs. At 9%, the bar rises from 8.3% to 9.6%.",
  },
  {
    lead: "If your money earns about 7%, it hardly matters how you pay.",
    body: "The bar stays between 7.2% and 7.5%.",
  },
  {
    lead: "A discount for paying upfront changes this.",
    body: "Developers often price a down payment plan lower. Ask what the difference is and rerun the sum.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
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
        { "@type": "ListItem", position: 2, name: "Rent vs Buy House in Greater Noida", item: URL },
      ],
    },
  ],
};

/** Hero decoration: EMI line high and flat, rent line low and rising, drawn in. */
function RentEmiSketch() {
  return (
    <svg viewBox="0 0 380 320" fill="none" className="plan-draw h-auto w-full drop-shadow-[0_0_24px_rgba(220,165,74,0.25)]">
      <rect x="4" y="4" width="372" height="312" rx="10" stroke="#F6E7C1" strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="44" y1="270" x2="346" y2="270" stroke="#F6E7C1" strokeOpacity="0.6" strokeWidth="1" />
      <line x1="44" y1="40" x2="44" y2="270" stroke="#F6E7C1" strokeOpacity="0.6" strokeWidth="1" />
      <path d="M44 92 H346" stroke="#DCA54A" strokeWidth="2.5" className="delay-1" />
      <path d="M44 236 C120 232 200 222 346 204" stroke="#8fbf6a" strokeWidth="2.5" className="delay-2" />
      <line x1="196" y1="40" x2="196" y2="270" stroke="#F6E7C1" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 5" className="delay-2" />
      <text x="346" y="80" textAnchor="end" fill="#F6E7C1" fontSize="13" letterSpacing="3" style={{ animation: "fadeIn 1s ease 2.4s both" }}>
        EMI ₹5.65 L
      </text>
      <text x="346" y="192" textAnchor="end" fill="#cfe5bd" fontSize="13" letterSpacing="3" style={{ animation: "fadeIn 1s ease 3s both" }}>
        RENT ₹1.3 L ↑
      </text>
      <text x="200" y="56" fill="#F6E7C1" fillOpacity="0.7" fontSize="10" letterSpacing="2" style={{ animation: "fadeIn 1s ease 3s both" }}>
        APR 2030
      </text>
      <text x="44" y="298" fill="#F6E7C1" fillOpacity="0.75" fontSize="10" letterSpacing="2.5" style={{ animation: "fadeIn 1s ease 3.2s both" }}>
        25% DOWN · 8% · 20 YEARS
      </text>
    </svg>
  );
}

/** Monthly outgo after possession: EMI against rent for each way of paying. */
function MonthlyOutgo() {
  const max = Math.max(...PLANS.map((p) => p.emi));
  return (
    <figure className="my-10 rounded-3xl border border-[#e5dcc5] bg-white p-6 shadow-[0_30px_70px_-40px_rgba(44,31,14,0.55)] md:p-8" data-reveal="zoom">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8841e]">Each month after possession</p>
        <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C49A2B]" aria-hidden="true" />
            EMI
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#6a9c4a]" aria-hidden="true" />
            Rent
          </span>
        </p>
      </div>
      <ul className="mt-6 space-y-6">
        {PLANS.map((p, i) => (
          <li key={p.key} data-reveal data-reveal-delay={String(i + 1)}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-display text-lg text-[#1a1a1a]">{p.label}</span>
              <span className="text-sm text-gray-500">
                {p.emi > 0 ? (
                  <>
                    EMI is <strong className="text-[#8a6b14]">{(p.emi / MONTHLY_RENT).toFixed(1)}×</strong> the rent
                  </>
                ) : (
                  <>No EMI · {inr(p.ownMoney, { long: true })} tied up</>
                )}
              </span>
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-3">
                <div className="h-4 flex-1 overflow-hidden rounded-full bg-[#f4eedd]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#a8841e] to-[#DCA54A]"
                    style={{ width: `${(p.emi / max) * 100}%` }}
                  />
                </div>
                <span className="w-20 shrink-0 text-right text-sm font-semibold text-[#1a1a1a]">{p.emi > 0 ? inr(p.emi) : "None"}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-4 flex-1 overflow-hidden rounded-full bg-[#f4eedd]">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#5f9142] to-[#8fbf6a]" style={{ width: `${(MONTHLY_RENT / max) * 100}%` }} />
                </div>
                <span className="w-20 shrink-0 text-right text-sm text-gray-600">{inr(MONTHLY_RENT)}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <figcaption className="mt-6 text-xs leading-relaxed text-gray-500">
        ₹9 crore example, loan at 8% for 20 years, rent on a similar home in Jaypee Greens.
      </figcaption>
    </figure>
  );
}

/** Price plus the costs no bank will lend against. */
function AllInBar() {
  const total = EXAMPLE_PRICE + COSTS.total;
  const parts = [
    { label: "Example price", value: EXAMPLE_PRICE, cls: "bg-[#5c4720]" },
    { label: "GST", value: COSTS.gst, cls: "bg-[#C49A2B]" },
    { label: "Stamp duty + registration", value: COSTS.stamp, cls: "bg-[#DCA54A]" },
  ];
  return (
    <div className="mt-10 overflow-hidden rounded-3xl bg-[#1d1507] p-6 text-white md:p-8" data-reveal="zoom">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#DCA54A]">Always your own money</p>
          <p className="font-display mt-2 text-4xl text-[#F6E7C1] md:text-5xl">{inr(COSTS.total, { long: true })}</p>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-white/70">
          Banks don’t lend against GST, stamp duty or registration, so this ₹1.17 crore is always your own money.
        </p>
      </div>
      <div className="mt-8 flex h-12 overflow-hidden rounded-xl ring-1 ring-white/15" aria-hidden="true">
        {parts.map((p) => (
          <div key={p.label} className={`${p.cls} flex items-center px-3`} style={{ width: `${(p.value / total) * 100}%` }}>
            {p.value === EXAMPLE_PRICE ? (
              <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-white/80">₹9 crore</span>
            ) : null}
          </div>
        ))}
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
        {parts.map((p) => (
          <div key={p.label} className="flex items-start gap-2">
            <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-sm ${p.cls} ring-1 ring-white/20`} aria-hidden="true" />
            <div>
              <dt className="uppercase tracking-[0.15em] text-white/50">{p.label}</dt>
              <dd className="font-display text-base text-white">{inr(p.value)}</dd>
            </div>
          </div>
        ))}
        <div className="flex items-start gap-2">
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-sm bg-white" aria-hidden="true" />
          <div>
            <dt className="uppercase tracking-[0.15em] text-white/50">All in</dt>
            <dd className="font-display text-base text-[#F6E7C1]">{inr(total)}</dd>
          </div>
        </div>
      </dl>
    </div>
  );
}

const wrap = "mx-auto max-w-3xl px-5 md:px-6";
const sectionPad = "scroll-mt-[130px] py-20 md:py-28";
const waPlan = "Hi, please share the price and payment schedule for a 4 BHK at The Islands by Gaurs.";

export default function RentVsBuyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ModalWrapper />
      <ChapterNav items={CHAPTERS} ctaLabel="Payment Plan" />

      <GuideHero
        image={heroImg}
        imageAlt="A model house and a set of house keys on a wooden table"
        objectPosition="62% center"
        eyebrow="Buyer Guide · Rent vs Buy"
        title="Rent vs Buy House in Greater Noida:"
        titleAccent="Loan or Own Funds?"
        subtitle="Most guides assume you’ll borrow as much as the bank allows. Here’s how the answer changes at 25% down, 50% down and full payment, worked through for a golf-side 4 BHK at The Islands by Gaurs."
        chips={["₹9 crore example", "Rent ₹1.3 lakh a month", "Loan at 8% for 20 years", "UP RERA No. UPRERAPRJ734569"]}
        breadcrumbLabel="Rent vs Buy House in Greater Noida"
        primaryLabel="Get the Payment Plan"
        filmLabel="Watch the Explainers"
        updated="Updated 19 Nov 2026"
        readTime="9 min read"
        decoration={<RentEmiSketch />}
      />

      <StatStrip
        stats={[
          { text: "₹1.3 L", label: "Rent a month, similar home" },
          { text: "₹5.65 L", label: "EMI at 25% down" },
          { text: "1.7%", label: "A year’s rent ÷ price" },
          { text: "₹1.17 Cr", label: "Taxes no bank lends" },
          { text: "Apr 2030", label: "Possession on portals" },
        ]}
      />

      {/* ---------- Intro ---------- */}
      <section id="guide-start" className="scroll-mt-[130px] bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="guide-prose" data-reveal="left">
            <p className="text-xl leading-relaxed text-[#1a1a1a] first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[4.2rem] first-letter:leading-[0.85] first-letter:text-[#C49A2B] md:text-[1.35rem]">
              Most <strong>rent vs buy house</strong> guides assume you’ll borrow as much as the bank allows. Buyers of large
              golf-side homes often don’t. Some put down half, and some pay in full. That choice changes the comparison with
              renting more than the interest rate does.
            </p>
            <p>
              This page works it through for a 4 BHK at{" "}
              <Link href="/about-the-islands-by-gaurs">The Islands by Gaurs</Link> in Jaypee Greens. Prices are shared on
              request, so the example uses ₹9 crore, in line with what property portals show. It is arithmetic, not advice.
            </p>
            <ul className="!mt-8 grid grid-cols-3 gap-2 text-center">
              {PLANS.map((p) => (
                <li key={p.key} className="rounded-xl border border-[#e5dcc5] bg-[#FDFBF5] px-2 py-3">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">{p.label}</span>
                  <span className="font-display mt-1 block text-lg leading-tight text-[#8a6b14]">{p.emi > 0 ? inr(p.emi) : "No EMI"}</span>
                  <span className="block text-[11px] text-gray-400">{p.emi > 0 ? "EMI a month" : "₹10 Cr+ tied up"}</span>
                </li>
              ))}
            </ul>
          </div>
          <Figure
            src={facadeImg}
            alt="The Islands by Gaurs seen from the golf course (artist's impression)"
            caption="Golf-side homes at The Islands by Gaurs, Jaypee Greens. Artist’s impression."
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>
      </section>

      {/* ---------- 01 Rent and price ---------- */}
      <section id="rent-and-price" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="01" eyebrow="Jaypee Greens today">
            Rent and Price in Jaypee Greens
          </SectionHeading>
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-[140px]">
            <Figure
              src={livingRoomImg}
              alt="A bright, modern living room with a white sofa and timber wall panels"
              caption="₹1.3 lakh a month rents a home of about 3,850 sq. ft. in Jaypee Greens."
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
          <div className="space-y-4">
            <article className="card-lift rounded-2xl border border-[#e5dcc5] bg-white p-6 md:p-7" data-reveal data-reveal-delay="1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl text-[#1a1a1a]">Rent</h3>
                <p className="font-display text-3xl text-[#8a6b14]">
                  ₹1.3 L<span className="text-sm text-gray-400"> / month</span>
                </p>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                A large <strong className="text-[#1a1a1a]">flat for rent in Jaypee Greens</strong>, of about 3,850 sq. ft., asks
                around ₹1.25 lakh to ₹1.3 lakh a month. A 4,600 sq. ft. home asks about ₹2 lakh. This page uses ₹1.3 lakh for a
                home near the size of the smallest 4 BHK here, about 3,595 sq. ft.
              </p>
            </article>
            <article className="card-lift rounded-2xl border border-[#e5dcc5] bg-white p-6 md:p-7" data-reveal data-reveal-delay="2">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl text-[#1a1a1a]">Price</h3>
                <p className="font-display text-3xl text-[#8a6b14]">
                  ₹9 Cr<span className="text-sm text-gray-400"> example</span>
                </p>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                Portals show The Islands from about ₹8.84 crore. We use ₹9 crore as a round example. Ask us for the current
                figure.
              </p>
              <OpenModalButton className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a8841e] transition-colors hover:text-[#1a1a1a]">
                Ask for the current price
                <FaArrowRight size={10} aria-hidden="true" />
              </OpenModalButton>
            </article>
            <article className="card-lift rounded-2xl bg-[#1d1507] p-6 text-white md:p-7" data-reveal data-reveal-delay="3">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl text-[#F6E7C1]">Yield</h3>
                <p className="font-display text-3xl text-[#DCA54A]">1.7%</p>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                A year’s rent of ₹15.6 lakh is about 1.7% of ₹9 crore. The price equals about 58 years of today’s rent.
              </p>
              <div className="mt-5" aria-hidden="true">
                <div className="grid grid-cols-[repeat(29,minmax(0,1fr))] gap-1">
                  {Array.from({ length: 58 }).map((_, i) => (
                    <span key={i} className={`h-2.5 rounded-sm ${i === 0 ? "bg-[#DCA54A]" : "bg-white/15"}`} />
                  ))}
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45">58 years of rent = one ₹9 crore home</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- 02 Buying costs ---------- */}
      <section id="buying-costs" className={`${sectionPad} bg-white`}>
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[1.15fr_1fr] md:px-6">
          <div>
            <SectionHeading index="02" eyebrow="On top of the price">
              What You Pay Whichever Way You Buy
            </SectionHeading>
            <ul className="space-y-3">
              {COST_LINES.map((c, i) => (
                <li
                  key={c.label}
                  className="row-nudge flex items-start gap-4 rounded-2xl border border-[#e5dcc5] bg-[#FDFBF5] p-4 md:p-5"
                  data-reveal
                  data-reveal-delay={String(i + 1)}
                >
                  <span className="icon-pop flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1d1507] text-[#DCA54A]">
                    <c.icon size={16} aria-hidden="true" />
                  </span>
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    <strong className="text-[#1a1a1a]">{c.label}:</strong>{" "}
                    <span className="font-display text-lg text-[#8a6b14]">{c.amount}</span>, {c.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <Figure
            src={deedImg}
            alt="A person signing a document with a fountain pen"
            caption="Stamp duty and registration are paid on the sale deed, from your own pocket."
            aspect="aspect-[4/5]"
            sizes="(min-width: 768px) 420px, 100vw"
          />
        </div>
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <AllInBar />
        </div>
      </section>

      {/* ---------- 03 Rent vs EMI ---------- */}
      <section id="rent-vs-emi" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="03" eyebrow="25% down, 50% down or paid in full">
            Rent vs EMI at Three Levels of Home Loan Down Payment
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              Banks lend at most 75% on loans above ₹75 lakh, so 25% is the smallest <strong>home loan down payment</strong>{" "}
              allowed here. The loan is taken at 8% for 20 years.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-4xl px-5 md:px-6">
          <div className="overflow-x-auto rounded-2xl border border-[#e5dcc5] shadow-[0_20px_50px_-35px_rgba(44,31,14,0.5)]" data-reveal>
            <table className="guide-table w-full min-w-[620px] text-left text-sm">
              <thead className="bg-[#1d1507] text-[11px] uppercase tracking-[0.15em] text-[#F6E7C1]">
                <tr>
                  <th scope="col" className="px-5 py-4">
                    <span className="sr-only">Item</span>
                  </th>
                  {PLANS.map((p) => (
                    <th scope="col" key={p.key} className="px-5 py-4">
                      {p.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t border-[#efe6cf]">
                  <th scope="row" className="px-5 py-4 font-normal text-[#1a1a1a]">Your own money, with taxes</th>
                  {PLANS.map((p) => (
                    <td key={p.key} className="px-5 py-4 text-gray-700">{inr(p.ownMoney, { long: true })}</td>
                  ))}
                </tr>
                <tr className="border-t border-[#efe6cf]">
                  <th scope="row" className="px-5 py-4 font-normal text-[#1a1a1a]">Loan</th>
                  {PLANS.map((p) => (
                    <td key={p.key} className="px-5 py-4 text-gray-700">{p.loan > 0 ? inr(p.loan, { long: true }) : "None"}</td>
                  ))}
                </tr>
                <tr className="border-t border-[#efe6cf] bg-[#FBF6E8]">
                  <th scope="row" className="px-5 py-4 font-semibold text-[#1a1a1a]">EMI after possession</th>
                  {PLANS.map((p) => (
                    <td key={p.key} className="font-display px-5 py-4 text-lg text-[#8a6b14]">
                      {p.emi > 0 ? inr(p.emi, { long: true }) : "None"}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-[#efe6cf]">
                  <th scope="row" className="px-5 py-4 font-normal text-[#1a1a1a]">Interest paid during construction</th>
                  {PLANS.map((p) => (
                    <td key={p.key} className="px-5 py-4 text-gray-700">{p.constructionInterest}</td>
                  ))}
                </tr>
                <tr className="border-t border-[#efe6cf]">
                  <th scope="row" className="px-5 py-4 font-normal text-[#1a1a1a]">Rent on a similar home</th>
                  {PLANS.map((p) => (
                    <td key={p.key} className="px-5 py-4 text-gray-700">{inr(MONTHLY_RENT, { long: true })}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs italic text-gray-500 md:hidden">Swipe the table sideways to see every column.</p>
        </div>

        <div className="mx-auto mt-6 grid max-w-5xl items-center gap-10 px-5 md:px-6 lg:grid-cols-[1.25fr_1fr]">
          <MonthlyOutgo />
          <div>
            <Figure
              src={coinsImg}
              alt="A hand stacking coins into small columns on a table"
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 400px, 100vw"
            />
            <div className="guide-prose mt-6" data-reveal>
              <p>
                With 25% down, the <strong>EMI is more than four times the rent</strong>. With 50% down it is still nearly
                three times. Paying in full removes the EMI, but ties up over ₹10 crore that could be earning elsewhere.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <RentVsEmiCalculator />
        </div>
        <div className={wrap}>
          <InlineCta
            eyebrow="Real figures for your home"
            title="Get the price and payment schedule in writing"
            text="We’ll share the current price, the payment schedule and any down payment plan on offer, so you can rerun these numbers."
            primaryLabel="Get the Payment Plan"
            secondary={{ href: "/price", label: "Configurations" }}
          />
        </div>
      </section>

      <CtaBand
        image={lakeGolfImg}
        imageAlt="The Islands by Gaurs beside the lake and the golf course (artist's impression)"
        eyebrow="The example is ₹9 crore. Yours may differ."
        title="Ask for the current price and payment schedule"
        text="We’ll send the actual figure for the home you like, with the schedule in writing, so you can compare renting and buying on real numbers."
        primaryLabel="Get the Payment Plan"
        secondary={{ href: "/floor-plans", label: "Floor Plans" }}
        waMessage={waPlan}
        impression
      />

      {/* ---------- 04 The wait ---------- */}
      <section id="wait-until-2030" className={`${sectionPad} bg-white`}>
        <div className={wrap}>
          <SectionHeading index="04" eyebrow="Renting while it’s built">
            The Wait Until 2030
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              Portals show possession from April 2030, a little over three years away. If you rent a similar home in the
              meantime at ₹1.3 lakh with 5% rises, that is about <strong>₹57 lakh of rent</strong>.
            </p>
          </div>
          <RentDuringWait />
          <div className="guide-prose" data-reveal>
            <p>
              Under a construction-linked plan the loan is drawn in stages, and you pay interest only on what has been drawn.
              Ask for the payment schedule in writing, since a down payment plan or subvention scheme changes the figures.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 grid max-w-5xl items-center gap-8 px-5 md:grid-cols-2 md:px-6">
          <Figure
            src={cranesImg}
            alt="Tower cranes above a high-rise under construction"
            caption="Under a construction-linked plan, the loan is drawn as the towers rise."
            aspect="aspect-video"
            sizes="(min-width: 768px) 480px, 100vw"
          />
          <InlineVideo video={CONSTRUCTION_VIDEO} caption="Watch the site: the developer’s September 2026 construction update." />
        </div>
      </section>

      {/* ---------- 05 Break-even ---------- */}
      <section id="break-even" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="05" eyebrow="Ten years from booking">
            When Does Buying Break Even?
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              Suppose the tenant invests the money the buyer puts in, plus the monthly difference. Over ten years from booking,
              how fast must the home appreciate for the buyer to end up level?
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-5 md:px-6">
          <BreakEvenGrid />
        </div>
        <div className="mx-auto mt-4 grid max-w-5xl gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Figure
            src={growthImg}
            alt="A green seedling growing out of a pile of coins"
            caption="What your money earns elsewhere sets the bar the home has to clear."
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 440px, 100vw"
          />
          <div>
            <h3 className="font-display text-2xl text-[#1a1a1a]" data-reveal>
              Three things stand out:
            </h3>
            <ol className="mt-5 space-y-3">
              {TAKEAWAYS.map((t, i) => (
                <li
                  key={t.lead}
                  className="row-nudge flex items-start gap-4 rounded-2xl border border-[#e5dcc5] bg-white p-5"
                  data-reveal
                  data-reveal-delay={String(i + 1)}
                >
                  <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1d1507] text-lg text-[#DCA54A]">
                    {i + 1}
                  </span>
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    <strong className="text-[#1a1a1a]">{t.lead}</strong> {t.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className={wrap}>
          <blockquote className="mt-14 border-l-4 border-[#C49A2B] pl-6" data-reveal>
            <p className="font-display text-2xl leading-snug text-[#1a1a1a] md:text-3xl">
              At 25% down and 9%, the home has to go from ₹9 crore to about ₹20 crore in ten years.
            </p>
          </blockquote>
        </div>
      </section>

      <VideoTheatre
        eyebrow="Videos"
        title="Rent vs buy, explained on screen"
        intro="Three general explainers on renting, buying and the hidden costs of a home loan, plus films from the project. For this home, the price and payment schedule in writing are what count."
        videos={VIDEOS}
        primaryLabel="Book a Site Visit"
        waMessage="Hi, I'd like to visit The Islands by Gaurs and get the payment schedule."
      />

      {/* ---------- 06 Tax ---------- */}
      <section id="tax" className={`${sectionPad} bg-white`}>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-[140px] lg:self-start">
            <SectionHeading index="06" eyebrow="Old regime, new regime">
              Tax on Rent and Home Loans
            </SectionHeading>
            <Figure
              src={taxImg}
              alt="Tax papers, a calculator and a cup of coffee on a dark desk"
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 460px, 100vw"
            />
          </div>
          <div>
            <ul className="space-y-4">
              {TAX.map((t, i) => (
                <li
                  key={t.title}
                  className="row-nudge flex items-start gap-5 rounded-2xl border border-[#e5dcc5] bg-[#FDFBF5] p-5 md:p-6"
                  data-reveal
                  data-reveal-delay={String(i + 1)}
                >
                  <span className="icon-pop flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1d1507] text-[#DCA54A]">
                    <t.icon size={16} aria-hidden="true" />
                  </span>
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    <strong className="text-[#1a1a1a]">{t.title}</strong> {t.body}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-[#1d1507] p-6 text-white" data-reveal>
              <p className="text-[15px] leading-relaxed text-white/80">
                <strong className="text-[#F6E7C1]">At these loan sizes, tax should not decide how much you borrow.</strong>{" "}
                Check your own position with a tax adviser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 07 Rent or buy ---------- */}
      <section id="rent-or-buy" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHeading index="07" eyebrow="Which suits you">
                Is It Better to Rent or Buy a House Here?
              </SectionHeading>
              <p className="text-[15px] leading-relaxed text-gray-600" data-reveal>
                Tap the statements that sound like you to see which way you lean.
              </p>
            </div>
            <Figure
              src={familyRoomImg}
              alt="A sunlit family living room with sofas, plants and framed pictures"
              aspect="aspect-[4/3]"
              sizes="(min-width: 768px) 440px, 100vw"
            />
          </div>
          <RentOrBuyFinder />
        </div>
      </section>

      {/* ---------- 08 The Islands ---------- */}
      <section id="the-islands" className={`relative isolate overflow-hidden ${sectionPad} bg-white`}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading index="08" eyebrow="The project">
              The Islands by Gaurs
            </SectionHeading>
            <div className="guide-prose" data-reveal>
              <p>
                <Link href="/about-the-islands-by-gaurs">The Islands by Gaurs</Link> by{" "}
                <Link href="/about-gaurs">Gaurs Group</Link> has 506 condominiums in nine towers, for buyers looking at a{" "}
                <strong>4 BHK in Jaypee Greens Greater Noida</strong>.
              </p>
              <ul className="diamond-list">
                <li>
                  <strong>Homes:</strong> 4 BHK from about 3,595 sq. ft., plus 5 BHK, duplexes and penthouses. See the{" "}
                  <Link href="/floor-plans">floor plans</Link>
                </li>
                <li>
                  <strong>Price:</strong> shared on request. Payment plans are on{" "}
                  <Link href="/price">The Islands by Gaurs price</Link> page
                </li>
                <li>
                  <strong>More:</strong> <Link href="/amenities">amenities</Link>,{" "}
                  <Link href="/location-connectivity">location and connectivity</Link>, and our guides on{" "}
                  <Link href="/super-built-up-area-vs-carpet-area">super built-up area vs carpet area</Link> and{" "}
                  <Link href="/villa-vs-flat-large-family-jaypee-greens">villa vs flat for a large family</Link>
                </li>
              </ul>
            </div>
            <div className="mt-8" data-reveal>
              <CtaGroup tone="light" primaryLabel="Get the Payment Plan" secondary={{ href: "/price", label: "Price Page" }} waMessage={waPlan} showPhone={false} />
            </div>
          </div>
          <Figure
            src={nightImg}
            alt="The Islands by Gaurs at night from Pari Chowk (artist's impression)"
            caption="Artist’s impression."
            aspect="aspect-[16/11]"
            sizes="(min-width: 1024px) 600px, 100vw"
          />
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section id="faqs" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="09" eyebrow="Answers">
            FAQs
          </SectionHeading>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* ---------- Conclusion ---------- */}
      <section id="conclusion" className={`${sectionPad} bg-white`}>
        <div className={wrap}>
          <SectionHeading index="10" eyebrow="In short">
            Conclusion
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              On <strong>rent vs buy house in Greater Noida</strong>, a home like this is far cheaper to rent than to own,
              however you pay. It needs to gain about 7% to 9% a year to match, depending on how much of your own money goes in
              and what that money would earn elsewhere. If it is the home you want to keep, decide the loan size with that in
              mind. If your plans are open, renting in Jaypee Greens keeps your options and your capital free.
            </p>
            <p>
              For the current price and payment schedule, <Link href="/contact-us">contact us</Link> or call{" "}
              <a href="tel:+919810890353">+91 98108 90353</a>.
            </p>
          </div>
          <div className="mt-8" data-reveal>
            <CtaGroup tone="light" primaryLabel="Get the Payment Plan" secondary={{ href: "/contact-us", label: "Contact Us" }} waMessage={waPlan} showPhone={false} />
          </div>
          <p className="mt-12 border-t border-[#e5dcc5] pt-6 text-xs italic leading-relaxed text-gray-500">
            This page is general information, not financial, tax or legal advice. The ₹9 crore price is an example, not a
            quote. Figures are illustrations based on the stated assumptions and on published data as of November 2026. Verify
            project details on the UP RERA portal (UPRERAPRJ734569). This website belongs to an authorised channel partner, not
            the developer.
          </p>
        </div>
      </section>
      <div id="guide-end" aria-hidden="true" />

      <GuideLeadSection
        image={facadeImg}
        eyebrow="Payment plan, one-to-one"
        title="Get the price and payment schedule for your home"
        text="Tell us which home you’re considering. We’ll send the figures you need to rerun this comparison, in writing."
        points={[
          "The current price for the exact unit",
          "The payment schedule, stage by stage",
          "Any down payment plan or subvention scheme on offer",
          "GST, stamp duty and other charges, line by line",
        ]}
        waMessage={waPlan}
      />

      <RelatedGuides items={[relatedPool.carpetArea, relatedPool.villaVsFlat, relatedPool.price, relatedPool.floorPlans]} />

      <StickyDownloadButton />
    </>
  );
}
