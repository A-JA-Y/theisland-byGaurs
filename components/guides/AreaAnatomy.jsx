"use client";

import { useState } from "react";
import { HOMES, NCR_AVERAGE_LOADING, fmt } from "./areaData";

/** Interactive bar: how much of each home's saleable area is carpet, and how its loading compares with NCR. */
export default function AreaAnatomy() {
  const [key, setKey] = useState(HOMES[0].key);
  const home = HOMES.find((h) => h.key === key);
  const gap = home.saleable - home.carpet;

  return (
    <div className="my-10 overflow-hidden rounded-3xl bg-[#141004] text-white shadow-[0_40px_80px_-40px_rgba(20,16,4,0.8)]" data-reveal="zoom">
      <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DCA54A]">Inside the saleable figure</p>
        <div role="tablist" aria-label="Choose a home" className="no-scrollbar flex gap-2 overflow-x-auto">
          {HOMES.map((h) => (
            <button
              key={h.key}
              type="button"
              role="tab"
              aria-selected={key === h.key}
              onClick={() => setKey(h.key)}
              className={`shrink-0 cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                key === h.key
                  ? "border-[#C49A2B] bg-[#C49A2B] text-white"
                  : "border-white/20 text-white/70 hover:border-[#C49A2B]/60 hover:text-white"
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 py-8 md:px-8">
        <div className="grid grid-cols-3 gap-4 text-center md:text-left">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">Saleable</p>
            <p className="font-display mt-1 text-2xl text-white md:text-3xl">{fmt(home.saleable)}</p>
            <p className="text-[11px] text-white/45">sq. ft.</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#DCA54A]">Carpet</p>
            <p className="font-display mt-1 text-2xl text-[#F6E7C1] md:text-3xl">{fmt(home.carpet)}</p>
            <p className="text-[11px] text-white/45">sq. ft. · {home.carpetPct}% of saleable</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">The gap</p>
            <p className="font-display mt-1 text-2xl text-white md:text-3xl">{fmt(gap)}</p>
            <p className="text-[11px] text-white/45">sq. ft. outside carpet</p>
          </div>
        </div>

        {/* Saleable bar with carpet share */}
        <div className="mt-8">
          <div className="relative h-14 overflow-hidden rounded-xl bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.10)_0_8px,rgba(255,255,255,0.04)_8px_16px)] ring-1 ring-white/15">
            <div
              className="absolute inset-y-0 left-0 flex items-center bg-gradient-to-r from-[#a8841e] to-[#DCA54A] px-4 transition-[width] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{ width: `${home.carpetPct}%` }}
            >
              <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-[#1d1507]">Carpet · {home.carpetPct}%</span>
            </div>
            <span className="absolute inset-y-0 right-4 flex items-center text-[11px] uppercase tracking-[0.15em] text-white/70">
              Balconies, outer walls, common share
            </span>
          </div>
          <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/40">
            <span>0</span>
            <span>Saleable area = 100%</span>
          </div>
        </div>

        {/* Loading vs NCR */}
        <div className="mt-8 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-sm text-white/80">
              Loading on this home: <span className="font-display text-xl text-[#F6E7C1]">about {home.loading}%</span>
            </p>
            <p className="text-xs text-white/50">NCR average: {NCR_AVERAGE_LOADING}%</p>
          </div>
          <div className="relative mt-4 h-3 rounded-full bg-white/10">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#DCA54A] to-[#e07b39] transition-[width] duration-700"
              style={{ width: `${home.loading}%` }}
            />
            <span className="absolute -top-1.5 h-6 w-0.5 bg-white" style={{ left: `${NCR_AVERAGE_LOADING}%` }} aria-hidden="true" />
            <span
              className="absolute top-5 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.18em] text-white/60"
              style={{ left: `${NCR_AVERAGE_LOADING}%` }}
            >
              NCR avg
            </span>
          </div>
          <p className="mt-8 text-xs leading-relaxed text-white/55">
            Loading = (saleable area − carpet area) ÷ carpet area × 100. Areas are indicative; verify them on up-rera.in.
          </p>
        </div>
      </div>
    </div>
  );
}
