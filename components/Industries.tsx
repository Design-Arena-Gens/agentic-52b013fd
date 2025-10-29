import { industryFocus } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function Industries() {
  return (
    <section id="industries" className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionTitle
          eyebrow="Industries"
          title="Deep domain expertise across regulated and high-growth sectors"
          description="Cross-functional squads embed with your teams to navigate compliance, accelerate roadmaps, and deliver measurable value."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {industryFocus.map((industry) => (
            <article key={industry.name} className="gradient-border relative overflow-hidden rounded-3xl bg-slate-900/70 p-6">
              <div className="relative space-y-3">
                <h3 className="font-display text-xl text-white">{industry.name}</h3>
                <p className="text-sm text-slate-300">{industry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
