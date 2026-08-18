import { MessageCircle } from "lucide-react";
import { company } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with Nexbyta Technologies on WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full bg-cyan px-4 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-accent)] transition-transform duration-200 hover:-translate-y-0.5"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
