export function Section({ children, className = "", tone = "dark", id }) {
  const tones = {
    dark: "bg-background text-foreground",
    deep: "bg-[var(--card)] text-foreground",
    light: "bg-surface-light text-ink",
    soft: "bg-surface-soft text-ink",
  };

  return (
    <section id={id} className={`${tones[tone]} px-5 py-20 sm:px-8 lg:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left", tone = "dark" }) {
  const alignment = align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl";
  const sub = tone === "light" ? "text-ink/70" : "text-muted-foreground";

  return (
    <header className={`${alignment} mb-12`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-cyan uppercase">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className={`mt-4 text-base leading-relaxed ${sub}`}>{subtitle}</p>}
    </header>
  );
}
