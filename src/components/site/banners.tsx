"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/site-data";
import { PillButton } from "./pill-button";

export function ConversionBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-night-2 py-20 sm:py-24">
      <div className="diamond-motif-dark absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold-light">
          Let&rsquo;s Build Your Event
        </span>
        <h2 className="mt-5 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-[44px]">
          Your Event,
          <span className="text-gold"> Our Equipment,</span>
          <br className="hidden sm:block" /> Your Peace of Mind
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-300/90 sm:text-base">
          From the first chair to the last photograph, SH Event Management
          handles it all. Tell us your date and your guest count — we handle the
          rest.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <PillButton
            variant="gold"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us Now
            <ArrowRight className="size-4" />
          </PillButton>
          <a
            href="#demander-un-devis"
            className="inline-flex items-center gap-2 rounded-[42px] border border-white/60 px-7 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export function PhotoBanner() {
  return (
    <section className="relative h-[58vh] min-h-[380px] w-full overflow-hidden">
      <img
        src="/images/banner-aerial.jpg"
        alt="Aerial view of an event venue equipped by SH Event Management"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night-1/80 via-night-1/30 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold-light">
              From Above
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
              Venues Equipped at Scale
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-200/90">
              Tents, chairs, flooring and comfort logistics — deployed across
              large grounds for community celebrations and corporate gatherings
              alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InterventionZone() {
  return (
    <section
      id="intervention"
      className="w-full bg-[#f6f8fb] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">
              Where We Operate
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl lg:text-[34px]">
              Based in Madina, Serving Accra &amp; Beyond
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink sm:text-base">
              SH Event Management is located opposite the Hannah School Complex
              in Madina, Accra. From our base, we deliver and install equipment
              across the Greater Accra region — and travel further for larger
              bookings on request.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <span>
                  <strong className="text-brand">Our base:</strong>{" "}
                  {COMPANY.locationFull}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <span>
                  <strong className="text-brand">Core coverage:</strong> Madina,
                  East Legon, Adenta, Spintex, Tema & Greater Accra
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <span>
                  <strong className="text-brand">Extended coverage:</strong>{" "}
                  National bookings available on request for larger events.
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[42px] bg-brand px-7 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-light"
              >
                Learn More <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Map-style card */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-brand/10">
            <div className="relative aspect-[4/3]">
              <div className="absolute inset-0 bg-[#0d1f3c]">
                <div className="diamond-motif-dark absolute inset-0 opacity-40" />
              </div>
              <div className="relative flex h-full flex-col items-center justify-center p-8 text-center text-white">
                <div className="flex size-16 items-center justify-center rounded-full bg-gold/20 ring-4 ring-gold/10">
                  <MapPin className="size-8 text-gold" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight">
                  Madina, Accra
                </h3>
                <p className="mt-2 max-w-xs text-sm text-slate-300/90">
                  Opposite Hannah School Complex — find us along the main Madina
                  road.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Hannah+School+Complex+Madina+Accra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-[42px] border border-white/40 px-5 py-2 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand"
                >
                  Open in Maps <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
