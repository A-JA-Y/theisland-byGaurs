import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Gallery from "@/components/Gallery";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Gallery | The Islands by Gaurs — Tower Views, Interiors & Amenities",
  description:
    "Browse the gallery of The Islands by Gaurs — tower elevations, interior renders, clubhouse, skywalk, golf course views and Jaypee Greens township images.",
  alternates: { canonical: "https://www.theislandsbygaurs.in/gallery" },
};

export default function GalleryPage() {
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
              { "@type": "ListItem", position: 2, name: "Gallery", item: "https://www.theislandsbygaurs.in/gallery" },
            ],
          }),
        }}
      />

      <PageBanner
        eyebrow="Gallery"
        title="A Glimpse of Living Apart"
        subtitle="From the boulevard of 9 towers crowning the skyline to the double-height lobbies, the indoor heated pool of The Gold Coast and the sky-high observatory deck of The Orbit — here is a closer look at what life at The Islands looks like."
      />

      <Gallery />

      <section className="w-full bg-gray-50 py-10 px-6 text-center">
        <p className="text-gray-700 mb-4">Want to see the property in person?</p>
        <Link
          href="/contact-us"
          className="inline-block bg-[#DCA54A] hover:bg-[#C49A2B] text-white text-sm font-semibold tracking-widest uppercase px-8 py-3 rounded-md transition-colors"
        >
          Book a Site Visit →
        </Link>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
