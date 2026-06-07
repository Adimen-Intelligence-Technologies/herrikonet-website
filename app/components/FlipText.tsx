'use client';

import { useRef, useState } from 'react';

type Dir = 'top' | 'bottom' | 'left' | 'right';

const ROT = {
  top: { x: 90, y: 0 },
  bottom: { x: -90, y: 0 },
  left: { x: 0, y: -90 },
  right: { x: 0, y: 90 },
} as const;

const FRONT = {
  top: 'translateZ(0.5lh)',
  bottom: 'translateZ(0.5lh)',
  left: 'rotateY(-90deg) translateX(50%) rotateY(90deg)',
  right: 'rotateY(90deg) translateX(50%) rotateY(-90deg)',
} as const;

const BACK = {
  top: 'rotateX(-90deg) translateZ(0.5lh)',
  bottom: 'rotateX(90deg) translateZ(0.5lh)',
  left: 'rotateY(90deg) translateX(50%) rotateY(-90deg)',
  right: 'rotateY(90deg) translateX(50%) rotateY(-90deg)',
} as const;

type Props = {
  text: string;
  className?: string;
  rotateDirection?: Dir;
  staggerMs?: number;
  duration?: number;
};

export default function FlipText({
  text,
  className,
  rotateDirection = 'top',
  staggerMs = 35,
  duration = 0.45,
}: Props) {
  const [flipped, setFlipped] = useState(false);
  const lockRef = useRef(false);
  const words = text.split(' ');
  const charIndexes: { word: number; idx: number }[] = [];
  words.forEach((w, wi) => {
    Array.from(w).forEach((_, ci) => {
      charIndexes.push({ word: wi, idx: charIndexes.length });
    });
  });
  const totalChars = charIndexes.length;

  const onEnter = () => {
    if (lockRef.current) return;
    lockRef.current = true;
    setFlipped(true);
    const total = duration * 1000 + totalChars * staggerMs;
    setTimeout(() => {
      setFlipped(false);
      setTimeout(() => {
        lockRef.current = false;
      }, total);
    }, total);
  };

  const rot = ROT[rotateDirection];

  return (
    <span
      onMouseEnter={onEnter}
      className={className}
      style={{
        display: 'inline-block',
        lineHeight: 1,
        cursor: 'inherit',
        perspective: 500,
      }}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          className="flip-word"
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            marginRight: wi < words.length - 1 ? '0.3em' : 0,
          }}
        >
          {Array.from(word).map((char, ci) => {
            const idx = charIndexes.findIndex((c) => c.word === wi) + ci;
            return (
              <span
                key={ci}
                className="flip-char"
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transform: flipped
                    ? `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`
                    : 'rotateX(0deg) rotateY(0deg)',
                  transition: `transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${idx * (staggerMs / 1000)}s`,
                }}
              >
                <span
                  className="flip-char-face flip-char-front"
                  style={{
                    display: 'inline-block',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: FRONT[rotateDirection],
                  }}
                >
                  {char}
                </span>
                <span
                  className="flip-char-face flip-char-back"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'inline-block',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: BACK[rotateDirection],
                  }}
                >
                  {char}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
