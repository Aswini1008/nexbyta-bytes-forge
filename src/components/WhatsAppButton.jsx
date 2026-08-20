import { MessageCircle } from "lucide-react";
import { company } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with Nexbyta Technologies on WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full border border-[#1FAF54]/20 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.45)] transition-transform duration-200 hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
