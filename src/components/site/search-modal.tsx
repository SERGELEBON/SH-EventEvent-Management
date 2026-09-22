"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useUI } from "@/lib/ui-store";
import { NAV_LINKS, SERVICES, REALIZATIONS } from "@/lib/site-data";

type Item = { label: string; anchor: string; group: string };

const INDEX: Item[] = [
  ...NAV_LINKS.map((l) => ({ ...l, group: "Pages" })),
  ...SERVICES.map((s) => ({
    label: s.title,
    anchor: s.anchor,
    group: "Services",
  })),
  ...REALIZATIONS.map((r) => ({
    label: r.title,
    anchor: "nos-realisations",
    group: "Realizations",
  })),
  { label: "Request a Quote", anchor: "demander-un-devis", group: "Actions" },
  { label: "Contact Us", anchor: "contact", group: "Actions" },
];

export function SearchModal() {
  const { activeModal, closeModal } = useUI();
  const open = activeModal === "search";
  const [q, setQ] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeModal]);

  const results = useMemo(() => {
    if (!q.trim()) return INDEX;
    const term = q.toLowerCase();
    return INDEX.filter((i) => i.label.toLowerCase().includes(term));
  }, [q]);

  if (!open) return null;

  const go = (anchor: string) => {
    closeModal();
    setTimeout(() => {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]">
      <div
        className="absolute inset-0 bg-night-1/70 backdrop-blur-sm"
        onClick={closeModal}
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
          <Search className="size-5 text-brand" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search services, pages, realizations…"
            className="flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
          />
          <button
            onClick={closeModal}
            aria-label="Close search"
            className="text-slate-400 hover:text-slate-700"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="custom-scroll max-h-[55vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-slate-400">
              No results for “{q}”.
            </p>
          )}
          {results.map((r) => (
            <button
              key={`${r.group}-${r.label}`}
              onClick={() => go(r.anchor)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors hover:bg-brand/5"
            >
              <span className="flex items-center gap-3">
                <span className="rounded-md bg-brand/8 px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide text-brand">
                  {r.group}
                </span>
                <span className="text-sm font-medium text-slate-800">
                  {r.label}
                </span>
              </span>
              <ArrowRight className="size-4 text-slate-300" />
            </button>
          ))}
        </div>
        <div className="border-t border-slate-100 px-5 py-3 text-[11px] text-slate-400">
          Press <kbd className="rounded border border-slate-200 px-1.5 py-0.5">Esc</kbd>{" "}
          to close · SH Event Management
        </div>
      </div>
    </div>
  );
}
