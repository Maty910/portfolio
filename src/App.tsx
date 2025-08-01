import { useState } from 'react'
import { Page } from './components/Page'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <>
      <Page>
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        {renderActiveSection()}
        <Footer />
      </Page>
    </>
  )
}

export default App