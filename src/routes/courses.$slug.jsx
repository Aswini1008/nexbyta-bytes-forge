import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import Button from "../components/Button";
import TechnologyBadge from "../components/TechnologyBadge";
import { Section, SectionHeading } from "../components/Section";
import { company, courseFaqs, courses } from "../data/site";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courses.find((item) => item.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Course not found | Nexbyta Technologies" }, { name: "robots", content: "noindex" }] };
    }
    const { course } = loaderData;
    return {
      meta: [
        { title: `${course.title} Course | Nexbyta Technologies` },
        { name: "description", content: course.shortDescription },
        { property: "og:title", content: `${course.title} Course | Nexbyta Technologies` },
        { property: "og:description", content: course.shortDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/courses/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/courses/${params.slug}` }],
    };
  },
  notFoundComponent: CourseNotFound,
  component: CourseDetails,
});

function CourseNotFound() {
  return (
    <Section tone="dark">
      <h1 className="text-3xl font-bold">Course not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">This course is not available right now.</p>
      <Button to="/courses" variant="outline" className="mt-6">
        Back to Courses
      </Button>
    </Section>
  );
}

function CurriculumModule({ index, module }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="card-glass rounded-2xl">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span>
          <span className="block font-mono text-xs text-cyan">
            Module {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-1 block text-base font-semibold">{module.title}</span>
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-cyan transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul className="space-y-2 px-5 pb-5 text-sm text-muted-foreground">
          {module.topics.map((topic) => (
            <li key={topic} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function InfoList({ title, items }) {
  return (
    <div className="card-glass rounded-2xl p-6">
      <h3 className="text-base font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CourseDetails() {
  const { course } = Route.useLoaderData();

  return (
    <>
      <section className="relative overflow-hidden bg-[image:var(--gradient-surface)] px-5 py-16 sm:px-8">
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan uppercase">{course.level}</p>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{course.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{course.overview}</p>
          <p className="mt-4 font-mono text-sm text-cyan">{course.path}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/enquiry" search={{ interest: course.title }} variant="accent">
              Enroll Now
            </Button>
            <Button as="a" href={company.whatsapp} target="_blank" rel="noreferrer noopener" variant="outline">
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Section tone="dark">
        <div className="grid gap-6 md:grid-cols-3">
          <InfoList title="Who is this course for?" items={course.audience} />
          <InfoList title="Prerequisites" items={course.prerequisites} />
          <InfoList title="What you will learn" items={course.outcomes} />
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading eyebrow="Curriculum" title="Structured, Module by Module" />
        <div className="space-y-3">
          {course.curriculum.map((module, index) => (
            <CurriculumModule key={module.title} index={index} module={module} />
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Technologies covered</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {course.technologies.map((tech) => (
                <li key={tech}>
                  <TechnologyBadge label={tech} />
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold">Projects</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {course.projects.map((project) => (
                <li key={project} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                  {project}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold">Course information</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Duration</dt>
                <dd>Shared during enquiry, based on your track and schedule.</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Learning mode</dt>
                <dd>Online and offline batches. Confirm the current schedule with our team.</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Certification</dt>
                <dd>Certification details are confirmed at the time of registration.</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Career relevance</dt>
                <dd>{course.career}</dd>
              </div>
            </dl>
            <Button to="/enquiry" search={{ interest: course.title }} variant="accent" className="mt-6 w-full">
              Get Course Details
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="FAQ" title="Common Questions" tone="light" />
        <dl className="grid gap-6 md:grid-cols-2">
          {courseFaqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-ink/10 bg-surface-light p-6 shadow-sm">
              <dt className="text-base font-semibold text-ink">{faq.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink/70">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
