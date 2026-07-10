import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import logo from "@/assets/godrej-logo.webp";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "About Gaurs Group | 27+ Years of Trust & 65,000+ Delivered Homes",
  description:
    "Gaurs Group is one of North India's most trusted real estate developers — 65+ delivered projects, 1 lakh+ happy families, 6 million+ sq.m. developed since 1995.",
  alternates: { canonical: "https://www.theislandsbygaurs.in/about-gaurs" },
};

const milestones = [
  "35+ Delivered Residential Projects",
  "30+ Delivered Commercial Projects",
  "3 Delivered Township Projects",
  "2 Delivered Retail Projects (Malls)",
  "4 Gaurs International Schools",
  "24 Ongoing RERA-Registered Projects",
  "65,000+ Delivered Units",
  "40,000+ Possessions Given (2014–2021)",
  "1 Lakh+ Happy Customers",
  "6 Million+ Sq.m. (60 Million+ Sq.ft.) Area Developed",
];

const awards = [
  { year: "2020", name: "Smart City Empowering India Awards — Best Smart City Developer of the Year (Gaursons India)" },
  { year: "2019", name: "Times Business Awards — Best Real Estate Developer of the Year (Gaursons India)" },
  { year: "2019", name: "PMAY Empowering India Awards — Most Well-Planned Upcoming Project in EWS Category (Gaur Siddhartham)" },
  { year: "2018–19", name: "CNBC Awaaz Real Estate Awards — Best Residential Project, Affordable Segment, North Zone (Gaur City 2)" },
  { year: "2017–18", name: "CNBC Awaaz Real Estate Awards — Best Residential Project, Affordable Segment, National (Gaur Cascades)" },
  { year: "2016–17", name: "CNBC Awaaz Real Estate Awards — Best Township Project (Gaur City)" },
  { year: "2016–17", name: "NDTV Property Awards — Best Township Project (Gaur City)" },
  { year: "2016–17", name: "NDTV Property Awards — Budget Apartment Project of the Year, Tier 1 Cities (Gaur Cascades)" },
];

const signatureProjects = [
  "Gaurs Platinum Towers (Gaur Sportswood, Sector 79, Noida)",
  "Mulberry Mansions",
  "Krishn Villas (Divine Luxury Villas)",
  "Gaur Saundaryam (Greater Noida West)",
  "Legacy by Gaurs (Jaypee Greens — Trecento Residences)",
];

export default function AboutGaursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.theislandsbygaurs.in/" },
              { "@type": "ListItem", position: 2, name: "About Gaurs", item: "https://www.theislandsbygaurs.in/about-gaurs" },
            ],
          }),
        }}
      />

      <PageBanner
        eyebrow="The Developer"
        title="Every Brick a Stepping Stone to Crafting More Luxurious Lives"
        subtitle="27+ years of trust, 65,000+ delivered homes, and the enduring legacy behind The Islands by Gaurs."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={logo}
              alt="Gaurs Group"
              width={160}
              height={140}
              className="w-auto h-auto max-w-[140px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-900">The Gaurs Story</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Since its inception in 1995, the Gaurs Group has been revered as an icon of excellence in the
              world of Indian real estate. From affordable family homes to high-end residences, from
              commercial towers to integrated townships, Gaurs has consistently delivered on its
              commitments — earning the trust of over one lakh happy families across the National Capital
              Region.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The unwavering focus on customer trust, perfect locations and excellence in execution has
              powered Gaurs through 27+ years of growth — and the same conviction now shapes The Islands by
              Gaurs.
            </p>

            <div className="mt-2">
              <Link
                href="/about-the-islands-by-gaurs"
                className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Explore The Islands by Gaurs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Milestones We Are Proud Of
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {milestones.map((item) => {
              const [stat, ...rest] = item.split(" ");
              return (
                <div key={item} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <p className="text-lg font-bold text-[#DCA54A] leading-tight">{stat}</p>
                  <p className="text-xs text-gray-600 mt-1 leading-snug">{rest.join(" ")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Awards &amp; Recognition
          </h2>
          <ul className="space-y-3">
            {awards.map((a, i) => (
              <li key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border-l-4 border-[#DCA54A]">
                <span className="text-xs font-bold text-[#DCA54A] whitespace-nowrap mt-0.5">{a.year}</span>
                <span className="text-sm text-gray-700">{a.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diversified Group */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A Diversified Group
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Beyond real estate, the Gaurs Group operates across Retail, Education, Hotels, NBFC,
            Contracting, Sports and Energy — making it one of the most diversified business houses in the NCR.
          </p>
        </div>
      </section>

      {/* Signature Projects */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Signature Projects
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {signatureProjects.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700 text-sm bg-gray-50 rounded-lg p-4">
                <span className="text-[#DCA54A] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <Link
              href="/contact-us"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-md transition-colors"
            >
              Explore More Gaurs Projects →
            </Link>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
