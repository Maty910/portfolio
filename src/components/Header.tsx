import { useState } from 'react'

export function Header({ activeSection, setActiveSection }) {
  const [isActive, setIsActive] = useState(false)
  
  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  const handleSectionClick = (section) => {
    setActiveSection(section)
  }

  return (
    <header className="header">
      <h1>Matías Chacón's Portfolio</h1>
      <nav>
        <ul>
          <li>
            <a 
              onClick={() => handleSectionClick('about')}
              className={activeSection === 'about' ? 'active' : ''}
              style={{ cursor: 'pointer' }}
            >
              About me
            </a>
          </li>
          <li>
            <a 
              onClick={() => handleSectionClick('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
              style={{ cursor: 'pointer' }}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              onClick={() => handleSectionClick('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
              style={{ cursor: 'pointer' }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}