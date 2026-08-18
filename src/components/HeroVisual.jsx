const snippets = [
  { code: "const skills = build(fundamentals);", delay: "0ms" },
  { code: "app.use('/api', routes);", delay: "120ms" },
  { code: "export default function App() {}", delay: "240ms" },
];

export default function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="surface-grid absolute inset-0 rounded-3xl opacity-60" />
      <div className="absolute -top-10 -right-6 size-40 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute bottom-0 -left-6 size-40 rounded-full bg-indigo/40 blur-3xl" />

      <div className="card-glass animate-float relative rounded-3xl p-6 shadow-[var(--shadow-elevated)]">
        <div className="mb-5 flex gap-1.5">
          <span className="size-2.5 rounded-full bg-cyan/70" />
          <span className="size-2.5 rounded-full bg-muted-foreground/40" />
          <span className="size-2.5 rounded-full bg-muted-foreground/25" />
        </div>

        <div className="space-y-3">
          {snippets.map((snippet) => (
            <p
              key={snippet.code}
              style={{ animationDelay: snippet.delay }}
              className="animate-rise rounded-xl border border-border bg-background/60 px-4 py-3 font-mono text-xs text-foreground/85"
            >
              <span className="text-cyan">{"› "}</span>
              {snippet.code}
            </p>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-8 gap-2">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className="aspect-square rounded-[3px]"
              style={{
                background:
                  index % 5 === 0
                    ? "var(--cyan)"
                    : index % 3 === 0
                      ? "color-mix(in oklab, var(--indigo) 80%, transparent)"
                      : "color-mix(in oklab, var(--cyan) 12%, transparent)",
                opacity: index % 7 === 0 ? 0.35 : 0.85,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
