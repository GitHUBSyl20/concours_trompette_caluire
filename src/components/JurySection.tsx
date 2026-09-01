import { accompagnatrices, jury, sectionContent } from '../data/siteData'
import type { Person } from '../types'
import './JurySection.css'

/**
 * Bloc d'une personne : portrait à gauche, biographie à droite, sur toute
 * la largeur — la composition de la planche « Page Bios DEF ».
 *
 * Un cadre vide tient lieu de visuel tant que `photo` vaut `null`.
 */
function PersonBlock({ person }: { person: Person }) {
  return (
    <li className="person">
      <div className="container person__inner">
        <div className="person__figure">
          {person.photo ? (
            <img
              className="person__photo"
              src={person.photo}
              alt={person.name}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              className="person__photo person__photo--empty"
              aria-hidden="true"
            />
          )}

          {/* Absent de la planche, mais dû aux photographes. */}
          {person.photoCredit && (
            <p className="person__credit">Photo {person.photoCredit}</p>
          )}
        </div>

        <div className="person__body">
          <h4 className="person__name">{person.name}</h4>
          {person.position && (
            <p className="person__position">{person.position}</p>
          )}
          {person.bio.map((paragraph, index) => (
            <p className="person__bio" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </li>
  )
}

/**
 * Jury et accompagnatrices du concours.
 *
 * La planche empile les personnes sur une seule page continue, avec une
 * bande violet clair une fois sur deux : la liste reprend ce rythme via
 * `:nth-child(odd)`, chaque groupe redémarrant sur une bande.
 */
function JurySection() {
  return (
    <section className="section jury" id="jury" aria-labelledby="jury-title">
      <div className="container">
        <h2 className="section__title" id="jury-title">
          {sectionContent.jury.title}
        </h2>
      </div>

      <h3 className="jury__group-title">Jury</h3>
      <ul className="jury__list">
        {jury.map((person) => (
          <PersonBlock key={person.id} person={person} />
        ))}
      </ul>

      <h3 className="jury__group-title">Accompagnatrices</h3>
      <ul className="jury__list">
        {accompagnatrices.map((person) => (
          <PersonBlock key={person.id} person={person} />
        ))}
      </ul>
    </section>
  )
}

export default JurySection
