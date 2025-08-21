import { useState } from 'react'
import { Page } from './components/Page'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { LanguageProvider } from './context/LanguageContext'
import type { Section, Project } from './types'

import './components/Sections.css'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const onOpenProject = (project: Project) => {
    setSelectedProject(project)
    // NO setActiveSection('projectpage');  <-- así no "ocultas" el contenido de fondo
  }

  const onCloseProject = () => {
    setSelectedProject(null)
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home': return <Home />;
      case 'projects': return <Projects setActiveSection={setActiveSection} onOpenProject={onOpenProject} />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
      case 'projectpage': return null; // o fallback si preferís mostrar algo
      default: return <Home />;
    }
  };

  return (
    <LanguageProvider>
      <Page>
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="main-content">
          {renderActiveSection()}
        </main>

        <ProjectModal project={selectedProject} onClose={onCloseProject} />
      </Page>
    </LanguageProvider>
  );
}

export default App;