import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/site-data";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="mt-auto w-full bg-night-1 text-slate-300">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="font-heading text-xl font-bold text-white">
              Stay in the loop
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Seasonal offers, new equipment and event inspiration — straight to
              your inbox.
            </p>
          </div>
          <form className="flex w-full max-w-md items-center gap-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-gold"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-gold-light"
            >
              Subscribe <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Event equipment rental, comfort logistics and professional
              photography — based in Madina, Accra, serving the Greater Accra
              region and beyond.
            </p>
            <p className="mt-5 font-heading text-sm font-semibold italic text-gold-light">
              “{COMPANY.slogan}”
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-gold hover:bg-gold hover:text-white"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <FooterTitle>Our Services</FooterTitle>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.key}>
                  <a
                    href={`#${s.anchor}`}
                    className="text-slate-400 transition-colors hover:text-gold"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#nos-realisations"
                  className="text-slate-400 transition-colors hover:text-gold"
                >
                  Our Realizations
                </a>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="lg:col-span-2">
            <FooterTitle>Our Expertise</FooterTitle>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.slice(4).map((l) => (
                <li key={l.anchor}>
                  <a
                    href={`#${l.anchor}`}
                    className="text-slate-400 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#demander-un-devis"
                  className="text-slate-400 transition-colors hover:text-gold"
                >
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <FooterTitle>Contact</FooterTitle>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{COMPANY.locationFull}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href={`tel:${COMPANY.phoneIntl[0]}`} className="hover:text-gold">
                  {COMPANY.phones[0]}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href={`tel:${COMPANY.phoneIntl[1]}`} className="hover:text-gold">
                  {COMPANY.phones[1]}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all hover:text-gold"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold">
              Privacy Policy
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-gold">
              Terms
            </a>
            <span className="text-slate-700">|</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-gold" />
              Madina — Accra, Ghana
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white">
      {children}
    </h4>
  );
}
