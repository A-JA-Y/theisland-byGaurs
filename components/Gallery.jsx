"use client";
import { useState } from "react";
import Image from "next/image";

import projectBuilding from "@/assets/Project-Building.webp";
import projectBuilding2 from "@/assets/Project-Building-2.JPG.webp";
import tower1 from "@/assets/tower-1.webp";
import tower2 from "@/assets/tower-2.webp";
import tower3 from "@/assets/tower-3.webp";
import tower4 from "@/assets/tower-4.webp";
import tower5 from "@/assets/tower-5.webp";

import g1 from "@/assets/g-1.webp";
import g2 from "@/assets/g-2.webp";
import g3 from "@/assets/g-3.webp";
import g4 from "@/assets/g-4.webp";
import g5 from "@/assets/g-5.webp";
import g6 from "@/assets/g-6.webp";
import pic2 from "@/assets/pic-2.webp";
import launge from "@/assets/launge.webp";
import swpic3 from "@/assets/swpic-3.webp";
import golfClub from "@/assets/golf-club.webp";

import golf9 from "@/assets/9-golf.webp";
import township from "@/assets/township.webp";
import greenry from "@/assets/60-greenry.webp";
import acre100 from "@/assets/100acre.webp";
import premiumLifestyle from "@/assets/premium-lifestyle.webp";
import communityLiving from "@/assets/community-living.webp";

const groups = [
  {
    id: "exterior",
    label: "Exterior & Towers",
    images: [
      { src: projectBuilding, alt: "The Islands by Gaurs — day view from the golf course" },
      { src: projectBuilding2, alt: "The Islands by Gaurs — 9-tower boulevard skyline" },
      { src: tower1, alt: "The Islands by Gaurs — tower entrance & drop-off zone" },
      { src: tower2, alt: "The Islands by Gaurs — tower elevation" },
      { src: tower3, alt: "The Islands by Gaurs — night view from Pari Chowk" },
    ],
  },
  {
    id: "interiors",
    label: "Interiors",
    images: [
      { src: g1, alt: "Double-height tower lobby — The Islands by Gaurs" },
      { src: g2, alt: "Living room — luxury space to chill & relax" },
      { src: g3, alt: "Dining area — fine dining for gastronomic memories" },
      { src: g4, alt: "Master bedroom — wake up to a mesmerizing view" },
      { src: pic2, alt: "Kitchen — expansive cooking zone" },
      { src: launge, alt: "Family lounge — walk-in closet" },
    ],
  },
  {
    id: "clubhouse",
    label: "The Gold Coast Clubhouse",
    images: [
      { src: g5, alt: "The Gold Coast — indoor heated pool" },
      { src: g6, alt: "The Gold Coast — gymnasium" },
      { src: swpic3, alt: "The Gold Coast — patisserie & coffee shop" },
      { src: golfClub, alt: "The Gold Coast — sports bar & lounge" },
    ],
  },
  {
    id: "orbit",
    label: "The Orbit Skywalk",
    images: [
      { src: tower4, alt: "The Orbit — sky walking track, 90m above ground" },
      { src: tower5, alt: "The Orbit — observatory deck" },
    ],
  },
  {
    id: "township",
    label: "The Township — Jaypee Greens",
    images: [
      { src: golf9, alt: "18-hole Greg Norman golf course at Jaypee Greens" },
      { src: township, alt: "Jaypee Greens township — manicured gardens & lakes" },
      { src: greenry, alt: "Jaypee Greens — open & green spaces" },
      { src: acre100, alt: "452-acre Jaypee Greens integrated township" },
      { src: premiumLifestyle, alt: "Six Senses Golf & Spa Resort, Jaypee Greens" },
      { src: communityLiving, alt: "Jaypee Greens — well-planned community living" },
    ],
  },
];

export default function Gallery() {
  const [active, setActive] = useState(groups[0].id);
  const activeGroup = groups.find((g) => g.id === active) ?? groups[0];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {groups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all ${
                active === g.id
                  ? "bg-gray-900 text-white border-gray-900"
                  : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {activeGroup.images.map((img, i) => (
            <div
              key={i}
              className="relative h-64 rounded-xl overflow-hidden shadow-md group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs leading-snug opacity-0 group-hover:opacity-100 transition">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
