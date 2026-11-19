"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import LitePlayer from "./LitePlayer";
import CtaGroup from "./CtaGroup";

/** Dark "cinema" section: a large player plus a playlist of related films. */
export default function VideoTheatre({ id = "films", eyebrow, title, intro, videos, primaryLabel = "Book a Site Visit", waMessage }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = videos[activeIdx];
  const poster = active.poster || `https://i.ytimg.com/vi/${active.id}/hqdefault.jpg`;

  return (
    <section id={id} className="relative isolate scroll-mt-[130px] overflow-hidden bg-[#0d0a05] py-20 text-white md:py-28">
      {/* ambient glow taken from the current poster */}
      <div
        className="absolute inset-0 -z-10 scale-125 bg-cover bg-center opacity-35 blur-3xl transition-[background-image] duration-700"
        style={{ backgroundImage: `url("${poster}")` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0a05] via-[#0d0a05]/75 to-[#0d0a05]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#DCA54A]" data-reveal>
            <span className="h-px w-10 bg-[#DCA54A]" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl leading-tight md:text-[2.75rem]" data-reveal data-reveal-delay="1">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-relaxed text-white/70" data-reveal data-reveal-delay="2">
              {intro}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)]">
          <div data-reveal="zoom">
            <LitePlayer
              video={active}
              className="rounded-2xl ring-1 ring-[#C49A2B]/40 shadow-[0_40px_90px_-35px_rgba(196,154,43,0.55)]"
            />
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-display text-lg text-[#F6E7C1]">{active.title}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                {active.channel} · {active.duration}
              </p>
            </div>
            {active.note ? <p className="mt-2 text-sm leading-relaxed text-white/65">{active.note}</p> : null}
          </div>

          <ul className="flex flex-col gap-3" aria-label="More videos">
            {videos.map((v, i) => {
              const isActive = i === activeIdx;
              return (
                <li key={v.id}>
                  <button
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    aria-pressed={isActive}
                    className={`group flex w-full cursor-pointer items-center gap-4 rounded-xl border p-2.5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#C49A2B]/70 bg-white/10"
                        : "border-white/10 bg-white/[0.03] hover:border-[#C49A2B]/40 hover:bg-white/[0.07]"
                    }`}
                  >
                    <span className="relative block aspect-video w-32 shrink-0 overflow-hidden rounded-lg sm:w-36">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${isActive ? "bg-[#C49A2B]" : "bg-black/60"}`}>
                          <FaPlay size={9} aria-hidden="true" />
                        </span>
                      </span>
                      <span className="absolute bottom-1 right-1 rounded bg-black/75 px-1.5 py-0.5 text-[10px]">{v.duration}</span>
                    </span>
                    <span className="min-w-0">
                      {v.tag ? (
                        <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DCA54A]">{v.tag}</span>
                      ) : null}
                      <span className="block text-sm font-semibold leading-snug text-white/90">{v.title}</span>
                      <span className="mt-1 block text-xs text-white/50">{v.channel}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between" data-reveal>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            A film shows the scale. A walk through the site shows the light, the views and the distances. Visits are
            arranged one-to-one.
          </p>
          <CtaGroup primaryLabel={primaryLabel} waMessage={waMessage} tone="dark" showPhone={false} />
        </div>
      </div>
    </section>
  );
}
