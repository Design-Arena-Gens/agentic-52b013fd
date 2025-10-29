import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-300 shadow-glow">
              <span className="text-base font-bold">GM</span>
            </div>
            <div className="leading-tight">
              <p className="font-display text-base text-white">GMIndia</p>
              <p className="text-xs text-slate-400">Intelligent IT & Digital Engineering</p>
            </div>
          </div>
          <p className="max-w-sm text-xs text-slate-400">
            Delivering transformation programs, managed platforms, and intelligent operations from our centers of excellence across India, Asia, and Europe.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.25em] text-slate-400">
          <Link href="#solutions" className="transition hover:text-white">
            Solutions
          </Link>
          <Link href="#industries" className="transition hover:text-white">
            Industries
          </Link>
          <Link href="#insights" className="transition hover:text-white">
            Insights
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-8 border-t border-white/5 pt-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-[0.65rem] uppercase tracking-[0.25em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GMIndia. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white">
              Security
            </Link>
            <Link href="#" className="transition hover:text-white">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
