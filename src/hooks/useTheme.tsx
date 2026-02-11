import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  // Inicializamos el estado leyendo localStorage o la preferencia del sistema
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      // 1. Chequear si ya guardó una preferencia antes
      const storedTheme = localStorage.getItem("theme") as Theme;
      if (storedTheme) return storedTheme;

      // 2. Si no, chequear la preferencia del sistema operativo
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
      }
    }
    // 3. Default a Dark (porque somos devs y nos gusta lo oscuro)
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Aplicamos el atributo data-theme para tus variables CSS (:root[data-theme="light"])
    root.setAttribute("data-theme", theme);

    // Opcional: Agregar clase para tailwind si usás 'darkMode: class'
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    // Guardamos la elección para la próxima visita
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Función mejorada que acepta coordenadas para la animación
  const setThemeWithTransition = (newTheme: Theme, x?: number, y?: number) => {
    // Verificar si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Sin animación si el usuario prefiere reducir movimiento
      setTheme(newTheme);
      return;
    }

    // Si el navegador soporta View Transitions API
    const supportsViewTransitions = "startViewTransition" in document;
    const isMobile = window.innerWidth < 768;

    if (supportsViewTransitions && x !== undefined && y !== undefined) {
      // Calcular el radio máximo para que cubra toda la pantalla
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      // Optimización: Duraciones más cortas en mobile para mejor performance
      const animationDuration = isMobile ? 400 : 600;
      const easing = "cubic-bezier(0.25, 1, 0.5, 1)";

      // Forzar aceleración por hardware
      const root = document.documentElement;
      root.style.willChange = "contents";

      const transition = document.startViewTransition(() => {
        // Actualizar el estado de React
        setTheme(newTheme);
      });

      // Aplicar la animación circular cuando esté listo
      transition.ready
        .then(() => {
          // Aplicar clip-path al nuevo contenido
          document.documentElement.animate(
            {
              clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
            },
            {
              duration: animationDuration,
              easing: easing,
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch((error) => {
          console.error("View transition failed:", error);
        })
        .finally(() => {
          // Limpiar will-change después de la animación
          setTimeout(() => {
            root.style.willChange = "auto";
          }, animationDuration + 100);
        });
    } else {
      // Fallback: animación suave con fade para navegadores sin soporte
      document.documentElement.classList.add("theme-transitioning");
      setTheme(newTheme);
      setTimeout(
        () => {
          document.documentElement.classList.remove("theme-transitioning");
        },
        isMobile ? 300 : 400
      );
    }
  };

  return { theme, setTheme: setThemeWithTransition };
};
