import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  // Inicializamos el estado leyendo localStorage o la preferencia del sistema
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      // 1. Chequear si ya guardó una preferencia antes
      const storedTheme = localStorage.getItem('theme') as Theme;
      if (storedTheme) return storedTheme;
      
      // 2. Si no, chequear la preferencia del sistema operativo
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    // 3. Default a Dark (porque somos devs y nos gusta lo oscuro)
    return 'dark'; 
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Aplicamos el atributo data-theme para tus variables CSS (:root[data-theme="light"])
    root.setAttribute('data-theme', theme);
    
    // Opcional: Agregar clase para tailwind si usás 'darkMode: class'
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    
    // Guardamos la elección para la próxima visita
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función mejorada que acepta coordenadas para la animación
  const setThemeWithTransition = (newTheme: Theme, x?: number, y?: number) => {
    // Verificar si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Sin animación si el usuario prefiere reducir movimiento
      setTheme(newTheme);
      return;
    }

    // Si el navegador soporta View Transitions API
    if (document.startViewTransition && x !== undefined && y !== undefined) {
      const transition = document.startViewTransition(() => {
        setTheme(newTheme);
      });

      // Calcular el radio máximo para que cubra toda la pantalla
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      // Crear estilos dinámicos para la animación circular
      transition.ready.then(() => {
        document.documentElement.animate(
          [
            {
              clipPath: `circle(0px at ${x}px ${y}px)`,
            },
            {
              clipPath: `circle(${maxRadius}px at ${x}px ${y}px)`,
            },
          ],
          {
            duration: 600,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      // Fallback: animación simple con fade
      document.documentElement.classList.add('theme-transitioning');
      setTimeout(() => {
        setTheme(newTheme);
        setTimeout(() => {
          document.documentElement.classList.remove('theme-transitioning');
        }, 300);
      }, 150);
    }
  };

  return { theme, setTheme: setThemeWithTransition };
};