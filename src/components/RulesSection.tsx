import { documents, sectionContent } from '../data/siteData'
import './RulesSection.css'

/**
 * Règlement et programme du concours.
 *
 * TODO — ni le texte du règlement ni les PDF associés n'ont été fournis :
 * les documents sont listés mais restent inactifs tant que `file` vaut `null`.
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
          <p>{body}</p>
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
