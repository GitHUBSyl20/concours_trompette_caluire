import { documents, sectionContent } from '../data/siteData'
import './RulesSection.css'

/**
 * Règlement et programme du concours.
 *
 * Les documents sont listés mais restent inactifs tant que leur `file` vaut
 * `null`. Les deux sont fournis : le programme depuis le 09/09/2026, le
 * règlement depuis le 12/09/2026.
 */
function RulesSection() {
  const { title, body } = sectionContent.rules

  return (
    <section className="section" id="reglement" aria-labelledby="reglement-title">
      <div className="container container--narrow">
        <h2 className="section__title" id="reglement-title">
          {title}
        </h2>

        {body ? (
          body.map((paragraph) => (
            <p className="section__text" key={paragraph}>
              {paragraph}
            </p>
          ))
        ) : (
          <p className="placeholder">
            Texte du règlement à recevoir de l'organisation.
          </p>
        )}

        <ul className="rules__documents">
          {documents.map((document) => (
            <li key={document.id}>
              {document.file ? (
                <a className="button button--secondary" href={document.file} download>
                  {document.label}
                  <span className="visually-hidden"> (PDF, téléchargement)</span>
                </a>
              ) : (
                <span className="button button--secondary" aria-disabled="true">
                  {document.label}
                  <span className="visually-hidden"> — document à venir</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RulesSection
