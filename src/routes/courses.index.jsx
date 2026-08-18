import { createFileRoute } from "@tanstack/react-router";
import CourseCard from "../components/CourseCard";
import FAQAccordion from "../components/FAQAccordion";
import Button from "../components/Button";
import { Section, SectionHeading } from "../components/Section";
import { courseFaqs, courses, learningProcess } from "../data/site";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses | Nexbyta Technologies" },
      {
        name: "description",
        content:
          "Structured programming courses in Java, Python, C/C++, JavaScript and Full-Stack Development with hands-on projects and career preparation.",
      },
      { property: "og:title", content: "Courses | Nexbyta Technologies" },
      {
        property: "og:description",
        content: "Practical technology courses with structured learning, hands-on practice and real-world projects.",
      },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <Section tone="dark" className="pt-16">
        <SectionHeading
          eyebrow="Courses"
          title="Build Skills That Move Your Career Forward"
          subtitle="Learn practical technology skills through structured learning, hands-on practice and real-world projects."
        />

        {courses.length === 0 ? (
          <p className="text-sm text-muted-foreground">No courses available at the moment.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        )}
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Learning path" title="How Your Learning Progresses" tone="light" />
        <ol className="grid gap-4 md:grid-cols-5">
          {learningProcess.map((step) => (
            <li key={step.step} className="rounded-2xl border border-ink/10 bg-surface-light p-5 shadow-sm">
              <span className="font-mono text-sm text-cyan">{step.step}</span>
              <h3 className="mt-2 text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="deep">
        <SectionHeading eyebrow="FAQ" title="Course Questions" />
        <FAQAccordion items={courseFaqs} />
        <div className="mt-10">
          <Button to="/enquiry" variant="accent">
            Get Course Details
          </Button>
        </div>
      </Section>
    </>
  );
}
