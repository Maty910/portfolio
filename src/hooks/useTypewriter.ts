/**
 * Custom typewriter effect hook with proper cleanup
 * @param words - Array of words to cycle through
 * @param speed - Typing speed in ms (default: 50ms)
 * @param pause - Pause duration after completing a word (default: 2000ms)
 * @returns Current text being displayed
 */

import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (
  words: readonly string[], 
  speed = 50, 
  pause = 2000
): string => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // ✅ OPTIMIZACIÓN: useRef para evitar memory leaks
  // ✅ FIX: ReturnType<typeof setTimeout> en lugar de NodeJS.Timeout para compatibilidad cross-platform
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // ✅ Limpieza de timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Si estamos en pausa (texto completo), esperar antes de borrar
    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setReverse(true);
      }, pause);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    // Lógica de borrado (más rápido que el tipeo)
    if (reverse) {
      if (subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }
      timeoutRef.current = setTimeout(() => {
        setSubIndex((prev) => prev - 1);
      }, speed / 2);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    // Lógica de tipeo
    if (subIndex === words[index].length) {
      setIsPaused(true);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, speed + (Math.random() * 20)); // Pequeña variación para realismo

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [subIndex, index, reverse, isPaused, words, speed, pause]);

  return words[index].substring(0, subIndex);
};
