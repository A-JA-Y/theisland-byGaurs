import { WAIT_PERIODS, WAIT_TOTAL, inr } from "./rentBuyData";

const TOTAL_MONTHS = WAIT_PERIODS.reduce((s, p) => s + p.months, 0);
const MAX_MONTHLY = Math.max(...WAIT_PERIODS.map((p) => p.monthly));

/**
 * Stepped chart of the rent paid between booking and possession: each block's
 * width is time, its height the monthly rent, so its area is the rent paid.
 */
export default function RentDuringWait() {
  return (
    <figure
      className="my-10 overflow-hidden rounded-3xl bg-[#141004] text-white shadow-[0_40px_80px_-40px_rgba(20,16,4,0.8)]"
      data-reveal="zoom"
    >
      <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DCA54A]">Rent while you wait</p>
          <p className="mt-1 text-sm text-white/60">₹1.3 lakh a month, rising 5% a year, until possession</p>
        </div>
        <p className="font-display text-4xl text-[#F6E7C1] md:text-5xl">
          ≈ {inr(Math.round(WAIT_TOTAL / 1e5) * 1e5, { long: true })}
        </p>
      </div>

      <div className="px-5 pb-6 pt-10 md:px-8">
        <div className="flex h-36 items-end gap-1 md:h-44" aria-hidden="true">
          {WAIT_PERIODS.map((p, i) => (
            <div
              key={p.label}
              className="group relative flex h-full flex-col justify-end"
              style={{ width: `${(p.months / TOTAL_MONTHS) * 100}%` }}
            >
              <span className="mb-2 hidden text-center text-xs font-semibold text-[#F6E7C1] sm:block">{inr(p.total, { digits: 1 })}</span>
              <div
                className="rounded-t-md bg-gradient-to-t from-[#a8841e] to-[#DCA54A] transition-opacity duration-300 group-hover:opacity-90"
                style={{ height: `${(p.monthly / MAX_MONTHLY) * 78}%`, opacity: 0.6 + i * 0.13 }}
              />
            </div>
          ))}
        </div>

        {/* time axis */}
        <div className="relative mt-3 h-px bg-white/25" aria-hidden="true">
          <span className="absolute -top-1 left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#F6E7C1]" />
          <span className="absolute -top-1 right-0 h-2.5 w-2.5 translate-x-1/2 rounded-full bg-[#C49A2B] shadow-[0_0_0_4px_rgba(196,154,43,0.25)]" />
        </div>
        <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/55">
          <span>Nov 2026 · today</span>
          <span className="text-[#DCA54A]">Apr 2030 · possession</span>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">
          {WAIT_PERIODS.map((p) => (
            <div key={p.label} className="bg-[#141004] px-4 py-4">
              <dt className="text-[10px] uppercase tracking-[0.2em] text-white/50">{p.label}</dt>
              <dd className="mt-1">
                <span className="font-display block text-xl text-white">{inr(p.total, { digits: 1 })}</span>
                <span className="block text-[11px] text-white/45">
                  {p.period} · {inr(p.monthly)}/mo
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-relaxed text-white/55 md:px-8">
        Possession date as shown on property portals. Under a construction-linked plan the loan is drawn in stages, so interest
        builds up as the towers rise. Ask for the payment schedule in writing.
      </figcaption>
    </figure>
  );
}
