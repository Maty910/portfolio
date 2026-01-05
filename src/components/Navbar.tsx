import React, { useEffect, useState } from 'react'
import {
  FiMenu,
  FiHome,
  FiBriefcase,
  FiTool,
  FiMail,
  FiDownload
} from 'react-icons/fi'
import { Sun, Moon, Languages } from 'lucide-react' // Usamos Lucide para iconos más modernos
import { useTheme } from '../hooks/useTheme'
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

  // Estado del sidebar
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

  // Shortcuts de teclado
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
    { id: 'home', label: 'Home', Icon: FiHome },
    { id: 'projects', label: 'Projects', Icon: FiBriefcase },
    { id: 'skills', label: 'Skills', Icon: FiTool },
    { id: 'contact', label: 'Contact', Icon: FiMail },
  ]

  // Componente de Botón de Configuración Reutilizable
  const ConfigButton = ({ 
    onClick, 
    icon: Icon, 
    label, 
    active, 
    delay = 0 
  }: { 
    onClick: () => void, 
    icon: any, 
    label: string, 
    active?: boolean,
    delay?: number 
  }) => (
    <button
      onClick={onClick}
      className={`
        relative group flex items-center justify-center
        bg-white/5 border border-white/10 text-[#a7a9be]
        hover:bg-white/10 hover:text-white hover:border-white/20
        transition-all duration-300 ease-out overflow-hidden
        focus:outline-none focus:ring-2 focus:ring-[#6353f2]/50
        active:scale-95
        /* Dimensiones dinámicas según estado expandido */
        ${expanded ? 'w-full px-3 py-2.5 rounded-xl gap-3' : 'w-11 h-11 p-0 rounded-xl'}
      `}
      title={expanded ? '' : label}
    >
      {/* Icono con animación de rotación/escala */}
      <div className={`
        relative flex items-center justify-center transition-all duration-300
        ${active ? 'text-[#6353f2] rotate-0 scale-110' : 'group-hover:rotate-12 group-hover:text-white'}
      `}>
        <Icon size={expanded ? 18 : 20} />
      </div>

      {/* Texto que aparece suavemente */}
      <span className={`
        text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300
        ${expanded ? 'opacity-100 w-auto translate-x-0' : 'opacity-0 w-0 -translate-x-4 absolute pointer-events-none'}
      `}>
        {label}
      </span>
    </button>
  );

  return (
    <>
      <aside
        className={`
          z-[999] transition-[width,padding,background] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          
          /* --- DESKTOP (Sidebar) --- */
          min-[881px]:fixed min-[881px]:left-0 min-[881px]:top-0 min-[881px]:h-screen
          min-[881px]:flex min-[881px]:flex-col min-[881px]:justify-between
          min-[881px]:bg-[#0f0e17]/80 min-[881px]:backdrop-blur-xl
          min-[881px]:border-r min-[881px]:border-white/5
          min-[881px]:shadow-[-10px_0_30px_rgba(0,0,0,0.5)]
          ${expanded ? 'min-[881px]:w-[240px] min-[881px]:px-5' : 'min-[881px]:w-[88px] min-[881px]:px-4'}
          min-[881px]:py-6

          /* --- MOBILE (Bottom Dock) --- */
          max-[880px]:fixed max-[880px]:bottom-6 max-[880px]:left-4 max-[880px]:right-4
          max-[880px]:h-16 max-[880px]:rounded-2xl
          max-[880px]:bg-[#16161e]/90 max-[880px]:backdrop-blur-2xl
          max-[880px]:border max-[880px]:border-white/10
          max-[880px]:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
          max-[880px]:flex max-[880px]:items-center max-[880px]:justify-around
          max-[880px]:px-2
        `}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        aria-expanded={expanded}
      >
        
        {/* --- 1. TOP SECTION --- */}
        <div className={`hidden min-[881px]:flex flex-col gap-6 items-center w-full transition-all duration-500 ${expanded ? 'items-start' : ''}`}>
          
          {/* Toggle Button */}
          <button
            className={`
              bg-transparent border-none w-10 h-10 rounded-xl text-[var(--text-primary)]
              flex items-center justify-center cursor-pointer text-xl
              transition-all hover:bg-white/10 hover:text-[#6353f2] active:scale-90
            `}
            onClick={() => setExpanded((v) => !v)}
            title="Toggle Menu (M)"
          >
            <FiMenu />
          </button>

          {/* Logo */}
          <div className={`flex items-center gap-3 overflow-hidden whitespace-nowrap transition-all duration-500 ${expanded ? 'w-full' : 'w-10'}`}>
            <div className={`
              relative flex items-center justify-center shrink-0 p-2 rounded-xl
              bg-gradient-to-br from-[#6353f2]/20 to-[#8b5cf6]/10
              border border-[#6353f2]/20 shadow-[0_0_15px_rgba(99,83,242,0.15)]
              transition-all duration-500
              ${expanded ? 'w-10 h-10' : 'w-10 h-10 hover:scale-110'}
            `}>
              <img src="/Logo Mati.svg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            
            <div className={`flex flex-col justify-center transition-all duration-300 ${expanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
              <span className="font-bold text-white text-sm leading-tight">Matías Chacón</span>
              <span className="text-[10px] text-[#a7a9be] uppercase tracking-wider">Full Stack Dev</span>
            </div>
          </div>
        </div>

        {/* --- 2. NAVIGATION --- */}
        <nav className="flex-1 flex items-center w-full max-[880px]:h-full">
          <ul className="w-full list-none p-0 m-0 flex flex-col gap-2 max-[880px]:flex-row max-[880px]:justify-between max-[880px]:items-center max-[880px]:w-full max-[880px]:h-full">
            {nav.map(({ id, label, Icon }) => {
              const isActive = activeSection === id;
              
              return (
                <li key={id} className="relative group w-full max-[880px]:w-auto max-[880px]:h-full max-[880px]:flex-1">
                  <button
                    onClick={() => scrollToSection(id as Section)}
                    className={`
                      relative w-full flex items-center p-3 rounded-xl cursor-pointer border border-transparent
                      transition-all duration-300 ease-out outline-none overflow-hidden
                      min-[881px]:hover:bg-white/5 min-[881px]:hover:border-white/5
                      ${isActive ? 'min-[881px]:bg-[#6353f2]/10 min-[881px]:border-[#6353f2]/20' : ''}
                      ${expanded ? 'min-[881px]:gap-3' : 'min-[881px]:gap-0 min-[881px]:justify-center'}
                      max-[880px]:flex-col max-[880px]:justify-center max-[880px]:gap-1 max-[880px]:h-full max-[880px]:p-1 max-[880px]:rounded-lg
                    `}
                    title={label}
                  >
                    {isActive && (
                      <>
                        <span className="max-[880px]:hidden absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#6353f2] rounded-r-full shadow-[0_0_10px_#6353f2]" />
                        <span className="min-[881px]:hidden absolute top-2 w-1 h-1 bg-[#6353f2] rounded-full shadow-[0_0_8px_#6353f2]" />
                      </>
                    )}

                    <Icon className={`text-xl transition-all duration-300 shrink-0 ${isActive ? 'text-[#6353f2] scale-110 drop-shadow-[0_0_5px_rgba(99,83,242,0.5)]' : 'text-[#a7a9be] group-hover:text-white'}`} />

                    <span className={`
                      font-medium text-sm transition-all duration-300 whitespace-nowrap
                      ${isActive ? 'text-white' : 'text-[#a7a9be] group-hover:text-white'}
                      ${!expanded ? 'min-[881px]:opacity-0 min-[881px]:w-0 min-[881px]:translate-x-4' : 'min-[881px]:opacity-100 min-[881px]:w-auto min-[881px]:translate-x-0'}
                      max-[880px]:text-[10px]
                    `}>
                      {label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* --- 3. BOTTOM SECTION (Settings & CV) --- */}
        <div className="max-[880px]:hidden flex flex-col gap-4 pt-4 border-t border-white/5 w-full">
          
          {/* CV Button */}
          <a
            href="/CV/CV Matias Chacon.pdf"
            download
            className={`
              group relative flex items-center justify-center rounded-xl overflow-hidden
              bg-linear-to-r from-[#8b5cf6] to-[#6353f2] text-white font-bold
              shadow-[0_4px_14px_rgba(139,92,246,0.4)]
              transition-all duration-300 ease-out
              hover:shadow-[0_6px_20px_rgba(139,92,246,0.6)] hover:scale-[1.02] active:scale-95
              h-11
              ${expanded ? 'w-full px-4 gap-3' : 'w-11 px-0 gap-0'}
            `}
            title="Download CV"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
            <FiDownload className="text-xl shrink-0 relative z-20" />
            <span className={`text-sm whitespace-nowrap overflow-hidden transition-all duration-300 relative z-20 ${expanded ? 'opacity-100 w-auto ml-1' : 'opacity-0 w-0 ml-0'}`}>
              Descargar CV
            </span>
          </a>

          {/* SETTINGS GRID - ANIMACIÓN MEJORADA */}
          {/* Usamos grid para que la transición de layout sea sólida */}
          <div className={`
            grid transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] gap-3
            ${expanded ? 'grid-cols-2' : 'grid-cols-1'}
          `}>
            
            <ConfigButton 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              icon={theme === 'dark' ? Moon : Sun}
              label={theme === 'dark' ? 'Dark' : 'Light'}
              active={false} // Siempre neutro o activo según prefieras
            />

            <ConfigButton 
              onClick={toggleLanguage}
              icon={Languages}
              label={lang.toUpperCase()}
              active={lang === 'en'} // Highlight si es inglés por ejemplo, o sacar prop
            />
            
          </div>
        </div>

      </aside>

      <style>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
      `}</style>

      {/* ========================================
        MOBILE SETTINGS (Top Left)
        ========================================
        Movido a la IZQUIERDA para equilibrar con el Logo (derecha).
      */}
      <div className="lg:hidden fixed top-6 left-6 z-50 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
        
        {/* Glass Pill Container */}
        <div className="flex items-center p-1.5 rounded-full bg-[#16161e]/60 backdrop-blur-md border border-white/10 shadow-lg gap-1">
          
          {/* Theme Toggle Mobile */}
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#a7a9be] hover:text-white hover:bg-white/10 transition-all active:scale-90"
          >
            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <div className="w-[1px] h-4 bg-white/10"></div>

          {/* Lang Toggle Mobile */}
          <button
            onClick={toggleLanguage}
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#a7a9be] hover:text-white hover:bg-white/10 transition-all active:scale-90"
          >
            <span className="text-[10px] font-bold">{lang.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </>
  )
}