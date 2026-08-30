import { navItems } from '../data/siteData'
import './StickyNav.css'

/**
 * Barre de navigation fine, qui se colle en haut de l'écran dès que le
 * bandeau a défilé.
 *
 * Le bandeau de la maquette mesure 350 px : le rendre collant mangerait un
 * tiers de l'écran. Cette barre prend le relais et garde la navigation
 * accessible sur une page longue.
 *
 * Aucun JavaScript : `position: sticky` suffit, la barre étant placée juste
 * après le bandeau, en enfant direct de la racine.
 */
function StickyNav() {
  return (
    <nav className="subnav" aria-label="Navigation secondaire">
      <ul className="subnav__list">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              className="subnav__link"
              href={item.href}
              {...(item.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default StickyNav
