import { useState } from 'react'
import CodeIcon from '@mui/icons-material/Code';

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
      <h1>Matías Chacón <CodeIcon /></h1>
      <p>Full-stack Developer</p>
      <nav>
        <ul>
          <li>
            <a 
              onClick={() => handleSectionClick('home')}
              className={activeSection === 'home' ? 'active' : ''}
              style={{ cursor: 'pointer' }}
            >
              Home
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
              onClick={() => handleSectionClick('skills')}
              className={activeSection === 'skills' ? 'active' : ''}
              style={{ cursor: 'pointer' }}
            >
              Skills
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