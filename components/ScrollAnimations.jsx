"use client";

import { useEffect } from "react";

/**
 * Activates the [data-reveal] scroll-reveal system defined in globals.css.
 * Mounted once in the root layout; observes elements added later by
 * dynamically imported sections via MutationObserver.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const observe = (el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    };

    document.querySelectorAll("[data-reveal]").forEach(observe);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.hasAttribute && node.hasAttribute("data-reveal")) observe(node);
          if (node.querySelectorAll) {
            node.querySelectorAll("[data-reveal]").forEach(observe);
          }
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
