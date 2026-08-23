import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import Button from "../components/Button";
import HeroVisual from "../components/HeroVisual";
import CourseCard from "../components/CourseCard";
import TechnologyBadge from "../components/TechnologyBadge";
import FAQAccordion from "../components/FAQAccordion";
import { Section, SectionHeading } from "../components/Section";
import {
  company,
  courseFaqs,
  courses,
  learningProcess,
  deliveredWork,
  sampleProjects,
  techStack,
  trustPoints,
  whyNexbyta,
} from "../data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexbyta Technologies | Technology Training & Digital Solutions" },
      {
        name: "description",
        content:
          "Nexbyta Technologies provides practical technology training, programming courses, career preparation, and modern digital development solutions in Chennai.",
      },
      { property: "og:title", content: "Nexbyta Technologies | Technology Training & Digital Solutions" },
      {
        property: "og:description",
        content:
          "Industry-ready technology training and modern digital solutions for students, professionals and businesses.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[image:var(--gradient-surface)] px-5 pt-14 pb-20 sm:px-8 lg:pt-20 lg:pb-28">
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="animate-rise">
            <p className="text-xs font-semibold tracking-[0.32em] text-cyan uppercase">Build • Learn • Grow</p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl">
              Building the <span className="text-gradient-brand">Next Generation</span> of Technology Talent &amp;
              Digital Solutions
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Industry-ready technology training and modern digital solutions for students, professionals and
              businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/courses" variant="accent">
                Explore Courses
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button to="/enquiry" variant="outline">
                Start a Project
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Chennai <span className="mx-2 text-cyan">|</span> Technology Training
              <span className="mx-2 text-cyan">|</span> Digital Solutions
            </p>
          </div>

          <HeroVisual />
        </div>
      </section>

      <div className="border-y border-border bg-[var(--card)] px-5 py-6 sm:px-8">
        <ul className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <Check className="size-4 text-cyan" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <Section tone="dark">
        <SectionHeading
          eyebrow="What we do"
          title="Technology That Builds Possibilities"
          subtitle="Two connected sides of one technology company: helping people build skills, and helping organisations build products."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="card-glass rounded-2xl p-8 transition-colors duration-300 hover:border-cyan/50">
            <h3 className="text-xl font-semibold">Technology Training</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Help learners build practical skills in modern programming and development, from fundamentals to
              project work and career preparation.
            </p>
            <Button to="/courses" variant="outline" className="mt-6">
              Explore Courses
            </Button>
          </article>

          <article className="card-glass rounded-2xl border-cyan/30 p-8 transition-colors duration-300 hover:border-cyan/60">
            <h3 className="text-xl font-semibold">Digital Development</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Build modern websites, web applications, backend systems and scalable digital products designed
              around real business requirements.
            </p>
            <Button to="/services" variant="outline" className="mt-6">
              Explore Services
            </Button>
          </article>
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Courses"
          title="Build Skills That Move Your Career Forward"
          subtitle="Learn practical technology skills through structured learning, hands-on practice and real-world projects."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="Technology ecosystem"
          title="The Stack We Teach and Build With"
          align="center"
        />
        <div className="space-y-8">
          {techStack.map((group) => (
            <div key={group.group} className="text-center">
              <h3 className="mb-4 text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {group.group}
              </h3>
              <ul className="flex flex-wrap justify-center gap-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <TechnologyBadge label={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Why Nexbyta"
          title="Why Learn With Nexbyta?"
          subtitle="A practical, structured approach built around what technology teams actually need."
          tone="light"
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyNexbyta.map((item, index) => (
            <li key={item.title} className="rounded-2xl border border-ink/10 bg-surface-light p-6 shadow-sm">
              <span className="font-mono text-sm font-semibold text-cyan">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="How learning works" title="A Clear Path From Fundamentals to Opportunities" />
        <ol className="grid gap-4 md:grid-cols-5">
          {learningProcess.map((step) => (
            <li key={step.step} className="card-glass rounded-2xl p-5">
              <span className="font-mono text-sm text-cyan">{step.step}</span>
              <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Example work"
          title="The Kind of Products We Build"
          subtitle="Illustrative examples of our development scope. These are not client case studies."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {sampleProjects.map((project) => (
            <article key={project.title} className="card-glass overflow-hidden rounded-2xl">
              <div className="surface-grid h-32 bg-[image:var(--gradient-brand)] opacity-90" aria-hidden="true" />
              <div className="p-6">
                <p className="text-xs tracking-[0.2em] text-cyan uppercase">{project.category}</p>
                <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Button to="/services" variant="outline">
            View Projects &amp; Services
          </Button>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="Delivered work"
          title="Projects We've Delivered"
          subtitle="Real client work built, tested and handed over by our development team."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {deliveredWork.map((project) => (
            <article
              key={project.title}
              className="card-glass rounded-2xl p-6 transition-colors duration-200 hover:border-primary/40 sm:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-cyan uppercase">{project.category}</p>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Visit website
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="FAQ" title="Course Questions" tone="light" />
        <FAQAccordion items={courseFaqs} tone="light" />
      </Section>

      <section className="bg-surface-soft px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-surface-light p-8 shadow-[var(--shadow-card)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.28em] text-cyan uppercase">Next step</p>
              <h2 className="mt-3 text-2xl font-bold text-balance sm:text-3xl">Ready to take the next step?</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Talk to our team about a course track or a development project. Call {company.phone} or send an
                enquiry and we will get back to you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/enquiry" variant="accent">
                Get Started
              </Button>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
