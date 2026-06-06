"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Logo } from "./Logo";

const GREEN_900 = "#0a1d09";

export function Preloader() {
  const [active, setActive] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const root = rootRef.current;
    const logoWrap = logoWrapRef.current;
    if (!root || !logoWrap) return;

    const letters = Array.from(
      root.querySelectorAll<SVGPathElement>(".logo-letter"),
    );
    const accents = Array.from(
      root.querySelectorAll<SVGPathElement>(
        "g.logo-stem > path, g.logo-accent-r > path, g.logo-accent-r-mirror > path, g.logo-accent-leaf > path",
      ),
    );

    const ctx = gsap.context(() => {
      gsap.set(letters, { fillOpacity: 0, strokeOpacity: 1 });
      gsap.set(accents, { fillOpacity: 0, strokeOpacity: 1 });

      const lengths = new WeakMap<SVGPathElement, number>();
      const measure = (p: SVGPathElement) => {
        const len = p.getTotalLength();
        lengths.set(p, len);
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        return len;
      };
      letters.forEach(measure);
      accents.forEach(measure);

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => setActive(false),
      });

      tl.fromTo(
        logoWrap,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
        0,
      );

      const letterStagger = 0.12;
      const letterStart = 0.4;
      letters.forEach((p, i) => {
        const len = lengths.get(p) || 1;
        const dur = Math.min(1.2, 0.55 + len / 900);
        tl.to(
          p,
          { strokeDashoffset: 0, duration: dur, ease: "power2.inOut" },
          letterStart + i * letterStagger,
        );
      });

      const accentsStart = letterStart + letters.length * letterStagger + 0.15;
      const accentStagger = 0.18;
      accents.forEach((p, i) => {
        const len = lengths.get(p) || 1;
        const dur = Math.min(1.1, 0.55 + len / 700);
        tl.to(
          p,
          { strokeDashoffset: 0, duration: dur, ease: "power2.inOut" },
          accentsStart + i * accentStagger,
        );
      });

      const lastStrokeEnd = accentsStart + (accents.length - 1) * accentStagger + 1.0;
      const fillStart = lastStrokeEnd - 0.4;
      tl.to(
        letters,
        {
          fillOpacity: 1,
          strokeOpacity: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.03,
        },
        fillStart,
      );
      tl.to(
        accents,
        {
          fillOpacity: 1,
          strokeOpacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
        },
        fillStart + 0.1,
      );

      const exitStart = lastStrokeEnd + 0.3;
      tl.to(
        logoWrap,
        { y: -24, autoAlpha: 0, duration: 0.7, ease: "power3.in" },
        exitStart,
      );
      tl.to(
        root,
        { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" },
        exitStart + 0.1,
      );
    }, root);

    return () => ctx.revert();
  }, []);

  if (!active) return null;

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Cargando"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: GREEN_900,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "opacity",
      }}
    >
      <div
        ref={logoWrapRef}
        style={{
          width: "min(78vw, 640px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo ariaLabel="Herrikonekt" />
      </div>
    </div>
  );
}
