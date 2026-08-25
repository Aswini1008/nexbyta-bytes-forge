import { useReveal } from "../hooks/use-reveal";

export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}