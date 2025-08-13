// src/hooks/useTilt.ts
import { useEffect, useRef } from 'react';

type Options = {
  maxRotate?: number;   // grados max en Y
  maxTilt?: number;     // grados max en X
  scale?: number;       // ligero scale al acercar
  enabled?: boolean;
};

export function useTilt<T extends HTMLElement = HTMLElement>({ maxRotate = 10, maxTilt = 8, scale = 1.02, enabled = true }: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    // no tilt si reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.transition = '';
      return;
    }

    let raf = 0;
    const onMove = (evt: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (evt.clientX - rect.left) / rect.width;   // 0..1
        const y = (evt.clientY - rect.top) / rect.height;   // 0..1

        const rotateY = (x - 0.5) * maxRotate * 2;          // -max..max
        const rotateX = (0.5 - y) * maxTilt * 2;            // -max..max

        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        el.style.transition = 'transform 120ms linear';
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transition = 'transform 350ms cubic-bezier(.2,.9,.2,1)';
      el.style.transform = '';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mouseup', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mouseup', onLeave);
    };
  }, [maxRotate, maxTilt, scale, enabled]);

  return ref;
}
