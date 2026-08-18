import { createFileRoute } from "@tanstack/react-router";
import EnquiryForm from "../components/EnquiryForm";
import { Section, SectionHeading } from "../components/Section";
import { submitEnquiry } from "../lib/enquiry.functions";
import { company, interestOptions } from "../data/site";

export const Route = createFileRoute("/enquiry")({
  validateSearch: (search) => ({
    interest:
      typeof search.interest === "string" && interestOptions.includes(search.interest)
        ? search.interest
        : "",
  }),
  head: () => ({
    meta: [
      { title: "Enquiry & Registration | Nexbyta Technologies" },
      {
        name: "description",
        content:
          "Register your interest in a Nexbyta Technologies course, career preparation programme or development project.",
      },
      { property: "og:title", content: "Enquiry & Registration | Nexbyta Technologies" },
      { property: "og:description", content: "Register your interest and our team will get in touch." },
      { property: "og:url", content: "/enquiry" },
    ],
    links: [{ rel: "canonical", href: "/enquiry" }],
  }),
  component: EnquiryPage,
});

function EnquiryPage() {
  const { interest } = Route.useSearch();

  return (
    <Section tone="dark" className="pt-16">
      <SectionHeading
        eyebrow="Get started"
        title="Tell Us What You Want to Build"
        subtitle={`Whether it is a course track or a project, share your details and our team in ${company.city} will follow up.`}
      />

      <div className="mx-auto max-w-3xl card-glass rounded-2xl p-6 sm:p-8">
        <EnquiryForm submitFn={submitEnquiry} defaultInterest={interest} />
      </div>
    </Section>
  );
}
