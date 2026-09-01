import { sectionContent } from '../data/siteData'

/**
 * Présentation du concours.
 *
 * Le texte vit dans `siteData` sous forme de paragraphes ; l'encart
 * d'attente reste en place au cas où il repasserait à `null`.
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
          body.map((paragraph) => (
            <p className="section__text" key={paragraph}>
              {paragraph}
            </p>
          ))
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
