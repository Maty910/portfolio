import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  FiMenu,
  FiHome,
  FiBriefcase,
  FiTool,
  FiMail,
  FiDownload
} from 'react-icons/fi'
import { Sun, Moon, Languages, Globe } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../context/LanguageContext'
import type { Section, SetActive } from '../types';

type HeaderProps = {
  activeSection: Section
  setActiveSection: SetActive
}

// --- 1. COMPONENTE ANIMADO TEMA (BOUNCY POP) ---
const AnimatedThemeIcon = ({ isDark, size = 20 }: { isDark: boolean; size?: number }) => (
  <div className="relative flex items-center justify-center overflow-hidden" style={{ width: size, height: size }}>
    <Sun 
      size={size}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
        ${isDark 
          ? 'scale-0 rotate-[180deg] opacity-0' 
          : 'scale-100 rotate-0 opacity-100 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]' 
        }
      `} 
    />
    <Moon 
      size={size}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
        ${isDark 
          ? 'scale-100 rotate-0 opacity-100 text-primary drop-shadow-[0_0_8px_rgba(99,83,242,0.6)]' 
          : 'scale-0 -rotate-[180deg] opacity-0' 
        }
      `} 
    />
  </div>
);

// --- 2. COMPONENTE ANIMADO IDIOMA (FLIP 3D) ---
const AnimatedLangIcon = ({ lang, size = 20 }: { lang: 'es' | 'en'; size?: number }) => (
  <div className="relative flex items-center justify-center" style={{ width: size, height: size, perspective: '1000px' }}>
    <div className={`relative w-full h-full transition-transform duration-700 preserve-3d`} style={{ transformStyle: 'preserve-3d', transform: lang === 'en' ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
      <div className="absolute inset-0 flex items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
        <Globe size={size} className="text-primary drop-shadow-[0_0_8px_rgba(99,83,242,0.4)]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
        <Languages size={size} className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
      </div>
    </div>
  </div>
);

export const Navbar: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const { lang, toggleLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const [langPulse, setLangPulse] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [expanded, setExpanded] = useState<boolean>(() => {
    try {
      const v = localStorage.getItem('sidebarExpanded')
      return v ? JSON.parse(v) : false
    } catch {
      return false
    }
  })

  useEffect(() => { setLangPulse(true); const id = setTimeout(() => setLangPulse(false), 700); return () => clearTimeout(id); }, [lang]);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { try { localStorage.setItem('sidebarExpanded', JSON.stringify(expanded)) } catch {} }, [expanded])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '1') scrollToSection('home')
      if (e.key === '2') scrollToSection('projects')
      if (e.key === '3') scrollToSection('skills')
      if (e.key === '4') scrollToSection('contact')
      if (e.key.toLowerCase() === 'm') setExpanded((v) => !v)
      if (e.key.toLowerCase() === 'l') toggleLanguage()
      if (e.key.toLowerCase() === 't') setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [toggleLanguage, theme, setTheme])

  const scrollToSection = (sectionId: Section) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const nav = [
    { id: 'home', label: t('nav.home'), Icon: FiHome },
    { id: 'projects', label: t('nav.projects'), Icon: FiBriefcase },
    { id: 'skills', label: t('nav.skills'), Icon: FiTool },
    { id: 'contact', label: t('nav.contact'), Icon: FiMail },
  ]

  return (
    <>
      <aside
        className={`
          z-[999] transition-[width,padding,background,border] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          
          /* --- DESKTOP (Sidebar) --- */
          min-[881px]:fixed min-[881px]:left-0 min-[881px]:top-0 min-[881px]:h-screen
          min-[881px]:flex min-[881px]:flex-col min-[881px]:justify-between
          min-[881px]:bg-bg-base/80 min-[881px]:backdrop-blur-xl
          min-[881px]:border-r min-[881px]:border-text-primary/5
          /* FIX: Sombra adaptativa */
          min-[881px]:shadow-[10px_0_30px_rgba(0,0,0,0.05)] dark:min-[881px]:shadow-[-10px_0_30px_rgba(0,0,0,0.5)]
          ${expanded ? 'min-[881px]:w-[240px] min-[881px]:px-5' : 'min-[881px]:w-[88px] min-[881px]:px-4'}
          min-[881px]:py-6

          /* --- MOBILE (Bottom Dock) --- */
          max-[880px]:fixed max-[880px]:bottom-6 max-[880px]:left-4 max-[880px]:right-4
          max-[880px]:h-16 max-[880px]:rounded-2xl
          max-[880px]:bg-bg-base/90 max-[880px]:backdrop-blur-2xl
          max-[880px]:border max-[880px]:border-text-primary/10
          max-[880px]:shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:max-[880px]:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
          max-[880px]:flex max-[880px]:items-center max-[880px]:justify-around
          max-[880px]:px-2
        `}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        aria-expanded={expanded}
      >
        
        <div className={`hidden min-[881px]:flex flex-col gap-6 items-center w-full transition-all duration-[800ms] ${expanded ? 'items-start' : ''}`}>
          <button
            className="bg-transparent border-none w-10 h-10 rounded-xl text-text-primary flex items-center justify-center cursor-pointer text-xl transition-all hover:bg-text-primary/10 hover:text-primary active:scale-90"
            onClick={() => setExpanded((v) => !v)}
            title={t('nav.toggleMenu')}
          >
            <FiMenu />
          </button>

          <div className={`flex items-center gap-3 overflow-hidden whitespace-nowrap transition-all duration-[800ms] ${expanded ? 'w-full' : 'w-10'}`}>
            <div className={`relative flex items-center justify-center shrink-0 p-2 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 transition-all duration-[800ms] ${expanded ? 'w-10 h-10' : 'w-10 h-10 hover:scale-110'}`}>
              <img src="/Logo Mati.svg" alt={t('alt.logo')} className="w-full h-full object-contain" />
            </div>
            <div className={`flex flex-col justify-center transition-all duration-[800ms] ${expanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
              <span className="font-bold text-text-primary text-sm leading-tight">{t('header.displayName')}</span>
              <span className="text-[8px] text-text-secondary uppercase tracking-tight">{t('header.name')}</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 flex items-center w-full max-[880px]:h-full">
          <ul className="w-full list-none p-0 m-0 flex flex-col gap-2 max-[880px]:flex-row max-[880px]:justify-between max-[880px]:items-center max-[880px]:w-full max-[880px]:h-full">
            {nav.map(({ id, label, Icon }) => {
              const isActive = activeSection === id;
              return (
                <li key={id} className="relative group w-full max-[880px]:w-auto max-[880px]:h-full max-[880px]:flex-1">
                  <button
                    onClick={() => scrollToSection(id as Section)}
                    className={`relative w-full flex items-center p-3 rounded-xl cursor-pointer border border-transparent transition-all duration-300 ease-out outline-none overflow-hidden min-[881px]:hover:bg-text-primary/5 min-[881px]:hover:border-text-primary/5 ${isActive ? 'min-[881px]:bg-primary/10 min-[881px]:border-primary/20' : ''} ${expanded ? 'min-[881px]:gap-3' : 'min-[881px]:gap-0 min-[881px]:justify-center'} max-[880px]:flex-col max-[880px]:justify-center max-[880px]:gap-1 max-[880px]:h-full max-[880px]:p-1 max-[880px]:rounded-lg`}
                    title={label}
                  >
                    {isActive && (
                      <>
                        <span className="max-[880px]:hidden absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full shadow-[0_0_10px_rgba(99,83,242,0.4)]" />
                        <span className="min-[881px]:hidden absolute top-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(99,83,242,0.4)]" />
                      </>
                    )}
                    <Icon className={`text-xl transition-all duration-300 shrink-0 ${isActive ? 'text-primary scale-110' : 'text-text-secondary group-hover:text-text-primary'}`} />
                    <span className={`font-medium text-sm transition-all duration-300 whitespace-nowrap ${isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'} ${!expanded ? 'min-[881px]:opacity-0 min-[881px]:w-0 min-[881px]:translate-x-4' : 'min-[881px]:opacity-100 min-[881px]:w-auto min-[881px]:translate-x-0'} max-[880px]:text-[10px]`}>
                      {label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={`max-[880px]:hidden flex flex-col gap-4 pt-4 border-t border-text-primary/10 w-full ${!expanded ? 'items-center' : ''}`}>
          <a
            href="/CV/CV Matias Chacon.pdf"
            download
            className={`group btn-shiny relative flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white font-bold shadow-[0_4px_14px_rgba(99,83,242,0.3)] transition-all duration-300 ease-out hover:shadow-[0_6px_20px_rgba(99,83,242,0.5)] hover:scale-[1.02] active:scale-95 h-11 ${expanded ? 'w-full px-4 gap-3' : 'w-11 px-0 gap-0'}`}
            title={t('header.downloadCv')}
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
            <FiDownload className="text-xl shrink-0 relative z-20" />
            <span className={`text-sm whitespace-nowrap overflow-hidden transition-all duration-300 relative z-20 ${expanded ? 'opacity-100 w-auto ml-1' : 'opacity-0 w-0 ml-0 absolute'}`}>
              {t('header.downloadCv')}
            </span>
          </a>

          <div className={`flex flex-col gap-3 ${!expanded ? 'items-center' : 'items-stretch'}`}>
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`relative group flex items-center rounded-xl bg-text-primary/5 border border-text-primary/10 text-text-secondary hover:bg-text-primary/10 hover:text-text-primary hover:border-text-primary/20 transition-all duration-300 ease-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 h-11 ${expanded ? 'w-full gap-3 px-3 justify-start' : 'w-11 p-0 justify-center'}`}
              title={t('theme.toggle')}
            >
              <div className="shrink-0 flex items-center justify-center w-5 h-5"><AnimatedThemeIcon isDark={isDark} size={expanded ? 18 : 20} /></div>
              <span className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${expanded ? 'opacity-100 w-auto translate-x-0' : 'opacity-0 w-0 -translate-x-4 absolute pointer-events-none'}`}>
                {isDark ? t('theme.dark') : t('theme.light')}
              </span>
            </button>

            <button
              onClick={toggleLanguage}
              className={`relative group flex items-center rounded-xl bg-text-primary/5 border border-text-primary/10 text-text-secondary hover:bg-text-primary/10 hover:text-text-primary hover:border-text-primary/20 transition-all duration-300 ease-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 h-11 ${expanded ? 'w-full gap-3 px-3 justify-start' : 'w-11 p-0 justify-center'}`}
              title={t('nav.toggleLang')}
            >
              <div className="shrink-0 flex items-center justify-center w-5 h-5"><AnimatedLangIcon lang={lang} size={expanded ? 18 : 20} /></div>
              <span className={`text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${expanded ? 'opacity-100 w-auto translate-x-0' : 'opacity-0 w-0 -translate-x-4 absolute pointer-events-none'}`}>
                {lang === 'en' ? 'English' : 'Español'}
              </span>
            </button>
          </div>
        </div>
      </aside>

      <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>

      {mounted && createPortal(
        <div className="lg:hidden fixed top-5 right-5 z-[100000] flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
          <div className="flex items-center p-1.5 rounded-full bg-bg-base/90 backdrop-blur-xl border border-text-primary/10 shadow-xl gap-1">
            <button 
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="w-10 h-10 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-text-primary/10 transition-all active:scale-90"
              title={t('theme.toggle')}
            >
              <AnimatedThemeIcon isDark={isDark} size={18} />
            </button>
            <div className="w-[1px] h-5 bg-text-primary/10"></div>
            <button
              onClick={toggleLanguage}
              className={`h-10 pl-2 pr-3 rounded-full flex items-center gap-1.5 text-text-secondary hover:text-text-primary hover:bg-text-primary/10 transition-all active:scale-90 ${langPulse ? 'animate-pulse' : ''}`}
              title={t('nav.toggleLang')}
            >
              <AnimatedLangIcon lang={lang} size={16} />
              <span className="text-[10px] font-bold tracking-wide">{lang.toUpperCase()}</span>
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}