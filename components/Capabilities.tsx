import { capabilityHighlights } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(12,74,110,0.18),transparent_70%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionTitle
          eyebrow="Capabilities"
          title="Immersive capabilities engineered for mission-critical outcomes"
          description="Our domain architects, product strategists, and engineering leaders collaborate to craft secure, scalable platforms tailored to your enterprise context."
          align="left"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {capabilityHighlights.map((capability) => (
            <article key={capability.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-900/40">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden>
                  {capability.icon}
                </span>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white">{capability.title}</h3>
                  <p className="text-sm text-slate-300">{capability.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
