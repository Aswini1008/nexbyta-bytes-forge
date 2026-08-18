import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import Brand from "./Brand";
import { company, courses, navLinks } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--card)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Brand />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {company.tagline}. Practical technology training and modern digital solutions.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-semibold tracking-wide">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Courses">
          <h2 className="text-sm font-semibold tracking-wide">Courses</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link
                  to="/courses/$slug"
                  params={{ slug: course.slug }}
                  className="transition-colors hover:text-cyan"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wide">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              {company.city}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              <a href={company.phoneHref} className="transition-colors hover:text-cyan">
                {company.phone}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground/70">
            Social profiles will be linked once published.
          </p>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © 2026 {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
