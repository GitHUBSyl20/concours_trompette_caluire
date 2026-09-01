import { eventInfo, sectionContent } from '../data/siteData'
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

        {/* La note d'attente est portée par le bouton lui-même. */}
        <RegistrationButton />
      </div>
    </section>
  )
}

export default RegistrationSection
