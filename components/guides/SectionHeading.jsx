/** Numbered chapter heading used through the guide articles. */
export default function SectionHeading({ index, eyebrow, children, tone = "light", as: Tag = "h2", center = false }) {
  const dark = tone === "dark";
  return (
    <div className={`mb-7 ${center ? "text-center" : ""}`} data-reveal>
      <p
        className={`mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] ${
          center ? "justify-center" : ""
        } ${dark ? "text-[#DCA54A]" : "text-[#a8841e]"}`}
      >
        {index ? <span className="font-display text-base tracking-normal">{index}</span> : null}
        <span className={`h-px w-8 ${dark ? "bg-[#DCA54A]/70" : "bg-[#C49A2B]/60"}`} aria-hidden="true" />
        {eyebrow}
      </p>
      <Tag
        className={`font-display text-[1.9rem] leading-[1.18] md:text-[2.5rem] ${dark ? "text-white" : "text-[#1a1a1a]"}`}
      >
        {children}
      </Tag>
    </div>
  );
}
