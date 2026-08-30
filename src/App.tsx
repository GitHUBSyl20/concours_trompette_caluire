import CategoriesSection from './components/CategoriesSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import JurySection from './components/JurySection'
import PartnersSection from './components/PartnersSection'
import RegistrationSection from './components/RegistrationSection'
import RulesSection from './components/RulesSection'
import StickyNav from './components/StickyNav'

/**
 * Landing page du 1er concours de trompette de Caluire-et-Cuire.
 * L'ordre des sections suit celui défini dans CLAUDE.md.
 */
function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <Header />
      <StickyNav />

      <main id="contenu">
        <Hero />
        <IntroSection />
        <CategoriesSection />
        <RulesSection />
        <JurySection />
        <PartnersSection />
        <RegistrationSection />
      </main>

      <Footer />
    </>
  )
}

export default App
