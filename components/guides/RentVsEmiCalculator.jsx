"use client";

import { useId, useMemo, useState } from "react";
import { useModal } from "@/components/ModalContext";
import {
  EXAMPLE_PRICE,
  MONTHLY_RENT,
  LOAN_RATE,
  LOAN_YEARS,
  MIN_DOWN_PCT,
  EMI_SHARE_OF_INCOME,
  plan,
  inr,
} from "./rentBuyData";

const toNum = (v) => {
  const n = parseFloat(String(v).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
};

const QUICK = [
  { pct: 25, label: "25%" },
  { pct: 50, label: "50%" },
  { pct: 75, label: "75%" },
  { pct: 100, label: "Full" },
];

function Bar({ label, value, max, tone }) {
  const pct = max > 0 ? Math.max((value / max) * 100, value > 0 ? 3 : 0) : 0;
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs">
        <span className="uppercase tracking-[0.18em] text-white/55">{label}</span>
        <span className="font-display text-lg text-white">{value > 0 ? inr(value) : "None"}</span>
      </div>
      <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-[width] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${tone}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/**
 * Rent vs EMI at any down payment: own money (with GST, stamp duty and
 * registration), loan, EMI, EMI as a multiple of rent and the take-home it needs.
 * Defaults reproduce the guide's ₹9 crore example.
 */
export default function RentVsEmiCalculator() {
  const { openModal } = useModal();
  const uid = useId();
  const [priceCr, setPriceCr] = useState(String(EXAMPLE_PRICE / 1e7));
  const [downPct, setDownPct] = useState(MIN_DOWN_PCT);
  const [rate, setRate] = useState(LOAN_RATE);
  const [years, setYears] = useState(LOAN_YEARS);
  const [rentL, setRentL] = useState(String(MONTHLY_RENT / 1e5));

  const price = toNum(priceCr) * 1e7;
  const rent = toNum(rentL) * 1e5;

  const r = useMemo(() => plan(price, downPct, rate, years), [price, downPct, rate, years]);
  const multiple = rent > 0 && r.emi > 0 ? r.emi / rent : 0;
  const valid = price > 0;

  const inputCls =
    "input-luxe w-full rounded-lg border border-[#e0d4b4] bg-white px-4 py-3 text-base text-[#1a1a1a] placeholder-gray-400";
  const labelCls = "block text-xs font-semibold uppercase tracking-[0.15em] text-gray-500";
  const rangeCls = "mt-3 w-full cursor-pointer accent-[#C49A2B]";

  return (
    <div
      id="emi-calculator"
      className="my-12 scroll-mt-[140px] overflow-hidden rounded-3xl border border-[#e5dcc5] bg-white shadow-[0_30px_70px_-40px_rgba(44,31,14,0.55)]"
      data-reveal="zoom"
    >
      <div className="border-b border-[#efe6cf] bg-gradient-to-r from-[#FBF6E8] to-white px-6 py-5 md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8841e]">Calculator</p>
        <p className="font-display mt-1 text-2xl text-[#1a1a1a]">Rent vs EMI: run your own numbers</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.05fr]">
        {/* Inputs */}
        <div className="space-y-6 p-6 md:p-8">
          <div className="grid grid-cols-2 gap-3">
            <label className={labelCls} htmlFor={`${uid}-p`}>
              Price (₹ crore)
              <input
                id={`${uid}-p`}
                inputMode="decimal"
                className={`${inputCls} mt-2`}
                value={priceCr}
                onChange={(e) => setPriceCr(e.target.value)}
                placeholder="e.g. 9"
              />
            </label>
            <label className={labelCls} htmlFor={`${uid}-r`}>
              Rent (₹ lakh a month)
              <input
                id={`${uid}-r`}
                inputMode="decimal"
                className={`${inputCls} mt-2`}
                value={rentL}
                onChange={(e) => setRentL(e.target.value)}
                placeholder="e.g. 1.3"
              />
            </label>
          </div>

          <fieldset>
            <legend className="flex w-full items-baseline justify-between text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
              <span>Down payment</span>
              <span className="font-display text-base normal-case tracking-normal text-[#8a6b14]">
                {downPct === 100 ? "Paid in full" : `${downPct}% down`}
              </span>
            </legend>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {QUICK.map((q) => (
                <button
                  key={q.pct}
                  type="button"
                  aria-pressed={downPct === q.pct}
                  onClick={() => setDownPct(q.pct)}
                  className={`cursor-pointer rounded-lg border px-2 py-2.5 text-sm font-medium transition-all duration-200 ${
                    downPct === q.pct
                      ? "border-[#C49A2B] bg-[#FBF3DC] text-[#1a1a1a]"
                      : "border-[#e5dcc5] text-gray-600 hover:border-[#C49A2B]/60"
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>
            <input
              type="range"
              min={MIN_DOWN_PCT}
              max={100}
              step={5}
              value={downPct}
              onChange={(e) => setDownPct(Number(e.target.value))}
              className={rangeCls}
              aria-label="Down payment, per cent of price"
            />
            <p className="mt-1 text-[11px] leading-snug text-gray-400">
              Banks lend at most 75% on loans above ₹75 lakh, so 25% is the floor.
            </p>
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className={labelCls} htmlFor={`${uid}-i`}>
              <span className="flex items-baseline justify-between">
                Interest rate
                <span className="font-display text-base normal-case tracking-normal text-[#8a6b14]">{rate.toFixed(2)}%</span>
              </span>
              <input
                id={`${uid}-i`}
                type="range"
                min={6.5}
                max={11}
                step={0.05}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className={rangeCls}
              />
            </label>
            <label className={labelCls} htmlFor={`${uid}-t`}>
              <span className="flex items-baseline justify-between">
                Tenure
                <span className="font-display text-base normal-case tracking-normal text-[#8a6b14]">{years} years</span>
              </span>
              <input
                id={`${uid}-t`}
                type="range"
                min={5}
                max={30}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className={rangeCls}
              />
            </label>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-between gap-7 bg-[#1d1507] p-6 text-white md:p-8" aria-live="polite">
          {valid ? (
            <>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#DCA54A]">EMI after possession</p>
                <p className="font-display mt-2 text-4xl text-[#F6E7C1] md:text-5xl">
                  {r.emi > 0 ? inr(r.emi, { long: true }) : "No EMI"}
                  {r.emi > 0 ? <span className="ml-2 text-base text-white/60">a month</span> : null}
                </p>
                <p className="mt-2 text-sm text-white/65">
                  {r.emi > 0 && multiple > 0
                    ? `${multiple.toFixed(1)}× the rent on a similar home.`
                    : r.emi > 0
                      ? "Enter a rent to compare."
                      : `No loan, but ${inr(r.ownMoney, { long: true })} of your own money is tied up.`}
                </p>
              </div>

              <div className="space-y-4">
                <Bar label="Rent" value={rent} max={Math.max(rent, r.emi)} tone="bg-gradient-to-r from-[#6a9c4a] to-[#8fbf6a]" />
                <Bar label="EMI" value={r.emi} max={Math.max(rent, r.emi)} tone="bg-gradient-to-r from-[#a8841e] to-[#DCA54A]" />
              </div>

              <dl className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">Your own money, with taxes</dt>
                  <dd className="font-display mt-1 text-xl">{inr(r.ownMoney)}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">Loan</dt>
                  <dd className="font-display mt-1 text-xl">{r.loan > 0 ? inr(r.loan) : "None"}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">GST, stamp duty, registration</dt>
                  <dd className="font-display mt-1 text-xl">{inr(r.costs.total)}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Take-home for EMI at {Math.round(EMI_SHARE_OF_INCOME * 100)}%
                  </dt>
                  <dd className="font-display mt-1 text-xl">{r.emi > 0 ? `${inr(r.takeHome)} / mo` : "—"}</dd>
                </div>
              </dl>
            </>
          ) : (
            <p className="text-sm leading-relaxed text-white/70">Enter a price to see the comparison.</p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openModal()}
              className="btn-sheen cursor-pointer rounded-sm bg-[#C49A2B] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white"
            >
              Get the Real Payment Plan
            </button>
            <p className="text-[11px] leading-snug text-white/45">
              Illustration only. GST 5%, stamp duty 7%, registration 1%. Interest during construction not included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
