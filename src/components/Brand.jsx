import { Link } from "@tanstack/react-router";
import mark from "../assets/nexbyta-mark.png";

export default function Brand({ size = "md", showDescriptor = true }) {
  const dims = size === "sm" ? "h-8 w-8" : "h-10 w-10";

  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Nexbyta Technologies home">
      <img
        src={mark}
        alt="Nexbyta Technologies logo"
        width={816}
        height={816}
        className={`${dims} object-contain transition-transform duration-300 group-hover:scale-105`}
      />
      <span className="leading-none">
        <span className="block text-lg font-extrabold tracking-tight">NEXBYTA</span>
        {showDescriptor && (
          <span className="block text-[0.6rem] font-medium tracking-[0.32em] text-muted-foreground">
            TECHNOLOGIES
          </span>
        )}
      </span>
    </Link>
  );
}
