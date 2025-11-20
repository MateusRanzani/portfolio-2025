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

    const titleElement = document.querySelector(".hero-title");
    if (titleElement) {
      const html = titleElement.innerHTML;
      const parts = html.split(/(<br\s*\/?>)/gi);

      const finalHtml = parts
        .map((part) => {
          if (part.match(/<br\s*\/?>/gi)) {
            return part;
          }

          return part
            .split("")
            .map((char) => `<span class="hero-title-char">${char}</span>`)
            .join("");
        })
        .join("");

      titleElement.innerHTML = finalHtml;
    }

    const ctx = gsap.context(() => {
      gsap.set(
        ".hero-text-1, .hero-title-char, .hero-desc, .hero-btn, .hero-icons a, .hero-img",
        { opacity: 0, filter: "blur(6px)" }
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.25 },
      });

      tl.fromTo(
        ".hero-text-1",
        { y: 30 },
        { y: 0, opacity: 1, filter: "blur(0px)" }
      )
        .fromTo(
          ".hero-title-char",
          { y: 40, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.05,
            stagger: 0.035,
          },
          "-=0.3"
        )
        .fromTo(
          ".hero-desc",
          { x: -25 },
          { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.55 },
          "-=0.2"
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

      gsap.fromTo(
        ".hero-img-wrapper",
        {
          y: -40,
          scale: 1,
        },
        {
          y: 40,
          scale: 1.02,
          ease: "none",
          scrollTrigger: {
            trigger: ".image-container",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
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
