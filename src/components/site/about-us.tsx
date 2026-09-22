"use client";

import { CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/site-data";
import { PillButton } from "./pill-button";

export function AboutUs() {
  return (
    <section
      id="qui-sommes-nous"
      className="w-full bg-[#f6f8fb] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-brand/10">
              <img
                src="/images/feature-chiavari.jpg"
                alt="SH Event Management team and setup"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-night-1 p-6 text-white shadow-xl sm:block">
              <p className="font-heading text-3xl font-bold text-gold">100%</p>
              <p className="mt-1 max-w-[140px] text-xs leading-relaxed text-slate-300/90">
                Commitment to quality service, on every event
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">
              About Us
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl lg:text-[34px]">
              Who We Are
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink sm:text-base">
              <p>
                SH Event Management is an event equipment rental and photography
                company based in Madina, Accra, Ghana. We serve individuals,
                businesses and communities with reliable, high-quality event
                solutions — from a few chairs to a fully equipped venue.
              </p>
              <p>
                Born from a passion for service, our team combines practical
                logistics know-how with a creative photographic eye, so your
                event is both flawlessly equipped and beautifully remembered.
              </p>
              <p>
                From our base opposite the Hannah School Complex in Madina, we
                serve the Greater Accra region and travel further for larger
                bookings — making us a true one-stop partner for your event.
              </p>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Equipment rental & logistics",
                "Professional event photography",
                "Local Accra-based team",
                "Tailored quotes & flexible packages",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
              </PillButton>
              <a
                href="#demander-un-devis"
                className="inline-flex items-center justify-center rounded-[42px] border border-brand px-7 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Request a Quote
              </a>
            </div>

            <p className="mt-8 border-t border-slate-200 pt-5 text-xs text-ink">
              <strong className="text-brand">{COMPANY.slogan}</strong> — find us
              opposite the Hannah School Complex, Madina, Accra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
