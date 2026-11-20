import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaShieldAlt,
  FaRulerCombined,
  FaCar,
  FaTools,
  FaHome,
  FaLandmark,
  FaUsers,
  FaMapMarkerAlt,
  FaSubway,
  FaArrowRight,
  FaExternalLinkAlt,
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
import OpenModalButton from "@/components/guides/OpenModalButton";
import ParallaxImage from "@/components/guides/ParallaxImage";
import LivingLayoutDiagram from "@/components/guides/LivingLayoutDiagram";
import FitFinder from "@/components/guides/FitFinder";
import VideoTheatre from "@/components/guides/VideoTheatre";
import InlineVideo from "@/components/guides/InlineVideo";
import FaqAccordion from "@/components/guides/FaqAccordion";
import GuideLeadSection from "@/components/guides/GuideLeadSection";
import RelatedGuides from "@/components/guides/RelatedGuides";
import { relatedPool, SITE_URL } from "@/data/guidesData";

import heroImg from "@/assets-islandbygaurs/images/guides/villa-vs-flat-hero.webp";
import familyImg from "@/assets-islandbygaurs/images/guides/large-family-sunset.webp";
import loungeImg from "@/assets-islandbygaurs/images/guides/family-lounge-interior.webp";
import stairsImg from "@/assets-islandbygaurs/images/guides/villa-staircase-interior.webp";
import lakeImg from "@/assets-islandbygaurs/images/guides/islands-lake-golf-view.webp";
import nightImg from "@/assets-islandbygaurs/images/guides/islands-night-pari-chowk.webp";
import facadeImg from "@/assets-islandbygaurs/images/guides/islands-golf-course-facade.webp";
import villaLawnImg from "@/assets-islandbygaurs/images/guides/villa-garden-lawn.webp";
import villaPoolImg from "@/assets-islandbygaurs/images/guides/private-villa-pool.webp";
import templeImg from "@/assets-islandbygaurs/images/neighbourhood-2.webp";
import orbitImg from "@/assets-islandbygaurs/images/9.webp";
import ivoryImg from "@/assets-islandbygaurs/images/17.webp";
import gymImg from "@/assets-islandbygaurs/images/14.webp";
import courtsImg from "@/assets-islandbygaurs/images/8.webp";
import saunaImg from "@/assets-islandbygaurs/images/6.webp";
import theatreImg from "@/assets-islandbygaurs/images/18.webp";

const SLUG = "villa-vs-flat-large-family-jaypee-greens";
const URL = `${SITE_URL}/${SLUG}`;
const TITLE = "Villa vs Flat for Large Families: A Jaypee Greens Guide";
const DESCRIPTION =
  "Villa vs flat for a large family: compare Jaypee Greens villas with 4, 5 and 6 BHK golf-facing condominiums on space, layout, upkeep, commute and resale.";
const HEADLINE = "Villa vs Flat for Large Families: Can a 5 BHK Apartment Replace a Villa?";
const PUBLISHED = "2026-11-18";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "villa vs flat",
    "villa vs flat for a joint family",
    "villa or flat which is better",
    "difference between villa and flat",
    "duplex vs villa",
    "villas in Jaypee Greens",
    "4 BHK flats in Jaypee Greens",
    "5 BHK apartment in Greater Noida",
    "The Islands by Gaurs",
    "the island by Gaurs",
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
    images: [{ url: heroImg.src, width: heroImg.width, height: heroImg.height, alt: "Jaypee Greens villas and The Islands by Gaurs on the golf course" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [heroImg.src] },
};

const FAQS = [
  {
    q: "Villa vs flat: which is better for a joint family?",
    a: "A villa works best if each generation wants its own floor and you value a private garden. A large apartment works best if you'd rather live on one level with a lift, shared security and amenities, and metro access for grandparents and teenagers.",
  },
  {
    q: "Can a large apartment work for three generations?",
    a: "Yes, if the layout separates the spaces well. Look for a family lounge as well as a formal living room, walk-in closets, and a utility balcony that's kept apart from the leisure balconies.",
  },
  {
    q: "What sizes are available at The Islands by Gaurs?",
    a: "4 BHK homes run from about 3,595 to 5,962 sq. ft. saleable. The 5 BHK is about 4,359 sq. ft. saleable with 2,473 sq. ft. of carpet area, and the 6 BHK, duplex and penthouse homes run to 6,000+ sq. ft.",
  },
  {
    q: "What is the price of The Islands by Gaurs?",
    a: "Prices are shared on request, one-to-one. Ask for the latest price sheet and compare the rate per sq. ft. of carpet area.",
  },
  { q: "How many apartments are there per floor?", a: "Two condominiums per floor." },
  {
    q: "Is there a duplex or penthouse option?",
    a: "Yes. Select 6 BHK, duplex and penthouse homes on the top floors run to 6,000+ sq. ft.",
  },
  {
    q: "How far is The Islands by Gaurs from the metro?",
    a: "Pari Chowk Metro station is about 2 minutes away, and Alpha 1 Metro about 5 minutes.",
  },
  {
    q: "Is The Islands by Gaurs RERA registered?",
    a: "Yes, under UP RERA number UPRERAPRJ734569. You can verify it at up-rera.in.",
  },
];

