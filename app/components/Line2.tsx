'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const GREEN = '#a0f981';

export default function Line2() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    if (!pathRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(pathRef.current, {
        fill: 'transparent',
        stroke: GREEN,
        strokeWidth: 2,
        drawSVG: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      });

      tl.to(pathRef.current, {
        drawSVG: '100%',
        direction: 'reverse',
        ease: 'none',
        duration: 1,
      });

      tl.to(
        pathRef.current,
        {
          fill: GREEN,
          strokeWidth: 0,
          duration: 0.25,
          ease: 'power1.out',
        },
        0.85,
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
          width="1051"
          height="297"
          viewBox="0 0 1051 297"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '85vw',
            maxWidth: 1051,
            height: 'auto',
            display: 'block',
            transform: 'rotate(180deg)',
          }}
        >
          <g transform="matrix(1,0,0,1,-1019.054847,-2672.565121)">
            <path
              ref={pathRef}
              d="M1698.44,2890.334C1677.208,2874.438 1662.613,2856.906 1653.173,2839.258C1629.425,2794.864 1636.661,2748.131 1656.942,2715.964C1676.297,2685.266 1707.525,2668.473 1736.024,2673.471C1800.545,2684.786 1849.435,2751.911 1833.794,2818.315C1827.985,2842.982 1813.201,2868.147 1785.993,2889.906C1798.368,2894.137 1811.994,2897.949 1826.961,2901.257C1951.581,2928.795 2024.711,2927.596 2050.445,2928.672C2061.584,2929.138 2070.25,2938.559 2069.784,2949.698C2069.318,2960.837 2059.896,2969.503 2048.757,2969.037C2022.213,2967.927 1946.788,2969.11 1818.244,2940.705C1788.872,2934.215 1763.895,2925.868 1742.767,2916.225C1732.867,2920.829 1722.058,2925.098 1710.283,2928.969C1490.497,3001.213 1381.118,2906.888 1300.712,2831.419C1276.422,2808.621 1255.192,2787.578 1233.983,2774.89C1217.558,2765.065 1201.35,2760.86 1183.069,2768.538C1094.754,2805.635 1064.793,2911.39 1057.843,2927.729C1053.479,2937.988 1041.607,2942.774 1031.348,2938.409C1021.089,2934.045 1016.303,2922.173 1020.667,2911.914C1028.653,2893.14 1065.946,2773.916 1167.424,2731.291C1198.69,2718.158 1226.631,2723.416 1254.723,2740.22C1278.028,2754.161 1301.67,2776.911 1328.36,2801.962C1400.891,2870.039 1499.407,2955.758 1697.667,2890.589C1697.925,2890.504 1698.183,2890.419 1698.44,2890.334ZM1742.689,2870.807C1772.814,2853.159 1789.169,2831.561 1794.47,2809.053C1804.852,2764.974 1771.874,2720.775 1729.045,2713.263C1714.755,2710.757 1700.822,2722.117 1691.116,2737.511C1668.533,2773.328 1672.285,2830.926 1742.689,2870.807Z"
              fill={GREEN}
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
