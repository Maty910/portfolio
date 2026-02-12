import { useEffect, useState } from "react";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Page } from "./components/Page";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { LanguageProvider } from "./context/LanguageContext";
import type { Section } from "./types";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  // Observar qué sección está visible para actualizar la navbar
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
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
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <LanguageProvider>
      {/* Pasamos activeSection a Page */}
      <Intro onFinish={() => {}} />
      <Page activeSection={activeSection}>
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main id="main-content" className="main-content scroll-container" tabIndex={-1}>
          <Home setActiveSection={setActiveSection} />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </Page>
    </LanguageProvider>
  );
}

export default App;
