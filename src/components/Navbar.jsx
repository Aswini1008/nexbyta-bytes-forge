import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import Brand from "./Brand";
import Button from "./Button";
import { navLinks } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--background)]/85 backdrop-blur-xl transition-colors duration-300 ${
        scrolled
          ? "border-primary/20 shadow-[0_10px_30px_-24px_oklch(0.62_0.196_258_/_0.8)]"
          : "border-border/50"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8" aria-label="Main">
        <Brand />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-foreground after:scale-x-100" }}
                className="relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[image:var(--gradient-brand)] after:transition-transform after:duration-200 hover:text-foreground hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>


        <div className="hidden lg:block">
          <Button to="/enquiry" variant="accent">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-border p-2 text-foreground transition-colors hover:border-primary/50 hover:text-primary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-[var(--background)]/95 px-5 pb-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-cyan" }}
                  className="block border-b border-border/60 py-3 text-base font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button to="/enquiry" variant="accent" className="mt-4 w-full">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
