import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import OpenModalButton from "./OpenModalButton";
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from "./contact";

/**
 * The standard trio of conversion actions: open the enquiry modal, call, WhatsApp.
 * `tone="dark"` is for use over imagery / dark sections, `tone="light"` on cream/white.
 * @param {{
 *   primaryLabel?: string,
 *   waMessage?: string,
 *   secondary?: { href: string, label: string },
 *   tone?: "dark" | "light",
 *   align?: "start" | "center",
 *   showPhone?: boolean,
 * }} props
 */
export default function CtaGroup({
  primaryLabel = "Get the Latest Price Sheet",
  waMessage = "Hi, I'm interested in The Islands by Gaurs. Please share the latest price sheet.",
  secondary,
  tone = "dark",
  align = "start",
  showPhone = true,
}) {
  const dark = tone === "dark";
  return (
    <div className={`flex flex-wrap items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <OpenModalButton className="btn-sheen inline-flex items-center gap-2 rounded-sm bg-[#C49A2B] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
        {primaryLabel}
        <FaArrowRight size={11} aria-hidden="true" />
      </OpenModalButton>

      {secondary ? (
        <Link
          href={secondary.href}
          className={`inline-flex items-center gap-2 rounded-sm border px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
            dark
              ? "glass-chip border-white/50 text-white hover:bg-white hover:text-[#2c1f0e]"
              : "border-[#C49A2B] text-[#8a6b14] hover:bg-[#C49A2B] hover:text-white"
          }`}
        >
          {secondary.label}
        </Link>
      ) : null}

      <a
        href={whatsappHref(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-sm bg-[#128C4A] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#0d6e3a]"
      >
        <FaWhatsapp size={15} aria-hidden="true" />
        WhatsApp
      </a>

      {showPhone ? (
        <a
          href={PHONE_HREF}
          className={`inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold tracking-wide transition-colors ${
            dark ? "text-[#F6E7C1] hover:text-white" : "text-[#8a6b14] hover:text-[#1a1a1a]"
          }`}
        >
          <FaPhoneAlt size={12} aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>
      ) : null}
    </div>
  );
}
