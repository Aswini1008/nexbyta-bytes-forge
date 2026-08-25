import { createFileRoute } from "@tanstack/react-router";
import Icon from "../components/icons";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
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
      <section className="relative overflow-hidden bg-(image:--gradient-surface) px-5 py-20 sm:px-8">
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
          {careerServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="card-glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_20px_45px_-25px_rgba(34,211,238,0.35)]">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-(image:--gradient-brand) text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                  <Icon name={service.icon} />
                </span>
                <h3 className="mt-5 text-lg font-semibold transition-colors group-hover:text-cyan">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Approach" title="Why Learners Prepare With Us" tone="light" />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyNexbyta.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <li className="group h-full rounded-2xl border border-ink/10 bg-surface-light p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-lg">
                <span className="inline-block font-mono text-sm font-semibold text-cyan transition-transform duration-300 group-hover:scale-125">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-400/30 bg-amber-400/5 px-4 py-3">
          <span className="mt-0.5 text-amber-400" aria-hidden="true">ⓘ</span>
          <p className="text-xs leading-relaxed text-ink/70">
            We provide placement-focused preparation. We do not offer placement guarantees.
          </p>
        </div>
      </Section>
    </>
  );
}