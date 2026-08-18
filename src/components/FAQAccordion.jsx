import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items, tone = "dark" }) {
  const [openIndex, setOpenIndex] = useState(0);
  const border = tone === "light" ? "border-ink/10" : "border-border";
  const body = tone === "light" ? "text-ink/70" : "text-muted-foreground";

  return (
    <div className={`divide-y rounded-2xl border ${border} divide-current/10`}>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium"
              >
                {item.q}
                <ChevronDown
                  className={`size-4 shrink-0 text-cyan transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {open && <p className={`px-5 pb-5 text-sm leading-relaxed ${body}`}>{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
