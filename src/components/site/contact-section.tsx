import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { COMPANY } from "@/lib/site-data";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Get in Touch
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl lg:text-[34px]">
            Contact Us
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink sm:text-base">
            Have a question or an event to plan? Reach us by phone, WhatsApp or
            email — or send us a message below and we will get back to you
            shortly.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Contact info */}
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} title="Call Us">
                <a href={`tel:${COMPANY.phoneIntl[0]}`} className="block hover:text-brand">
                  {COMPANY.phones[0]}
                </a>
                <a href={`tel:${COMPANY.phoneIntl[1]}`} className="block hover:text-brand">
                  {COMPANY.phones[1]}
                </a>
              </InfoCard>
              <InfoCard icon={Mail} title="Email Us">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all hover:text-brand"
                >
                  {COMPANY.email}
                </a>
              </InfoCard>
              <InfoCard icon={MapPin} title="Visit Us">
                {COMPANY.locationFull}
              </InfoCard>
              <InfoCard icon={Clock} title="Hours">
                Mon – Sat: 8am – 7pm
                <br />
                Sun: by appointment
              </InfoCard>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl bg-night-1 p-7 text-white">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
                Prefer to talk now?
              </p>
              <h3 className="mt-2 font-heading text-xl font-bold">
                Chat with us on WhatsApp
              </h3>
              <p className="mt-2 text-sm text-slate-300/90">
                Fastest way to reach our team during business hours.
              </p>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-[42px] bg-[#25D366] px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
              >
                Open WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-6 shadow-sm sm:p-8">
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand">
                Send Us a Message
              </h3>
              <p className="mt-1 text-sm text-ink">
                Fill in the form below and we will respond within 24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex size-11 items-center justify-center rounded-xl bg-brand/8 text-brand">
        <Icon className="size-5" />
      </div>
      <h4 className="mt-4 font-heading text-sm font-bold uppercase tracking-wide text-brand">
        {title}
      </h4>
      <div className="mt-2 text-sm leading-relaxed text-ink">{children}</div>
    </div>
  );
}
