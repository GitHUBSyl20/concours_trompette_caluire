import { sectionContent } from '../data/siteData'

/**
 * Présentation du concours.
 *
 * TODO — le texte de présentation n'a pas encore été fourni par
 * l'organisation ; un encart d'attente est affiché à la place.
 */
function IntroSection() {
  const { title, body } = sectionContent.intro

  return (
    <section className="section" id="presentation" aria-labelledby="presentation-title">
      <div className="container container--narrow">
        <h2 className="section__title" id="presentation-title">
          {title}
        </h2>

        {body ? (
          <p>{body}</p>
        ) : (
          <p className="placeholder">
            Texte de présentation à recevoir de l'organisation.
          </p>
        )}
      </div>
    </section>
  )
}

export default IntroSection
