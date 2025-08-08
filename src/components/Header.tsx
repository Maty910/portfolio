import { useState } from 'react'
import CodeIcon from '@mui/icons-material/Code';

export function Header({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSectionClick = (section) => {
    setActiveSection(section)
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header__logo">
        <h1>Matías Chacón <CodeIcon /></h1>
        <p>Full-stack Developer</p>
      </div>
      
      <div className="cta">
        <a className="btn-primary" href="/Desarrollador FullStack CV - Matías Chacón.pdf" download>
          Descargar CV
        </a>
      </div>

      <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {['home', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section}>
              <a
                onClick={() => handleSectionClick(section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__menu-btn" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  )
}
