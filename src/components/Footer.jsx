import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import Brand from "./Brand";
import { company, courses, navLinks } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#F8FAFC]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0">
          <Brand />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Technology training and digital solutions for the next generation of builders.
          </p>
        </div>

        <nav aria-label="Quick links" className="min-w-0">
          <h2 className="text-sm font-semibold tracking-wide text-foreground">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Courses" className="min-w-0">
          <h2 className="text-sm font-semibold tracking-wide text-foreground">Courses</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link
                  to="/courses/$slug"
                  params={{ slug: course.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0">
          <h2 className="text-sm font-semibold tracking-wide text-foreground">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {company.city}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={company.phoneHref} className="transition-colors hover:text-primary">
                {company.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © 2026 {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
