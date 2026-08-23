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
      className={`sticky top-0 z-50 border-b border-shell-border bg-shell/95 text-shell-foreground backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_30px_-20px_rgba(2,6,23,0.9)]" : ""
      }`}
    >
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
        aria-label="Main"
      >
        <Brand onDark />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "bg-shell-elevated text-shell-foreground" }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-shell-muted transition-colors hover:bg-shell-elevated hover:text-shell-foreground"
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
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-shell-border bg-shell-elevated text-shell-foreground transition-colors hover:bg-shell-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="w-full max-w-full overflow-x-hidden border-t border-shell-border bg-shell px-5 pb-6 text-shell-foreground shadow-[0_16px_32px_-24px_rgba(2,6,23,0.9)] sm:px-8 lg:hidden"
      >
        <ul className="flex flex-col py-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-cyan" }}
                className="flex min-h-11 w-full items-center rounded-lg border-b border-shell-border/70 px-1 py-3 text-base font-medium text-shell-foreground transition-colors hover:text-cyan"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button to="/enquiry" variant="accent" className="mt-5 w-full justify-center">
          Get Started
        </Button>
      </div>
    </header>
  );
}
