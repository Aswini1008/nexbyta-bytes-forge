import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";
import { Section, SectionHeading } from "../components/Section";
import { submitEnquiry } from "../lib/enquiry.functions";
import { company } from "../data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nexbyta Technologies | Chennai" },
      {
        name: "description",
        content:
          "Contact Nexbyta Technologies in Chennai for technology courses, career preparation or a development project. Call +91 82485 88520 or send an enquiry.",
      },
      { property: "og:title", content: "Contact Nexbyta Technologies" },
      { property: "og:description", content: "Talk to our team about courses, career preparation or a project." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section tone="dark" className="pt-16">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to the Nexbyta Team"
          subtitle="Tell us what you are looking for and we will get back to you with the right next step."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="card-glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold">{company.name}</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                  {company.city}
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                  <a href={company.phoneHref} className="hover:text-cyan">
                    {company.phone}
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-cyan hover:text-cyan"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call Us
                </a>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>

              <p className="mt-4 text-xs text-muted-foreground/70">
                An official email address will be published once confirmed.
              </p>
            </div>

            <div className="card-glass overflow-hidden rounded-2xl">
              <iframe
                title="Nexbyta Technologies location in Chennai"
                src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </div>

          <div className="card-glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold">Send an enquiry</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">
              Share a few details and our team will respond with the information you need.
            </p>
            <EnquiryForm submitFn={submitEnquiry} />
          </div>
        </div>
      </Section>
    </>
  );
}
