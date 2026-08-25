import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Check, Code2, ExternalLink, GraduationCap, Rocket, Sparkles } from "lucide-react";

import Brand from "../components/Brand";
import Button from "../components/Button";
import MediaPlaceholder from "../components/MediaPlaceholder";
import CourseRail from "../components/CourseRail";
import ProjectVisual from "../components/ProjectVisual";
import Icon from "../components/icons";
import { Section, SectionHeading } from "../components/Section";
import { company, courses, services, trustPoints, whyNexbyta, learningProcess, deliveredWork } from "../data/site";
import { siteImages } from "../data/siteImages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nexbyta Technologies | Build skills and digital products in Chennai",
      },
      {
        name: "description",
        content:
          "Nexbyta Technologies helps students build career-ready skills and helps businesses launch websites, apps, and custom software solutions.",
      },
      {
        property: "og:title",
        content: "Nexbyta Technologies",
      },
      {
        property: "og:description",
        content:
          "Technology training, career preparation, and modern digital solutions for learners and businesses.",
      },
      {
        property: "og:url",
        content: "/",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featuredCourses = courses.slice(0, 5);
  const featuredServices = services.slice(0, 3);
  const courseImages = [siteImages.courses.java, siteImages.courses.python, siteImages.courses.cCpp, siteImages.courses.javascript, siteImages.courses.fullStack];
  const serviceImages = [siteImages.services.web, siteImages.services.fullStack, siteImages.services.backend];

  return (
    <>
      <section className="relative overflow-hidden bg-shell px-5 py-12 text-shell-foreground sm:px-8 sm:py-16 lg:py-24">
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-10" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="animate-rise">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
              <Brand size="sm" showDescriptor={false} onDark />
              <span>Training + Digital Products</span>
            </div>
            <h1 className="mt-8 max-w-2xl text-4xl font-black tracking-tighter sm:text-5xl lg:text-6xl">
              Building the Next Byte of <span className="text-cyan">Technology</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-shell-muted sm:text-lg">
              Practical technology education for ambitious learners, and thoughtful digital products for businesses ready to move forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/courses" variant="accent" className="gap-2">Explore Courses <ArrowRight className="size-4" aria-hidden="true" /></Button>
              <Button to="/enquiry" variant="light">Start a Conversation</Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-shell-muted">
              {trustPoints.slice(0, 3).map((point) => <span key={point} className="inline-flex items-center gap-2"><BadgeCheck className="size-4 text-cyan" aria-hidden="true" />{point}</span>)}
            </div>
          </div>
          <MediaPlaceholder src={siteImages.hero} alt="Nexbyta team collaborating on technology training and digital products" loading="eager" className="animate-rise aspect-4/3 rounded-3xl border border-white/15 shadow-(--shadow-elevated) [animation-delay:120ms]" />
        </div>
      </section>

      <section className="border-b border-border bg-surface-soft px-5 py-8 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-3">
          {[{ label: "Learn by building", icon: GraduationCap }, { label: "Work with modern tools", icon: Code2 }, { label: "Prepare for real opportunities", icon: Rocket }].map(({ label, icon: Icon }) => <div key={label} className="flex items-center gap-3 text-sm font-semibold text-ink"><Icon className="size-5 text-primary" aria-hidden="true" />{label}</div>)}
        </div>
      </section>

      <Section tone="light">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <MediaPlaceholder src={siteImages.why} alt="Nexbyta learners building technology projects with modern tools" objectFit="contain" className="aspect-square rounded-3xl border border-border bg-white shadow-(--shadow-card)" />
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">A practical point of view</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Technology should create momentum.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">Nexbyta brings learning and digital development together. We help people build confidence through practice, and help businesses turn useful ideas into dependable software.</p>
            <ul className="mt-7 space-y-3 text-sm text-foreground">{whyNexbyta.slice(0, 4).map((item) => <li key={item.title} className="flex items-start gap-3"><Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" /><span><strong>{item.title}.</strong> {item.description}</span></li>)}</ul>
            <Button to="/about" variant="outline" className="mt-8 gap-2">More about Nexbyta <ArrowRight className="size-4" aria-hidden="true" /></Button>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Learning tracks"
          title="Build the skills companies want to see"
          subtitle="From beginner foundations to job-ready software practice, Nexbyta blends technical depth with real-world application."
        />
        <CourseRail courses={featuredCourses} images={courseImages} />
        <Button to="/courses" variant="outline" className="mt-8">View all courses</Button>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Digital services"
          title="Technology solutions designed to move your business forward"
          subtitle="We help organizations build a credible digital presence and software systems that reduce friction and support growth."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredServices.map((service, index) => <article key={service.title} className="group overflow-hidden rounded-2xl border border-border bg-surface-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-(--shadow-card)">
            <MediaPlaceholder src={serviceImages[index]} alt={`${service.title} project preview`} className="aspect-[1.7/1]" />
            <div className="p-6"><p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Digital service</p><h3 className="mt-2 text-xl font-semibold text-foreground">{service.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p><Link to="/enquiry" search={{ interest: service.title }} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Discuss your project <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link></div>
          </article>)}
        </div>
        <Button to="/services" variant="outline" className="mt-8">See all services</Button>
      </Section>

      <Section tone="dark">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <MediaPlaceholder src={siteImages.why} alt="Learner working through a practical technology project" className="aspect-4/3 rounded-3xl border border-border" />
          <div><p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">Why Nexbyta</p><h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">A clearer route from curiosity to capability.</h2><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">The work is structured, current and grounded in the things people actually need to build, explain and ship.</p><div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">{whyNexbyta.slice(0, 4).map((item, index) => <div key={item.title} className="border-l border-cyan/50 pl-4"><p className="font-mono text-xs text-cyan">0{index + 1}</p><h3 className="mt-2 font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p></div>)}</div></div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Our process" title="A clear path from idea to momentum" subtitle="Whether you're preparing for a career or launching a digital product, our process keeps work practical, structured, and transparent." />
        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">{learningProcess.map((step, index) => <li key={step.step} className="relative border-l-2 border-primary/25 pl-5 md:border-l-0 md:border-t-2 md:pt-5 md:pl-0"><span className="font-mono text-sm font-semibold text-primary">{step.step}</span><h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>{index < learningProcess.length - 1 && <span className="absolute -bottom-5 -left-1.75 size-3 rounded-full border-2 border-surface-light bg-primary md:bottom-auto md:left-auto md:-right-1.75 md:-top-1.75" aria-hidden="true" />}</li>)}</ol>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="What we build" title="Digital products designed around real business needs." subtitle="From business websites and web applications to custom software, Nexbyta turns practical requirements into clear, usable digital experiences." />
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[{ icon: "Globe", title: "Business Websites", description: "Professional websites that make your organisation easier to understand and trust." }, { icon: "Layers", title: "Web Applications", description: "Responsive products that bring important workflows into one useful place." }, { icon: "Settings2", title: "Custom Software", description: "Solutions shaped around the way your team works, rather than a fixed template." }, { icon: "GraduationCap", title: "Technical Training", description: "Practical learning and career preparation grounded in real development work." }].map((item) => <article key={item.title} className="group bg-surface-light p-6 transition-colors hover:bg-accent/45"><Icon name={item.icon} className="size-5 text-primary" /><h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p></article>)}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Real client / project work" title="Selected digital products built for real-world needs." subtitle="From business websites to community platforms, we design and build digital experiences that are practical, responsive and ready for real users." />
        <div className="space-y-24">
          {[{ project: "prPower", data: deliveredWork[0], image: siteImages.projects.prPower, alt: "PR Power and Infrastructure website project visual" }, { project: "church", data: deliveredWork[1], image: siteImages.projects.stJosephsChurch, alt: "St. Joseph's Church website project visual" }].map(({ project, data, image, alt }, index) => <ProjectVisual key={data.title} project={project} src={image} alt={alt} projectName={data.title} projectUrl={data.url} reverse={index === 1} />)}
        </div>
      </Section>

      <Section tone="dark" className="pb-20">
        <div className="rounded-3xl border border-border bg-[linear-gradient(135deg,rgba(21,48,114,0.96),rgba(23,34,72,0.96))] p-8 text-shell-foreground shadow-(--shadow-elevated) sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Ready to begin?</p>
              <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Let’s turn your next step into a real advantage.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button to="/enquiry" variant="light">
                Enquire now
              </Button>
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15">
                WhatsApp us
                <Sparkles className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
