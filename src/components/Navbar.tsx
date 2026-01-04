import React, { useEffect, useState } from 'react'
import {
  FiMenu,
  FiHome,
  FiBriefcase,
  FiTool,
  FiMail,
  FiDownload,
  FiGlobe
} from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'
import { useLanguage } from '../context/LanguageContext'
import type { Section, SetActive } from '../types';

type HeaderProps = {
  activeSection: Section
  setActiveSection: SetActive
}

export const Navbar: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const { lang, toggleLanguage } = useLanguage()
  const { theme, setTheme } = useTheme();

  const [expanded, setExpanded] = useState<boolean>(() => {
    try {
      const v = localStorage.getItem('sidebarExpanded')
      return v ? JSON.parse(v) : false
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('sidebarExpanded', JSON.stringify(expanded))
    } catch {}
  }, [expanded])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '1') setActiveSection('home')
      if (e.key === '2') setActiveSection('projects')
      if (e.key === '3') setActiveSection('skills')
      if (e.key === '4') setActiveSection('contact')
      if (e.key.toLowerCase() === 'm') setExpanded((v) => !v)
      if (e.key.toLowerCase() === 'l') toggleLanguage()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [setActiveSection, toggleLanguage])

  const nav = [
    { id: 'home', label: 'Home', Icon: FiHome },
    { id: 'projects', label: 'Projects', Icon: FiBriefcase },
    { id: 'skills', label: 'Skills', Icon: FiTool },
    { id: 'contact', label: 'Contact', Icon: FiMail },
  ]

  // Clases base para los items del menu
  const navItemClasses = (id: string) => `
    relative flex items-center gap-3 p-2.5 rounded-[10px] cursor-pointer
    text-[var(--text-primary)] transition-all duration-300 ease-out
    focus:outline-2 focus:outline-[rgba(99,83,242,0.18)] focus:outline-offset-3
    hover:bg-linear-to-r hover:from-white/10 hover:to-white/5 hover:-translate-x-2 hover:scale-[1.02]
    hover:shadow-[0_2px_12px_rgba(139,92,246,0.15)]
    active:scale-95
    ${activeSection === id 
      ? 'bg-linear-to-r from-[#8b5cf6]/15 to-[#6353f2]/5 shadow-[inset_-2px_0_0_rgba(139,92,246,0.35),0_2px_16px_rgba(139,92,246,0.2)] text-white scale-[1.01]' 
      : ''}
    /* Responsive overrides */
    max-[880px]:justify-center max-[880px]:p-4 max-[880px]:hover:transform-none max-[880px]:hover:bg-transparent
  `

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen flex flex-col justify-between items-stretch
        bg-[var(--surface)] backdrop-blur-xl color-[var(--text-primary)] 
        shadow-[-8px_0_24px_rgba(0,0,0,0.5)] z-[999]
        border-r border-[#8b5cf6]/10 overflow-visible
        transition-[width,padding,background,border-color,shadow] duration-300 ease-[cubic-bezier(.2,.9,.2,1)]
        hover:border-[#8b5cf6]/20 hover:shadow-[-12px_0_32px_rgba(139,92,246,0.15)]
        animate-in slide-in-from-left-8 fade-in duration-500
        ${expanded ? 'w-[var(--sidebar-expanded)] px-4 py-5' : 'w-[var(--sidebar-collapsed)] px-2 py-4'}
        
        /* Mobile / Tablet (< 880px) Overrides - Bottom Bar */
        max-[880px]:!top-auto max-[880px]:!bottom-0 max-[880px]:!w-full max-[880px]:!h-[var(--sidebar-mobile-height)]
        max-[880px]:!left-0 max-[880px]:flex-row max-[880px]:items-center max-[880px]:justify-center
        max-[880px]:p-2 max-[880px]:rounded-t-xl max-[880px]:z-[1005]
      `}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      aria-expanded={expanded}
    >
      {/* --- TOP SECTION --- */}
      <div className={`flex flex-col gap-4 items-center pt-2.5 max-[880px]:flex-row max-[880px]:gap-0 max-[880px]:pt-0 ${expanded ? 'items-start': ''}`}>
        
        {/* Toggle Button (Hidden on Mobile) */}
        <button
          className={`
            bg-transparent border-none w-10 h-[30px] rounded-[10px] text-[var(--text-primary)]
            inline-flex items-center justify-center cursor-pointer text-xl mb-2
            transition-all duration-300 ease-out 
            hover:-translate-y-1 hover:bg-linear-to-br hover:from-white/10 hover:to-white/5 
            hover:text-[var(--primary-color)] hover:scale-110 hover:rotate-3
            hover:shadow-[0_4px_12px_rgba(139,92,246,0.2)]
            active:scale-95 active:rotate-0
            focus:outline-2 focus:outline-[#8b5cf6]/35 focus:outline-offset-3
            max-[880px]:hidden
            animate-in fade-in zoom-in-95 duration-500 delay-100
          `}
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? 'Collapse menu' : 'Expand menu'}
          title={expanded ? 'Collapse (m)' : 'Expand (m)'}
        >
          <FiMenu />
        </button>

        {/* Brand / Logo */}
        <div className="flex items-center gap-3 justify-center text-[var(--primary-color)] whitespace-nowrap max-[880px]:hidden animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
          <div className={`
            bg-linear-to-br from-[#6353f2]/15 to-[#8b5cf6]/10 text-[var(--primary-color)] p-2 rounded-[25%] 
            inline-flex items-center justify-center
            transition-all duration-300 hover:scale-105 hover:rotate-2
            hover:shadow-[0_0_20px_rgba(99,83,242,0.3)]
            border border-[#8b5cf6]/10 hover:border-[#8b5cf6]/30
          `}>
            <img 
              className={`
                object-contain transition-all duration-500 ease-out
                hover:rotate-6 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(99,83,242,0.6)]
                ${expanded ? 'w-[70px]' : 'w-[40px]'}
              `}
              src="/Logo Mati.svg" 
              alt="Logo de Matías" // cspell:disable-line
            />
          </div>
          {expanded && (
            <div className="font-bold text-base whitespace-nowrap animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
              <span className="bg-linear-to-r from-[var(--primary-color)] via-purple-400 to-[var(--primary-color)] bg-clip-text text-transparent">
                Matías Chacón
              </span>
            </div>
          )}
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="flex-1 flex items-center justify-center max-[880px]:justify-start">
        <ul className="w-full list-none p-0 m-0 flex flex-col gap-2 items-center max-[880px]:flex-row max-[880px]:gap-0 max-[880px]:w-auto">
          {nav.map(({ id, label, Icon }, index) => (
            <li
              key={id}
              role="button"
              tabIndex={0}
              style={{ animationDelay: `${300 + index * 100}ms` }}
              className={`
                ${navItemClasses(id)}
                ${expanded ? 'justify-start px-3 py-3 w-[calc(100%-8px)]' : 'justify-center w-[calc(100%-8px)]'}
                animate-in fade-in slide-in-from-left-6 duration-500
              `}
              onClick={() => setActiveSection(id as Section)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveSection(id as Section)
              }}
              title={label}
              aria-pressed={activeSection === id}
            >
              {/* Active Indicator Bar */}
              {activeSection === id && (
                <span className={`
                  absolute -right-[15px] top-[12%] w-[6px] h-[76%] rounded-md
                  bg-linear-to-b from-[var(--primary-color)] via-purple-500 to-[#8a5af0]
                  shadow-[0_0_16px_rgba(99,83,242,0.85)] origin-center
                  animate-[indicator-in_0.3s_ease-out,pulse_2s_ease-in-out_infinite]
                  transition-all duration-200
                  before:absolute before:inset-0 before:rounded-md before:bg-linear-to-b before:from-white/30 before:to-transparent before:opacity-50
                  max-[880px]:-right-[3px] max-[880px]:top-[35%] max-[880px]:h-[35%]
                `} />
              )}
              
              <Icon className={`
                text-xl shrink-0 transition-all duration-300 ease-out
                ${activeSection === id ? 'scale-110 text-[var(--primary-color)] drop-shadow-[0_0_8px_rgba(99,83,242,0.6)]' : ''}
                hover:scale-125 hover:text-[var(--primary-color)] hover:rotate-6 hover:drop-shadow-[0_0_10px_rgba(99,83,242,0.5)]
                active:scale-95 active:rotate-0
              `} />
              
              {expanded && (
                <span className="font-semibold text-[0.98rem] text-[var(--text-primary)] whitespace-nowrap max-[880px]:hidden animate-in fade-in slide-in-from-left-2 duration-300 delay-150">
                  {label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* --- FOOTER / BOTTOM --- */}
      <div className="flex flex-col items-center gap-3 p-4 max-[880px]:flex-row max-[880px]:items-center max-[880px]:justify-center max-[880px]:p-2 max-[880px]:gap-2">
        
        {/* CV Download Button - Primary CTA */}
        <a
          className={`
            relative inline-flex items-center justify-center gap-2.5 overflow-hidden
            bg-linear-to-r from-[#8b5cf6] to-[#6353f2] text-white font-bold
            rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.4)]
            hover:shadow-[0_6px_20px_rgba(139,92,246,0.6)] hover:scale-105
            active:scale-95 transition-all duration-200 cursor-pointer
            before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent
            before:translate-x-[-200%] before:skew-x-[-20deg] hover:before:translate-x-[200%]
            before:transition-transform before:duration-700 before:ease-out
            after:absolute after:inset-0 after:rounded-xl after:opacity-75
            after:animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]
            after:shadow-[0_0_0_0_rgba(139,92,246,0.7)]
            ${expanded ? 'px-4 py-3 w-full' : 'w-[44px] h-[44px] p-2'}
            max-[880px]:w-auto max-[880px]:px-4 max-[880px]:py-2.5
          `}
          href="/CV/CV Matias Chacon.pdf"
          download
          title="Descargar CV"
          aria-label="Descargar CV"
        >
          <FiDownload className={`${expanded ? 'text-lg' : 'text-xl'} max-[880px]:text-lg relative z-10`} />
          {expanded && <span className="text-sm whitespace-nowrap max-[880px]:inline relative z-10">Descargar CV</span>}
        </a>

        {/* Accessibility Controls Container */}
        <div className={`flex items-center gap-2 ${expanded ? 'justify-between' : 'flex-col gap-2'} max-[880px]:flex-row max-[880px]:gap-2`}>
          
          {/* Theme Toggle Wrapper */}
          <div className="max-[880px]:hidden">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

          {/* Language Toggle */}
          <button
            className={`
              bg-linear-to-br from-white/5 to-white/3 border border-white/10 rounded-[10px]
              text-[var(--text-primary)] inline-flex items-center justify-center cursor-pointer gap-2
              transition-all duration-300 ease-out
              hover:bg-linear-to-br hover:from-white/15 hover:to-white/8 
              hover:border-[#8b5cf6]/30 hover:text-[var(--primary-color)] hover:scale-105
              hover:shadow-[0_4px_16px_rgba(139,92,246,0.2)]
              active:scale-95
              focus:outline-2 focus:outline-[#8b5cf6]/35 focus:outline-offset-2
              animate-in fade-in zoom-in-95 duration-500 delay-500
              ${expanded ? 'px-3 py-2 w-full' : 'w-[44px] h-[44px] p-2'}
              max-[880px]:w-[44px] max-[880px]:h-[44px] max-[880px]:p-2
            `}
            onClick={() => toggleLanguage()}
            aria-label={`Cambiar idioma — ${lang === 'en' ? 'English' : 'Español'}`}
            title={`Toggle language (L). Actual: ${lang}`}
          >
            <FiGlobe className="text-lg transition-transform duration-500 ease-out hover:rotate-180 hover:scale-110" />
            {expanded && (
              <span className="font-semibold text-xs text-[var(--text-primary)] max-[880px]:hidden animate-in fade-in slide-in-from-left-2 duration-300 delay-100">
                {lang.toUpperCase()}
              </span>
            )}
          </button>
        </div>
      </div>
    </aside>
  )
}