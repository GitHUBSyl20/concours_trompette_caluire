import { externalLinks, sectionContent } from '../data/siteData'

interface RegistrationButtonProps {
  /** Variante visuelle du bouton. */
  variant?: 'primary' | 'secondary'
  className?: string
}

/**
 * Bouton d'inscription vers HelloAsso.
 *
 * Utilisé dans le header, le hero et la section d'inscription : il centralise
 * le comportement à adopter tant que l'URL HelloAsso n'est pas connue
 * (rendu inactif plutôt que lien mort).
 */
function RegistrationButton({
  variant = 'primary',
  className,
}: RegistrationButtonProps) {
  const classes = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  if (!externalLinks.helloAsso) {
    return (
      <span className={classes} aria-disabled="true" role="link">
        {sectionContent.registration.cta}
        <span className="visually-hidden"> — inscriptions bientôt ouvertes</span>
      </span>
    )
  }

  return (
    <a
      className={classes}
      href={externalLinks.helloAsso}
      target="_blank"
      rel="noopener noreferrer"
    >
      {sectionContent.registration.cta}
      <span className="visually-hidden"> (HelloAsso, nouvel onglet)</span>
    </a>
  )
}

export default RegistrationButton
