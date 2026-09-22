import { Award, Clock, HandHeart, ShieldCheck, Truck, Users } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Quality Equipment",
    desc: "Clean, well-maintained tents, chairs, cooling and flooring — inspected before every event.",
  },
  {
    icon: Truck,
    title: "Delivery & Setup",
    desc: "We transport, install and dismantle everything ourselves so you never lift a finger.",
  },
  {
    icon: Clock,
    title: "On-Time, On-Site",
    desc: "Our team arrives on schedule and stays on call throughout your event.",
  },
  {
    icon: Users,
    title: "One-Stop Partner",
    desc: "Equipment, comfort logistics and photography under one roof — simplify your planning.",
  },
  {
    icon: HandHeart,
    title: "Passion-Driven Service",
    desc: "“Quality Service, Our Passion…” is not a slogan — it is how we treat every client.",
  },
  {
    icon: Award,
    title: "Local Expertise",
    desc: "Based in Madina, we know Accra venues, weather and logistics inside out.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="pourquoi-nous-choisir"
      className="w-full bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Why SH Event
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl lg:text-[34px]">
            Why Choose SH Event Management?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink sm:text-base">
            We turn event logistics into peace of mind. Here is what sets us
            apart across equipment, service and photography.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <article
              key={r.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-[#f8fafc] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-white hover:shadow-xl hover:shadow-brand/5"
            >
              <span className="absolute right-5 top-5 font-heading text-3xl font-bold text-brand/10">
                0{i + 1}
              </span>
              <div className="flex size-14 items-center justify-center rounded-xl bg-brand/8 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <r.icon className="size-7" />
              </div>
              <h3 className="mt-5 font-heading text-base font-bold uppercase tracking-wide text-brand">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
