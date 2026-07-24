"use client";
import { FaCheck } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import CountUp from "./CountUp";

import projectBuilding from "../assets-islandbygaurs/images/overview.webp";
import projectBuilding2 from "../assets-islandbygaurs/images/construction.webp";
import pic2 from "../assets-islandbygaurs/images/location.webp";
import launge from "../assets-islandbygaurs/images/amenities.webp";
import township from "../assets-islandbygaurs/images/specifications.webp";
import nightView from "../assets-islandbygaurs/images/anim-1.webp";

import { useModal } from "./ModalContext";

const stats = [
  { end: 9, suffix: "", label: "Iconic Towers" },
  { end: 506, suffix: "", label: "Residences" },
  { end: 37, suffix: "", label: "Storeys High" },
  { end: 27, suffix: "+", label: "Years of Legacy" },
];

const AboutProject = ({ heading }) => {
  const { openModal } = useModal();
  return (
    <section
      id="overview"
      className="w-full bg-white py-[70px] px-[30px] md:min-h-[750px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">

        {/* Left: Images — now visible on mobile too */}
        <div
          className="flex flex-col items-start relative w-full md:w-1/2 h-[260px] sm:h-[340px] md:h-[500px]"
          data-reveal="left"
        >
          <ImageSlider images={[projectBuilding, nightView, projectBuilding2, pic2, township, launge]} />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">

          {/* Tagline */}
          <h6
            className="text-[#c8952a] font-semibold text-xs tracking-widest uppercase"
            data-reveal
          >
            An Iconic Landmark of Luxury, Amid Greens Made for the Exclusive
          </h6>

          {/* Title */}
          {heading ? (
            <h1 className="text-4xl font-bold text-gray-900 leading-tight" data-reveal data-reveal-delay="1">
              About The Islands by Gaurs
            </h1>
          ) : (
            <h2 className="text-4xl font-bold text-gray-900 leading-tight" data-reveal data-reveal-delay="1">
              About The Islands by Gaurs
            </h2>
          )}

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed" data-reveal data-reveal-delay="2">
            The Islands by Gaurs is a curated enclave of 506 ultra-luxury
            condominiums set across the 452-acre Jaypee Greens township at
            Pari Chowk. Every home opens onto the 18-hole Greg Norman-designed
            golf course on one side and the iconic Pari Chowk skyline on the other.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed" data-reveal data-reveal-delay="2">
            Only two condominiums per floor, across 9 heaven-piercing towers
            rising up to 37 storeys, connected by a skywalk 90 metres above
            the ground. Developed by Gaurs, the project reflects 27+ years of
            legacy in quality, design, and reliability.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed" data-reveal data-reveal-delay="3">
            This is not just housing — it is what it means to live apart.
          </p>

          {/* Animated stats */}
          <div
            className="grid grid-cols-4 gap-2 mt-2 border-y border-[rgba(196,154,43,0.25)] py-4"
            data-reveal
            data-reveal-delay="3"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-[#c8952a] leading-none" style={{ fontFamily: "var(--font-marcellus), serif" }}>
                  <CountUp end={s.end} suffix={s.suffix} />
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-500 mt-1.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 mt-1">
            {[
              "Golf Course Frontage",
              "Only 2 Apartments per Floor",
              "Three-Tier Amenity Zone",
              "Integrated Jaypee Greens Township",
            ].map((item, i) => (
              <li
                key={item}
                className="row-nudge flex items-start gap-2 text-gray-700 text-sm"
                data-reveal
                data-reveal-delay={String(Math.min(i + 2, 5))}
              >
                <FaCheck className="icon-pop mt-0.5 text-[#c8952a] flex-shrink-0 text-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-4" data-reveal data-reveal-delay="4">
            <button
              onClick={() => openModal()}
              className="btn-sheen inline-block bg-[#c8952a] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-sm cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
