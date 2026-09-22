import { ArrowRight } from "lucide-react";
import { INSPIRATIONS } from "@/lib/site-data";

export function InspirationGrid() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Get Inspired
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl lg:text-[34px]">
              Find Inspiration in Our Latest Events
            </h2>
          </div>
          <a
            href="#nos-realisations"
            className="inline-flex items-center gap-2 rounded-[42px] border border-brand px-6 py-2.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Discover Our Realizations
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {INSPIRATIONS.map((item, i) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-100"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-1/90 via-night-1/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light">
                  0{i + 1} — Inspiration
                </span>
                <h3 className="mt-1.5 font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
