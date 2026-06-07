'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function Line() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { drawSVG: '0%' },
        {
          drawSVG: '100%',
          direction: 'reverse',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        height: '300vh',
        background: 'var(--paper)',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'grid',
          placeItems: 'center',
          overflow: 'hidden',
        }}
      >
        <svg
          width="848"
          height="2052"
          viewBox="0 0 848 2052"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: '85vh', width: 'auto', display: 'block', transform: 'rotate(180deg)' }}
        >
          <path
            ref={lineRef}
            d="M520.96 1973.64C520.769 1891 518.438 876.237 200.466 991.594C-18.7877 1071.14 50.6838 1638.65 453.183 1440.58C752.064 1293.5 767.311 851.525 769.402 77.9172"
            stroke="#C4BBFE"
            strokeWidth="155.835"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
