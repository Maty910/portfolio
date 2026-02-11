import { Moon, Sun } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";

type Theme = "light" | "dark";

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme, x?: number, y?: number) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  const isDark = theme === "dark";
  const { t } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Optimización: Aplicar will-change solo durante la animación
  useEffect(() => {
    if (buttonRef.current) {
      const icons = buttonRef.current.querySelectorAll("[data-icon]");
      icons.forEach((icon) => {
        (icon as HTMLElement).style.willChange = "transform, opacity";
        setTimeout(() => {
          (icon as HTMLElement).style.willChange = "auto";
        }, 600);
      });
    }
  }, [theme]);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Feedback táctil suave para mobile
    if (navigator.vibrate) navigator.vibrate(5);

    // Obtener coordenadas del click para la animación
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setTheme(isDark ? "light" : "dark", x, y);
  };

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="
        theme-toggle-button
        relative flex items-center justify-center p-2.5 rounded-lg 
        bg-white/5 border border-text-primary/10
        text-[#a7a9be] 
        transition-all duration-300 ease-out
        hover:bg-white/10 hover:border-white/20 hover:text-text-primary hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-[#6353f2]/50
        active:scale-95
        md:duration-500 md:ease-[cubic-bezier(0.25,1,0.5,1)]
      "
      title={isDark ? `${t("theme.light")}` : `${t("theme.dark")}`}
      aria-label={t("theme.toggle")}
    >
      {/* Contenedor con aceleración por hardware */}
      <div className="theme-toggle-icons relative w-5 h-5 overflow-hidden">
        {/* ICONO SOL (Modo Claro) */}
        <Sun
          size={20}
          data-icon="sun"
          className={`
            absolute inset-0 
            transition-all duration-300 ease-out
            md:duration-500 md:ease-[cubic-bezier(0.25,1,0.5,1)]
            ${
              isDark
                ? "rotate-90 opacity-0 scale-50 translate-y-2"
                : "rotate-0 opacity-100 scale-100 translate-y-0 text-amber-400"
            }
          `}
          style={{ transform: "translate3d(0, 0, 0)" }}
        />

        {/* ICONO LUNA (Modo Oscuro) */}
        <Moon
          size={20}
          data-icon="moon"
          className={`
            absolute inset-0 
            transition-all duration-300 ease-out
            md:duration-500 md:ease-[cubic-bezier(0.25,1,0.5,1)]
            ${
              isDark
                ? "rotate-0 opacity-100 scale-100 translate-y-0 text-[#6353f2]"
                : "-rotate-90 opacity-0 scale-50 -translate-y-2"
            }
          `}
          style={{ transform: "translate3d(0, 0, 0)" }}
        />
      </div>
    </button>
  );
};
