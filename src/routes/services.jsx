import { ArrowRight, ExternalLink } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import TechnologyBadge from "../components/TechnologyBadge";
import FAQAccordion from "../components/FAQAccordion";
import Button from "../components/Button";
import Icon from "../components/icons";
import { Section, SectionHeading } from "../components/Section";
import { deliveredWork, deliveryProcess, serviceFaqs, services, techStack } from "../data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Digital Solutions & Development Services | Nexbyta Technologies" },
      {
        name: "description",
        content:
          "Web application development, full-stack and backend engineering, custom software and professional websites built with React, Node.js, Express and MongoDB.",
      },
      { property: "og:title", content: "Digital Solutions & Development Services | Nexbyta Technologies" },
      {
        property: "og:description",
        content: "Modern digital products built around real business requirements.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section tone="light" className="pt-16">
        <SectionHeading
          eyebrow="Services"
          title="Digital Solutions Built for the Modern Web"
          subtitle="From a single website to a complete product platform, we design, build and deliver software that fits how your business actually works."
          tone="light"
        />
        <div className="divide-y divide-border border-y border-border">
          {services.map((service, index) => (
            <article key={service.slug} className="group grid gap-5 py-7 first:pt-0 last:pb-0 lg:grid-cols-[0.8fr_1fr_1fr_auto] lg:items-center lg:gap-8">
              <div className="flex items-center gap-4"><span className="grid size-10 shrink-0 place-items-center bg-accent text-primary"><Icon name={service.icon} className="size-5" /></span><div><p className="font-mono text-xs text-primary">0{index + 1}</p><h3 className="mt-1 text-lg font-semibold text-foreground">{service.title}</h3></div></div>
              <div><p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">Need</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.title === "Portfolio & Website Development" ? "A credible online presence?" : service.title === "Custom Software Development" ? "A workflow that does not fit an off-the-shelf tool?" : service.title === "Backend Development" ? "Reliable APIs and data foundations?" : service.title === "Full-Stack Development" ? "A complete product with one coherent build?" : "A modern digital product built around your requirements?"}</p></div>
              <div><p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">Solution</p><p className="mt-2 text-sm leading-relaxed text-foreground">{service.description}</p><ul className="mt-3 flex flex-wrap gap-2">{service.technologies.map((technology) => <li key={technology} className="bg-surface-soft px-2 py-1 text-xs text-muted-foreground">{technology}</li>)}</ul></div>
              <Link to="/enquiry" search={{ interest: service.title }} className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/75 lg:justify-self-end">Discuss this need <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Our process" title="How We Deliver" />
        <ol className="grid gap-4 md:grid-cols-5">
          {deliveryProcess.map((step) => (
            <li key={step.step} className="card-glass rounded-2xl p-5">
              <span className="font-mono text-sm text-cyan">{step.step}</span>
              <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Delivered work"
          title="Projects We Have Delivered"
          subtitle="Real client work built, tested and handed over by our development team."
          tone="light"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {deliveredWork.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-ink/10 bg-surface-light p-6 shadow-sm transition-colors duration-200 hover:border-primary/40 sm:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-cyan uppercase">{project.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-ink/10 px-2.5 py-1 text-xs text-ink/70">
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

      <Section tone="deep" id="contact">
        <div className="grid gap-8 border border-border bg-shell p-7 text-shell-foreground shadow-(--shadow-elevated) sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="text-xs font-semibold tracking-[0.2em] text-cyan uppercase">Have a project in mind?</p><h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Let’s turn your idea into a practical digital product.</h2><p className="mt-4 max-w-xl text-sm leading-relaxed text-shell-muted">Share the workflow, audience or challenge you are working with. We will start with a focused scoping conversation.</p></div>
          <Button to="/enquiry" variant="light" className="gap-2">Start a Conversation <ArrowRight className="size-4" aria-hidden="true" /></Button>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Stack" title="Technologies We Work With" align="center" />
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
        <SectionHeading eyebrow="FAQ" title="Development Service Questions" tone="light" />
        <FAQAccordion items={serviceFaqs} tone="light" />
        <div className="mt-10">
          <Button to="/enquiry" variant="primary">
            Request a Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}
