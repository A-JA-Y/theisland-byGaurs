"use client";

import Image from "next/image";

import GolfBase from "../assets-islandbygaurs/images/golf-1.webp";
import township from "../assets-islandbygaurs/images/amenities.webp";
import building from "../assets-islandbygaurs/images/overview.webp";
import city from "../assets-islandbygaurs/images/location.webp";
import greenry from "../assets-islandbygaurs/images/construction.webp";

const cards = [
  {
    title: "18-Hole Greg Norman Golf Course",
    image: GolfBase,
  },
  {
    title: "Three-Tier Amenity Zone",
    image: building,
  },
  {
    title: "452-Acre Jaypee Greens Township",
    image: township,
  },
  {
    title: "9 Towers, 506 Condominiums",
    image: greenry,
  },
  {
    title: "Only 2 Apartments per Floor",
    image: city,
  },
];

export default function GaurTownship() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <h6 className="text-center uppercase mb-3 text-[#c8922a] tracking-widest text-sm" data-reveal>
          About
        </h6>

        {/* Heading */}
        <h2
          className="text-center font-semibold text-gray-900 mb-4 text-[clamp(2rem,4vw,2.6rem)] leading-tight"
          data-reveal
          data-reveal-delay="1"
        >
          The Islands by Gaurs — Inside Jaypee Greens
        </h2>

        {/* Description */}
        <p
          className="text-center text-gray-500 mb-14 max-w-2xl mx-auto text-sm leading-relaxed"
          data-reveal
          data-reveal-delay="2"
        >
          A curated enclave within one of Asia&apos;s most respected
          golf-centric townships — where residents experience a perfect
          blend of luxury, greenery, and modern infrastructure, designed for
          comfortable and future-ready living.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="card-lift relative h-44 sm:h-56 rounded-2xl overflow-hidden group shadow-md"
              data-reveal
              data-reveal-delay={String(Math.min(i + 1, 5))}
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 230px"
                quality={80}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/85"></div>

              {/* Gold top edge appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#DCA54A] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Title */}
              <div className="absolute bottom-0 p-3.5 sm:p-4 transition-transform duration-500 group-hover:-translate-y-1">
                <p className="text-white text-[13px] sm:text-sm font-medium leading-snug">
                  {card.title}
                </p>
                <span className="block mt-1.5 text-[#DCA54A] text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Discover →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}