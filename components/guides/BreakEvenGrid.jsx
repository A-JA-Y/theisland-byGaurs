"use client";

import { useState } from "react";
import { BREAK_EVEN, EXAMPLE_PRICE } from "./rentBuyData";

const MIN = 7;
const MAX = 12;

/** Heat colour for a break-even rate: pale gold (easy) to deep bronze (hard). */
function heat(v) {
  const t = Math.min(Math.max((v - MIN) / (MAX - MIN), 0), 1);
  // interpolate #FBF3DC -> #8a5a14
  const a = [251, 243, 220];
  const b = [138, 90, 20];
  const c = a.map((x, i) => Math.round(x + (b[i] - x) * t));
  return { bg: `rgb(${c.join(",")})`, dark: t > 0.45 };
}

const fmtCr = (v) => `₹${(v / 1e7).toFixed(1).replace(/\.0$/, "")} crore`;

/**
 * The guide's break-even table, made explorable: pick a way of paying and what
 * the tenant's money earns, and see the price the home must reach in ten years.
 */
export default function BreakEvenGrid() {
  const [sel, setSel] = useState({ row: 0, col: 1 });
  const row = BREAK_EVEN.rows[sel.row];
  const ret = BREAK_EVEN.returns[sel.col];
  const rate = row.values[sel.col];
  const future = EXAMPLE_PRICE * Math.pow(1 + rate / 100, 10);

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-[#e5dcc5] bg-white shadow-[0_30px_70px_-40px_rgba(44,31,14,0.55)]" data-reveal="zoom">
      <div className="overflow-x-auto">
        <table className="guide-table w-full table-fixed text-left text-sm">
          <caption className="border-b border-[#efe6cf] bg-gradient-to-r from-[#FBF6E8] to-white px-6 py-4 text-left md:px-8">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8841e]">Break-even table</span>
            <span className="font-display mt-1 block text-xl text-[#1a1a1a] md:text-2xl">
              How fast the home must appreciate, a year, over ten years
            </span>
            <span className="mt-1 block text-xs text-gray-500 sm:hidden">Columns: what the tenant’s invested money earns a year.</span>
          </caption>
          <colgroup>
            <col className="w-[31%] sm:w-[34%]" />
            <col className="w-[23%] sm:w-[22%]" />
            <col className="w-[23%] sm:w-[22%]" />
            <col className="w-[23%] sm:w-[22%]" />
          </colgroup>
          <thead className="text-[11px] uppercase tracking-[0.15em] text-gray-500">
            <tr>
              <th scope="col" className="px-4 py-4 md:px-8">How you pay</th>
              {BREAK_EVEN.returns.map((r, i) => (
                <th scope="col" key={r} className="px-1 py-4 text-center sm:px-3">
                  {i === 0 ? (
                    <>
                      <span className="hidden sm:inline">
                        Tenant’s money
                        <br />
                        earns {r}%
                      </span>
                      <span className="sm:hidden">Earns {r}%</span>
                    </>
                  ) : (
                    `Earns ${r}%`
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BREAK_EVEN.rows.map((rw, ri) => (
              <tr key={rw.label} className="border-t border-[#efe6cf]">
                <th scope="row" className="font-display px-4 py-3 text-[15px] font-normal leading-snug text-[#1a1a1a] sm:text-base md:px-8">
                  {rw.label}
                </th>
                {rw.values.map((v, ci) => {
                  const h = heat(v);
                  const active = sel.row === ri && sel.col === ci;
                  return (
                    <td key={ci} className="px-1 py-2 text-center sm:px-2">
                      <button
                        type="button"
                        onClick={() => setSel({ row: ri, col: ci })}
                        aria-pressed={active}
                        aria-label={`${rw.label}, tenant earns ${BREAK_EVEN.returns[ci]}%: ${v}% a year`}
                        className={`w-full cursor-pointer rounded-xl px-1 py-3.5 font-semibold sm:px-3 transition-all duration-300 hover:scale-[1.04] ${
                          h.dark ? "text-white" : "text-[#5a4210]"
                        } ${active ? "ring-2 ring-[#1d1507] ring-offset-2 ring-offset-white" : ""}`}
                        style={{ backgroundColor: h.bg }}
                      >
                        {v}%<span className="hidden sm:inline"> a year</span>
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-6 bg-[#1d1507] p-6 text-white md:grid-cols-[1.2fr_1fr] md:items-center md:p-8" aria-live="polite">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#DCA54A]">
            {row.label} · tenant’s money earns {ret}%
          </p>
          <p className="font-display mt-2 text-2xl leading-snug text-[#F6E7C1] md:text-3xl">
            ₹9 crore has to become about {fmtCr(future)} in ten years.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/65">
            That is {rate}% a year. Below it, the tenant who invested the difference ends up ahead.
          </p>
        </div>
        <div className="flex items-end gap-3" aria-hidden="true">
          <div className="flex flex-1 flex-col items-center">
            <div
              className="w-full rounded-t-lg bg-white/20 transition-[height] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{ height: `${Math.round((EXAMPLE_PRICE / future) * 140)}px` }}
            />
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/55">Today</p>
            <p className="font-display text-lg">₹9 Cr</p>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <div className="h-[140px] w-full rounded-t-lg bg-gradient-to-t from-[#a8841e] to-[#DCA54A]" />
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/55">Year 10</p>
            <p className="font-display text-lg text-[#F6E7C1]">{fmtCr(future).replace(" crore", " Cr")}</p>
          </div>
        </div>
      </div>
      <p className="border-t border-[#efe6cf] px-6 py-4 text-xs italic leading-relaxed text-gray-500 md:px-8">
        Illustration only, using the figures above. Selling costs and tax on gains are left out. Paying in full is assumed to
        carry no discount.
      </p>
    </div>
  );
}
