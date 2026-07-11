import dynamic from "next/dynamic";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";

// Lazy load below-the-fold components
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const GaurTownship = dynamic(() => import("@/components/GaurTownship"));
const ReasonsToInvest = dynamic(() => import("@/components/ReasonToInvest"));
const VillaFeatures = dynamic(() => import("@/components/PremiumInventory"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const WalkThroughVideo = dynamic(() => import("@/components/WalkThroughVideo"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const QRSection = dynamic(() => import("@/components/QRSections"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="hidden">
        The Islands by Gaurs – 4/5/6 BHK Luxury Condominiums at Jaypee Greens, Greater Noida
      </h1>

      {/* SCHEMA START */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.theislandsbygaurs.in/",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "The Islands by Gaurs",
            image: "https://www.theislandsbygaurs.in/logo.webp",
            "@id": "https://www.theislandsbygaurs.in/",
            url: "https://www.theislandsbygaurs.in/",
            telephone: "+91-9810890353",
            priceRange: "On Request",
            address: {
              "@type": "PostalAddress",
              streetAddress: "The Islands by Gaurs, Jaypee Greens, Pari Chowk",
              addressLocality: "Greater Noida",
              postalCode: "201310",
              addressCountry: "IN",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where is The Islands by Gaurs located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Islands by Gaurs is located inside Jaypee Greens at Pari Chowk, Greater Noida, Uttar Pradesh.",
                },
              },
              {
                "@type": "Question",
                name: "What configurations are available at The Islands by Gaurs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Islands by Gaurs offers 4, 5 & 6 BHK condominiums across 506 units in 9 towers, with saleable areas ranging from 3,595 to 5,962 sq.ft.",
                },
              },
              {
                "@type": "Question",
                name: "Is The Islands by Gaurs a good investment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, due to its golf-course frontage inside the established Jaypee Greens township, its Pari Chowk location, and the trusted 27+ year track record of Gaurs, it offers strong long-term value.",
                },
              },
            ],
          }),
        }}
      />
      {/* SCHEMA END */}

      <HomePageHeader />
      <Hero />
      <ReraStrip />

      <main className="w-full">
        <section className="md:px-[30px] md:py-[45px] md:relative top-[-98px]">
          <div className="md:block max-w-5xl m-auto">
            <ContactForm />
          </div>
        </section>

        <ModalWrapper />

        <AboutProject  heading={false}/>
        <Amenities />
        <GaurTownship />
        <ReasonsToInvest />
        <VillaFeatures />
        <PlansSection />
        <EmiCalculator />
        <LocationAdvantages />
        <WalkThroughVideo />
        <BlogSection />
        <NewsSection />
        <EnquirySection />
        <QRSection />
      </main>
      <StickyDownloadButton />
      <Footer />
    </div>
  );
}
