"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Full-bleed background image that drifts against the scroll for depth.
 * Absolutely positioned: place inside a `relative overflow-hidden` parent.
 * @param {{
 *   src: import("next/image").StaticImageData,
 *   alt?: string,
 *   strength?: number,
 *   sizes?: string,
 *   objectPosition?: string,
 *   priority?: boolean,
 * }} props
 */
export default function ParallaxImage({ src, alt = "", strength = 50, sizes = "100vw", objectPosition, priority = false }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const wrap = wrapRef.current;
      const inner = innerRef.current;
      if (!wrap || !inner) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -100 || rect.top > vh + 100) return;
      // -1 when the block enters at the bottom, +1 when it leaves at the top
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2);
      inner.style.transform = `translate3d(0, ${(progress * strength).toFixed(1)}px, 0) scale(1.25)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={wrapRef} className="absolute inset-0 -z-10 overflow-hidden" aria-hidden={alt ? undefined : true}>
      <div ref={innerRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.25)" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
    </div>
  );
}
