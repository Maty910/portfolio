import { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';

export function Header({ activeSection, setActiveSection }) {
  // persistir estado para que no se cierre al refrescar (opcional)
  const [isExpanded, setIsExpanded] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('sidebarExpanded')) ?? false
    } catch {
      return false
    }
  })

  useEffect(() => {
    try { localStorage.setItem('sidebarExpanded', JSON.stringify(isExpanded)) } catch {}
  }, [isExpanded])

  const sections = [
    { id: 'home', label: 'Home', Icon: HomeIcon },
    { id: 'projects', label: 'Projects', Icon: WorkIcon },
    { id: 'skills', label: 'Skills', Icon: BuildIcon },
    { id: 'contact', label: 'Contact', Icon: EmailIcon },
  ]

  const handleKeySelect = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveSection(id)
    }
  }

  return (
    <aside
      className={`app-sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      aria-expanded={isExpanded}
    >
      <div className="sidebar-top">
        <button
          className="sidebar-toggle"
          onClick={() => setIsExpanded(v => !v)}
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <MenuIcon />
        </button>

        <div className="sidebar-brand" role="img" aria-label="Matías Chacón">
          {isExpanded && <div className="brand-text">Matías Chacón</div>}
          <CodeIcon className="brand-icon" />
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <ul>
          {sections.map(({ id, label, Icon }) => (
            <li
              key={id}
              className={activeSection === id ? 'active' : ''}
              onClick={() => setActiveSection(id)}
              onKeyDown={(e) => handleKeySelect(e, id)}
              tabIndex="0"
              role="button"
              aria-pressed={activeSection === id}
              title={label} /* tooltip when collapsed */
            >
              <Icon className="nav-icon" />
              {isExpanded && <span className="nav-label">{label}</span>}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <a
          href="/CV/Desarrollador FullStack CV - Matías Chacón.pdf"
          className="cv-btn"
          download
          title="Descargar CV"
        >
          <DescriptionIcon className="cv-icon" />
          {isExpanded && <span>Descargar CV</span>}
        </a>
      </div>
    </aside>
  )
}
