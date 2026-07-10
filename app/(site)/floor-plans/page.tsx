import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection"

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Floor Plans | The Islands by Gaurs — 4/5/6 BHK Layouts",
  description:
    "Detailed floor plans for The Islands by Gaurs — 4 BHK, 5 BHK and 6 BHK condominium layouts with carpet area, saleable area and balcony details.",
  alternates: {
    canonical: "https://www.theislandsbygaurs.in/floor-plans",
  },
  keywords:
    "The Islands by Gaurs floor plan, The Islands by Gaurs 4 BHK, The Islands by Gaurs 5 BHK, The Islands by Gaurs 6 BHK, Jaypee Greens floor plan",
  openGraph: {
    title: "Floor Plans | The Islands by Gaurs — 4/5/6 BHK Layouts",
    description:
      "Detailed floor plans for The Islands by Gaurs — 4 BHK, 5 BHK and 6 BHK condominium layouts with carpet area, saleable area and balcony details.",
    url: "https://www.theislandsbygaurs.in/floor-plans",
    type: "website",
  },
};

export default function FloorPlansPage() {
  return (
    <>
      <PageBanner
        eyebrow="Floor Plans"
        title="Layouts Designed Around the Way You Live"
        subtitle="Explore 4, 5 & 6 BHK condominium layouts and the master boulevard plan for The Islands by Gaurs at Jaypee Greens, Greater Noida."
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}