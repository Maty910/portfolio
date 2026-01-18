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

  return { theme, setTheme };
};