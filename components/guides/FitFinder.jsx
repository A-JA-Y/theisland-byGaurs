"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { useModal } from "@/components/ModalContext";

const VILLA = [
  "You want a garden that belongs to you",
  "Each generation needs its own floor and entrance",
  "You’re comfortable managing staff and upkeep across a large house",
  "You value land more than amenities",
];

const FLAT = [
  "You’d rather the whole family lived on one level with a lift",
  "Grandparents and teenagers want to get around on their own by metro",
  "You want a clubhouse, a pool and courts without maintaining them yourself",
  "You want golf-course frontage with a home you can lock and leave when the family travels",
];

function Statement({ text, checked, onToggle }) {
  return (
    <li>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={onToggle}
        className={`group flex w-full cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.5 text-left text-[15px] leading-snug transition-all duration-300 ${
          checked
            ? "border-[#C49A2B] bg-[#FBF3DC] text-[#1a1a1a] shadow-[0_10px_24px_-16px_rgba(196,154,43,0.9)]"
            : "border-[#e5dcc5] bg-white text-gray-700 hover:border-[#C49A2B]/60"
        }`}
      >
        <span
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
            checked ? "border-[#C49A2B] bg-[#C49A2B] text-white" : "border-[#cdb578] text-transparent group-hover:text-[#cdb578]"
          }`}
          aria-hidden="true"
        >
          <FaCheck size={10} />
        </span>
        {text}
      </button>
    </li>
  );
}

/**
 * The guide's two "suits your family if" lists, made tappable: the reader
 * picks what sounds like them and gets a lean towards villa, apartment or duplex.
 */
export default function FitFinder() {
  const { openModal } = useModal();
  const [picked, setPicked] = useState(() => new Set());
  const toggle = (key) =>
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const villaScore = VILLA.filter((_, i) => picked.has(`v${i}`)).length;
  const flatScore = FLAT.filter((_, i) => picked.has(`f${i}`)).length;
  const total = villaScore + flatScore;
  // 0% = all villa, 100% = all apartment
  const lean = total ? (flatScore / total) * 100 : 50;

  let verdict;
  if (!total) {
    verdict = { title: "Tap the statements that sound like your family.", text: "Your answers will lean one way or the other." };
  } else if (villaScore > flatScore) {
    verdict = {
      title: "Your answers lean towards a villa.",
      text: "Look at villas in Jaypee Greens, and check the lease deed, the age of the structure and whether a lift can be added.",
      action: { href: "#villa-alternatives", label: "See villa options" },
    };
  } else if (flatScore > villaScore) {
    verdict = {
      title: "Your answers lean towards a large apartment.",
      text: "Compare 4, 5 and 6 BHK layouts, and ask for the carpet area of the exact home.",
      action: { href: "/floor-plans", label: "View floor plans" },
      modal: "Get the Price Sheet",
    };
  } else {
    verdict = {
      title: "You’re split down the middle.",
      text: "A top-floor duplex gives each generation its own level, with a lift at the door.",
      action: { href: "#duplex", label: "Read: duplex vs villa" },
      modal: "Ask About Duplexes",
    };
  }

  return (
    <div className="mt-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div data-reveal="left">
          <h2 className="font-display mb-4 text-2xl text-[#1a1a1a] md:text-[1.75rem]">A Villa Suits Your Family If</h2>
          <ul className="space-y-3">
            {VILLA.map((t, i) => (
              <Statement key={t} text={t} checked={picked.has(`v${i}`)} onToggle={() => toggle(`v${i}`)} />
            ))}
          </ul>
        </div>
        <div data-reveal="right">
          <h2 className="font-display mb-4 text-2xl text-[#1a1a1a] md:text-[1.75rem]">A Large Apartment Suits Your Family If</h2>
          <ul className="space-y-3">
            {FLAT.map((t, i) => (
              <Statement key={t} text={t} checked={picked.has(`f${i}`)} onToggle={() => toggle(`f${i}`)} />
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-[#1d1507] p-6 text-white md:p-8" aria-live="polite">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
          <span>Villa</span>
          <span>Duplex</span>
          <span>Apartment</span>
        </div>
        <div className="relative mt-3 h-2 rounded-full bg-gradient-to-r from-[#6a9c4a] via-[#DCA54A] to-[#C49A2B]">
          <span
            className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#1d1507] bg-[#F6E7C1] shadow-[0_0_0_4px_rgba(246,231,193,0.25)] transition-[left] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={{ left: `${lean}%` }}
            aria-hidden="true"
          />
        </div>
        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-xl text-[#F6E7C1] md:text-2xl">{verdict.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{verdict.text}</p>
          </div>
          {verdict.action || verdict.modal ? (
            <div className="flex shrink-0 flex-wrap gap-3">
              {verdict.modal ? (
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="btn-sheen cursor-pointer rounded-sm bg-[#C49A2B] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
                >
                  {verdict.modal}
                </button>
              ) : null}
              {verdict.action ? (
                <Link
                  href={verdict.action.href}
                  className="rounded-sm border border-white/40 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#1d1507]"
                >
                  {verdict.action.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
