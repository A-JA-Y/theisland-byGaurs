"use client";

import { useState } from "react";

const MODES = {
  villa: {
    label: "Villa",
    caption: "A villa puts the generations on different floors.",
    rows: [
      ["How generations are separated", "By floor: each generation can have its own level"],
      ["Getting around the home", "Stairs, unless the villa has a lift or room to add one"],
      ["Where the family comes together", "Your own garden"],
    ],
  },
  flat: {
    label: "Large apartment",
    caption: "A large flat puts them along one corridor.",
    rows: [
      ["How generations are separated", "By zone: formal spaces, family lounge, private bedrooms"],
      ["Getting around the home", "One level, with a lift at the door"],
      ["Where the family comes together", "The family lounge, and the clubhouse downstairs"],
    ],
  },
};

const GOLD = "#C49A2B";

function VillaSvg() {
  return (
    <g>
      {/* ground + garden */}
      <line x1="10" y1="292" x2="530" y2="292" stroke="#d9cfb4" strokeWidth="2" />
      <rect x="22" y="232" width="150" height="60" rx="30" fill="#7fae5a" opacity="0.85" />
      <circle cx="58" cy="226" r="20" fill="#5f9142" />
      <circle cx="132" cy="220" r="26" fill="#6a9c4a" />
      <text x="97" y="268" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="600">Private garden</text>
      {/* house */}
      <path d="M198 82 L364 30 L530 82 Z" fill="#2c1f0e" />
      {[
        { y: 82, label: "Children", sub: "Top floor", fill: "#f6ecd2" },
        { y: 152, label: "Parents", sub: "First floor", fill: "#f1e3bd" },
        { y: 222, label: "Grandparents", sub: "Ground floor", fill: "#ead7a6" },
      ].map((f) => (
        <g key={f.label}>
          <rect x="210" y={f.y} width="308" height="70" fill={f.fill} stroke="#c9b27a" />
          <text x="236" y={f.y + 32} fontSize="15" fill="#1a1a1a" fontWeight="600">{f.label}</text>
          <text x="236" y={f.y + 51} fontSize="11" fill="#6b5a35" letterSpacing="1.5">{f.sub.toUpperCase()}</text>
        </g>
      ))}
      {/* staircase */}
      <path
        d="M470 292 v-14 h-12 v-14 h-12 v-14 h-12 v-14 M470 222 v-14 h-12 v-14 h-12 v-14 h-12 v-14 M470 152 v-14 h-12 v-14 h-12 v-14 h-12 v-14"
        fill="none"
        stroke={GOLD}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text x="364" y="316" textAnchor="middle" fontSize="11" fill="#8a6b14" letterSpacing="1.5">STAIRS LINK EVERY FLOOR</text>
    </g>
  );
}

function FlatSvg() {
  return (
    <g>
      {/* building context */}
      <rect x="10" y="70" width="520" height="22" rx="4" fill="#efe6cf" />
      <text x="270" y="85" textAnchor="middle" fontSize="11" fill="#8a6b14" letterSpacing="1.5">ONE LEVEL · TWO HOMES PER FLOOR</text>
      {/* floor plate */}
      <rect x="10" y="104" width="520" height="150" rx="10" fill="#fbf7ec" stroke="#c9b27a" strokeWidth="1.5" />
      {[
        { x: 22, w: 150, label: "Formal living", sub: "Guests", fill: "#f1e3bd" },
        { x: 184, w: 160, label: "Family lounge", sub: "Evenings together", fill: "#ead7a6" },
        { x: 356, w: 162, label: "Bedrooms", sub: "Walk-in closets", fill: "#f6ecd2" },
      ].map((z) => (
        <g key={z.label}>
          <rect x={z.x} y="116" width={z.w} height="92" rx="6" fill={z.fill} />
          <text x={z.x + z.w / 2} y="156" textAnchor="middle" fontSize="15" fill="#1a1a1a" fontWeight="600">{z.label}</text>
          <text x={z.x + z.w / 2} y="176" textAnchor="middle" fontSize="11" fill="#6b5a35" letterSpacing="1.2">{z.sub.toUpperCase()}</text>
        </g>
      ))}
      {/* corridor */}
      <line x1="40" y1="232" x2="500" y2="232" stroke={GOLD} strokeWidth="2.5" strokeDasharray="7 6" />
      <text x="270" y="248" textAnchor="middle" fontSize="11" fill="#8a6b14" letterSpacing="1.5">ONE CORRIDOR, NO STAIRS</text>
      {/* utility balcony */}
      <rect x="400" y="262" width="118" height="30" rx="5" fill="#e3ecd8" stroke="#a9bf8f" />
      <text x="459" y="281" textAnchor="middle" fontSize="11" fill="#4f6b37">Utility balcony</text>
      {/* lift */}
      <rect x="22" y="262" width="78" height="30" rx="5" fill="#2c1f0e" />
      <text x="61" y="281" textAnchor="middle" fontSize="11" fill="#F6E7C1">Lift ⇅</text>
      <text x="270" y="316" textAnchor="middle" fontSize="11" fill="#8a6b14" letterSpacing="1.5">CLUBHOUSE &amp; COURTS DOWNSTAIRS</text>
    </g>
  );
}

/** Toggle between how three generations live in a villa versus a large apartment. */
export default function LivingLayoutDiagram() {
  const [mode, setMode] = useState("villa");
  const current = MODES[mode];

  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-[#e5dcc5] bg-white shadow-[0_30px_70px_-40px_rgba(44,31,14,0.55)]" data-reveal="zoom">
      <div className="flex flex-col gap-4 border-b border-[#efe6cf] px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8841e]">How a three-generation family lives</p>
        <div role="tablist" aria-label="Compare home types" className="relative grid grid-cols-2 rounded-full bg-[#f4eedd] p-1">
          <span
            className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-[#1d1507] shadow transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={{ transform: mode === "flat" ? "translateX(100%)" : "translateX(0)" }}
            aria-hidden="true"
          />
          {Object.entries(MODES).map(([key, m]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={mode === key}
              onClick={() => setMode(key)}
              className={`relative z-10 cursor-pointer rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                mode === key ? "text-[#F6E7C1]" : "text-[#6b5a35] hover:text-[#1a1a1a]"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.35fr_1fr]">
        <div className="relative bg-gradient-to-b from-[#fffdf7] to-[#f8f2e2] px-3 py-6 md:px-6">
          <svg viewBox="0 0 540 330" className="h-auto w-full" role="img" aria-label={current.caption}>
            <g style={{ opacity: mode === "villa" ? 1 : 0, transition: "opacity 0.6s ease" }}>
              <VillaSvg />
            </g>
            <g style={{ opacity: mode === "flat" ? 1 : 0, transition: "opacity 0.6s ease" }}>
              <FlatSvg />
            </g>
          </svg>
        </div>
        <div className="flex flex-col justify-center gap-5 p-6 md:p-8">
          <p className="font-display text-2xl leading-snug text-[#1a1a1a]" aria-live="polite">
            {current.caption}
          </p>
          <dl className="space-y-4">
            {current.rows.map(([k, v]) => (
              <div key={k} className="border-l-2 border-[#C49A2B] pl-4">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a8841e]">{k}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-gray-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
