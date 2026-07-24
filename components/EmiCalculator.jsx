"use client";
import { useState, useMemo, useRef, useEffect } from "react";

function SliderField({ label, min, max, step, value, onChange, pillLabel, rightLabel }) {
  const pct = (value - min) / (max - min);
  const fillWidth = pct * 100;
  const pillLeft = pct * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-1.5">
        <p className="text-[11px] uppercase tracking-widest text-gray-400">{label}</p>
        <div className="flex items-baseline gap-2">
          {rightLabel}
        </div>
      </div>

      <div className="relative h-9 group/slider">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 -translate-y-1/2 rounded" />
        <div
          className="absolute top-1/2 left-0 h-[2px] bg-[#DCA54A] -translate-y-1/2 rounded transition-all duration-150"
          style={{ width: `${fillWidth}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-[#DCA54A]/50 shadow-sm rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap pointer-events-none text-gray-900 transition-transform duration-200 group-hover/slider:scale-110"
          style={{ left: `${pillLeft}%` }}
        >
          {pillLabel}
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default function EmiCalculator() {
  const [loan, setLoan] = useState(3000000);
  const [downPercent, setDownPercent] = useState(20);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(7);

  const emi = useMemo(() => {
    const principal = loan * (1 - downPercent / 100);
    const r = rate / 12 / 100;
    const n = years * 12;
    if (!n) return 0;
    if (r === 0) return Math.round(principal / n);
    return Math.round(
      (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    );
  }, [loan, downPercent, years, rate]);

  const fmt = (n) => Math.round(n).toLocaleString("en-IN");
  const downAmt = loan * downPercent / 100;

  return (
    <section className="w-full bg-[#FAF8F4] flex flex-col items-center py-16 px-6 box-border" id="emi-calculator">
      <div className="text-center mb-10">
        <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3" data-reveal>
          Plan Your Investment
        </h6>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900" data-reveal data-reveal-delay="1">
          EMI Calculator
        </h2>
      </div>

      <div
        className="w-full max-w-[480px] bg-white p-6 rounded-2xl shadow-[0_18px_50px_-20px_rgba(44,31,14,0.3)] border border-[rgba(196,154,43,0.15)] transition-shadow duration-500 hover:shadow-[0_24px_60px_-18px_rgba(196,154,43,0.35)]"
        data-reveal="zoom"
        data-reveal-delay="2"
      >

        {/* Loan Amount */}
        <div className="mb-6">
          <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1.5">
            Loan Amount
          </p>
          <div className="flex items-center border-b-2 border-gray-900 pb-1">
            <input
              type="number"
              value={loan}
              onChange={(e) => setLoan(Number(e.target.value))}
              className="flex-1 border-none outline-none text-[clamp(20px,5vw,28px)] font-bold bg-transparent text-gray-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-gray-300 text-lg ml-1.5">₹</span>
          </div>
        </div>

        {/* Advance Payment — shows % + ₹ amount */}
        <SliderField
          label="Advance Payment"
          min={0}
          max={100}
          step={1}
          value={downPercent}
          onChange={setDownPercent}
          pillLabel={`${downPercent}%`}
          rightLabel={
            <>
              <span className="text-sm font-bold text-gray-900">{downPercent}%</span>
              <span className="text-xs text-gray-400">₹{fmt(downAmt)}</span>
            </>
          }
        />

        {/* Duration */}
        <SliderField
          label="Duration"
          min={1}
          max={30}
          step={1}
          value={years}
          onChange={setYears}
          pillLabel={`${years} Yrs`}
          rightLabel={
            <span className="text-sm font-bold text-gray-900">{years} Years</span>
          }
        />

        {/* Interest Rate */}
        <SliderField
          label="Interest Rate"
          min={5}
          max={15}
          step={0.1}
          value={rate}
          onChange={setRate}
          pillLabel={`${rate.toFixed(1)}%`}
          rightLabel={
            <span className="text-sm font-bold text-gray-900">{rate.toFixed(1)}%</span>
          }
        />

        {/* Result */}
        <div className="border-t border-gray-100 pt-4 mt-2">
          <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1.5">
            Estimated Monthly EMI
          </p>
          <div className="flex items-baseline gap-1.5">
            <span
              key={emi}
              className="text-[clamp(26px,6vw,36px)] font-bold text-[#B8892A] inline-block"
              style={{ animation: "fadeUp 0.35s ease both" }}
            >
              {fmt(emi)}
            </span>
            <span className="text-gray-400 text-sm">₹ / month</span>
          </div>
        </div>
      </div>
    </section>
  );
}