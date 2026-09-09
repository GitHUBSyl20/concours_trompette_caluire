import type { CSSProperties } from 'react'
import {
  institutionPartners,
  professionalPartners,
  sectionContent,
} from '../data/siteData'
import type { Partner } from '../types'
import './PartnersSection.css'

/**
 * Grille des logos partenaires, en deux groupes.
 *
 * La planche « PARTENAIRES » les mêlait en un seul mur, mais la ville, l'AMC2
 * et l'Académie de Surgères sont des institutions : elles ouvrent la section,
 * au-dessus des marques et ateliers du métier. Un soutien institutionnel ne
 * se lit pas comme un partenariat commercial.
 *
 * Les logos sont contenus dans une case de taille fixe avec
 * `object-fit: contain` afin de ne jamais déformer un ratio.
 *
 * Chaque logo mène au site du partenaire lorsque `url` est renseignée
 * dans `siteData` — voir le TODO qui y accompagne ces adresses : elles
 * restent des propositions à valider.
 */

/**
 * Un groupe de logos. `labelId` rattache la liste à son intitulé pour les
 * lecteurs d'écran, l'intitulé restant un titre de niveau 3 dans la
 * hiérarchie de la page.
 */
function PartnerGrid({
  items,
  labelId,
  modifier,
}: {
  items: Partner[]
  labelId: string
  /** Suffixe de classe, pour le groupe qui a besoin d'une grille à part. */
  modifier?: string
}) {
  return (
    <ul
      className={
        modifier ? `partners__list partners__list--${modifier}` : 'partners__list'
      }
      aria-labelledby={labelId}
    >
      {items.map((partner) => {
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
            /* Agrandissement optique : le facteur est passé à la feuille de
               style, qui décide comment l'appliquer. */
            style={
              partner.logoScale
                ? ({
                    '--partner-logo-scale': partner.logoScale,
                  } as CSSProperties)
                : undefined
            }
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
  )
}

function PartnersSection() {
  const { title, hint, groups } = sectionContent.partners

  return (
    <section
      className="section partners"
      id="partenaires"
      aria-labelledby="partenaires-title"
    >
      <div className="container">
        <h2 className="section__title section__title--centered" id="partenaires-title">
          {title}
        </h2>

        <p className="partners__hint">{hint}</p>

        <h3 className="partners__group-title" id="partenaires-institutions">
          {groups.institutions}
        </h3>
        <PartnerGrid
          items={institutionPartners}
          labelId="partenaires-institutions"
          modifier="institutions"
        />

        <h3 className="partners__group-title" id="partenaires-professionnels">
          {groups.professionals}
        </h3>
        <PartnerGrid
          items={professionalPartners}
          labelId="partenaires-professionnels"
        />
      </div>
    </section>
  )
}

export default PartnersSection
