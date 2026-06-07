'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default function Line3() {
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
          width="1529"
          height="888"
          viewBox="0 0 1529 888"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: '85vh', width: 'auto', display: 'block' }}
        >
          <g transform="matrix(1,0,0,1,-3638.486671,-2332.306177)">
            <path
              ref={lineRef}
              d="M3688.07,2698.102C4016.164,2693.625 4235.77,2709.727 4245.041,2533.728C4254.823,2348.037 3847.504,2296.687 3862.393,2587.222C3867.767,2692.076 3955.427,2818.978 4103.609,2844.473C4384.651,2892.827 4490.39,2754.719 4776.587,2863.733C4865.615,2897.644 4982.09,2977.649 5016.01,3009.885C5087.665,3077.984 5112.289,3157.512 5117.522,3169.761"
              stroke="#a0f981"
              strokeWidth="99.17"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
