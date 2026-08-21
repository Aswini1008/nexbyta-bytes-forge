export function Section({ children, className = "", tone = "light", id }) {
  const tones = {
    dark: "bg-background text-foreground",
    deep: "bg-surface-soft text-foreground",
    light: "bg-background text-foreground",
    soft: "bg-surface-soft text-foreground",
  };


  return (
    <section id={id} className={`${tones[tone] ?? tones.light} px-5 py-16 sm:px-8 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl";

  return (
    <header className={`${alignment} mb-10 sm:mb-14`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-primary uppercase">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </header>
  );
}
