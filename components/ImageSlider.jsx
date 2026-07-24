"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
  }, [images.length]);

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoSlide();
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(delta) > 40) {
        if (delta < 0) nextSlide();
        else prevSlide();
      }
      touchStartX.current = null;
    }
    startAutoSlide();
  };

  return (
    <div
      className="group/slider relative w-full h-full overflow-hidden rounded-xl shadow-2xl"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Images */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Amenity ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${
            index === current
              ? "opacity-100 z-10 scale-105"
              : "opacity-0 scale-100"
          }`}
          style={index === current ? { transitionTimingFunction: "ease-out" } : undefined}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 512px"
          quality={80}
        />
      ))}

      {/* Subtle bottom gradient for controls */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />

      {/* Counter badge */}
      <span className="absolute top-3 right-3 z-20 text-[11px] tracking-widest text-white bg-black/45 backdrop-blur-sm rounded-full px-3 py-1">
        {current + 1} / {images.length}
      </span>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-black/45 backdrop-blur-sm text-white rounded-full transition-all duration-300 hover:bg-[#C49A2B] hover:scale-110 active:scale-95 md:opacity-0 md:group-hover/slider:opacity-100 md:-translate-x-1 md:group-hover/slider:translate-x-0"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center bg-black/45 backdrop-blur-sm text-white rounded-full transition-all duration-300 hover:bg-[#C49A2B] hover:scale-110 active:scale-95 md:opacity-0 md:group-hover/slider:opacity-100 md:translate-x-1 md:group-hover/slider:translate-x-0"
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-400 ${
              index === current
                ? "w-6 bg-[#DCA54A]"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
