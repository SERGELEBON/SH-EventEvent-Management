"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, CheckCircle2, PartyPopper } from "lucide-react";
import { EVENT_TYPES, COMPANY } from "@/lib/site-data";
import { PillButton } from "./pill-button";
import { cn } from "@/lib/utils";

export function DevisForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [eventType, setEventType] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  function pickType(t: string) {
    setEventType(t);
    setStep(2);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!eventType) {
      setError("Please choose an event type first.");
      setStep(1);
      return;
    }
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "devis", subject: `Quote request — ${eventType}` }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Could not submit. Please call or WhatsApp us directly.");
    }
  }

  return (
    <section
      id="demander-un-devis"
      className="relative w-full overflow-hidden bg-night-1 py-20 text-white sm:py-28"
    >
      <div className="diamond-motif-dark absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold-light">
            Request a Quote
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-[34px]">
            Build Your Event Brief
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-slate-300/90 sm:text-base">
            Tell us about your event in two quick steps — our team will prepare a
            tailored quote for the equipment, logistics and photography you need.
          </p>
        </div>

        {/* Stepper */}
        <div className="mx-auto mt-12 max-w-md">
          <div className="flex items-center justify-between">
            <StepDot n={1} label="Your Event" active={step >= 1} done={step > 1} />
            <div
              className={cn(
                "mx-3 h-0.5 flex-1 transition-colors duration-500",
                step > 1 ? "bg-gold" : "bg-white/20"
              )}
            />
            <StepDot n={2} label="Your Details" active={step >= 2} done={status === "success"} />
          </div>
        </div>

        {/* Card */}
        <div className="relative mt-10 overflow-hidden rounded-2xl bg-white p-6 text-slate-800 shadow-2xl shadow-night-1/40 sm:p-9">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <PartyPopper className="size-14 text-brand" />
              <h3 className="font-heading text-2xl font-bold text-brand">
                Brief Received!
              </h3>
              <p className="max-w-md text-sm text-ink">
                Thank you, {COMPANY.name} has received your request. Our team will
                contact you within 24 hours with a tailored quote.
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[42px] bg-[#25D366] px-6 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white"
                >
                  Message on WhatsApp
                </a>
                <PillButton
                  variant="outline-dark"
                  onClick={() => {
                    setStatus("idle");
                    setStep(1);
                    setEventType("");
                    document.getElementById("devis-form")?.reset();
                  }}
                >
                  Send Another
                </PillButton>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1 — event type */}
              {step === 1 && (
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand">
                    Step 1 — What type of event?
                  </h3>
                  <p className="mt-1 text-sm text-ink">
                    Select the category that best matches your event.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {EVENT_TYPES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => pickType(t)}
                        className={cn(
                          "group flex items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all",
                          eventType === t
                            ? "border-brand bg-brand text-white shadow-md shadow-brand/20"
                            : "border-slate-200 bg-white text-slate-700 hover:border-brand hover:bg-brand/5"
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex size-6 items-center justify-center rounded-full border text-xs font-bold",
                              eventType === t
                                ? "border-white text-white"
                                : "border-brand/30 text-brand"
                            )}
                          >
                            {EVENT_TYPES.indexOf(t) + 1}
                          </span>
                          {t}
                        </span>
                        <ArrowRight className="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs text-ink">
                      Step 1 of 2 — quick & free, no obligation
                    </span>
                    <span className="text-xs font-semibold text-brand">
                      Need help? Call {COMPANY.phones[0]}
                    </span>
                  </div>
                </div>
              )}

              {/* Step 2 — details */}
              {step === 2 && (
                <form id="devis-form" onSubmit={onSubmit} className="space-y-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-brand">
                      Step 2 — Your Details
                    </h3>
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand/8 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-brand">
                      <Check className="size-3.5" /> {eventType}
                    </span>
                  </div>
                  <p className="-mt-2 text-sm text-ink">
                    Tell us how to reach you and a few details about your event.
                  </p>

                  <input type="hidden" name="eventType" value={eventType} />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <DField label="Civility" name="civility">
                      <select
                        name="civility"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                      >
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Miss</option>
                        <option>Dr.</option>
                        <option>Company</option>
                      </select>
                    </DField>
                    <DField label="First Name" name="firstName">
                      <input
                        required
                        name="firstName"
                        type="text"
                        placeholder="John"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                      />
                    </DField>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <DField label="Last Name" name="lastName">
                      <input
                        required
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                      />
                    </DField>
                    <DField label="Email" name="email">
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                      />
                    </DField>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <DField label="Phone" name="phone">
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="0244 000 000"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                      />
                    </DField>
                    <DField label="Event Date (optional)" name="eventDate">
                      <input
                        name="eventDate"
                        type="date"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                      />
                    </DField>
                  </div>
                  <DField label="Guests & details (equipment, photography…)" name="message">
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="e.g. 200 guests, 20 tables, gold Chiavari chairs, photography for the full day…"
                      className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                    />
                  </DField>

                  {error && (
                    <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.12em] text-brand/70 transition-colors hover:text-brand"
                    >
                      <ArrowLeft className="size-4" /> Back
                    </button>
                    <PillButton type="submit" disabled={status === "loading"}>
                      {status === "loading" ? "Submitting…" : "Submit Brief"}
                      <ArrowRight className="size-4" />
                    </PillButton>
                  </div>
                </form>
              )}
            </>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          By submitting, you agree to be contacted by {COMPANY.name} about your
          request. We never share your data.
        </p>
      </div>
    </section>
  );
}

function StepDot({
  n,
  label,
  active,
  done,
}: {
  n: number;
  label: string;
  active: boolean;
  done: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "flex size-10 items-center justify-center rounded-full border-2 font-heading text-sm font-bold transition-all duration-300",
          done
            ? "border-gold bg-gold text-white"
            : active
              ? "border-gold bg-gold/10 text-gold"
              : "border-white/25 text-slate-400"
        )}
      >
        {done ? <Check className="size-5" /> : n}
      </div>
      <span
        className={cn(
          "font-heading text-[10px] font-bold uppercase tracking-[0.1em]",
          active ? "text-white" : "text-slate-400"
        )}
      >
        {label}
      </span>
    </div>
  );
}

function DField({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 block font-heading text-[11px] font-bold uppercase tracking-[0.1em] text-brand">
        {label}
      </span>
      {children}
    </label>
  );
}
