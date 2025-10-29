import { servicePillars } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,98,255,0.12),transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionTitle
          eyebrow="Solutions"
          title="Full-stack enterprise solutions engineered for resilience and velocity"
          description="GMIndia combines strategic consulting, product engineering, and managed services to deliver business outcomes that scale across your global footprint."
          align="left"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {servicePillars.map((pillar) => (
            <article key={pillar.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-glow transition hover:border-brand-400/40">
              <div className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-brand-500/10 blur-3xl transition group-hover:scale-125" />
              <div className="relative space-y-4">
                <h3 className="font-display text-2xl text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-300">{pillar.description}</p>
                <p className="text-sm font-semibold text-brand-200">{pillar.highlight}</p>
                <dl className="grid grid-cols-2 gap-4 pt-6 text-sm">
                  {pillar.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                      <dt className="text-xs uppercase tracking-[0.25em] text-slate-400">{metric.label}</dt>
                      <dd className="mt-2 font-display text-xl text-white">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
