"use client";
import {
  FaGolfBall,
  FaSwimmingPool,
  FaBuilding,
  FaUmbrellaBeach,
  FaFilm,
  FaTableTennis,
  FaSpa,
  FaDumbbell,
  FaCloudMoon,
  FaShieldAlt,
} from "react-icons/fa";

import g1 from "../assets-islandbygaurs/images/amenities.webp";
import g2 from "../assets-islandbygaurs/images/overview.webp";
import g3 from "../assets-islandbygaurs/images/location.webp";
import g4 from "../assets-islandbygaurs/images/construction.webp";
import g5 from "../assets-islandbygaurs/images/specifications.webp";
import g6 from "../assets-islandbygaurs/images/golf-1.webp";
import studioImg from "../assets-islandbygaurs/images/theislandsbygaurs.webp";


const images = [studioImg, g1, g2, g3, g4, g5, g6];
import ImageSlider from "@/components/ImageSlider";


import bgImg from "../assets/Lines-PNG-Free-Image.webp";


const amenities = [
  { icon: <FaGolfBall />,       text: "18-Hole Greg Norman Golf Course Frontage" },
  { icon: <FaSwimmingPool />,  text: "Indoor Heated Pool at The Gold Coast Clubhouse" },
  { icon: <FaBuilding />,      text: "30,000 sq. ft. Clubhouse — The Gold Coast" },
  { icon: <FaUmbrellaBeach />, text: "The Ivory Coast — Open-Air Activity Zone" },
  { icon: <FaFilm />,          text: "Mini Home Theatre & Open Air Theatre" },
  { icon: <FaTableTennis />,   text: "Paddle Court & Multipurpose Court" },
  { icon: <FaSpa />,           text: "Sauna, Steam & Massage Room" },
  { icon: <FaDumbbell />,      text: "Fully Equipped Gymnasium" },
  { icon: <FaCloudMoon />,     text: "The Orbit — Skywalk 90m Above Ground" },
  { icon: <FaShieldAlt />,     text: "24×7 Security & Surveillance" },
];

import { useModal } from "./ModalContext";

export default function Amenities() {
  const { openModal } = useModal();
  return (
    <section
      id="amenities"
      className="w-full bg-[#4F3318] py-16 px-6 md:px-12 lg:px-20 text-[#FDE6C0] relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      {/* Mirrored background */}
      <div
        className="absolute inset-0 opacity-3 transform scale-x-[-1] pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        
        {/* Heading */}
        <div className="text-center">
          <h6 className="text-[#DCA54A] uppercase mb-4">
            Three Worlds of Luxury
          </h6>
          <h2 className="text-[#FDE6C0] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Curated Amenities Across The Ivory Coast, The Gold Coast &amp; The Orbit
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm md:text-base leading-relaxed">
              At The Islands, amenities are organised across three distinct
              realms — the open-air Ivory Coast, the 30,000 sq. ft. Gold Coast
              clubhouse, and The Orbit skywalk 90 metres above the ground.
            </p>

            <ul className="flex flex-col gap-[18px]">
              {amenities.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="flex-shrink-0 text-lg text-[#DCA54A]">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm md:text-base leading-relaxed mt-1">
              From your first cup of coffee to your last conversation of the
              day, you&apos;ll never need to leave the gates.
            </p>

            <div className="mt-3">
              <button
                onClick={() => openModal()}
                className="inline-block bg-[#c9a84c] text-[#fff] text-xs rounded-[8px] font-bold uppercase px-7 py-3 cursor-pointer hover:bg-[#b8933e] transition"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Image */}
         <div className="w-full lg:w-[50%]  h-[300px] md:h-[550px] flex-shrink-0">
  <ImageSlider images={images} />
</div>

        </div>
      </div>
    </section>
  );
}