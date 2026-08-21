import { MessageCircle } from "lucide-react";
import { company } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with Nexbyta Technologies on WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#128C4A] px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_16px_38px_-16px_rgba(18,140,74,0.9)] hover:bg-[#159c53] transition-transform duration-200 hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
