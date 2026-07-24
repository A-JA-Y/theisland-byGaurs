"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useModal } from "./ModalContext";

import heroMobile from "../assets-islandbygaurs/images/theislandsbygaurs.webp";
import slide1 from "../assets-islandbygaurs/images/anim-5.webp";
import slide2 from "../assets-islandbygaurs/images/anim-1.webp";
import slide3 from "../assets-islandbygaurs/images/anim-3.webp";
import slide4 from "../assets-islandbygaurs/images/anim-2.webp";

const slides = [
  { src: slide1, alt: "The Islands by Gaurs — 9-tower skyline at Jaypee Greens" },
  { src: slide2, alt: "The Islands by Gaurs — night view from Pari Chowk" },
  { src: slide3, alt: "The Islands by Gaurs — towering above Pari Chowk side" },
  { src: slide4, alt: "The Islands by Gaurs — architectural design render" },
];

const SLIDE_MS = 6000;

const highlights = [
  "4 · 5 · 6 BHK Residences",
  "9 Towers · 506 Homes",
  "Golf-Course Frontage",
  "Skywalk 90m Above Ground",
];

const Hero = () => {
  const { openModal } = useModal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full">
      {/* ---------- Mobile & Tablet ---------- */}
      <div className="block md:hidden relative overflow-hidden">
        <Image
          src={heroMobile}
          alt="The Islands by Gaurs Mobile Banner"
          width={1536}
          priority
          sizes="100vw"
          quality={80}
          className="w-full h-auto object-cover"
          style={{ animation: "heroZoomIn 1.4s ease-out both" }}
        />

        {/* Swipeable highlight chips */}
        <div className="bg-[#1d1507] px-3 py-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 w-max">
            {highlights.map((h, i) => (
              <span
                key={h}
                data-reveal
                data-reveal-delay={String(i + 1)}
                className="whitespace-nowrap text-[11px] tracking-wide text-[#F6E7C1] border border-[rgba(220,165,74,0.45)] bg-[rgba(220,165,74,0.12)] rounded-full px-3.5 py-1.5"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Desktop slideshow ---------- */}
      <div className="hidden md:flex w-full md:h-[78vh] md:min-h-[520px] items-end relative overflow-hidden bg-[#10131c]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide absolute inset-0 ${index === current ? "active" : ""}`}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="kenburns-img object-cover object-[center_top]"
              sizes="100vw"
              quality={80}
            />
          </div>
        ))}

        {/* Cinematic gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

        {/* Overlay content — extra bottom padding clears the form card that
            overlaps the hero bottom (-98px pull-up on desktop) */}
        <div className="relative max-w-7xl mx-auto w-full px-8 lg:px-12 pb-32 flex flex-col gap-5 z-10">
          {/* Highlight chips */}
          <div className="flex flex-wrap gap-2.5" data-reveal>
            {highlights.map((h) => (
              <span
                key={h}
                className="text-[11px] uppercase tracking-[0.15em] text-[#F6E7C1] border border-[rgba(246,231,193,0.4)] bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 transition-all duration-300 hover:bg-[rgba(220,165,74,0.25)] hover:border-[#DCA54A] hover:-translate-y-0.5 cursor-default"
              >
                {h}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4" data-reveal data-reveal-delay="2">
            <a
              href="#book-site-visit"
              className="btn-sheen inline-flex items-center gap-2 bg-[#C49A2B] text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 rounded-sm"
            >
              Book a Site Visit
            </a>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 border border-white/60 text-white text-xs font-semibold uppercase tracking-[0.2em] px-8 py-3.5 rounded-sm backdrop-blur-sm bg-white/5 hover:bg-white hover:text-[#2c1f0e] transition-all duration-300 cursor-pointer"
            >
              Download Brochure
            </button>
          </div>

          {/* Slide indicators with progress — aligned with the CTA row */}
          <div className="absolute right-8 lg:right-12 bottom-32 flex gap-2.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`relative h-[4px] rounded-full overflow-hidden transition-all duration-500 ${
                  index === current ? "w-10 bg-white/30" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              >
                {index === current && (
                  <span
                    className="absolute inset-y-0 left-0 bg-[#DCA54A]"
                    style={{ animation: `slideProgress ${SLIDE_MS}ms linear both` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
