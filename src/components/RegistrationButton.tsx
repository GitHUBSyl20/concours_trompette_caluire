import { useId } from 'react'
import { externalLinks, sectionContent } from '../data/siteData'

interface RegistrationButtonProps {
  /** Variante visuelle du bouton. */
  variant?: 'primary' | 'secondary'
  className?: string
}

/**
 * Bouton d'inscription vers HelloAsso.
 *
 * Utilisé dans le hero et la section d'inscription : il centralise le
 * comportement à adopter tant que l'URL HelloAsso n'est pas connue (rendu
 * inactif plutôt que lien mort).
 *
 * L'explication accompagne le bouton **à l'écran** et pas seulement pour les
 * lecteurs d'écran : sans elle, un bouton grisé qui ne répond pas au doigt
 * n'apprend rien à personne.
 */
function RegistrationButton({
  variant = 'primary',
  className,
}: RegistrationButtonProps) {
  const noteId = useId()
  const classes = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  if (!externalLinks.helloAsso) {
    return (
      <span className="cta-pending">
        <span
          className={classes}
          aria-disabled="true"
          role="link"
          aria-describedby={noteId}
        >
          {sectionContent.registration.cta}
        </span>
        <span className="cta-pending__note" id={noteId}>
          Le lien d'inscription HelloAsso sera publié prochainement.
        </span>
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
