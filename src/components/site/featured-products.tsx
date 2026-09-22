import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Signature Offerings
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl lg:text-[34px]">
            Built for Grand Spaces &amp; Premium Details
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Large tents */}
          <article className="group relative overflow-hidden rounded-2xl shadow-lg shadow-brand/10">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/feature-large-tents.jpg"
                alt="Large tents and chapiteaux set up at night"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-1 via-night-1/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">
                Grand-Scale Shelters
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
                Large Tents &amp; Chapiteaux
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-200/90">
                From community festivals to weddings and conferences, our large
                marquees host hundreds of guests with professional structure,
                lighting-ready setup and weather protection.
              </p>
              <a
                href="#location-evenementiel"
                className="mt-5 inline-flex items-center gap-2 rounded-[42px] border border-white/60 px-6 py-2.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand"
              >
                Learn More <ArrowRight className="size-4" />
              </a>
            </div>
          </article>

          {/* Chiavari */}
          <article className="group relative overflow-hidden rounded-2xl shadow-lg shadow-brand/10">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/images/feature-chiavari.jpg"
                alt="Gold Chiavari chairs around an elegant banquet table"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-1 via-night-1/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-gold-light">
                Premium Furniture
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
                The Art of Chiavari Gold
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-200/90">
                Our gold Chiavari chairs bring a refined, luxurious finish to
                receptions and gala dinners — paired with linen-clad tables and
                floral centrepieces for a flawless setting.
              </p>
              <a
                href="#location-evenementiel"
                className="mt-5 inline-flex items-center gap-2 rounded-[42px] border border-white/60 px-6 py-2.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand"
              >
                Learn More <ArrowRight className="size-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
