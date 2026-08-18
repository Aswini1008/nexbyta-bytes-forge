import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Icon from "./icons";

export default function CourseCard({ course }) {
  return (
    <article className="group card-glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50">
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
        <Icon name={course.icon} className="size-5" />
      </span>

      <h3 className="mt-5 text-lg font-semibold">{course.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{course.shortDescription}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {course.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs tracking-wide text-cyan uppercase">{course.level}</p>

      <Link
        to="/courses/$slug"
        params={{ slug: course.slug }}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-cyan"
      >
        View Course
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
