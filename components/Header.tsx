"use client";

import Link from "next/link";
import { useState } from "react";

import { navigationLinks } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="#" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-300 shadow-glow">
            <span className="text-base font-bold">GM</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg">GMIndia</span>
            <span className="text-xs text-slate-400">Enterprise IT Solutions</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navigationLinks.map((item) => (
            <Link key={item.name} href={item.href} className="transition hover:text-white">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#contact"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-brand-400/50 hover:text-white"
          >
            Talk to Experts
          </Link>
          <Link
            href="#insights"
            className="rounded-full bg-gradient-to-r from-brand-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:shadow-lg"
          >
            Explore Insights
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <span className="h-0.5 w-6 rounded-full bg-current" />
            <span className="h-0.5 w-6 rounded-full bg-current" />
            <span className="h-0.5 w-6 rounded-full bg-current" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-slate-950/95 px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-200">
            {navigationLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="rounded-lg bg-gradient-to-r from-brand-500 to-sky-500 px-3 py-2 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Talk to Experts
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
