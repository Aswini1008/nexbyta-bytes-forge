import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Icon from "./icons";

export default function CourseCard({ course }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-light shadow-(--shadow-card) transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40">
      {course.image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
          <Icon name={course.icon} className="size-5" />
        </span>

        <h3 className="mt-5 text-lg font-semibold">{course.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground">{course.shortDescription}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {course.tags?.map((tag) => (
            <li
              key={tag}
              className="rounded-lg border border-border bg-surface-soft px-2.5 py-1 text-xs text-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs font-semibold tracking-wide text-foreground uppercase">{course.level}</p>

        <Link
          to="/courses/$slug"
          params={{ slug: course.slug }}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          View Course
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}