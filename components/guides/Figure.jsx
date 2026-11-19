import Image from "next/image";

/**
 * Rounded editorial image with caption and a slow zoom on hover.
 * @param {{
 *   src: import("next/image").StaticImageData | string,
 *   alt: string,
 *   caption?: string,
 *   aspect?: string,
 *   sizes?: string,
 *   className?: string,
 * }} props
 */
export default function Figure({ src, alt, caption, aspect = "aspect-[16/10]", sizes = "(min-width: 768px) 768px, 100vw", className = "" }) {
  return (
    <figure className={`group ${className}`} data-reveal="zoom">
      <div className={`relative overflow-hidden rounded-2xl ${aspect} shadow-[0_30px_60px_-35px_rgba(44,31,14,0.6)]`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105" />
      </div>
      {caption ? <figcaption className="mt-3 text-sm leading-relaxed text-gray-500">{caption}</figcaption> : null}
    </figure>
  );
}
