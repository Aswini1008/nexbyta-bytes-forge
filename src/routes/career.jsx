import { createFileRoute } from "@tanstack/react-router";
import Icon from "../components/icons";
import Button from "../components/Button";
import { Section, SectionHeading } from "../components/Section";
import { careerServices, whyNexbyta } from "../data/site";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career & Placement Preparation | Nexbyta Technologies" },
      {
        name: "description",
        content:
          "Placement-focused preparation in Chennai: resume building, aptitude practice, portfolio development and technical interview readiness.",
      },
      { property: "og:title", content: "Career & Placement Preparation | Nexbyta Technologies" },
      {
        property: "og:description",
        content: "Prepare. Perform. Get career ready with structured technical and interview preparation.",
      },
      { property: "og:url", content: "/career" },
    ],
    links: [{ rel: "canonical", href: "/career" }],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[image:var(--gradient-surface)] px-5 py-20 sm:px-8">
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan uppercase">Career</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Prepare. Perform. Get Career Ready.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Placement-focused preparation that combines technical depth, aptitude practice and communication
            confidence.
          </p>
          <Button to="/enquiry" variant="accent" className="mt-8">
            Start Your Preparation
          </Button>
        </div>
      </section>

      <Section tone="dark">
        <SectionHeading eyebrow="Support" title="Preparation That Covers Every Round" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerServices.map((service) => (
            <article key={service.title} className="card-glass rounded-2xl p-6 transition-colors duration-300 hover:border-cyan/50">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                <Icon name={service.icon} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Approach" title="Why Learners Prepare With Us" tone="light" />
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
        <p className="mt-8 text-xs text-ink/60">
          We provide placement-focused preparation. We do not offer placement guarantees.
        </p>
      </Section>
    </>
  );
}
