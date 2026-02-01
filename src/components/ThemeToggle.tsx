import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type Theme = 'light' | 'dark';

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme, x?: number, y?: number) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  const isDark = theme === 'dark';
  const { t } = useLanguage();

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Agregamos un pequeño feedback táctil si el navegador lo soporta
    if (navigator.vibrate) navigator.vibrate(5);
    
    // Obtener las coordenadas del click para la animación
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    setTheme(isDark ? 'light' : 'dark', x, y);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative flex items-center justify-center p-2.5 rounded-lg 
        bg-white/5 border border-text-primary/10
        text-[#a7a9be] 
        transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
        /* Hover effects */
        hover:bg-white/10 hover:border-white/20 hover:text-text-primary hover:scale-105
        /* Focus styles */
        focus:outline-none focus:ring-2 focus:ring-[#6353f2]/50
        /* Active press */
        active:scale-90
      `}
      title={isDark ? `${t('theme.light')}` : `${t('theme.dark')}`}
      aria-label={t('theme.toggle')}
    >
      {/* Contenedor relativo para superponer los iconos */}
      <div className="relative w-5 h-5 overflow-hidden">
        
        {/* ICONO SOL (Modo Claro) */}
        <Sun 
          size={20}
          className={`
            absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            ${isDark 
              ? 'rotate-90 opacity-0 scale-50 translate-y-2' // Estado oculto (cuando es dark)
              : 'rotate-0 opacity-100 scale-100 translate-y-0 text-amber-400' // Estado visible (cuando es light)
            }
          `} 
        />
        
        {/* ICONO LUNA (Modo Oscuro) */}
        <Moon 
          size={20}
          className={`
            absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
            ${isDark 
              ? 'rotate-0 opacity-100 scale-100 translate-y-0 text-[#6353f2]' // Estado visible (cuando es dark)
              : '-rotate-90 opacity-0 scale-50 -translate-y-2' // Estado oculto (cuando es light)
            }
          `} 
        />
      </div>
    </button>
  );
};