export default function TechnologyBadge({ label, tone = "dark" }) {
  const styles =
    tone === "light"
      ? "border-ink/10 bg-surface-soft text-ink/80"
      : "border-border bg-[var(--card)] text-foreground/85";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-cyan/60 ${styles}`}
    >
      <span className="size-1.5 rounded-full bg-cyan" aria-hidden="true" />
      {label}
    </span>
  );
}
