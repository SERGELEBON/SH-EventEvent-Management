"use client";

import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Logo } from "./logo";
import { PillButton } from "./pill-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useUI } from "@/lib/ui-store";
import { NAV_LINKS, COMPANY } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openModal } = useUI();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (anchor: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(anchor), 80);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur shadow-[0_4px_24px_-12px_rgba(10,25,48,0.25)]"
          : "bg-white"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => go("home")}
          aria-label="SH Event Management — home"
          className="flex items-center"
        >
          <Logo />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.slice(0, 5).map((link) => (
            <button
              key={link.anchor}
              onClick={() => go(link.anchor)}
              className="rounded-full px-3 py-2 font-heading text-[13px] font-medium text-slate-700 transition-colors hover:bg-brand/5 hover:text-brand"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => openModal("search")}
            aria-label="Search"
            className="inline-flex size-10 items-center justify-center rounded-full text-brand transition-colors hover:bg-brand/5"
          >
            <Search className="size-[18px]" />
          </button>

          <PillButton
            onClick={() => go("demander-un-devis")}
            className="hidden sm:inline-flex"
          >
            Request a Quote
          </PillButton>

          {/* Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex size-10 items-center justify-center rounded-full text-brand transition-colors hover:bg-brand/5"
              >
                <Menu className="size-[22px]" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88%] max-w-sm border-l-0 bg-white p-0"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <Logo />
              </div>
              <nav className="flex flex-col py-2">
                {NAV_LINKS.map((link, i) => (
                  <button
                    key={link.anchor}
                    onClick={() => go(link.anchor)}
                    className="flex items-center justify-between border-b border-border/60 px-5 py-4 text-left font-heading text-[15px] font-medium text-slate-800 transition-colors hover:bg-brand/5 hover:text-brand"
                  >
                    <span>{link.label}</span>
                    <span className="font-heading text-xs text-gold">
                      0{i + 1}
                    </span>
                  </button>
                ))}
              </nav>
              <div className="flex flex-col gap-3 p-5">
                <PillButton onClick={() => go("demander-un-devis")}>
                  Request a Quote
                </PillButton>
                <div className="mt-2 space-y-1 text-sm text-ink">
                  <p className="font-heading text-xs font-bold uppercase tracking-widest text-brand">
                    Contact
                  </p>
                  <a
                    href={`tel:${COMPANY.phoneIntl[0]}`}
                    className="block hover:text-brand"
                  >
                    {COMPANY.phones[0]}
                  </a>
                  <a
                    href={`tel:${COMPANY.phoneIntl[1]}`}
                    className="block hover:text-brand"
                  >
                    {COMPANY.phones[1]}
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="block break-all hover:text-brand"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
