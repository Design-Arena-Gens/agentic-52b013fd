import Link from "next/link";

import { insightHighlights } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function Insights() {
  return (
    <section id="insights" className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/20 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionTitle
          eyebrow="Insights"
          title="Strategic intelligence to accelerate decision-making"
          description="Stay ahead with curated thought leadership, transformation blueprints, and implementation roadmaps from GMIndia experts."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {insightHighlights.map((insight) => (
            <article key={insight.title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <span className="inline-flex self-start rounded-full border border-brand-300/40 bg-brand-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-100">
                {insight.tag}
              </span>
              <h3 className="font-display text-2xl text-white">{insight.title}</h3>
              <p className="text-sm text-slate-300">{insight.description}</p>
              <Link href="#contact" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100">
                Speak with an analyst
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
