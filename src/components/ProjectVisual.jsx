import { ArrowUpRight, Church, Globe2 } from "lucide-react";
import { useState } from "react";

const visualContent = {
  prPower: {
    category: "WEB DEVELOPMENT",
    title: "PR Power & Infrastructure",
    description:
      "A modern business website designed to present infrastructure capabilities, services and project information through a clear digital experience.",
    type: "Company Website",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    icon: Globe2,
  },
  church: {
    category: "COMMUNITY PLATFORM",
    title: "St. Joseph's Church Website",
    description:
      "A responsive church website designed for community communication, events, media and digital administration.",
    type: "Community Website",
    tags: ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    icon: Church,
  },
};

export default function ProjectVisual({ project, src, alt, projectUrl, projectName, reverse = false, className = "" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const content = visualContent[project];
  const Icon = content.icon;
  const title = projectName || content.title;

  return (
    <a
      href={projectUrl || undefined}
      target={projectUrl ? "_blank" : undefined}
      rel={projectUrl ? "noopener noreferrer" : undefined}
      aria-label={projectUrl ? `View ${title} project` : undefined}
      className={`group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 ${reverse ? "lg:[&>div:first-child]:order-2" : ""} ${projectUrl ? "cursor-pointer" : "cursor-default"} ${className}`}
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-border bg-surface-soft p-2 shadow-(--shadow-card) transition-all duration-400 group-hover:border-primary/45 group-hover:shadow-(--shadow-elevated) sm:p-3">
        <div className="flex size-full items-center justify-center overflow-hidden rounded-xl bg-white">
          {!imageFailed && src ? (
            <img src={src} alt={alt} onError={() => setImageFailed(true)} className="size-full object-contain object-center transition-transform duration-400 ease-out group-hover:scale-[1.02]" />
          ) : (
            <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_75%_25%,rgba(37,99,235,0.28),transparent_35%),linear-gradient(145deg,#0b1830,#071426)] p-8 text-center text-shell-foreground" role="img" aria-label={`${title} branded project visual`}>
              <div><span className="mx-auto grid size-12 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan"><Icon className="size-6" aria-hidden="true" /></span><p className="mt-4 font-mono text-xs tracking-[0.2em] text-cyan">{content.category}</p><p className="mt-2 text-xl font-bold">{title}</p></div>
            </div>
          )}
        </div>
      </div>

      <div className="py-2 lg:py-8">
        <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">{content.category}</p>
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h3>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{content.description}</p>
        <div className="mt-8 border-t border-border pt-5">
          <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">Technologies</p>
          <ul className="mt-3 flex flex-wrap gap-2">{content.tags.map((tag) => <li key={tag} className="rounded-full border border-border bg-surface-soft px-3 py-1.5 text-xs text-foreground">{tag}</li>)}</ul>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <p className="text-sm text-muted-foreground">{content.type}</p>
          {projectUrl && <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">View Live Project <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" /></span>}
        </div>
      </div>
    </a>
  );
}