import { sectionContent } from '../data/siteData'
import RegistrationButton from './RegistrationButton'
import './Hero.css'

/**
 * Accroche d'ouverture, sous le bandeau.
 *
 * Le titre de la page (« Bienvenue au 1er concours… ») a rejoint le bandeau,
 * à droite du logo : il ne reste ici que l'accroche de la planche et le
 * bouton d'inscription — seul ajout par rapport à la maquette.
 *
 * Simple `div` et non `section` : sans titre propre, ce bloc n'est pas une
 * section à part entière.
 */
function Hero() {
  return (
    <div className="hero">
      <div className="container hero__inner">
        <p className="hero__subtitle">{sectionContent.hero.subtitle}</p>

        <RegistrationButton />
      </div>
    </div>
  )
}

export default Hero
