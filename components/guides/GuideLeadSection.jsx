import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import BlogContactForm from "@/components/BlogContactForm";
import ParallaxImage from "./ParallaxImage";
import { PHONE_DISPLAY, PHONE_HREF, whatsappHref } from "./contact";

/** Closing lead-capture section: parallax image, promise list and the enquiry form. */
export default function GuideLeadSection({ image, eyebrow, title, text, points, waMessage }) {
  return (
    <section id="get-cost-sheet" className="relative isolate scroll-mt-[130px] overflow-hidden py-20 text-white md:py-28">
      <ParallaxImage src={image} alt="" strength={40} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f0c06]/95 via-[#0f0c06]/80 to-[#0f0c06]/60" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <div>
          <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#DCA54A]" data-reveal>
            <span className="h-px w-10 bg-[#DCA54A]" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl leading-tight md:text-5xl" data-reveal data-reveal-delay="1">
            {title}
          </h2>
          {text ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75" data-reveal data-reveal-delay="2">
              {text}
            </p>
          ) : null}
          {points && points.length ? (
            <ul className="diamond-list mt-7 text-[15px] text-white/85" data-reveal data-reveal-delay="3">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          ) : null}
          <div className="mt-9 flex flex-wrap gap-3" data-reveal data-reveal-delay="4">
            <a
              href={PHONE_HREF}
              className="glass-chip inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide text-[#F6E7C1] transition-colors hover:bg-white hover:text-[#2c1f0e]"
            >
              <FaPhoneAlt size={12} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={whatsappHref(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#128C4A] px-5 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#0d6e3a]"
            >
              <FaWhatsapp size={15} aria-hidden="true" />
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md text-left" data-reveal="right">
          <div className="rounded-2xl p-1.5 ring-1 ring-[#C49A2B]/40 backdrop-blur-sm">
            <BlogContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
