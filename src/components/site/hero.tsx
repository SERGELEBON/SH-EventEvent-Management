"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { PillButton } from "./pill-button";
import { cn } from "@/lib/utils";

type Slide = {
  id: string;
  eyebrow: string;
  number: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  ctaAnchor: string;
};

const SLIDES: Slide[] = [
  {
    id: "equipment",
    eyebrow: "Location d'équipements évènementiels",
    number: "01",
    title: "Location de chapiteaux &",
    highlight: "matériel évènementiel",
    description:
      "Chapiteaux et tentes de toutes tailles, chaises pliantes blanches, chaises Chiavari dorées et chaises plastiques — pour mariages, cérémonies, évènements d'entreprise et rassemblements publics à Accra et partout au Ghana.",
    image: "/images/feature-large-tents.jpg",
    ctaAnchor: "location-evenementiel",
  },
  {
    id: "comfort",
    eyebrow: "Confort & logistique évènementielle",
    number: "02",
    title: "Logistique de confort",
    highlight: "pour vos évènements",
    description:
      "Climatiseurs et ventilateurs évaporatifs, revêtements de sol et dalles empilables, toilettes mobiles — livrés, installés et entretenus sur site pour la tranquillité de vos invités.",
    image: "/images/banner-aerial.jpg",
    ctaAnchor: "confort-logistique",
  },
  {
    id: "photography",
    eyebrow: "Photographie évènementielle",
    number: "03",
    title: "Photographie professionnelle",
    highlight: "d'évènement",
    description:
      "Reportage photo pour mariages, cérémonies et évènements d'entreprise — chaque moment capturé avec une qualité d'image professionnelle, livré en galerie retouchée.",
    image: "/images/service-photography.jpg",
    ctaAnchor: "photographie",
  },
];

const AUTO_MS = 6500;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setActive(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);
  const next = useCallback(() => setActive((a) => (a + 1) % SLIDES.length), []);
  const prev = useCallback(
    () => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length),
    []
  );

  // auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % SLIDES.length);
    }, AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const scrollTo = (anchor: string) => {
    document
      .getElementById(anchor)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollNext = () => scrollTo("presentation");

  return (
    <section
      id="home"
      className="relative flex min-h-[94vh] w-full items-center overflow-hidden bg-[#0b0d1a]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides background */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              i === active ? "opacity-100" : "opacity-0"
            )}
            aria-hidden={i !== active}
          >
            <img
              src={s.image}
              alt={s.eyebrow}
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d1a] via-[#0b0d1a]/85 to-[#0b0d1a]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d1a] via-transparent to-[#0b0d1a]/60" />
          </div>
        ))}
      </div>

      {/* Side arrows */}
      <button
        onClick={prev}
        aria-label="Slide précédent"
        className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur transition-colors hover:bg-white hover:text-brand sm:flex"
      >
        <ArrowLeft className="size-5" />
      </button>
      <button
        onClick={next}
        aria-label="Slide suivant"
        className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 size-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 backdrop-blur transition-colors hover:bg-white hover:text-brand sm:flex"
      >
        <ArrowRight className="size-5" />
      </button>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              className={cn(
                "transition-all duration-700 ease-out",
                i === active
                  ? "block opacity-100 translate-y-0"
                  : "hidden opacity-0"
              )}
            >
              <span className="inline-flex items-center gap-3 font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-[#a886cd]">
                <span className="text-2xl font-light text-white/30">
                  {s.number}
                </span>
                {s.eyebrow}
              </span>

              <h1 className="mt-5 font-heading text-3xl font-light uppercase leading-[1.1] tracking-[0.02em] text-white sm:text-5xl lg:text-[3.4rem]">
                {s.title}
                <br />
                <span className="text-white">{s.highlight}</span>
              </h1>

              <p className="mt-7 max-w-xl font-sans text-[15px] font-light leading-relaxed text-slate-300/90 sm:text-base">
                {s.description}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PillButton variant="primary" onClick={() => scrollTo(s.ctaAnchor)}>
                  En savoir plus
                  <ArrowRight className="size-4" />
                </PillButton>
                <PillButton
                  variant="outline-light"
                  onClick={() => scrollTo("nos-realisations")}
                >
                  Voir nos réalisations
                </PillButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots + progress + counter */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-5">
        <span className="font-heading text-xs font-medium tabular-nums text-white/60">
          <span className="text-white">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="mx-1 text-white/30">/</span>
          {String(SLIDES.length).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-2.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Aller au slide ${i + 1} — ${s.eyebrow}`}
              className="group relative h-1.5 overflow-hidden rounded-full bg-white/25 transition-all duration-500"
              style={{ width: i === active ? 56 : 22 }}
            >
              {i === active && !paused && (
                <span
                  key={active}
                  className="absolute inset-0 origin-left bg-[#a886cd]"
                  style={{ animation: "hero-progress 6.5s linear forwards" }}
                />
              )}
              {i === active && paused && (
                <span className="absolute inset-0 bg-[#a886cd]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={scrollNext}
        aria-label="Faire défiler vers le bas"
        className="absolute bottom-7 right-6 z-20 hidden flex-col items-center gap-1 text-white/60 transition-colors hover:text-white lg:flex"
      >
        <span className="font-heading text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="size-5 animate-bounce" />
      </button>

      <style>{`
        @keyframes hero-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
