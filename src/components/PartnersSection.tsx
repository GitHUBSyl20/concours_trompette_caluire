import { partners, sectionContent } from '../data/siteData'
import './PartnersSection.css'

/**
 * Grille des logos partenaires.
 *
 * Les logos sont contenus dans une case de taille fixe avec
 * `object-fit: contain` afin de ne jamais déformer un ratio.
 *
 * Chaque logo mène au site du partenaire lorsque `url` est renseignée
 * dans `siteData` — voir le TODO qui y accompagne ces adresses : elles
 * restent des propositions à valider.
 */
function PartnersSection() {
  return (
    <section
      className="section partners"
      id="partenaires"
      aria-labelledby="partenaires-title"
    >
      <div className="container">
        <h2 className="section__title" id="partenaires-title">
          {sectionContent.partners.title}
        </h2>

        <p className="partners__hint">{sectionContent.partners.hint}</p>

        <ul className="partners__list">
          {partners.map((partner) => {
            const logo = (
              <img
                className={
                  partner.logoBackground
                    ? `partners__logo partners__logo--${partner.logoBackground}`
                    : 'partners__logo'
                }
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
              />
            )

            const caption = partner.caption ? (
              <span className="partners__caption">{partner.caption}</span>
            ) : null

            return (
              <li className="partners__item" key={partner.id}>
                {partner.url ? (
                  <a
                    className="partners__link"
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    /* L'`alt` du logo nomme déjà le partenaire ; on précise
                       seulement que le lien ouvre un site externe. */
                    aria-label={
                      partner.linkLabel ?? `${partner.name} (site du partenaire)`
                    }
                  >
                    {logo}
                    {caption}
                  </a>
                ) : (
                  <>
                    {logo}
                    {caption}
                  </>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default PartnersSection
