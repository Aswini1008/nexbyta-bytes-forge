import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import Icon from "./icons";

export default function ServiceCard({ service }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface-light p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40">
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
        <Icon name={service.icon} className="size-5" />
      </span>

      <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

      <ul className="mt-4 space-y-2">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
            {benefit}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {service.technologies.map((tech) => (
          <li key={tech} className="rounded-lg bg-surface-soft px-2.5 py-1 text-xs text-muted-foreground">
            {tech}
          </li>
        ))}
      </ul>

      <Link
        to="/enquiry"
        search={{ interest: service.title }}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        Discuss Your Project
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
