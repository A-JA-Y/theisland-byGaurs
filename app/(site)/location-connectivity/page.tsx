import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Location | The Islands by Gaurs at Pari Chowk, Greater Noida",
  description:
    "The Islands by Gaurs is located inside Jaypee Greens at Pari Chowk, Greater Noida — minutes from metro, expressway, hospitals, schools and the upcoming Noida International Airport.",
  alternates: { canonical: "https://www.theislandsbygaurs.in/location-connectivity" },
};

const connectivityData = [
  "Pari Chowk Metro Station — 2 minutes",
  "Alpha 1 Metro Station — 5 minutes",
  "Noida–Greater Noida Expressway — at the doorstep",
  "DND Flyway / Delhi — 35 minutes",
  "Yamuna Expressway entry — 8 minutes",
  "Noida International Airport (Jewar) — 30 minutes (upcoming, India's largest)",
  "Indira Gandhi International Airport — 60 minutes",
];

const educationData = [
  "Galgotias University — 5 minutes",
  "Sharda University — 10 minutes",
  "Bennett University — 15 minutes",
  "Gaur International School — within township access",
  "Step by Step / Delhi Public School — 10 minutes",
];

const healthcareData = [
  "Yatharth Hospital — 7 minutes",
  "Sharda Hospital — 10 minutes",
  "Kailash Hospital — 12 minutes",
  "Fortis (Noida) — 25 minutes",
];

const workspaceData = [
  "Adobe Systems, MetLife, Advant Navis Business Park — nearby",
  "HCL, TCS, Wipro, Samsung — nearby",
  "Knowledge Park I, II, III — Greater Noida's tech & education corridor",
];

const lifestyleData = [
  "The Grand Venice Mall — 10 minutes",
  "Ansal Plaza — 8 minutes",
  "Jaypee Greens Town Centre — within township",
  "Radisson Blu Hotel — 5 minutes",
];

const faqData = [
  {
    question: "Where exactly is The Islands by Gaurs located?",
    answer: "The Islands by Gaurs is located inside the 452-acre Jaypee Greens township, directly adjoining Pari Chowk — the recognised entry point of Greater Noida.",
  },
  {
    question: "What is the nearest metro station to The Islands by Gaurs?",
    answer: "Pari Chowk Metro Station is approximately 2 minutes away, and Alpha 1 Metro Station is approximately 5 minutes away, both on the Aqua Line.",
  },
  {
    question: "How far is the Noida International Airport from The Islands by Gaurs?",
    answer: "The upcoming Noida International Airport at Jewar is approximately 30 minutes from The Islands by Gaurs via the Yamuna Expressway.",
  },
  {
    question: "Is The Islands by Gaurs well connected to Delhi?",
    answer: "Yes — the location is connected to Delhi via the Noida–Greater Noida Expressway and DND Flyway, with Delhi reachable in approximately 35 minutes and IGI Airport in about 60 minutes.",
  },
  {
    question: "What is inside the Jaypee Greens township?",
    answer: "Jaypee Greens includes the 18-hole Greg Norman-designed golf course, the Six Senses Golf & Spa Resort, schools, hospitals, a temple, and the Jaypee Greens Town Centre — all accessible without leaving the township.",
  },
];

