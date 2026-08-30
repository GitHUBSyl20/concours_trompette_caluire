import { eventInfo, externalLinks, sectionContent } from '../data/siteData'
import RegistrationButton from './RegistrationButton'
import './RegistrationSection.css'

/**
 * Appel à l'inscription. Le formulaire est hébergé par HelloAsso :
 * aucun formulaire interne n'est créé ici.
 */
function RegistrationSection() {
  return (
    <section
      className="section registration"
      id="inscription"
      aria-labelledby="inscription-title"
    >
      <div className="container container--narrow registration__inner">
        <h2 className="section__title registration__title" id="inscription-title">
          {sectionContent.registration.title}
        </h2>

        <p className="registration__details">
          {eventInfo.title} — {eventInfo.dates}, {eventInfo.city}
        </p>

        <RegistrationButton />

        {!externalLinks.helloAsso && (
          <p className="registration__note">
            Le lien d'inscription HelloAsso sera publié prochainement.
          </p>
        )}
      </div>
    </section>
  )
}

export default RegistrationSection
