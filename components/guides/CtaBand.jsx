import ParallaxImage from "./ParallaxImage";
import CtaGroup from "./CtaGroup";

/**
 * Full-bleed parallax image band with a headline and the standard CTA trio.
 * @param {{
 *   image: import("next/image").StaticImageData,
 *   imageAlt?: string,
 *   eyebrow: string,
 *   title: string,
 *   text?: string,
 *   primaryLabel?: string,
 *   secondary?: { href: string, label: string },
 *   waMessage?: string,
 *   objectPosition?: string,
 *   impression?: boolean,
 * }} props
 */
export default function CtaBand({ image, imageAlt = "", eyebrow, title, text, primaryLabel, secondary, waMessage, objectPosition, impression }) {
  return (
    <section className="relative isolate overflow-hidden py-24 text-white md:py-36">
      <ParallaxImage src={image} alt={imageAlt} objectPosition={objectPosition} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f0c06]/92 via-[#0f0c06]/70 to-[#0f0c06]/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0f0c06]/60 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#DCA54A]" data-reveal>
            <span className="h-px w-10 bg-[#DCA54A]" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl" data-reveal data-reveal-delay="1">
            {title}
          </h2>
          {text ? (
            <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg" data-reveal data-reveal-delay="2">
              {text}
            </p>
          ) : null}
          <div className="mt-9" data-reveal data-reveal-delay="3">
            <CtaGroup primaryLabel={primaryLabel} secondary={secondary} waMessage={waMessage} tone="dark" />
          </div>
        </div>
      </div>
      {impression ? <p className="absolute bottom-3 right-4 text-[11px] text-white/40">Artist’s impression</p> : null}
    </section>
  );
}
