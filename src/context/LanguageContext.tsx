// src/context/LanguageContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import translations from '../i18n';
import type { Translations } from '../i18n/types';

type Lang = 'en' | 'es';
type LangContext = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  get: <T = any>(key: string) => T | undefined;
};

const LanguageContext = createContext<LangContext | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('siteLang');
      if (saved === 'en' || saved === 'es') return saved as Lang;

      // No saved preference: detectar idioma del sistema.
      // Por defecto mostramos español, salvo que el sistema indique inglés.
      if (typeof navigator !== 'undefined') {
        const sys = (navigator.language || (navigator as any).userLanguage || 'es').toLowerCase();
        return sys.startsWith('en') ? 'en' : 'es';
      }

      return 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('siteLang', lang);
    } catch {}
  }, [lang]);

  // Aplicar atributo lang en <html> por accesibilidad y SEO
  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    } catch {}
  }, [lang]);

  // ✅ OPTIMIZACIÓN: useCallback para función estable
  const toggleLanguage = useCallback(() => setLang((prev) => (prev === 'en' ? 'es' : 'en')), []);

  // ✅ OPTIMIZACIÓN: Memoizar las traducciones actuales para evitar accesos repetidos
  const currentTranslations = useMemo(() => translations[lang] as Translations, [lang]);

  // ✅ OPTIMIZACIÓN: useCallback con dependencia memoizada
  const t = useCallback((key: string): string => {
    try {
      const parts = key.split('.');
      let cur: any = currentTranslations;
      for (const p of parts) {
        if (!cur) return key;
        cur = cur[p];
      }
      return typeof cur === 'string' ? cur : key;
    } catch {
      return key;
    }
  }, [currentTranslations]);

  // ✅ OPTIMIZACIÓN: useCallback con tipado genérico
  const get = useCallback(<T = any>(key: string): T | undefined => {
    try {
      const parts = key.split('.');
      let cur: any = currentTranslations;
      for (const p of parts) {
        if (cur === undefined) return undefined;
        cur = cur[p];
      }
      return cur as T;
    } catch {
      return undefined;
    }
  }, [currentTranslations]);

  const value = useMemo(
    () => ({ lang, setLang, toggleLanguage, t, get }), 
    [lang, toggleLanguage, t, get]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
