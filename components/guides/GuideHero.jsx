import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import OpenModalButton from "./OpenModalButton";
import { PHONE_DISPLAY, PHONE_HREF } from "./contact";

/**
 * Full-viewport cinematic hero for the long-form buyer guides.
 * @param {{
 *   image: import("next/image").StaticImageData,
 *   imageAlt: string,
 *   objectPosition?: string,
 *   eyebrow: string,
 *   title: string,
 *   titleAccent?: string,
 *   subtitle: string,
 *   chips?: string[],
 *   breadcrumbLabel: string,
 *   primaryLabel?: string,
 *   filmHref?: string,
 *   filmLabel?: string,
 *   updated?: string,
 *   readTime?: string,
 *   decoration?: import("react").ReactNode,
 *   impression?: boolean,
 * }} props
 */
export default function GuideHero({
  image,
  imageAlt,
  objectPosition = "center",
  eyebrow,
  title,
  titleAccent,
  subtitle,
  chips,
  breadcrumbLabel,
  primaryLabel = "Get the Latest Price Sheet",
  filmHref = "#films",
  filmLabel = "Watch the Film",
  updated,
  readTime,
  decoration,
  impression,
}) {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-74px)] items-end overflow-hidden bg-[#0f0c06] text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="guide-hero-img object-cover"
          style={{ objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0c06]/95 via-[#0f0c06]/60 to-[#0f0c06]/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c06] via-[#0f0c06]/25 to-[#0f0c06]/55" />
      </div>

      {decoration ? (
        <div className="pointer-events-none absolute right-[5%] top-[20%] hidden w-[320px] min-[1400px]:block" aria-hidden="true">
          {decoration}
        </div>
      ) : null}

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-20 md:px-10 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-7 text-[11px] uppercase tracking-[0.22em] text-white/55">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-[#DCA54A]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#DCA54A]" aria-current="page">
              {breadcrumbLabel}
            </li>
          </ol>
        </nav>

        <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#DCA54A]">
          <span className="h-px w-10 bg-[#DCA54A]" aria-hidden="true" />
          {eyebrow}
        </p>

        <h1 className="font-display max-w-4xl text-[2.1rem] leading-[1.12] sm:text-5xl lg:text-[3.9rem] lg:leading-[1.08]">
          {title}
          {titleAccent ? (
            <>
              <br />
              <span className="gold-shimmer">{titleAccent}</span>
            </>
          ) : null}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{subtitle}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <OpenModalButton className="btn-sheen inline-flex items-center gap-2 rounded-sm bg-[#C49A2B] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {primaryLabel}
            <FaArrowRight size={11} aria-hidden="true" />
          </OpenModalButton>
          <a
            href={filmHref}
            className="glass-chip group inline-flex items-center gap-3 rounded-sm px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#2c1f0e]"
          >
            <span className="pulse-gold flex h-6 w-6 items-center justify-center rounded-full bg-[#C49A2B] text-white">
              <FaPlay size={8} aria-hidden="true" />
            </span>
            {filmLabel}
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold tracking-wide text-[#F6E7C1] transition-colors hover:text-white"
          >
            <FaPhoneAlt size={12} aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>

        {chips && chips.length ? (
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {chips.map((chip, i) => (
              <li
                key={chip}
                data-reveal
                data-reveal-delay={String(Math.min(i + 1, 6))}
                className="glass-chip rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-[#F6E7C1]"
              >
                {chip}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-5 text-[11px] uppercase tracking-[0.2em] text-white/55">
          <span>
            {updated}
            {readTime ? <> · {readTime}</> : null}
          </span>
          {impression ? <span className="hidden normal-case tracking-normal text-white/40 md:inline">Artist’s impression</span> : null}
          <a href="#guide-start" className="scroll-cue hidden items-center gap-2 transition-colors hover:text-[#DCA54A] sm:flex">
            Scroll to read
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" aria-hidden="true">
              <path d="M6 1v13M1 9l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
