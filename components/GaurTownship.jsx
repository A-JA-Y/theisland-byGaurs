"use client";

import Image from "next/image";

import GolfBase from "../assets-islandbygaurs/images/golf-1.jpg";
import township from "../assets-islandbygaurs/images/amenities.jpg";
import building from "../assets-islandbygaurs/images/overview.jpg";
import city from "../assets-islandbygaurs/images/location.jpg";
import greenry from "../assets-islandbygaurs/images/construction.jpg";

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
        <h6 className="text-center uppercase mb-3 text-[#c8922a] tracking-widest text-sm">
          About
        </h6>

        {/* Heading */}
        <h2 className="text-center font-semibold text-gray-900 mb-4 text-[clamp(2rem,4vw,2.6rem)] leading-tight">
          The Islands by Gaurs — Inside Jaypee Greens
        </h2>

        {/* Description */}
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto text-sm leading-relaxed">
          A curated enclave within one of Asia&apos;s most respected
          golf-centric townships — where residents experience a perfect
          blend of luxury, greenery, and modern infrastructure, designed for
          comfortable and future-ready living.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                quality={80}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Title */}
              <div className="absolute bottom-0 p-4">
                <p className="text-white text-sm font-medium leading-snug">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}