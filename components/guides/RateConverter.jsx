"use client";

import { useId, useMemo, useState } from "react";
import { useModal } from "@/components/ModalContext";
import { HOMES, fmt } from "./areaData";

const toNum = (v) => {
  const n = parseFloat(String(v).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
};

const rupees = (v) => {
  if (!v) return "₹0";
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`;
  if (v >= 1e5) return `₹${(v / 1e5).toFixed(2)} L`;
  return `₹${fmt(v)}`;
};

/**
 * Converts a rate quoted on saleable area into a rate on carpet area, using
 * the guide's method: multiply by saleable ÷ carpet, then divide the all-in cost by carpet.
 */
export default function RateConverter() {
  const { openModal } = useModal();
  const uid = useId();
  const [homeKey, setHomeKey] = useState(HOMES[2].key);
  const [rate, setRate] = useState("1000");
  const [other, setOther] = useState("");
  const [custom, setCustom] = useState({ saleable: "", carpet: "" });

  const isCustom = homeKey === "custom";
  const preset = HOMES.find((h) => h.key === homeKey);

  const calc = useMemo(() => {
    const saleable = isCustom ? toNum(custom.saleable) : preset.saleable;
    const carpet = isCustom ? toNum(custom.carpet) : preset.carpet;
    const valid = saleable > 0 && carpet > 0 && carpet <= saleable;
    const factor = valid ? saleable / carpet : 0;
    const loading = valid ? ((saleable - carpet) / carpet) * 100 : 0;
    const r = toNum(rate);
    const base = r * saleable;
    const allIn = base + toNum(other);
    return {
      valid,
      saleable,
      carpet,
      factor,
      loading,
      carpetRate: r * factor,
      base,
      allIn,
      allInPerCarpet: valid ? allIn / carpet : 0,
    };
  }, [isCustom, custom, preset, rate, other]);

  const inputCls =
    "input-luxe w-full rounded-lg border border-[#e0d4b4] bg-white px-4 py-3 text-base text-[#1a1a1a] placeholder-gray-400";

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-[#e5dcc5] bg-white shadow-[0_30px_70px_-40px_rgba(44,31,14,0.55)]" data-reveal="zoom">
      <div className="border-b border-[#efe6cf] bg-gradient-to-r from-[#FBF6E8] to-white px-6 py-5 md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8841e]">Calculator</p>
        <p className="font-display mt-1 text-2xl text-[#1a1a1a]">Convert a saleable-area rate to carpet</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.05fr]">
        {/* Inputs */}
        <div className="space-y-6 p-6 md:p-8">
          <fieldset>
            <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Home</legend>
            <div className="grid grid-cols-2 gap-2">
              {[...HOMES, { key: "custom", name: "Another home" }].map((h) => (
                <button
                  key={h.key}
                  type="button"
                  aria-pressed={homeKey === h.key}
                  onClick={() => setHomeKey(h.key)}
                  className={`cursor-pointer rounded-lg border px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    homeKey === h.key
                      ? "border-[#C49A2B] bg-[#FBF3DC] text-[#1a1a1a]"
                      : "border-[#e5dcc5] text-gray-600 hover:border-[#C49A2B]/60"
                  }`}
                >
                  {h.name}
                </button>
              ))}
            </div>
          </fieldset>

          {isCustom ? (
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500" htmlFor={`${uid}-s`}>
                Saleable (sq. ft.)
                <input id={`${uid}-s`} inputMode="decimal" className={`${inputCls} mt-2`} placeholder="e.g. 4,359"
                  value={custom.saleable} onChange={(e) => setCustom((c) => ({ ...c, saleable: e.target.value }))} />
              </label>
              <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500" htmlFor={`${uid}-c`}>
                Carpet (sq. ft.)
                <input id={`${uid}-c`} inputMode="decimal" className={`${inputCls} mt-2`} placeholder="e.g. 2,473"
                  value={custom.carpet} onChange={(e) => setCustom((c) => ({ ...c, carpet: e.target.value }))} />
              </label>
            </div>
          ) : (
            <p className="rounded-lg bg-[#FAF8F4] px-4 py-3 text-sm text-gray-600">
              {fmt(preset.saleable)} sq. ft. saleable · {fmt(preset.carpet)} sq. ft. carpet
            </p>
          )}

          <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500" htmlFor={`${uid}-r`}>
            Rate quoted on saleable area (₹ per sq. ft.)
            <input id={`${uid}-r`} inputMode="decimal" className={`${inputCls} mt-2`} value={rate}
              onChange={(e) => setRate(e.target.value)} placeholder="Enter the rate on your quote" />
          </label>

          <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500" htmlFor={`${uid}-o`}>
            Other lines on the cost sheet (₹, optional)
            <input id={`${uid}-o`} inputMode="decimal" className={`${inputCls} mt-2`} value={other}
              onChange={(e) => setOther(e.target.value)} placeholder="PLC, club, parking, GST, stamp duty" />
          </label>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-between gap-6 bg-[#1d1507] p-6 text-white md:p-8" aria-live="polite">
          {calc.valid ? (
            <>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#DCA54A]">Same rate, on carpet</p>
                <p className="font-display mt-2 text-4xl text-[#F6E7C1] md:text-5xl">
                  ₹{fmt(calc.carpetRate)}
                  <span className="ml-2 text-base text-white/60">/ sq. ft.</span>
                </p>
                <p className="mt-2 text-sm text-white/60">
                  ₹{fmt(toNum(rate))} × {calc.factor.toFixed(2)} (saleable ÷ carpet, rounded)
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">Loading</dt>
                  <dd className="font-display mt-1 text-xl">about {Math.round(calc.loading)}%</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">Base price</dt>
                  <dd className="font-display mt-1 text-xl">{rupees(calc.base)}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">All-in cost ÷ carpet — the figure to compare</dt>
                  <dd className="font-display mt-1 text-2xl text-[#F6E7C1]">₹{fmt(calc.allInPerCarpet)} / sq. ft.</dd>
                </div>
              </dl>
            </>
          ) : (
            <p className="text-sm leading-relaxed text-white/70">
              Enter a saleable area and a carpet area (carpet can’t be larger than saleable) to see the conversion.
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openModal()}
              className="btn-sheen cursor-pointer rounded-sm bg-[#C49A2B] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
            >
              Get the Real Cost Sheet
            </button>
            <p className="text-[11px] leading-snug text-white/45">Illustrative only. Prices are shared on request.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
