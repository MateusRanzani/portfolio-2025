"use client";

import { ReactNode } from "react";
import { gsap } from "gsap";
import { createContext, useEffect } from "react";

export const AnimationContext = createContext(null);

interface ProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: ProviderProps) {
  useEffect(() => {
    gsap.fromTo(
      "main p",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <AnimationContext.Provider value={null}>
      {children}
    </AnimationContext.Provider>
  );
}
