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
 * Le logo est la composition horizontale de la maquette, enfin livrée en
 * SVG. Ses dates sont vérifiées : il annonce « 28-29 Nov. 26 », et non le
 * « 29-30 Nov. 26 » des planches. Le fichier d'origine est conservé dans
 * `design/sources/logos/`, hors versionnement.
 *
 * La plaque violette arrondie de l'export a été remplacée par un fond violet
 * à plat, conservé dans la SVG : l'étoile est faite de calques en
 * `mix-blend-mode`, et une SVG chargée en `<img>` ne voit jamais le fond de
 * la page. Sans fond interne, l'étoile sort en tache sombre.
 *
 * TODO — ce logo porte les dates et la ville, que le `h1` et la ligne dorée
 * ci-dessous redisent : la ville apparaît trois fois dans le bandeau.
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
            src="/logos/logo-concours-horizontal.svg"
            alt={`${eventInfo.title}, ${eventInfo.dates}`}
            width="300"
            height="116"
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
