import React, { useEffect, useState } from 'react'
import {
  FiMenu,
  FiHome,
  FiBriefcase,
  FiTool,
  FiMail,
  FiDownload,
  FiCode,
  FiGlobe
} from 'react-icons/fi'
import './Header.css'
import '../styles/buttons.css'
import { useTheme } from '../hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'
import { useLanguage } from '../context/LanguageContext'
import type { Section, SetActive } from '../types';

type HeaderProps = {
  activeSection: Section
  setActiveSection: SetActive
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const { lang, toggleLanguage } = useLanguage()

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

  const { theme, setTheme } = useTheme();

  return (
    <aside
      className={`app-sidebar ${expanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      aria-expanded={expanded}
    >
      <div className="sidebar-top">
        <button
          className="sidebar-toggle"
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? 'Collapse menu' : 'Expand menu'}
          title={expanded ? 'Collapse (m)' : 'Expand (m)'}
        >
          <FiMenu />
        </button>

        <div className="brand" aria-hidden>
          <div className="brand-avatar">
            <FiCode />
          </div>
          {expanded && <div className="brand-text">Matías Chacón</div>}
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Primary">
        <ul>
          {nav.map(({ id, label, Icon }) => (
            <li
              key={id}
              role="button"
              tabIndex={0}
              className={activeSection === id ? 'active' : ''}
              onClick={() => setActiveSection(id as Section)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveSection(id as Section)
              }}
              title={label}
              aria-pressed={activeSection === id}
            >
              {activeSection === id && <span className="indicator" />} {/* Indicador activo */}
              <Icon className="nav-icon" />
              {expanded && <span className="nav-label">{label}</span>}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <a
          className={`cv-btn pulse`}
          href="/CV/Desarrollador FullStack CV - Matías Chacón.pdf"
          download
          title="Descargar CV"
          aria-label="Descargar CV"
        >
          <FiDownload className="cv-icon" />
          {expanded && <span className="cv-text">Descargar CV</span>}
        </a>
      </div>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <button
            className="lang-toggle"
            onClick={() => toggleLanguage()}
            aria-label={`Cambiar idioma — ${lang === 'en' ? 'English' : 'Español'}`}
            title={`Toggle language (L). Actual: ${lang}`}
          >
            <FiGlobe />
            {expanded && <span className="lang-label">{lang.toUpperCase()}</span>}
          </button>
    </aside>
  )
}
