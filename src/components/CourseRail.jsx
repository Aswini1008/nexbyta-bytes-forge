import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Icon from "./icons";

const intervalMs = 4500;

export default function CourseRail({ courses, images }) {
  const [slide, setSlide] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(null);
  const timer = useRef(null);
  const items = [courses[courses.length - 1], ...courses, courses[0]];

  const move = (direction) => {
    setAnimate(true);
    setSlide((current) => current + direction);
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused || dragging || reduceMotion.matches) return undefined;

    timer.current = window.setInterval(() => move(1), intervalMs);
    return () => window.clearInterval(timer.current);
  }, [paused, dragging]);

  useEffect(() => {
    if (slide !== 0 && slide !== items.length - 1) return undefined;
    const reset = window.setTimeout(() => {
      setAnimate(false);
      setSlide(slide === 0 ? courses.length : 1);
    }, 720);
    return () => window.clearTimeout(reset);
  }, [courses.length, items.length, slide]);

  const handlePointerDown = (event) => {
    startX.current = event.clientX;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event) => {
    if (startX.current !== null) {
      const distance = event.clientX - startX.current;
      if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
    }
    startX.current = null;
    setDragging(false);
  };

  return (
    <div
      className="relative overflow-hidden px-[calc((100%-min(80vw,20rem))/2)] sm:px-[calc((100%-min(31vw,20rem))/2)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { startX.current = null; setDragging(false); }}
      style={{ touchAction: "pan-y" }}
      aria-label="Course learning tracks"
    >
      <div
        className={`flex gap-4 [--course-card-width:min(80vw,20rem)] sm:[--course-card-width:min(31vw,20rem)] ${animate ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
        style={{ transform: `translateX(calc(-${slide} * (var(--course-card-width) + 1rem)))` }}
      >
        {items.map((course, index) => {
          const isActive = index === slide;
          return (
            <Link
              key={`${course.slug}-${index}`}
              to="/courses/$slug"
              params={{ slug: course.slug }}
              draggable="false"
              className={`group flex w-[min(80vw,20rem)] shrink-0 flex-col overflow-hidden rounded-2xl border bg-surface-light shadow-(--shadow-card) transition-all duration-500 sm:w-[min(31vw,20rem)] ${isActive ? "scale-[1.04] border-primary/55 opacity-100 shadow-(--shadow-elevated)" : "scale-[0.96] border-border opacity-55"} focus-visible:z-10 focus-visible:border-cyan focus-visible:outline-none`}
            >
              <div className="relative aspect-video overflow-hidden bg-[radial-gradient(circle_at_80%_20%,rgba(8,145,178,0.25),transparent_35%),linear-gradient(145deg,#0b1830,#071426)]">
                <div className="absolute inset-0 grid place-items-center p-6 text-center text-white/90"><div><Icon name={course.icon} className="mx-auto size-8 text-cyan" /><p className="mt-3 text-sm font-semibold">{course.title}</p></div></div>
                <img src={images[courses.indexOf(course)]} alt={`${course.title} course`} loading="lazy" draggable="false" onError={(event) => { event.currentTarget.style.display = "none"; }} className="relative size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-shell/80 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm">{course.level}</span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary"><Icon name={course.icon} className="size-5" /></span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{course.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{course.shortDescription}</p>
                <ul className="mt-4 flex flex-wrap gap-2">{course.tags.slice(0, 4).map((tag) => <li key={tag} className="rounded-md bg-surface-soft px-2 py-1 text-xs text-foreground">{tag}</li>)}</ul>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore Track <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-7 flex items-center justify-center gap-3">
        <button type="button" onClick={() => move(-1)} className="grid size-10 place-items-center rounded-full border border-border bg-surface-light text-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Previous course"><ChevronLeft className="size-4" aria-hidden="true" /></button>
        <div className="flex gap-1.5" aria-hidden="true">{courses.map((course, index) => <span key={course.slug} className={`h-1.5 rounded-full transition-all ${((slide - 1 + courses.length) % courses.length) === index ? "w-6 bg-primary" : "w-1.5 bg-border"}`} />)}</div>
        <button type="button" onClick={() => move(1)} className="grid size-10 place-items-center rounded-full border border-border bg-surface-light text-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Next course"><ChevronRight className="size-4" aria-hidden="true" /></button>
      </div>
    </div>
  );
}