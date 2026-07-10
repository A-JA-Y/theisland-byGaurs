import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import GaurTownship from "@/components/GaurTownship";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "About The Islands by Gaurs | A Curated Township at Jaypee Greens",
  description:
    "Learn about The Islands by Gaurs — its design philosophy, 452-acre Jaypee Greens setting, neo-classical architecture and curated 506-condominium community.",
  alternates: { canonical: "https://www.theislandsbygaurs.in/about-the-islands-by-gaurs" },
};

export default function AboutTheIslandsByGaursPage() {
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
              { "@type": "ListItem", position: 2, name: "About The Project", item: "https://www.theislandsbygaurs.in/about-the-islands-by-gaurs" },
            ],
          }),
        }}
      />

      <PageBanner
        eyebrow="The Project"
        title="A Curated Address for Those Who Live Apart"
        subtitle="An iconic landmark of luxury, amid greens made for the exclusive — 4, 5 & 6 BHK golf-view condominiums at Jaypee Greens, Pari Chowk."
      />
      <ModalWrapper />
      <AboutProject heading={true} />

      {/* The Vision */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Vision</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The Islands by Gaurs was envisioned for a select few — those who have arrived at a stage in
            life where the choice of home is no longer about square footage but about signature. It is a
            private enclave within Jaypee Greens, one of Asia&apos;s most respected golf-centric townships,
            where 506 exclusive condominiums are arranged across 9 towers in a single sweeping boulevard.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The architecture borrows from the timeless grace of neo-classical Roman and Gothic forms, but
            the planning is deeply contemporary — every apartment opens to the lush 18-hole golf course on
            one side and the cosmopolitan rhythm of Pari Chowk on the other. There is no second view, no
            compromise, no rear-facing unit.
          </p>
        </div>
      </section>

      {/* Location at the heart of Greater Noida */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Location at the Heart of Greater Noida</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Jaypee Greens sits at the epicentre of Greater Noida — a city built to be the smartest in the
            National Capital Region. The Islands enjoys the rarest of urban privileges: an address that is
            both deeply connected and completely insulated. Step out, and you are at Pari Chowk; step in,
            and you are surrounded by 452 acres of greens, water bodies, walking trails and a championship
            golf course.
          </p>
          <div className="mt-2">
            <Link href="/location-connectivity" className="text-[#DCA54A] hover:underline font-medium">
              View Location &amp; Connectivity →
            </Link>
          </div>
        </div>
      </section>

      {/* Architecture & Design */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Architecture &amp; Design</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The 9 towers of The Islands rise up to 37 storeys, each crowned with pitched roofs and
            classical motifs that lend the skyline a distinct, recognisable identity — visible from much of
            Greater Noida. Inside, double-height tower lobbies welcome residents into a world of marble,
            light and grandeur. Every residence features expansive dining rooms, walk-in closets, large
            balconies and ceiling-to-floor views designed to make the everyday feel cinematic.
          </p>
        </div>
      </section>

      {/* The Community */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Community</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            With only 506 families across 9 towers and just 2 condominiums per floor, The Islands is
            engineered for privacy. Yet it is woven into the larger Jaypee Greens community of business
            stalwarts, entrepreneurs, diplomats and expats — a neighbourhood where your social circle is
            naturally elevated.
          </p>
        </div>
      </section>

      <GaurTownship />

      {/* RERA & Compliance */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">RERA &amp; Compliance</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The Islands by Gaurs is a RERA-approved development under registration number{" "}
            <strong>UPRERAPRJ734569</strong>. Full project details are available at{" "}
            <a
              href="https://up-rera.in/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DCA54A] hover:underline"
            >
              up-rera.in/projects
            </a>.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/floor-plans"
              className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
            >
              Explore Floor Plans →
            </Link>
            <Link
              href="/contact-us"
              className="inline-block border-2 border-[#DCA54A] text-[#DCA54A] hover:bg-[#DCA54A] hover:text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
            >
              Schedule a Visit →
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
