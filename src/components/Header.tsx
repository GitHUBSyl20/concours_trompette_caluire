import { eventInfo, sectionContent } from '../data/siteData'
import './Header.css'

/**
 * Bandeau violet d'en-tête, repris de la maquette : logo à gauche, filet
 * blanc vertical au centre, puis le bloc de droite.
 *
 * Sur les planches, ce bloc de droite porte le titre de la planche
 * (« RÈGLEMENT DU CONCOURS », « CATÉGORIES »…). Le site étant une page
 * unique, il accueille ici le titre du site — l'accroche de bienvenue,
 * les dates et la ville. C'est donc le `h1` de la page.
 *
 * La navigation vit dans la barre fine collante (`StickyNav`).
 *
 * TODO — la maquette utilise le logo en composition horizontale, avec les
 * dates intégrées. Seul l'export vertical existe en SVG ; les versions
 * horizontales fournies sont des PDF dont les dégradés se rasterisent.
 * Demander à la graphiste un export SVG du « Logo format horizontal » :
 * le remplacement se fera sur la seule ligne `src` ci-dessous.
 */

/**
 * Rend un texte en gardant « Caluire-et-Cuire » d'un seul tenant : les
 * navigateurs coupent volontiers une ligne après un trait d'union, ce qui
 * donnait « Caluire-et- / Cuire ».
 */
function keepCityWhole(text: string) {
  return text.split(/(Caluire-et-Cuire)/).map((part, index) =>
    part === 'Caluire-et-Cuire' ? (
      <span className="banner__nowrap" key={index}>
        {part}
      </span>
    ) : (
      part
    ),
  )
}

function Header() {
  return (
    <header className="banner" id="top">
      <div className="banner__inner">
        <a className="banner__brand" href="#top">
          <img
            className="banner__logo"
            src="/logos/logo-concours.svg"
            alt={`${eventInfo.title}, ${eventInfo.dates}`}
            width="425"
            height="340"
          />
        </a>

        <span className="banner__divider" aria-hidden="true" />

        <div className="banner__intro">
          <h1 className="banner__title">
            {keepCityWhole(sectionContent.hero.title)},{' '}
            <time dateTime={eventInfo.datesISO.start}>{eventInfo.dates}</time>
          </h1>
          <p className="banner__place">{eventInfo.city}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
