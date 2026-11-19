"use client";

import { useEffect, useRef, useState } from "react";
import { useModal } from "@/components/ModalContext";

/**
 * Fixed chapter bar that slides in under the site header once the reader
 * scrolls past the hero. Highlights the chapter in view and doubles as a
 * reading-progress indicator for the article.
 *
 * Expects a `#guide-start` sentinel (end of hero) and `#guide-end` (end of article).
 */
export default function ChapterNav({ items, ctaLabel = "Price Sheet" }) {
  const { openModal } = useModal();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(items[0]?.id);
  const barRef = useRef(null);
  const listRef = useRef(null);

  // Show / hide + progress
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const start = document.getElementById("guide-start");
      const end = document.getElementById("guide-end");
      if (!start || !end) return;
      const startTop = start.getBoundingClientRect().top + window.scrollY;
      const endTop = end.getBoundingClientRect().top + window.scrollY;
      const y = window.scrollY + 140;
      setVisible(y > startTop && y < endTop + 200);
      const p = Math.min(Math.max((y - startTop) / Math.max(endTop - startTop, 1), 0), 1);
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
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
  }, []);

  // Active chapter
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  // Keep the active chip in view inside the horizontal scroller (never scrolls the page)
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector(`[data-chip="${active}"]`);
    if (!list || !chip) return;
    const target = chip.offsetLeft - list.clientWidth / 2 + chip.clientWidth / 2;
    list.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  return (
    <div
      className={`fixed left-0 right-0 top-[74px] z-[25] border-b border-[rgba(196,154,43,0.2)] bg-white/90 backdrop-blur-md transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 md:px-6">
        <span className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a8841e] md:block">
          Chapters
        </span>
        <nav aria-label="On this page" className="min-w-0 flex-1">
          <ol ref={listRef} className="no-scrollbar flex gap-1.5 overflow-x-auto py-2.5">
            {items.map((item, i) => (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  data-chip={item.id}
                  tabIndex={visible ? 0 : -1}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12px] font-medium tracking-wide transition-all duration-300 ${
                    active === item.id
                      ? "bg-[#C49A2B] text-white shadow-[0_6px_16px_-8px_rgba(196,154,43,0.9)]"
                      : "text-[#555] hover:bg-[rgba(196,154,43,0.1)] hover:text-[#8a6b14]"
                  }`}
                >
                  <span className={active === item.id ? "text-white/75" : "text-[#C49A2B]"}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <button
          type="button"
          onClick={() => openModal()}
          tabIndex={visible ? 0 : -1}
          className="btn-sheen hidden shrink-0 cursor-pointer rounded-sm bg-[#1d1507] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F6E7C1] sm:inline-flex"
        >
          {ctaLabel}
        </button>
      </div>
      <div className="h-[2px] w-full bg-[rgba(196,154,43,0.12)]">
        <div ref={barRef} className="h-full origin-left bg-gradient-to-r from-[#a8841e] via-[#DCA54A] to-[#C49A2B]" style={{ transform: "scaleX(0)" }} />
      </div>
    </div>
  );
}
