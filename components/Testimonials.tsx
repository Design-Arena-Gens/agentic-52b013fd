import { testimonials } from "@/lib/data";
import { SectionTitle } from "./SectionTitle";

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_65%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
        <SectionTitle
          eyebrow="Client Outcomes"
          title="Engineered impact with measurable business outcomes"
          description="We co-create transformation journeys with customer teams, ensuring adoption, compliance, and ROI from day one."
          align="left"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-sm text-slate-200">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-auto text-xs uppercase tracking-[0.35em] text-slate-400">
                {testimonial.name}
                <span className="block text-[0.65rem] tracking-[0.25em] text-slate-500">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
