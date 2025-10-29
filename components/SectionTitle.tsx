import clsx from "clsx";
import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "center" }: SectionTitleProps) {
  return (
    <div
      className={clsx("flex flex-col gap-4", {
        "items-center text-center": align === "center",
        "items-start text-left": align === "left"
      })}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">{eyebrow}</span>
      <h2 className="max-w-3xl font-display text-3xl text-white sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base text-slate-300">{description}</p> : null}
    </div>
  );
}
