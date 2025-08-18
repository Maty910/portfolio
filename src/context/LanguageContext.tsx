// src/context/LanguageContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from '../i18n';

type Lang = 'en' | 'es';
type LangContext = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LangContext | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const v = localStorage.getItem('siteLang');
      return (v === 'es' ? 'es' : 'en') as Lang;
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('siteLang', lang);
    } catch {}
  }, [lang]);

  const toggleLanguage = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'));

  // t admite rutas con puntos. Ej: "header.bio"
  const t = (key: string) => {
    try {
      const parts = key.split('.');
      let cur: any = (translations as any)[lang];
      for (const p of parts) {
        if (!cur) return key;
        cur = cur[p];
      }
      return typeof cur === 'string' ? cur : key;
    } catch {
      return key;
    }
  };

  const value = useMemo(() => ({ lang, setLang, toggleLanguage, t }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
