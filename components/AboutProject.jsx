"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

import projectBuilding from "../assets-islandbygaurs/images/overview.webp";
import projectBuilding2 from "../assets-islandbygaurs/images/construction.webp";
import pic2 from "../assets-islandbygaurs/images/location.webp";
import launge from "../assets-islandbygaurs/images/amenities.webp";
import township from "../assets-islandbygaurs/images/specifications.webp";


import { useModal } from "./ModalContext";

const AboutProject = ({heading}) => {
  const { openModal } = useModal();
  return (
    <section
      id="overview"
      className="w-full bg-white py-[70px] px-[30px] md:min-h-[750px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">
        
        {/* Left: Images */}
        <div className="hidden md:flex flex-col items-start relative w-full md:w-1/2 h-[500px]">
         

          <ImageSlider images={[projectBuilding,projectBuilding2,pic2,township,launge]}/>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          
          {/* Tagline */}
          <h6 className="text-[#c8952a] font-semibold text-xs tracking-widest uppercase">
            An Iconic Landmark of Luxury, Amid Greens Made for the Exclusive
          </h6>

          {/* Title */}
         {heading ? ( <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            About The Islands by Gaurs
          </h1>):( <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            About The Islands by Gaurs
          </h2>)}

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            The Islands by Gaurs is a curated enclave of 506 ultra-luxury
            condominiums set across the 452-acre Jaypee Greens township at
            Pari Chowk. Every home opens onto the 18-hole Greg Norman-designed
            golf course on one side and the iconic Pari Chowk skyline on the other.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Only two condominiums per floor, across 9 heaven-piercing towers
            rising up to 37 storeys, connected by a skywalk 90 metres above
            the ground. Developed by Gaurs, the project reflects 27+ years of
            legacy in quality, design, and reliability.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            This is not just housing — it is what it means to live apart.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 mt-1">
            {[
              "Golf Course Frontage",
              "Only 2 Apartments per Floor",
              "Three-Tier Amenity Zone",
              "Integrated Jaypee Greens Township",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-gray-700 text-sm"
              >
                <FaCheck className="mt-0.5 text-[#c8952a] flex-shrink-0 text-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-4">
            <button
              onClick={() => openModal()}
              className="inline-block bg-[#c8952a] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#b07d1f] transition-colors duration-300 cursor-pointer"
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