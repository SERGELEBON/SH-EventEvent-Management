import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function Presentation() {
  return (
    <section
      id="presentation"
      className="diamond-motif relative w-full overflow-hidden py-20 sm:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">
              {COMPANY.name}
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-brand sm:text-3xl lg:text-[34px]">
              Event Equipment &amp; Photography, Crafted for Ghana
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink sm:text-base">
              <p>
                SH Event Management is an event equipment rental and
                photography company based in Madina, Accra. From intimate
                ceremonies to large public gatherings, we equip every occasion
                with the right furniture, shelters and comfort solutions — then
                capture it beautifully.
              </p>
              <p>
                Our three service families cover everything you need under one
                roof: <strong className="text-brand">event equipment
                rental</strong>{" "}
                (tents, marquees and chairs of all styles),{" "}
                <strong className="text-brand">comfort &amp; logistics</strong>{" "}
                (cooling, flooring and mobile toilets), and{" "}
                <strong className="text-brand">event photography</strong> for
                weddings, ceremonies and corporate events.
              </p>
              <p>
                Driven by our promise —{" "}
                <em className="text-tan not-italic font-semibold">
                  “Quality Service, Our Passion…”
                </em>{" "}
                — we deliver reliable, on-time, on-site service so your event
                runs without a hitch.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand transition-colors hover:text-gold"
              >
                Discover Our Services
                <ArrowRight className="size-4" />
              </a>
              <span className="text-ink/50">|</span>
              <a
                href="#contact"
                className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand/70 transition-colors hover:text-brand"
              >
                Request a Quote
              </a>
            </div>
          </div>

          {/* Side highlight card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl bg-night-2 p-8 text-white shadow-xl shadow-night-1/20">
              <div className="diamond-motif-dark absolute inset-0 opacity-40" />
              <div className="relative">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold-light">
                  Why SH Event
                </p>
                <h3 className="mt-3 font-heading text-2xl font-bold leading-snug">
                  One partner for your entire event — equipment, comfort &amp;
                  memories.
                </h3>
                <ul className="mt-6 space-y-3">
                  {[
                    "All-in-one rental, logistics & photography",
                    "Delivery, setup & on-site support",
                    "Equipment for intimate & large-scale events",
                    "Local team in Madina, serving Accra & beyond",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-200/90"
                    >
                      <span className="mt-1.5 inline-block size-2 shrink-0 rotate-45 bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
