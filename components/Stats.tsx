import { statsOverview } from "@/lib/data";

export function Stats() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center shadow-inner shadow-brand-900/30 md:grid-cols-4">
          {statsOverview.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-3">
              <span className="font-display text-3xl text-white">{stat.value}</span>
              <span className="text-xs uppercase tracking-[0.25em] text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
