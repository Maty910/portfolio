import { useState } from 'react'
import { Page } from './components/Page'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { ProjectPage } from './components/ProjectPage'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />
      case 'projects':
        return <Projects setActiveSection={setActiveSection} />
      case 'projectpage':
        return <ProjectPage />
      case 'contact':
        return <Contact />
      case 'skills':
        return <Skills />
      default:
        return <Home />
    }
  }

  return (
    <>
      <Page>
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        {renderActiveSection()}
        <Footer />
      </Page>
    </>
  )
}

export default App
