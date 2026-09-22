"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { REALIZATIONS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function RealizationsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
    }
    setActive(i);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let dist = Infinity;
    cards.forEach((c, i) => {
      const mid = c.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(mid - center);
      if (d < dist) {
        dist = d;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  return (
    <section
      id="nos-realisations"
      className="w-full bg-[#0a1930] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold-light">
              Portfolio
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-[34px]">
              Our Realizations
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-300/90">
              A selection of events we have equipped and captured across Accra.
              Every setup is tailored to the occasion.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollTo(Math.max(0, active - 1))}
              aria-label="Previous"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-brand"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() =>
                scrollTo(Math.min(REALIZATIONS.length - 1, active + 1))
              }
              aria-label="Next"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-brand"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {REALIZATIONS.map((r, i) => (
            <article
              key={r.title}
              className={cn(
                "group relative w-[85vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[420px]"
              )}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-1 via-night-1/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">
                  {r.category}
                </span>
                <h3 className="mt-1.5 font-heading text-lg font-bold text-white">
                  {r.title}
                </h3>
              </div>
              <span className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full bg-night-1/60 font-heading text-xs font-bold text-white backdrop-blur">
                0{i + 1}
              </span>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {REALIZATIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active
                  ? "w-8 bg-gold"
                  : "w-2 bg-white/30 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
