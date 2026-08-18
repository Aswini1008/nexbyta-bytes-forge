import { Link } from "@tanstack/react-router";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary:
    "text-primary-foreground shadow-[var(--shadow-accent)] bg-[image:var(--gradient-brand)] hover:-translate-y-0.5",
  accent: "bg-cyan text-accent-foreground font-semibold hover:brightness-110 hover:-translate-y-0.5",
  outline: "border border-border bg-transparent hover:border-cyan hover:text-cyan",
  ghost: "hover:text-cyan",
  light: "bg-ink text-surface-light hover:opacity-90",
};

export default function Button({ as = "link", variant = "primary", className = "", children, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (as === "a") return <a className={cls} {...props}>{children}</a>;
  if (as === "button") return <button className={cls} {...props}>{children}</button>;
  return <Link className={cls} {...props}>{children}</Link>;
}
