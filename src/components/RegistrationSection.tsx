import { eventInfo, sectionContent } from '../data/siteData'
import RegistrationButton from './RegistrationButton'
import './RegistrationSection.css'

const { registration } = sectionContent

/**
 * Appel à l'inscription.
 *
 * L'inscription demande plusieurs démarches distinctes et toutes
 * obligatoires : la plateforme HelloAsso, le formulaire qui recueille les
 * informations du candidat, et l'envoi des partitions pour le seul niveau
 * Excellence. Elles sont présentées comme une suite d'étapes numérotées pour
 * qu'aucune ne passe pour facultative, et aucun formulaire interne n'est
 * créé ici.
 */
function RegistrationSection() {
  return (
    <section
      className="section registration"
      id="inscription"
      aria-labelledby="inscription-title"
    >
      <div className="container registration__inner">
        <h2 className="section__title registration__title" id="inscription-title">
          {registration.title}
        </h2>

        <p className="registration__details">
          {eventInfo.title} — {eventInfo.dates}, {eventInfo.city}
        </p>

        <p className="registration__requirement">{registration.requirement}</p>

        <ol className="registration__steps">
          {registration.steps.map((step) => (
            <li className="registration__step" key={step.id}>
              <h3 className="registration__step-title">{step.title}</h3>
              {step.condition && (
                <p className="registration__step-condition">{step.condition}</p>
              )}
              <p className="registration__step-description">
                {step.description}
              </p>
              {/* La note d'attente est portée par le bouton lui-même. */}
              <RegistrationButton
                href={step.url}
                label={step.cta}
                service={step.service}
                variant="on-purple"
                className="registration__step-button"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default RegistrationSection
