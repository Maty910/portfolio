import { useState, useEffect } from 'react'
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
  const [activeSection, setActiveSection] = useState<Section>('home');

  // Observar qué sección está visible para actualizar la navbar
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id as Section;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todas las secciones
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <LanguageProvider>
      {/* Pasamos activeSection a Page */}
      <Page activeSection={activeSection}>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="main-content scroll-container">
          <Home setActiveSection={setActiveSection} />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </Page>
    </LanguageProvider>
  );
}

export default App;