const CHAPTERS = [
  { id: "difference", label: "Villa vs Flat" },
  { id: "space", label: "Space" },
  { id: "layout", label: "Layout" },
  { id: "daily-routine", label: "Daily Routine" },
  { id: "amenities", label: "Amenities" },
  { id: "price", label: "Price" },
  { id: "duplex", label: "Duplex vs Villa" },
  { id: "investment", label: "Investment" },
  { id: "which-suits-you", label: "Which Suits You" },
  { id: "checks", label: "Checks" },
  { id: "films", label: "Films" },
  { id: "the-islands", label: "The Islands" },
  { id: "villa-alternatives", label: "Villa Options" },
  { id: "faqs", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

const VIDEOS = [
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
    id: "IrjH9W63w_8",
    title: "Rendezvous by the Greens | Stories from The Islands by Gaurs",
    channel: "Gaurs | Luxury",
    duration: "2:58",
    tag: "Life at The Islands",
    poster: "https://i.ytimg.com/vi/IrjH9W63w_8/maxresdefault.jpg",
    note: "A short story film about everyday life beside the greens.",
  },
  {
    id: "dkgSh_IjHqU",
    title: "September 2026 Construction Update | The Islands by Gaurs",
    channel: "Gaurs | Luxury",
    duration: "0:52",
    tag: "Site progress",
    poster: "https://i.ytimg.com/vi/dkgSh_IjHqU/maxresdefault.jpg",
    note: "The latest published progress from the site.",
  },
];

const LEGACY_VIDEO = {
  id: "9M4hWUwaHi0",
  title: "Walkthrough of Golf-Facing Limited Edition Luxury Villas | Legacy by Gaurs",
  channel: "Gaurs | Luxury",
  duration: "5:36",
  poster: "https://i.ytimg.com/vi/9M4hWUwaHi0/maxresdefault.jpg",
};

const SPACE_BARS = [
  { label: "4 BHK", detail: "from about 3,595 sq. ft. saleable", saleable: 3595 },
  { label: "5 BHK", detail: "about 4,359 sq. ft. saleable · 2,473 sq. ft. carpet", saleable: 4359, carpet: 2473 },
  { label: "Premium 4 BHK", detail: "up to about 5,962 sq. ft. saleable", saleable: 5962 },
  { label: "6 BHK · Duplex · Penthouse", detail: "6,000+ sq. ft. on the top floors", saleable: 6200, plus: true },
];

const VILLA_PRICES = [
  { what: "Older town-home villas", where: "Jaypee Greens", price: "₹9.98–10.75 Cr" },
  { what: "An established villa project", where: "Jaypee Greens", price: "₹14.04–16.2 Cr" },
  { what: "A 5,200 sq. ft. villa", where: "Jaypee Greens", price: "₹16.92 Cr" },
  { what: "4 BHK villa, 4,730 sq. ft. built-up, about seven years old", where: "Godrej Golf Links, close by", price: "₹6.95 Cr" },
];

const AMENITY_PHOTOS = [
  { src: orbitImg, label: "The Orbit skywalk" },
  { src: ivoryImg, label: "Ivory Coast open-air zone" },
  { src: courtsImg, label: "Paddle & multipurpose courts" },
  { src: theatreImg, label: "Open-air theatre" },
  { src: gymImg, label: "Gym" },
  { src: saunaImg, label: "Sauna & steam room" },
];

const CHECKS = [
  {
    icon: FaShieldAlt,
    title: "RERA",
    body: (
      <>
        Verify The Islands by Gaurs under UP RERA number <strong>UPRERAPRJ734569</strong> on{" "}
        <a href="https://up-rera.in/" target="_blank" rel="noopener noreferrer">
          up-rera.in
        </a>
        .
      </>
    ),
  },
  { icon: FaRulerCombined, title: "Carpet area", body: "Get the carpet area of the exact unit, not just the saleable area." },
  { icon: FaCar, title: "Parking", body: "Ask how many car parks come with the home. Large families usually need more than one." },
  { icon: FaTools, title: "Maintenance", body: "Ask for the maintenance rate and what it covers." },
  {
    icon: FaHome,
    title: "For a villa",
    body: "Check the lease deed, the age of the structure, whether a lift can be added, and the transfer charges.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: HEADLINE,
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
        { "@type": "ListItem", position: 2, name: "Villa vs Flat for Large Families", item: URL },
      ],
    },
  ],
};

