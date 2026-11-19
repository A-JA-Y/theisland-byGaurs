import CountUp from "@/components/CountUp";

// Literal class names so Tailwind's scanner picks them up.
const MD_COLS = { 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5" };

/** Dark band of headline numbers. A stat is either { end, prefix, suffix } or { text }. */
export default function StatStrip({ stats }) {
  return (
    <section className="relative bg-[#141004] text-white" aria-label="Key figures">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C49A2B]/60 to-transparent" aria-hidden="true" />
      <dl className={`mx-auto grid max-w-6xl grid-cols-2 ${MD_COLS[stats.length] || "md:grid-cols-4"}`}>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col-reverse items-center px-4 py-8 text-center md:py-10 ${
              i % 2 === 1 ? "border-l border-white/10" : ""
            } ${i > 0 ? "md:border-l md:border-white/10" : ""} ${i >= 2 ? "border-t border-white/10 md:border-t-0" : ""}`}
            data-reveal
            data-reveal-delay={String(Math.min(i + 1, 6))}
          >
            <dt className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/55 md:text-[11px]">{s.label}</dt>
            <dd className="font-display text-3xl text-[#F6E7C1] md:text-[2.6rem]">
              {s.text ? s.text : <CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} />}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
