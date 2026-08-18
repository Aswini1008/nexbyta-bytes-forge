import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/Button";
import { Section, SectionHeading } from "../components/Section";
import { company, deliveryProcess, whyNexbyta } from "../data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nexbyta Technologies | Chennai Technology Company" },
      {
        name: "description",
        content:
          "Nexbyta Technologies is a Chennai-based technology company combining practical training for learners with modern digital development for businesses.",
      },
      { property: "og:title", content: "About Nexbyta Technologies" },
      {
        property: "og:description",
        content: "A Chennai technology company building skills for people and products for businesses.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[image:var(--gradient-surface)] px-5 py-20 sm:px-8">
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-cyan uppercase">About us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl">
            A technology company built around practical outcomes
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {company.name} works from {company.city}, helping learners build industry-ready technical skills and
            helping organisations build modern digital products.
          </p>
        </div>
      </section>

      <Section tone="dark">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="card-glass rounded-2xl p-8">
            <h2 className="text-xl font-semibold">What we believe</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Skills are proven by what you can build. Our training is structured around applied work, and our
              development practice follows the same standard: clear scope, clean architecture and software that
              holds up in production.
            </p>
          </article>
          <article className="card-glass rounded-2xl p-8">
            <h2 className="text-xl font-semibold">Who we work with</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Students and graduates preparing for technology careers, working professionals upskilling, and
              businesses that need websites, web applications and custom software delivered reliably.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="How we work" title="A Consistent Delivery Approach" tone="light" />
        <ol className="grid gap-4 md:grid-cols-5">
          {deliveryProcess.map((step) => (
            <li key={step.step} className="rounded-2xl border border-ink/10 bg-surface-light p-5 shadow-sm">
              <span className="font-mono text-sm text-cyan">{step.step}</span>
              <h3 className="mt-2 text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="deep">
        <SectionHeading eyebrow="Principles" title="What Guides Our Work" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyNexbyta.map((item) => (
            <li key={item.title} className="card-glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/courses" variant="accent">
            Explore Courses
          </Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
