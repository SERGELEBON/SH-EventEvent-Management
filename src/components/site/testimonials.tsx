"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);
  const t = TESTIMONIALS[idx];

  return (
    <section className="w-full bg-[#0d1f3c] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold-light">
              Trusted by Clients
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-[34px]">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-300/90">
              Real feedback from the weddings, corporate events and ceremonies we
              have equipped and photographed across Accra.
            </p>
            <div className="mt-8 flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-brand"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-brand"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl bg-night-3 p-8 sm:p-10">
              <Quote className="absolute right-6 top-6 size-16 text-gold/15" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <blockquote className="mt-5 font-heading text-xl font-medium leading-relaxed text-white sm:text-2xl">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-gold/20 font-heading text-lg font-bold text-gold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-300/80">{t.role}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === idx ? "w-8 bg-gold" : "w-2 bg-white/25 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
