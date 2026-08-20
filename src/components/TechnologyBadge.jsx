export default function TechnologyBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-light px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/50">
      <span className="size-1.5 rounded-full bg-cyan" aria-hidden="true" />
      {label}
    </span>
  );
}
