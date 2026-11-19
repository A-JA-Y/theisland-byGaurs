import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import OpenModalButton from "./OpenModalButton";

/** Conversion card that sits inside the article flow. */
export default function InlineCta({ eyebrow = "Next step", title, text, primaryLabel, secondary }) {
  return (
    <aside
      className="relative my-12 overflow-hidden rounded-2xl border border-[#e5dcc5] bg-gradient-to-br from-[#FBF6E8] via-white to-[#FAF8F4] p-6 shadow-[0_20px_50px_-30px_rgba(44,31,14,0.45)] md:p-8"
      data-reveal
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C49A2B]/15 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#DCA54A] to-[#a8841e]" aria-hidden="true" />
      <div className="relative flex flex-col gap-6">
        <div className="max-w-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a8841e]">{eyebrow}</p>
          <p className="font-display mt-2 text-xl leading-snug text-[#1a1a1a] md:text-2xl">{title}</p>
          {text ? <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p> : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <OpenModalButton className="btn-sheen inline-flex items-center gap-2 rounded-sm bg-[#C49A2B] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            {primaryLabel}
            <FaArrowRight size={10} aria-hidden="true" />
          </OpenModalButton>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex items-center rounded-sm border border-[#C49A2B] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8a6b14] transition-colors hover:bg-[#C49A2B] hover:text-white"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
