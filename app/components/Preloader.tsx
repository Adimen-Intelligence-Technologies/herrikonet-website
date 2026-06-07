'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>('.preloader-path');

      const tl = gsap.timeline({
        delay: 0.2,
        onComplete: () => setHidden(true),
      });

      tl.fromTo(
        paths,
        { drawSVG: 0, fill: 'transparent' },
        {
          drawSVG: '100%',
          fill: '#ACFE6B',
          duration: 1.2,
          stagger: 0.3,
          ease: 'power2.inOut',
        },
      );

      if (svgRef.current) {
        tl.fromTo(
          svgRef.current,
          { scale: 1.3, transformOrigin: '50% 50%' },
          { scale: 1, duration: 1.0, ease: 'power2.out' },
          '<',
        );
      }

      tl.to(ref.current, {
        clipPath: 'circle(0% at 50% 50%)',
        duration: 1.6,
        ease: 'power2.inOut',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--paper)',
        display: 'grid',
        placeItems: 'center',
        clipPath: 'circle(150% at 50% 50%)',
        willChange: 'clip-path',
      }}
    >
      <svg
        ref={svgRef}
        width="108"
        height="113"
        viewBox="0 0 108 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 'min(40vw, 320px)', height: 'auto', display: 'block' }}
      >
        <g transform="matrix(1,0,0,1,-1434.324421,-2292.980337)">
          <g transform="matrix(1,0,0,1,0,2045.788454)">
            <g transform="matrix(-0.348054,0,0,-0.348054,1953.794189,879.121845)">
              <path
                className="preloader-path"
                d="M1271.508,1525.208C1271.508,1525.208 1202.369,1525.208 1203.604,1590.026C1203.604,1590.026 1206.69,1659.473 1290.645,1620.274L1293.422,1625.213C1293.422,1625.213 1163.294,1652.863 1186.937,1707.623C1186.937,1707.623 1278.342,1862.574 1333.548,1613.735C1333.548,1613.735 1356.9,1525.745 1271.508,1525.208Z"
                fill="#ACFE6B"
                stroke="#ACFE6B"
                strokeWidth="2.87"
              />
            </g>
          </g>
          <g transform="matrix(1,0,0,1,0,2045.788454)">
            <g transform="matrix(0.348054,0,0,0.348054,1022.622652,-252.096748)">
              <path
                className="preloader-path"
                d="M1271.508,1525.208C1271.508,1525.208 1202.369,1525.208 1203.604,1590.026C1203.604,1590.026 1206.69,1659.473 1290.645,1620.274L1293.422,1625.213C1293.422,1625.213 1163.294,1652.863 1186.937,1707.623C1186.937,1707.623 1278.342,1862.574 1333.548,1613.735C1333.548,1613.735 1356.9,1525.745 1271.508,1525.208Z"
                fill="#ACFE6B"
                stroke="#ACFE6B"
                strokeWidth="2.39"
              />
            </g>
          </g>
          <g transform="matrix(1,0,0,1,0,2045.788454)">
            <g transform="matrix(-0.199899,0.199899,-0.199899,-0.199899,2107.978308,275.735626)">
              <path
                className="preloader-path"
                d="M1567.98,1509.522C1567.98,1509.522 1562.481,1510.899 1553.946,1513.5C1524.015,1522.623 1456.743,1546.803 1458.358,1579.451C1460.433,1621.409 1537.221,1691.829 1567.629,1512.456L1567.98,1509.522Z"
                fill="#ACFE6B"
                stroke="#ACFE6B"
                strokeWidth="3.54"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