export default function LocationConnectivityPage() {
  return (
    <>
      {/* Main Content Section */}
      <section className="w-full bg-white py-16 px-6" id="location">
        <div className="max-w-5xl mx-auto">

          {/* Label */}
          <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
            Location &amp; Connectivity
          </p>

          {/* H1 Heading */}
          <h1 className="text-center font-bold text-gray-900 mb-6 text-3xl md:text-4xl leading-tight">
            The Epicenter of Greater Noida
          </h1>

          {/* Intro Paragraph */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Some addresses simply find you everywhere you need to be. The Islands by Gaurs is located
              inside the 452-acre Jaypee Greens township, directly adjoining Pari Chowk — the recognised
              entry point of Greater Noida and one of the most connected nodes in the entire NCR.
            </p>
            <div className="mt-4">
              <a
                href="https://maps.google.com/maps?q=Jaypee+Greens+Pari+Chowk+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c8922a] hover:bg-[#b07d20] text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Get Driving Directions →
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8 max-w-2xl mx-auto">
            <p className="font-semibold text-gray-800">Project Address:</p>
            <p className="text-gray-600 text-sm">
              The Islands by Gaurs<br />
              Jaypee Greens, Pari Chowk<br />
              Greater Noida, Uttar Pradesh
            </p>
          </div>

          {/* Main Content with Map */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-8">

            {/* LEFT: Why this location works */}
            <div className="flex-1 max-w-lg">
              <h2 className="font-bold text-gray-900 mb-3 text-xl">
                Why This Location Works
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                Set inside an established, delivered township, The Islands enjoys the rarest of urban
                privileges: an address that is both deeply connected and completely insulated.
              </p>

              <h3 className="font-bold text-gray-900 mb-3 text-base">Connectivity</h3>
              <ul className="space-y-3 mb-6">
                {connectivityData.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#c8922a] mt-1">✓</span>
                    <span className="text-gray-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: MAP */}
            <div className="flex-1 w-full">
              <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
                <iframe
                  src="https://maps.google.com/maps?q=Jaypee+Greens+Pari+Chowk+Greater+Noida&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="The Islands by Gaurs Location Map"
                ></iframe>
              </div>
              <a
                href="https://maps.google.com/maps?q=Jaypee+Greens+Pari+Chowk+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-[#c8922a] hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Education
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {educationData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Healthcare
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {healthcareData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workspaces Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Workspaces Nearby
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {workspaceData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Lifestyle &amp; Shopping
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {lifestyleData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Big Picture */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            The Big Picture
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            With the upcoming Noida International Airport and the Yamuna Expressway corridor turning
            Greater Noida into one of India&apos;s fastest-appreciating real estate markets, an address
            inside Jaypee Greens — already a delivered, mature township — combines lifestyle and investment
            in a way few projects in the NCR can match.
          </p>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="w-full bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>

      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": "https://www.theislandsbygaurs.in/location-connectivity#faq",
                "mainEntity": faqData.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.theislandsbygaurs.in/location-connectivity#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.theislandsbygaurs.in/" },
                  { "@type": "ListItem", "position": 2, "name": "Location & Connectivity", "item": "https://www.theislandsbygaurs.in/location-connectivity" }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://www.theislandsbygaurs.in/location-connectivity#webpage",
                "url": "https://www.theislandsbygaurs.in/location-connectivity",
                "name": "The Islands by Gaurs Location — Pari Chowk Connectivity",
                "description": "The Islands by Gaurs is located inside Jaypee Greens at Pari Chowk, Greater Noida — minutes from metro, expressway, hospitals, schools and the upcoming Noida International Airport.",
                "breadcrumb": { "@id": "https://www.theislandsbygaurs.in/location-connectivity#breadcrumb" },
                "about": { "@id": "https://www.theislandsbygaurs.in/#residence" },
                "mainEntity": { "@id": "https://www.theislandsbygaurs.in/location-connectivity#faq" },
                "primaryImageOfPage": "https://www.theislandsbygaurs.in/logo.webp",
                "inLanguage": "en-IN"
              },
              {
                "@type": "ApartmentComplex",
                "@id": "https://www.theislandsbygaurs.in/#residence",
                "name": "The Islands by Gaurs",
                "description": "4, 5 & 6 BHK golf-view luxury condominiums at Jaypee Greens, Pari Chowk, Greater Noida by Gaurs Group.",
                "url": "https://www.theislandsbygaurs.in/",
                "image": "https://www.theislandsbygaurs.in/logo.webp",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Jaypee Greens, Pari Chowk",
                  "addressLocality": "Greater Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201310",
                  "addressCountry": "IN"
                },
                "amenityFeature": [
                  { "@type": "LocationFeatureSpecification", "name": "Golf Course Frontage" },
                  { "@type": "LocationFeatureSpecification", "name": "Clubhouse" }
                ]
              },
              {
                "@type": "RealEstateAgent",
                "@id": "https://www.theislandsbygaurs.in/#organization",
                "name": "The Islands by Gaurs - Channel Partner",
                "url": "https://www.theislandsbygaurs.in/",
                "logo": "https://www.theislandsbygaurs.in/logo.webp",
                "image": "https://www.theislandsbygaurs.in/logo.webp",
                "telephone": "+91-9810890353",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "601, SL Tower, 6th Floor, Alpha Commercial Belt",
                  "addressLocality": "Greater Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201310",
                  "addressCountry": "IN"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Greater Noida"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
