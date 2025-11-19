"use client";

import { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createContext, useEffect } from "react";

export const AnimationContext = createContext(null);

interface ProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: ProviderProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(
        ".hero-text-1, .hero-title, .hero-desc, .hero-btn, .hero-icons a, .hero-img",
        { opacity: 0, filter: "blur(6px)" }
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });

      tl.fromTo(
        ".hero-text-1",
        { y: 30 },
        { y: 0, opacity: 1, filter: "blur(0px)" }
      )
        .fromTo(
          ".hero-title",
          { scale: 0.95, y: 40 },
          { scale: 1, y: 0, opacity: 1, filter: "blur(0px)", duration: 0.55 },
          "-=0.3"
        )
        .fromTo(
          ".hero-desc",
          { x: -25 },
          { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.55 },
          "-=0.35"
        )
        .fromTo(
          ".hero-btn",
          { y: 20 },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            ease: "elastic.out(0.8, 0.6)",
          },
          "-=0.35"
        )
        .fromTo(
          ".hero-icons a",
          { y: 15 },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.08,
            duration: 0.45,
          },
          "-=0.5"
        )
        .fromTo(
          ".hero-img",
          { y: -200, opacity: 0, scale: 1.05, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.8"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <AnimationContext.Provider value={null}>
      {children}
    </AnimationContext.Provider>
  );
}
