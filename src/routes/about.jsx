import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/Button";
import { Section, SectionHeading } from "../components/Section";
import { company, deliveryProcess, whyNexbyta } from "../data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Nexbyta Technologies | Technology & Training Company in Chennai",
      },
      {
        name: "description",
        content:
          "Nexbyta Technologies is a Chennai-based technology company providing industry-focused training and modern web and software development solutions for businesses.",
      },
      {
        property: "og:title",
        content: "About Nexbyta Technologies",
      },
      {
        property: "og:description",
        content:
          "Nexbyta Technologies helps students and professionals build industry-ready skills while helping businesses create modern digital solutions.",
      },
      {
        property: "og:url",
        content: "/about",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-(image:--gradient-surface) px-5 py-20 sm:px-8">
        <div
          className="surface-grid pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            About Nexbyta
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold sm:text-5xl">
            Building skills, digital products, and technology for the future
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {company.name} is a technology and training company based in{" "}
            {company.city}. We help students and professionals develop
            industry-ready technical skills while helping businesses build
            reliable, modern, and scalable digital solutions.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <Section tone="dark">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="card-glass rounded-2xl p-8">
            <h2 className="text-xl font-semibold">Who We Are</h2>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Nexbyta Technologies brings together technology education and
              digital development under one vision. We focus on practical
              learning, real-world projects, and solutions that create
              measurable value.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              From technical training and project guidance to website,
              web application, and custom software development, our goal is to
              turn ideas and potential into practical outcomes.
            </p>
          </article>

          <article className="card-glass rounded-2xl p-8">
            <h2 className="text-xl font-semibold">What We Do</h2>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We work across two core areas: technology education and digital
              product development.
            </p>

            {(() => {
              const whatWeDo = [
                "Industry-focused technical training",
                "Academic and real-world project development",
                "Website and web application development",
                "Custom software solutions for businesses",
                "Technology consulting and digital transformation",
              ];

              return (
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {whatWeDo.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              );
            })()}
          </article>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Our Mission"
          title="Technology that creates real opportunities"
          tone="light"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-ink/10 bg-surface-light p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">
              Empowering People
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              We believe technology education should go beyond theory.
              Our learning approach focuses on practical skills, projects,
              problem-solving, and the knowledge required to confidently enter
              the technology industry.
            </p>
          </article>

          <article className="rounded-2xl border border-ink/10 bg-surface-light p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">
              Enabling Businesses
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              We help businesses establish and improve their digital presence
              through thoughtfully designed websites, web applications, and
              software solutions that are built around their actual business
              requirements.
            </p>
          </article>
        </div>
      </Section>

      {/* How We Work */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="How We Work"
          title="A Practical and Transparent Delivery Process"
          tone="light"
        />

        <ol className="grid gap-4 md:grid-cols-5">
          {deliveryProcess.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-ink/10 bg-surface-light p-5 shadow-sm"
            >
              <span className="font-mono text-sm text-cyan">
                {step.step}
              </span>

              <h3 className="mt-2 text-base font-semibold text-ink">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Principles */}
      <Section tone="deep">
        <SectionHeading
          eyebrow="Our Principles"
          title="What Guides Everything We Build"
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyNexbyta.map((item) => (
            <li
              key={item.title}
              className="card-glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/courses" variant="accent">
            Explore Our Courses
          </Button>

          <Button to="/contact" variant="outline">
            Talk to Our Team
          </Button>
        </div>
      </Section>
    </>
  );
}