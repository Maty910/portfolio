// src/hooks/useReveal.ts
import { useEffect } from 'react';

type RevealOpts = {
  selector?: string;           // selector CSS a observar (por defecto '.reveal')
  threshold?: number;          // threshold para IntersectionObserver
  root?: Element | null;       // root element (para contenedores con overflow)
  once?: boolean;              // si true, unobserve luego de la primera aparición
};

export function useReveal({ selector = '.reveal', threshold = 0.15, root = null, once = true }: RevealOpts = {}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Si el usuario prefiere reducir movimiento, hacemos visibles los elementos de inmediato.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll(selector).forEach(el => el.classList.add('is-visible'));
      return;
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          if (once) obs.unobserve(entry.target);
        }
      });
    }, { threshold, root });

    els.forEach(el => obs.observe(el));

    return () => obs.disconnect();
  }, [selector, threshold, root, once]);
}
