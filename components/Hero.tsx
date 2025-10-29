import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32" id="top">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-1/4 top-8 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-sky-500/20 blur-3xl" />
        </div>
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Transforming enterprises across continents
        </div>
        <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-start">
          <div className="space-y-8">
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Orchestrating intelligent, secure and resilient digital ecosystems for the enterprise.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              GMIndia integrates strategy, design, engineering, and managed services to help global organizations move from legacy
              operations to cloud-native, AI-enabled platforms that unlock exponential value.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-gradient-to-r from-brand-500 via-indigo-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
              >
                Schedule a Strategy Session
              </Link>
              <Link
                href="#solutions"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400/60 hover:text-white"
              >
                Explore Services
                <span className="translate-x-0 transition group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {[{ label: "Global Enterprises", value: "75+" }, { label: "Transformation Velocity", value: "6 weeks" }, { label: "Innovation Funding", value: "+28%" }].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-inner">
                  <dt className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.label}</dt>
                  <dd className="mt-2 font-display text-2xl text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative hidden rounded-3xl p-[1px] shadow-xl shadow-brand-900/40 md:block">
            <div className="glass-panel relative h-full rounded-[calc(theme(borderRadius.3xl))] p-8">
              <div className="noise-overlay rounded-[calc(theme(borderRadius.3xl))]" />
              <div className="relative space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">Platform Snapshot</h2>
                <div className="space-y-4 text-sm text-slate-200">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-medium text-white">Global Delivery Mesh</h3>
                    <p className="mt-2 text-xs text-slate-300">Overlay orchestrating 24/7 managed services across 5 time zones.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-medium text-white">AI Assurance Layer</h3>
                    <p className="mt-2 text-xs text-slate-300">Responsible AI frameworks with embedded governance and observability.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-medium text-white">SecureOps Fabric</h3>
                    <p className="mt-2 text-xs text-slate-300">Zero trust architecture, SSO, and continuous compliance monitors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
