import { useState } from 'react'
import { Page } from './components/Page'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { LanguageProvider } from './context/LanguageContext'
import { Footer } from './components/Footer'
import type { Section } from './types'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home')

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home': return <Home setActiveSection={setActiveSection} />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
      case 'projectpage': return null;
      default: return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <LanguageProvider>
      <Page>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="main-content">
          {renderActiveSection()}
        </main>

        <Footer />
      </Page>
    </LanguageProvider>
  );
}

export default App;