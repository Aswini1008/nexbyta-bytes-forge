import { Link } from "@tanstack/react-router";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-accent)] hover:shadow-[0_16px_40px_-12px_color-mix(in_oklab,var(--indigo)_75%,transparent)] hover:brightness-110",
  accent:
    "bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-accent)] hover:shadow-[0_16px_40px_-12px_color-mix(in_oklab,var(--indigo)_75%,transparent)] hover:brightness-110",
  outline:
    "border border-border bg-surface-light/60 text-foreground hover:border-primary/60 hover:bg-surface-light hover:text-foreground",
  ghost: "text-foreground hover:text-primary",
  light: "bg-surface-light text-primary hover:bg-surface-soft",
};

export default function Button({ as = "link", variant = "primary", className = "", children, ...props }) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (as === "a") return <a className={cls} {...props}>{children}</a>;
  if (as === "button") return <button className={cls} {...props}>{children}</button>;
  return <Link className={cls} {...props}>{children}</Link>;
}
