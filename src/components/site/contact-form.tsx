"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { PillButton } from "./pill-button";
import { COMPANY } from "@/lib/site-data";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setError("Could not send. Please call or WhatsApp us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-brand/15 bg-brand/5 p-10 text-center">
        <CheckCircle2 className="size-12 text-brand" />
        <h3 className="font-heading text-xl font-bold text-brand">
          Message Sent!
        </h3>
        <p className="max-w-sm text-sm text-ink">
          Thank you for reaching out to {COMPANY.name}. Our team will get back to
          you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={compact ? "space-y-4" : "space-y-5"}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Civility" name="civility">
          <select
            name="civility"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          >
            <option value="Mr">Mr.</option>
            <option value="Mrs">Mrs.</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr.</option>
            <option value="Company">Company</option>
          </select>
        </Field>
        <Field label="Full Name" name="name">
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company (optional)" name="company">
          <input
            name="company"
            type="text"
            placeholder="Company / organisation"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
        </Field>
        <Field label="Phone" name="phone">
          <input
            required
            name="phone"
            type="tel"
            placeholder="0244 000 000"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
        </Field>
      </div>
      <Field label="Email" name="email">
        <input
          required
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </Field>
      <Field label="Subject" name="subject">
        <input
          required
          name="subject"
          type="text"
          placeholder="How can we help?"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </Field>
      <Field label="Message" name="message">
        <textarea
          required
          name="message"
          rows={compact ? 4 : 5}
          placeholder="Tell us about your event…"
          className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </Field>

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <PillButton type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send Message"}
        <Send className="size-4" />
      </PillButton>
    </form>
  );
}

function Field({
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
