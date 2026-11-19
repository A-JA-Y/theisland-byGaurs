/** Zero-JS FAQ accordion built on <details>. The matching FAQPage schema lives on the page. */
export default function FaqAccordion({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details
          key={item.q}
          className="faq-item rounded-xl border border-[#e5dcc5] bg-white transition-all duration-300"
          open={i === 0}
          data-reveal
        >
          <summary className="flex items-start justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
            <h3 className="font-display text-[1.05rem] leading-snug text-[#1a1a1a] md:text-lg">
              <span className="mr-3 text-[#C49A2B]">{String(i + 1).padStart(2, "0")}</span>
              {item.q}
            </h3>
            <span
              className="faq-icon mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C49A2B]/50 text-lg leading-none text-[#C49A2B]"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <div className="px-5 pb-5 text-[15px] leading-relaxed text-gray-600 md:px-6 md:pl-[3.4rem]">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
