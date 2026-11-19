import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

/** "Keep reading" cards linking to sibling guides, blogs and key project pages. */
export default function RelatedGuides({ title = "Keep Exploring", items }) {
  return (
    <section className="bg-[#FAF8F4] px-6 py-20" aria-labelledby="related-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#a8841e]">Further reading</p>
          <h2 id="related-heading" className="font-display text-3xl text-[#1a1a1a] md:text-4xl">
            {title}
          </h2>
          <div className="gold-divider mt-5" aria-hidden="true" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-[#e5dcc5] bg-white"
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <span className="relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt || ""}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a6b14]">
                  {item.tag}
                </span>
              </span>
              <span className="flex flex-1 flex-col p-5">
                <span className="font-display text-lg leading-snug text-[#1a1a1a]">{item.title}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{item.excerpt}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a8841e]">
                  Read more
                  <FaArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
