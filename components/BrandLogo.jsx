/**
 * Crisp, scalable brand logo — replaces the old raster logo image.
 * Topographic island emblem (animated line-draw on load) + wordmark.
 */
export default function BrandLogo({ light = false, size = "md", animated = true }) {
  const gold = "#C49A2B";
  const nameColor = light ? "#F6E7C1" : "#B8892A";
  const subColor = light ? "rgba(246,231,193,0.75)" : "#8a7a5a";

  const dims = {
    sm: { emblem: 34, name: "text-[17px]", sub: "text-[7px]", apart: "text-[8px]" },
    md: { emblem: 44, name: "text-[21px]", sub: "text-[8px]", apart: "text-[9px]" },
    lg: { emblem: 58, name: "text-[28px]", sub: "text-[10px]", apart: "text-[11px]" },
  }[size];

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      {/* Topographic island emblem */}
      <svg
        width={dims.emblem}
        height={(dims.emblem * 60) / 44}
        viewBox="0 0 44 60"
        fill="none"
        aria-hidden="true"
        className={animated ? "logo-draw" : ""}
      >
        <rect x="1" y="1" width="42" height="58" rx="2.5" stroke={gold} strokeWidth="1.6" />
        <path d="M5 51 Q15 45 13 35 Q11 25 21 20 Q31 15 29 6" stroke={gold} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M5 43 Q13 39 11 31 Q9 23 17 18 Q24 14 23 6" stroke={gold} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M9 55 Q21 51 23 41 Q25 31 35 29 Q40 28 39 20" stroke={gold} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M15 55 Q26 53 29 45 Q32 37 39 36" stroke={gold} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M14 29 Q18 24 23 27 Q28 30 22 33 Q16 36 14 29Z" stroke={gold} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M28 14 Q33 11 37 13" stroke={gold} strokeWidth="1.1" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={`${dims.name} tracking-wide`}
          style={{ fontFamily: "var(--font-marcellus), serif", color: nameColor }}
        >
          The Islands
        </span>
        <span
          className={`${dims.sub} mt-1 uppercase tracking-[0.28em] font-sans`}
          style={{ color: subColor }}
        >
          by Gaurs
        </span>
        <span
          className={`${dims.apart} mt-1.5 pt-1 uppercase tracking-[0.42em] font-sans border-t`}
          style={{ color: nameColor, borderColor: light ? "rgba(246,231,193,0.35)" : "rgba(196,154,43,0.35)" }}
        >
          Be Apart
        </span>
      </span>
    </span>
  );
}
