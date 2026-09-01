import { sectionContent } from '../data/siteData'
import './Hero.css'

/**
 * Accroche d'ouverture, sous le bandeau.
 *
 * Le titre de la page (« Bienvenue au 1er concours… ») a rejoint le bandeau,
 * à droite du logo : il ne reste ici que l'accroche de la planche et le
 * bouton d'inscription — seul ajout par rapport à la maquette.
 *
 * Ce bouton mène à la section d'inscription et non directement à HelloAsso :
 * l'inscription demande deux démarches, et un raccourci vers l'une d'elles
 * laisserait croire qu'elle suffit.
 *
 * Simple `div` et non `section` : sans titre propre, ce bloc n'est pas une
 * section à part entière.
 */
function Hero() {
  return (
    <div className="hero">
      <div className="container hero__inner">
        <p className="hero__subtitle">{sectionContent.hero.subtitle}</p>

        <a className="button button--primary" href="#inscription">
          {sectionContent.registration.cta}
        </a>
      </div>
    </div>
  )
}

export default Hero
