"use client";

import { ArrowRight, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import { useUI } from "@/lib/ui-store";
import type { ReactNode } from "react";
import { PillButton } from "./pill-button";

interface ServiceDetailProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  features: { title: string; description: string }[];
  catalog?: string[];
  children?: ReactNode;
}

export function ServiceDetail({
  id,
  index,
  eyebrow,
  title,
  intro,
  image,
  features,
  catalog,
  children,
}: ServiceDetailProps) {
  return (
    <section id={id} className="scroll-mt-20 w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 font-heading text-[11px] font-medium uppercase tracking-[0.12em] text-ink">
          <a href="#home" className="hover:text-brand">
            Home
          </a>
          <ChevronRight className="size-3" />
          <span className="text-brand">{eyebrow}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-12">
          {/* Title + intro */}
          <div className="lg:col-span-8">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">
              {`Service ${index}`}
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-brand sm:text-3xl lg:text-[32px]">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink sm:text-base">
              {intro}
            </p>

            {/* Image */}
            <div className="mt-8 overflow-hidden rounded-2xl shadow-lg shadow-brand/5">
              <img
                src={image}
                alt={title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            {/* Features */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-slate-100 bg-[#f8fafc] p-5"
                >
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-brand">
                    {f.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>

            {catalog && catalog.length > 0 && (
              <div className="mt-8 rounded-xl bg-night-2 p-6 text-white">
                <h4 className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-gold-light">
                  Available Range
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {catalog.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[13px] text-slate-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  Specific sizes and quantities available on request — contact us
                  for a tailored quote.
                </p>
              </div>
            )}

            {children}
          </div>

          {/* Sidebar — "Cette solution vous intéresse ?" */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 overflow-hidden rounded-2xl bg-night-1 text-white shadow-xl shadow-night-1/20">
              <div className="diamond-motif-dark relative h-2 w-full" />
              <div className="p-7">
                <span className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-gold-light">
                  Interested?
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold leading-snug">
                  This solution interests you?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
                  Tell us about your event and our team will prepare a tailored
                  quote for the equipment, logistics or photography you need.
                </p>
                <div className="mt-6 space-y-3">
                  <ContactSidebarButton />
                  <PillButton
                    variant="outline-light"
                    className="w-full"
                    onClick={() => {
                      const el = document.getElementById("demander-un-devis");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Request a Quote
                    <ArrowRight className="size-4" />
                  </PillButton>
                </div>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">
                    Reach us
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
                    <li className="flex items-center gap-2.5">
                      <Phone className="size-4 shrink-0 text-gold-light" />
                      0244 154 664
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Phone className="size-4 shrink-0 text-gold-light" />
                      0257 572 090
                    </li>
                    <li className="flex items-center gap-2.5 break-all">
                      <Mail className="size-4 shrink-0 text-gold-light" />
                      sheventmgt@gmail.com
                    </li>
                    <li className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-gold-light" />
                      Opposite Hannah School Complex, Madina — Accra
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactSidebarButton() {
  const { openModal } = useUI();
  return (
    <PillButton
      variant="gold"
      className="w-full"
      onClick={() => openModal("contact")}
    >
      Contact Us
    </PillButton>
  );
}
