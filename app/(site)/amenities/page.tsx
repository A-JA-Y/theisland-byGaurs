import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Amenities from "@/components/Amenities";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import amenitiesHero from "@/assets-islandbygaurs/images/amenities.webp";

export const metadata: Metadata = {
  title: "Amenities at The Islands by Gaurs | Clubhouse, Skywalk & Outdoor Zones",
  description:
    "Explore 50+ amenities at The Islands by Gaurs — The Ivory Coast outdoor zone, The Gold Coast 30,000 sq.ft. clubhouse, and The Orbit skywalk 90m above the city.",
  alternates: { canonical: "https://www.theislandsbygaurs.in/amenities" },
};

const ivoryCoast = [
  "Open Gym",
  "Sit-out / Chilling Pad",
  "Senior Citizen Zone",
  "Kids Play Area",
  "Preteen Play Area",
  "Yoga & Meditation Area",
  "Walking Track",
  "Water Bodies",
  "Mounds",
  "Climbing Wall",
  "Pet Play Area",
];

const goldCoast = [
  "Indoor Heated Pool",
  "Kids Pool / Lap Pool / Family Pool",
  "Jacuzzi",
  "Sauna & Steam",
  "Gymnasium",
  "Massage Room",
  "Salon",
  "Patisserie & Coffee Shop",
  "Cigar Lounge / Sports Bar / Card Room",
  "Mini Home Theatre",
  "Library",
  "Virtual Classroom",
  "Conference Room",
  "Business Centre",
  "Youngster's Zone",
  "Kids Play Area",
  "Get-Together Party Space",
  "Medical Centre / Food Hall",
  "Guest Rooms",
];

const theOrbit = [
  "Paddle Court",
  "Multipurpose Court",
  "Workstation Pods",
  "Jogging / Walking Track",
  "Tot Lot Area",
  "Festival Garden",
  "Celebration Pavilion",
  "Library & Reading Zone",
  "Observatory Deck",
  "Open Air Theatre",
  "Open Water Bodies",
];

export default function AmenitiesPage() {
  return (
    <>
      {/* Schema Markup - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.theislandsbygaurs.in/" },
              { "@type": "ListItem", "position": 2, "name": "Amenities", "item": "https://www.theislandsbygaurs.in/amenities" }
            ]
          })
        }}
      />

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What amenities does The Islands by Gaurs offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Amenities are organised across three zones — The Ivory Coast (an open-air ground-level activity zone), The Gold Coast (a 30,000 sq. ft. clubhouse), and The Orbit (a skywalk 90m above the ground connecting 8 towers). Together they cover fitness, pools, dining, entertainment, business and sport."
                }
              },
              {
                "@type": "Question",
                "name": "What is The Gold Coast clubhouse at The Islands by Gaurs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Gold Coast is the project's 30,000 sq. ft. clubhouse, featuring an indoor heated pool, jacuzzi, sauna and steam, gymnasium, spa, patisserie, sports bar, mini home theatre, library, business centre and guest rooms."
                }
              },
              {
                "@type": "Question",
                "name": "What is The Orbit skywalk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Orbit is a sky bridge above the 23rd floor connecting 8 of the 9 towers, 90 metres above the ground — featuring a paddle court, jogging track, festival garden, observatory deck and an open air theatre."
                }
              },
              {
                "@type": "Question",
                "name": "Does The Islands by Gaurs have golf course views?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Every residence faces the 18-hole Greg Norman-designed golf course at Jaypee Greens on one side, and the Pari Chowk skyline on the other."
                }
              },
              {
                "@type": "Question",
                "name": "Is The Islands by Gaurs a gated and secure community?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. With only two condominiums per floor and a multi-tier amenity zone, the township maintains 24x7 security and surveillance across its 9 towers."
                }
              }
            ]
          })
        }}
      />

      {/* Page Banner with Hero Image */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={amenitiesHero}
            alt="The Islands by Gaurs Amenities - Jaypee Greens, Greater Noida"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block text-[#DCA54A] text-sm md:text-base uppercase tracking-widest font-semibold mb-3">
            Lifestyle
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Amenities
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Three worlds of luxury under one sky — The Ivory Coast, The Gold Coast and The Orbit.
          </p>
        </div>
      </section>

      <ModalWrapper />
      <Amenities />

      {/* Intro */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Three Worlds of Luxury Under One Sky
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            At The Islands, amenities are not an afterthought — they are organised across three distinct
            realms, each crafted for a different mood, hour and lifestyle. From the active outdoors to the
            indulgent clubhouse to the sky-high sanctuary, every member of your family will find their corner.
          </p>
        </div>
      </section>

      {/* Zone 1 — The Ivory Coast */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#DCA54A] mb-2">Ground Level</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">The Ivory Coast</h2>
          <p className="text-lg italic text-gray-600 mb-6">
            Where life turns into an active lifestyle.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            The foundation of living apart — an open-air activity zone wrapping the towers, designed for
            everyday wellness.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {ivoryCoast.map((item) => (
              <div key={item} className="bg-white rounded-lg px-4 py-3 text-sm text-gray-800 border-l-4 border-[#DCA54A] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone 2 — The Gold Coast */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#DCA54A] mb-2">The Clubhouse — 30,000 sq.ft.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">The Gold Coast</h2>
          <p className="text-lg italic text-gray-600 mb-6">
            A connection zone for you and your family.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            A 2,787 sq.m. clubhouse engineered for weekends that feel like vacations and weekdays that feel
            like spa days.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {goldCoast.map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-800 border-l-4 border-[#DCA54A] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone 3 — The Orbit */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#DCA54A] mb-2">The Skywalk — 90m Above Ground</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">The Orbit</h2>
          <p className="text-lg italic text-gray-600 mb-6">
            Here, you don&apos;t just look up, you revel among the clouds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            A sky bridge above the 23rd floor connecting 8 towers — the central nervous system of The
            Islands and unlike any other amenity in Greater Noida.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {theOrbit.map((item) => (
              <div key={item} className="bg-white rounded-lg px-4 py-3 text-sm text-gray-800 border-l-4 border-[#DCA54A] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing + Links */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl text-gray-800 leading-relaxed mb-8">
            From your first cup of coffee to your last conversation of the day, you&apos;ll never need to
            leave the gates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/floor-plans"
              className="px-6 py-3 bg-[#DCA54A] text-white rounded-lg hover:bg-[#c9953a] transition-colors font-medium"
            >
              Explore Floor Plans
            </Link>
            <Link
              href="/location-connectivity"
              className="px-6 py-3 border-2 border-[#DCA54A] text-[#DCA54A] rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors font-medium"
            >
              View Location &amp; Connectivity
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-3 border-2 border-[#DCA54A] text-[#DCA54A] rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors font-medium"
            >
              Enquire Now
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
