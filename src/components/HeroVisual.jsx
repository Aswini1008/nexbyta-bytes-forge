import { GraduationCap, Code2, Rocket } from "lucide-react";

const stats = [
  { label: "Training tracks", value: "Java • Python • C/C++ • JS • Full-Stack" },
  { label: "Build stack", value: "React • Node.js • Express • MongoDB" },
];

const pillars = [
  { icon: GraduationCap, title: "Technology Training", copy: "Structured, practical learning paths." },
  { icon: Code2, title: "Digital Solutions", copy: "Websites, web apps and custom software." },
  { icon: Rocket, title: "Career Readiness", copy: "Projects, portfolio and interview prep." },
];

export default function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="pointer-events-none absolute -top-8 -right-4 size-40 rounded-full bg-accent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-4 size-40 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative rounded-2xl border border-border bg-surface-light p-5 shadow-[var(--shadow-elevated)] sm:p-6">
        <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
          <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">Nexbyta</span>
          <span className="flex gap-1.5">
            <span className="size-2 rounded-full bg-primary/70" />
            <span className="size-2 rounded-full bg-cyan/60" />
            <span className="size-2 rounded-full bg-border" />
          </span>
        </div>

        <ul className="mt-5 space-y-3">
          {pillars.map(({ icon: LucideIcon, title, copy }) => (
            <li
              key={title}
              className="flex min-w-0 items-start gap-3 rounded-xl border border-border bg-[var(--background)]/60 p-4"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                <LucideIcon className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-foreground">{title}</span>
                <span className="block text-xs leading-relaxed text-muted-foreground">{copy}</span>
              </span>
            </li>
          ))}
        </ul>

        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border p-4">
              <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                {stat.label}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed font-medium text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
