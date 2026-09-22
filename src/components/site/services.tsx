"use client";

import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site-data";

function ServiceDetailButton({ anchor }: { anchor: string }) {
  return (
    <a
      href={`#${anchor}`}
      className="group inline-flex items-center gap-2 rounded-[42px] border border-white/40 px-5 py-2 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand"
    >
      En savoir plus
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

export function Services() {
  return (
    <section id="services" className="relative w-full bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-brand">
            Nos produits et services
          </span>
          <h2 className="mt-4 font-heading text-2xl font-medium uppercase leading-tight tracking-tight text-brand sm:text-3xl lg:text-[34px]">
            Solutions en matière d&rsquo;espaces temporaires et semi-permanentes
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#555] sm:text-base">
            Trois familles de services pour équiper vos évènements — location de
            matériel, logistique de confort et photographie professionnelle.
          </p>
        </div>

        {/* 3 dark indigo cards — reference style */}
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.key}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-night-2 p-8 text-white shadow-lg shadow-night-1/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-night-1/30"
            >
              <div className="diamond-motif-dark absolute inset-0 opacity-40" />
              <div className="relative flex h-full flex-col">
                <span className="font-heading text-[64px] font-light leading-none text-white/15">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300/90">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-[13px] text-slate-200/90"
                    >
                      <span className="mt-1.5 inline-block size-1.5 shrink-0 rotate-45 bg-purple" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-2">
                  <ServiceDetailButton anchor={s.anchor} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
