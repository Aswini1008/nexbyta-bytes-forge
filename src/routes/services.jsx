import { createFileRoute } from "@tanstack/react-router";
import ServiceCard from "../components/ServiceCard";
import TechnologyBadge from "../components/TechnologyBadge";
import FAQAccordion from "../components/FAQAccordion";
import Button from "../components/Button";
import { Section, SectionHeading } from "../components/Section";
import { deliveryProcess, sampleProjects, serviceFaqs, services, techStack } from "../data/site";

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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
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

      <Section tone="deep">
        <SectionHeading
          eyebrow="Example work"
          title="Projects We Build"
          subtitle="Illustrative examples of our delivery scope, not client case studies."
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
