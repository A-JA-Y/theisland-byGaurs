import LitePlayer from "./LitePlayer";

/** Single video figure for use inside the article column. */
export default function InlineVideo({ video, caption }) {
  return (
    <figure className="my-10" data-reveal="zoom">
      <LitePlayer video={video} className="rounded-2xl ring-1 ring-[#e5dcc5] shadow-[0_30px_60px_-35px_rgba(44,31,14,0.6)]" />
      <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-sm text-gray-600">
        <span>{caption || video.title}</span>
        <span className="text-xs uppercase tracking-[0.15em] text-gray-400">
          {video.channel} · {video.duration}
        </span>
      </figcaption>
    </figure>
  );
}
