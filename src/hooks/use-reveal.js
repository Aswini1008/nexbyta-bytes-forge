import { useEffect, useRef, useState } from "react";

export function useReveal(options = { threshold: 0.12 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      options,
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, inView];
}