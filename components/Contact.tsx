export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-slate-900/70 p-10 shadow-2xl shadow-brand-900/40">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-100">Partner with GMIndia</span>
            <h2 className="font-display text-3xl text-white">Let’s architect your next strategic leap</h2>
            <p className="text-sm text-slate-300">
              Share your priorities and our transformation architects will craft a roadmap aligned to business outcomes, security posture, and time-to-value.
            </p>
            <dl className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">Global HQ</dt>
                <dd className="mt-1">Bengaluru • Hyderabad • Pune</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">Engagement Models</dt>
                <dd className="mt-1">Strategy pods • Managed services • Build-operate-transfer</dd>
              </div>
            </dl>
          </div>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-sm text-slate-200">
                First name
                <input
                  type="text"
                  name="firstName"
                  placeholder="Ananya"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none"
                  required
                />
              </label>
              <label className="flex flex-col gap-1 text-sm text-slate-200">
                Last name
                <input
                  type="text"
                  name="lastName"
                  placeholder="Sharma"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none"
                  required
                />
              </label>
            </div>
            <label className="flex flex-col gap-1 text-sm text-slate-200">
              Work email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none"
                required
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-slate-200">
              Key priority
              <select
                name="priority"
                className="appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand-400/60 focus:outline-none"
                defaultValue="digital-transformation"
              >
                <option value="digital-transformation" className="bg-slate-900">
                  Digital transformation
                </option>
                <option value="cloud-modernization" className="bg-slate-900">
                  Cloud modernization
                </option>
                <option value="ai" className="bg-slate-900">
                  AI & data intelligence
                </option>
                <option value="cybersecurity" className="bg-slate-900">
                  Cybersecurity & compliance
                </option>
                <option value="managed-services" className="bg-slate-900">
                  Managed services
                </option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-sm text-slate-200">
              How can we help?
              <textarea
                name="message"
                rows={4}
                placeholder="Outline your business challenge, current technology landscape, and desired outcomes."
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-brand-500 via-indigo-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01]"
            >
              Submit & schedule discovery
            </button>
            <p className="text-[0.7rem] text-slate-500">
              By submitting this form you agree to our privacy statement and consent to receive communications about GMIndia solutions.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