const wrap = "mx-auto max-w-3xl px-5 md:px-6";
const sectionPad = "scroll-mt-[130px] py-20 md:py-28";

export default function VillaVsFlatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ModalWrapper />
      <ChapterNav items={CHAPTERS} />

      <GuideHero
        image={heroImg}
        imageAlt="Jaypee Greens golf course with villas on the left and The Islands by Gaurs on the right (artist's impression)"
        objectPosition="72% center"
        eyebrow="Buyer Guide · Villa vs Flat"
        title="Villa vs Flat for Large Families:"
        titleAccent="Can a 5 BHK Apartment Replace a Villa?"
        subtitle="Grandparents, parents, growing children and household staff under one roof. Here’s how Jaypee Greens villas compare with 4, 5 and 6 BHK golf-facing condominiums on space, layout, upkeep, commute and resale."
        chips={["4 · 5 · 6 BHK condominiums", "3,595 – 6,000+ sq. ft.", "Two homes per floor", "Pari Chowk Metro ≈ 2 min"]}
        breadcrumbLabel="Villa vs Flat"
        updated="Updated 18 Nov 2026"
        readTime="9 min read"
        impression
      />

      <StatStrip
        stats={[
          { end: 506, label: "Condominiums" },
          { end: 9, label: "Towers" },
          { end: 37, label: "Storeys, up to" },
          { end: 30000, label: "Sq. ft. clubhouse" },
          { end: 90, suffix: " m", label: "Skywalk above ground" },
        ]}
      />

      {/* ---------- Intro ---------- */}
      <section id="guide-start" className="scroll-mt-[130px] bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="guide-prose" data-reveal="left">
            <p className="text-xl leading-relaxed text-[#1a1a1a] first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[4.2rem] first-letter:leading-[0.85] first-letter:text-[#C49A2B] md:text-[1.35rem]">
              Most property guides say a joint family needs a villa. That advice made sense when apartments topped out at
              three bedrooms. It holds up less well now that a single apartment can run to 4,000–6,000 sq. ft., with a
              separate family lounge and two homes on each floor.
            </p>
            <p>
              This guide looks at <strong>villa vs flat for a joint family</strong> or any large household: grandparents,
              parents, growing children and household staff under one roof. If you’re asking “villa or flat, which is
              better?” for a family that size, the answer depends on how your days actually run.
            </p>
          </div>
          <Figure
            src={familyImg}
            alt="A large multi-generational family walking together at sunset"
            caption="Three generations, one household. The right home is the one that fits how your days run."
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>
      </section>

      {/* ---------- Difference ---------- */}
      <section id="difference" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="01" eyebrow="The core trade-off">
            Difference Between Villa and Flat for a Big Family
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              A villa usually gives each generation its own floor. Grandparents take the ground floor, parents the first,
              children the top, and the garden brings everyone together. That separation is the villa’s biggest strength for
              a large family.
            </p>
            <p>
              A large flat keeps everyone on one level and separates people by zone instead of by floor. Formal spaces sit
              on one side, private bedrooms on the other, with a family room in between. The main difference between villa
              and flat for a big household is <strong>stairs versus distance</strong>. A villa puts the generations on
              different floors, while a flat puts them along one corridor.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <LivingLayoutDiagram />
        </div>
      </section>

      {/* ---------- Space ---------- */}
      <section id="space" className={`${sectionPad} bg-white`}>
        <div className={wrap}>
          <SectionHeading index="02" eyebrow="Square feet, honestly">
            Space
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              Big apartments here are genuinely big. At The Islands by Gaurs, 4 BHK homes start at about{" "}
              <strong>3,595 sq. ft.</strong> saleable and go up to about <strong>5,962 sq. ft.</strong> for the Premium 4
              BHK. The 5 BHK is about <strong>4,359 sq. ft.</strong> saleable, with <strong>2,473 sq. ft.</strong> of carpet
              area. On the top floors, the 6 BHK, duplex and penthouse homes run to <strong>6,000+ sq. ft.</strong>
            </p>
          </div>

          <div className="mt-10 space-y-5 rounded-2xl border border-[#e5dcc5] bg-[#FDFBF5] p-6 md:p-8" data-reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8841e]">Homes at The Islands, to scale</p>
            {SPACE_BARS.map((b) => (
              <div key={b.label}>
                <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
                  <span className="font-display text-base text-[#1a1a1a]">{b.label}</span>
                  <span className="text-gray-500">{b.detail}</span>
                </div>
                <div className="relative h-4 overflow-hidden rounded-full bg-[#f1ead6]">
                  <div
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#d9bf7c] to-[#C49A2B] ${b.plus ? "opacity-80" : ""}`}
                    style={{ width: `${(b.saleable / 6200) * 100}%` }}
                  />
                  {b.carpet ? (
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-[#1d1507]"
                      style={{ width: `${(b.carpet / 6200) * 100}%` }}
                      title="Carpet area"
                    />
                  ) : null}
                </div>
              </div>
            ))}
            <p className="flex items-center gap-4 pt-1 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-5 rounded-full bg-[#C49A2B]" aria-hidden="true" /> Saleable area
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2.5 w-5 rounded-full bg-[#1d1507]" aria-hidden="true" /> Carpet area (5 BHK)
              </span>
            </p>
          </div>

          <div className="guide-prose mt-10" data-reveal>
            <p>
              Note the gap between saleable and carpet area. In that 5 BHK, carpet area is about <strong>57%</strong> of the
              saleable figure. Villas are usually quoted on built-up area instead. Whatever you’re comparing, ask for carpet
              area in writing so you’re comparing like with like.
            </p>
          </div>

          <InlineCta
            eyebrow="Compare like with like"
            title="Get the carpet area of your exact home, in writing"
            text="We share the carpet and balcony areas for the specific unit you like, alongside the saleable figure."
            primaryLabel="Request Carpet Area"
            secondary={{ href: "/super-built-up-area-vs-carpet-area", label: "Carpet Area Guide" }}
          />
        </div>
      </section>

      {/* ---------- Layout ---------- */}
      <section id="layout" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="03" eyebrow="Zones, not just rooms">
            Layout for Three Generations
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              Layout matters more than the total area. Every residence at The Islands comes with a{" "}
              <strong>family lounge</strong> as well as the formal living room, <strong>walk-in closets</strong> in the
              master suites, and a <strong>utility balcony</strong> that’s separate from the leisure balconies. In practice,
              guests stay in the formal living room, the family spends evenings in the lounge, and laundry and staff work stay
              off the main balconies.
            </p>
            <p>
              A villa gives you that separation through its floors. The catch is the stairs, which are easy at 35 and much
              harder at 75. If your parents live with you, ask whether the villa you like has a lift or space to add one.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 px-5 md:grid-cols-2 md:px-6">
          <Figure
            src={loungeImg}
            alt="A bright, open family lounge in a large apartment"
            caption="Apartment: one level, separated by zone. Guests in the formal living room, the family in the lounge."
            aspect="aspect-[4/3]"
            sizes="(min-width: 768px) 480px, 100vw"
          />
          <Figure
            src={stairsImg}
            alt="Living room with a staircase leading to the upper floor of a house"
            caption="Villa: separated by floor. Easy at 35, much harder at 75. Ask about a lift."
            aspect="aspect-[4/3]"
            sizes="(min-width: 768px) 480px, 100vw"
          />
        </div>
      </section>

      {/* ---------- Daily routine ---------- */}
      <section id="daily-routine" className={`${sectionPad} bg-white`}>
        <div className={wrap}>
          <SectionHeading index="04" eyebrow="Independence for every age">
            Children, Elders and Daily Routine
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              A villa garden is perfect for small children. Teenagers and grandparents, though, often care more about getting
              around on their own. From The Islands, Pari Chowk Metro station is about 2 minutes away and Alpha 1 Metro about
              5 minutes. A grandparent can get to a temple or a market, and a teenager to coaching, without waiting for a
              driver.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl items-stretch gap-6 px-5 md:grid-cols-[1fr_1.3fr] md:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {[
              { mins: "2", label: "Pari Chowk Metro station" },
              { mins: "5", label: "Alpha 1 Metro station" },
            ].map((m, i) => (
              <div
                key={m.label}
                className="card-lift flex flex-col justify-between rounded-2xl bg-[#1d1507] p-6 text-white"
                data-reveal
                data-reveal-delay={String(i + 1)}
              >
                <FaSubway className="text-[#DCA54A]" size={22} aria-hidden="true" />
                <p className="mt-6">
                  <span className="font-display text-5xl text-[#F6E7C1]">≈{m.mins}</span>
                  <span className="ml-2 text-sm uppercase tracking-[0.2em] text-white/60">min</span>
                </p>
                <p className="mt-1 text-sm text-white/70">{m.label}</p>
              </div>
            ))}
          </div>
          <Figure
            src={templeImg}
            alt="A temple surrounded by palms under a blue sky"
            caption="A temple, a market or coaching class, reached without waiting for a driver."
            aspect="aspect-[4/3]"
            sizes="(min-width: 768px) 560px, 100vw"
          />
        </div>
        <div className={`${wrap} mt-10`}>
          <div className="guide-prose" data-reveal>
            <p>
              Households with staff work differently too. A villa typically needs a gardener, a guard and help for each
              floor. In a well-run tower, security and common-area upkeep are shared, so your own staff can focus on the home
              itself.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Amenities (immersive) ---------- */}
      <section id="amenities" className={`relative isolate overflow-hidden text-white ${sectionPad}`}>
        <ParallaxImage src={lakeImg} alt="" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f0c06]/90 via-[#0f0c06]/80 to-[#0f0c06]/95" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="max-w-3xl">
            <SectionHeading index="05" eyebrow="A garden, or a whole resort" tone="dark">
              Amenities
            </SectionHeading>
            <p className="text-[1.0625rem] leading-[1.85] text-white/80" data-reveal>
              A private villa garden is hard to beat for a family barbecue. A large tower gives the whole family more to do,
              every day. The Islands has a 30,000 sq. ft. clubhouse called the <strong className="text-white">Gold Coast</strong>,
              an open-air activity zone called the <strong className="text-white">Ivory Coast</strong>, and{" "}
              <strong className="text-white">The Orbit</strong>, a skywalk 90 m above the ground. There’s also an indoor heated
              pool, paddle and multipurpose courts, home and open-air theatres, a sauna and steam room, a gym and 24x7
              security. See the full{" "}
              <Link href="/amenities" className="text-[#DCA54A] underline decoration-[#DCA54A]/40 underline-offset-4 hover:decoration-[#DCA54A]">
                amenities
              </Link>{" "}
              list.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { name: "The Gold Coast", stat: "30,000 sq. ft.", text: "The clubhouse" },
              { name: "The Ivory Coast", stat: "Open-air", text: "Activity zone" },
              { name: "The Orbit", stat: "90 m", text: "Skywalk above the ground" },
            ].map((a, i) => (
              <div
                key={a.name}
                className="glass-chip card-lift rounded-2xl p-6"
                data-reveal
                data-reveal-delay={String(i + 1)}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#DCA54A]">{a.name}</p>
                <p className="font-display mt-3 text-4xl text-[#F6E7C1]">{a.stat}</p>
                <p className="mt-1 text-sm text-white/70">{a.text}</p>
              </div>
            ))}
          </div>

          <ul className="mt-6 flex flex-wrap gap-2.5" data-reveal>
            {["Indoor heated pool", "Paddle & multipurpose courts", "Home & open-air theatres", "Sauna & steam room", "Gym", "24x7 security"].map(
              (t) => (
                <li key={t} className="glass-chip rounded-full px-4 py-2 text-xs tracking-wide text-[#F6E7C1]">
                  {t}
                </li>
              )
            )}
          </ul>

          <div className="no-scrollbar -mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-6 md:px-0">
            {AMENITY_PHOTOS.map((p, i) => (
              <figure
                key={p.label}
                className="group relative aspect-[3/4] w-40 shrink-0 snap-start overflow-hidden rounded-xl md:w-auto"
                data-reveal
                data-reveal-delay={String(i + 1)}
              >
                <Image src={p.src} alt={p.label} fill sizes="(min-width: 768px) 180px, 160px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 pt-8 text-xs font-medium leading-tight">
                  {p.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-white/45">Lifestyle images are representative. Background: artist’s impression.</p>
        </div>
      </section>

      <CtaBand
        image={nightImg}
        imageAlt="The Islands by Gaurs lit up at night, seen from Pari Chowk (artist's impression)"
        eyebrow="See it in person"
        title="Walk the site before you choose a format"
        text="See the golf-course frontage and the scale of the towers, and ask for the carpet area of the exact home you like."
        primaryLabel="Book a Site Visit"
        secondary={{ href: "/floor-plans", label: "View Floor Plans" }}
        waMessage="Hi, I'd like to book a site visit at The Islands by Gaurs."
        impression
      />

      {/* ---------- Price ---------- */}
      <section id="price" className={`${sectionPad} bg-white`}>
        <div className={wrap}>
          <SectionHeading index="06" eyebrow="What the market asks">
            Price
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              <strong>Villas in Jaypee Greens</strong> span a wide range. Listings include older town-home villas at about
              ₹9.98–10.75 crore, an established villa project at ₹14.04–16.2 crore, and a 5,200 sq. ft. villa at ₹16.92
              crore. Close by at Godrej Golf Links, a 4 BHK villa of 4,730 sq. ft. built-up, about seven years old, is listed
              at ₹6.95 crore.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 px-5 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
          {VILLA_PRICES.map((v, i) => (
            <div key={v.what} className="card-lift rounded-2xl border border-[#e5dcc5] bg-[#FDFBF5] p-6" data-reveal data-reveal-delay={String(i + 1)}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">{v.where}</p>
              <p className="font-display mt-3 text-3xl text-[#1a1a1a]">{v.price}</p>
              <p className="mt-2 text-sm leading-snug text-gray-600">{v.what}</p>
            </div>
          ))}
          <div className="relative overflow-hidden rounded-2xl bg-[#1d1507] p-6 text-white sm:col-span-2 lg:col-span-2" data-reveal data-reveal-delay="5">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#C49A2B]/30 blur-3xl" aria-hidden="true" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DCA54A]">The Islands by Gaurs · 4, 5 &amp; 6 BHK</p>
            <p className="font-display mt-3 text-3xl text-[#F6E7C1]">On request, one-to-one</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
              Compare the price per sq. ft. of carpet area against any villa on your shortlist.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <OpenModalButton className="btn-sheen inline-flex items-center gap-2 rounded-sm bg-[#C49A2B] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                Get the Price Sheet <FaArrowRight size={10} aria-hidden="true" />
              </OpenModalButton>
              <Link href="/price" className="rounded-sm border border-white/40 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#1d1507]">
                Configurations
              </Link>
            </div>
          </div>
        </div>
        <div className={`${wrap} mt-10`}>
          <div className="guide-prose" data-reveal>
            <p>
              At The Islands by Gaurs, prices for every configuration are shared on request, one-to-one. Ask for the latest
              price sheet on the <Link href="/price">price</Link> page and compare the price per sq. ft. of carpet area against
              any villa on your shortlist.
            </p>
            <p className="text-sm text-gray-500">Villa figures are listing prices at the time of writing; asking prices change.</p>
          </div>
        </div>
      </section>

      {/* ---------- Duplex (split, immersive) ---------- */}
      <section id="duplex" className="relative scroll-mt-[130px] overflow-hidden bg-[#141004] text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative isolate min-h-[320px] lg:min-h-[640px]">
            <ParallaxImage src={lakeImg} alt="The Islands by Gaurs towers above the lake and golf course (artist's impression)" sizes="(min-width: 1024px) 50vw, 100vw" strength={40} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141004] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#141004]" aria-hidden="true" />
            <p className="absolute left-4 top-3 text-[11px] text-white/60">Artist’s impression</p>
          </div>
          <div className="flex items-center px-5 py-16 md:px-12 lg:py-24">
            <div className="max-w-xl">
              <SectionHeading index="07" eyebrow="The middle path" tone="dark">
                Duplex vs Villa: The Middle Path
              </SectionHeading>
              <p className="text-[1.0625rem] leading-[1.85] text-white/80" data-reveal>
                Some families want the feel of a villa without its upkeep. That’s where the 6 BHK, duplex and penthouse homes
                on the top floors come in. A duplex gives you two levels, so the generations can still have their own floors,
                with a lift at the door and the building’s security around you. In the <strong className="text-white">duplex vs villa</strong>{" "}
                trade-off, you give up the garden and the land, and gain height, views and the building’s facilities.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4" data-reveal>
                <div className="rounded-xl border border-white/15 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">You give up</p>
                  <p className="font-display mt-2 text-lg">The garden &amp; the land</p>
                </div>
                <div className="rounded-xl border border-[#C49A2B]/50 bg-[#C49A2B]/10 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DCA54A]">You gain</p>
                  <p className="font-display mt-2 text-lg text-[#F6E7C1]">Height, views &amp; facilities</p>
                </div>
              </div>
              <div className="mt-8" data-reveal>
                <CtaGroup
                  primaryLabel="Ask About Top-Floor Duplexes"
                  waMessage="Hi, I'd like details of the 6 BHK, duplex and penthouse homes at The Islands by Gaurs."
                  showPhone={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Investment ---------- */}
      <section id="investment" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="08" eyebrow="Value over time">
            Villa vs Flat Investment
          </SectionHeading>
        </div>
        <div className="mx-auto grid max-w-5xl gap-5 px-5 md:grid-cols-3 md:px-6">
          {[
            {
              icon: FaLandmark,
              title: "Land",
              body: "A villa’s value rests on its land, and Jaypee Greens has little land left for new villas. That supports long-term value, but a villa is also a big, slow-moving asset when you want to sell.",
            },
            {
              icon: FaUsers,
              title: "Buyer pool",
              body: "Large apartments in a golf township attract the same families you are: people who want space without running a house. At this price, both formats sell to a small group of buyers, so pick the one you’d be happy to live in for a long time.",
            },
            {
              icon: FaMapMarkerAlt,
              title: "Location",
              body: (
                <>
                  For more on the area itself, read{" "}
                  <Link href="/blogs/pari-chowk-jaypee-greens-smart-investment-2026">
                    why Pari Chowk and Jaypee Greens are among Greater Noida’s smartest addresses
                  </Link>
                  .
                </>
              ),
            },
          ].map((c, i) => (
            <div key={c.title} className="card-lift guide-prose rounded-2xl border border-[#e5dcc5] bg-white p-7 !text-[15px]" data-reveal data-reveal-delay={String(i + 1)}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBF3DC] text-[#C49A2B]">
                <c.icon size={20} aria-hidden="true" />
              </span>
              <h3 className="font-display !mt-5 text-2xl text-[#1a1a1a]">{c.title}</h3>
              <p className="!mt-3">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Which suits you ---------- */}
      <section id="which-suits-you" className={`${sectionPad} bg-white`}>
        <div className="mx-auto max-w-5xl px-5 md:px-6">
          <div className="mb-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between" data-reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#a8841e]">
              <span className="font-display text-base tracking-normal">09</span>
              <span className="h-px w-8 bg-[#C49A2B]/60" aria-hidden="true" />
              Quick check
            </p>
            <p className="text-sm text-gray-500">Tap every statement that sounds like your family.</p>
          </div>
          <FitFinder />
        </div>
      </section>

      {/* ---------- Checks ---------- */}
      <section id="checks" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="10" eyebrow="Due diligence">
            Checks Before You Buy
          </SectionHeading>
        </div>
        <div className="mx-auto max-w-4xl px-5 md:px-6">
          <ol className="space-y-4">
            {CHECKS.map((c, i) => (
              <li
                key={c.title}
                className="row-nudge guide-prose flex items-start gap-5 rounded-2xl border border-[#e5dcc5] bg-white p-5 !text-[15px] md:p-6"
                data-reveal
                data-reveal-delay={String(i + 1)}
              >
                <span className="icon-pop flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1d1507] text-[#DCA54A]">
                  <c.icon size={17} aria-hidden="true" />
                </span>
                <p className="!mt-0">
                  <strong>{c.title}:</strong> {c.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="guide-prose mt-8" data-reveal>
            Our <Link href="/blogs/the-islands-by-gaurs-jaypee-greens-buyers-guide-2026">complete buyer’s guide</Link> covers
            these checks in more detail.
          </p>
        </div>
      </section>

      <VideoTheatre
        eyebrow="Films"
        title="See The Islands before you visit"
        intro="Official films from Gaurs Group: the project, everyday life by the greens, and the latest site progress."
        videos={VIDEOS}
        waMessage="Hi, I watched the film on The Islands by Gaurs. I'd like to book a site visit."
      />

      {/* ---------- The Islands ---------- */}
      <section id="the-islands" className={`${sectionPad} bg-white`}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading index="11" eyebrow="The project">
              The Islands by Gaurs
            </SectionHeading>
            <div className="guide-prose" data-reveal>
              <p>
                The Islands by Gaurs, often searched as “the island by Gaurs”, is a{" "}
                <Link href="/about-gaurs">Gaurs Group</Link> project inside the Jaypee Greens township near Pari Chowk,
                Greater Noida. It has nine towers rising up to 37 storeys, with 506 condominiums and two homes per floor.
                Homes come in 4, 5 and 6 BHK, which makes it one of the larger choices for{" "}
                <strong>4 BHK flats in Jaypee Greens</strong> or a <strong>5 BHK apartment in Greater Noida</strong>.
              </p>
              <ul className="diamond-list">
                <li>
                  <strong>Homes:</strong> see <Link href="/price">price and configurations</Link> and{" "}
                  <Link href="/floor-plans">floor plans</Link>
                </li>
                <li>
                  <strong>More:</strong> <Link href="/about-the-islands-by-gaurs">About The Islands</Link>,{" "}
                  <Link href="/location-connectivity">location and connectivity</Link> and the{" "}
                  <Link href="/gallery">gallery</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative" data-reveal="right">
            <Figure
              src={facadeImg}
              alt="The Islands by Gaurs seen from the golf course (artist's impression)"
              caption="Artist’s impression."
              aspect="aspect-[16/11]"
              sizes="(min-width: 1024px) 600px, 100vw"
            />
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-2 rounded-xl bg-[#1d1507]/95 p-4 text-center text-white shadow-xl backdrop-blur md:left-8 md:right-8">
              {[
                ["9", "Towers"],
                ["506", "Homes"],
                ["2", "Per floor"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl text-[#F6E7C1]">{n}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Villa alternatives ---------- */}
      <section id="villa-alternatives" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="12" eyebrow="Still prefer a villa?">
            If a Villa Suits You Better
          </SectionHeading>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 px-5 md:grid-cols-2 md:px-6">
          {[
            {
              href: "https://thelegacybygaurs.com/",
              name: "Legacy by Gaurs",
              text: "Also by Gaurs Group and also in Jaypee Greens, with four towers and 20 Legacy Villas.",
              img: villaLawnImg,
              alt: "A contemporary villa with a lawn and a large tree",
            },
            {
              href: "https://www.godrejgolflink.in/villas-configurations",
              name: "Godrej Golf Links villas",
              text: "4 and 5 BHK villas near Pari Chowk.",
              img: villaPoolImg,
              alt: "A modern villa with a private pool",
            },
          ].map((v, i) => (
            <a
              key={v.name}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift group overflow-hidden rounded-2xl border border-[#e5dcc5] bg-white"
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <span className="relative block aspect-[16/9] overflow-hidden">
                <Image src={v.img} alt={v.alt} fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </span>
              <span className="flex items-start justify-between gap-4 p-6">
                <span>
                  <span className="font-display block text-2xl text-[#1a1a1a]">{v.name}</span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-gray-600">{v.text}</span>
                </span>
                <FaExternalLinkAlt className="mt-2 shrink-0 text-[#C49A2B]" size={14} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
        <div className={`${wrap} mt-6`}>
          <p className="text-xs text-gray-400">Villa photographs are representative and do not show either project.</p>
          <InlineVideo video={LEGACY_VIDEO} caption="Legacy by Gaurs: a walkthrough of the golf-facing villas in Jaypee Greens." />
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section id="faqs" className={`${sectionPad} bg-white`}>
        <div className={wrap}>
          <SectionHeading index="13" eyebrow="Answers">
            FAQs
          </SectionHeading>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* ---------- Conclusion ---------- */}
      <section id="conclusion" className={`${sectionPad} bg-[#FAF8F4]`}>
        <div className={wrap}>
          <SectionHeading index="14" eyebrow="The verdict">
            Conclusion
          </SectionHeading>
          <div className="guide-prose" data-reveal>
            <p>
              For a big family, villa vs flat isn’t about square feet alone. A villa gives each generation its own floor and a
              garden of your own, but it asks you to run a large house. A large apartment keeps everyone on one level, with a
              clubhouse downstairs and the metro two minutes away, though there’s no lawn. A top-floor duplex sits in between.
              Choose the layout that fits your family’s daily routine, not the one that looks best in a brochure.
            </p>
            <p>
              To get the latest price sheet for The Islands by Gaurs, <Link href="/contact-us">contact us</Link> or call{" "}
              <a href="tel:+919810890353">+91 98108 90353</a>.
            </p>
          </div>
          <div className="mt-8" data-reveal>
            <CtaGroup tone="light" secondary={{ href: "/contact-us", label: "Contact Us" }} showPhone={false} />
          </div>
          <p className="mt-12 border-t border-[#e5dcc5] pt-6 text-xs italic leading-relaxed text-gray-500">
            This is not the official website of the developer. It belongs to an authorised channel partner and is provided for
            information and marketing only.
          </p>
        </div>
      </section>
      <div id="guide-end" aria-hidden="true" />

      <GuideLeadSection
        image={familyImg}
        eyebrow="Price sheet, one-to-one"
        title="Get the latest price sheet for The Islands by Gaurs"
        text="Tell us your family’s size and how you live. We’ll share the homes that fit, with carpet areas in writing."
        points={[
          "Current price sheet for 4, 5 and 6 BHK homes",
          "Carpet area of the exact unit, in writing",
          "Parking, maintenance and payment-plan details",
          "A one-to-one site visit at a time that suits you",
        ]}
        waMessage="Hi, please share the latest price sheet for The Islands by Gaurs."
      />

      <RelatedGuides
        items={[relatedPool.carpetArea, relatedPool.rentVsBuy, relatedPool.buyersGuide, relatedPool.floorPlans]}
      />

      <StickyDownloadButton />
    </>
  );
}
