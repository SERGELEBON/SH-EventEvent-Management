"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { COMPANY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
          <div className="bg-[#25D366] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex size-9 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold">{COMPANY.name}</p>
                  <p className="text-[11px] opacity-90">Typically replies fast</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white/80 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="rounded-xl bg-[#e7f7ec] p-3 text-sm text-slate-700">
              👋 Hi there! Need tents, chairs, cooling or a photographer for your
              event? Chat with us now.
            </div>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
                `Hello ${COMPANY.name}, I would like a quote for my event.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
            >
              Start Chat on WhatsApp
            </a>
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
              <a href={`tel:${COMPANY.phoneIntl[0]}`} className="hover:text-brand">
                {COMPANY.phones[0]}
              </a>
              <span>{COMPANY.locationShort}</span>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open WhatsApp chat"
        className={cn(
          "flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-105",
          !open && "animate-whatsapp-pulse"
        )}
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-7" />}
      </button>
    </div>
  );
}
