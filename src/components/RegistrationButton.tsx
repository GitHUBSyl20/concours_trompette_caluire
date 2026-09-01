import { useId } from 'react'

interface RegistrationButtonProps {
  /**
   * URL visée. `null` tant qu'elle n'est pas connue : le bouton est alors
   * rendu inactif, accompagné d'une note, plutôt qu'en lien mort.
   */
  href: string | null
  /** Libellé affiché sur le bouton. */
  label: string
  /** Service qui héberge la page, annoncé aux lecteurs d'écran. */
  service?: string
  /** Note affichée sous le bouton inactif. */
  pendingNote?: string
  /** Variante visuelle. `on-purple` pour les fonds violets. */
  variant?: 'primary' | 'secondary' | 'on-purple'
  className?: string
}

/**
 * Bouton menant à une étape d'inscription hébergée à l'extérieur.
 *
 * L'explication accompagne le bouton **à l'écran** et pas seulement pour les
 * lecteurs d'écran : sans elle, un bouton grisé qui ne répond pas au doigt
 * n'apprend rien à personne.
 */
function RegistrationButton({
  href,
  label,
  service,
  pendingNote = 'Ce lien sera publié prochainement.',
  variant = 'primary',
  className,
}: RegistrationButtonProps) {
  const noteId = useId()
  const classes = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  if (!href) {
    return (
      <span className="cta-pending">
        <span
          className={classes}
          aria-disabled="true"
          role="link"
          aria-describedby={noteId}
        >
          {label}
        </span>
        <span className="cta-pending__note" id={noteId}>
          {pendingNote}
        </span>
      </span>
    )
  }

  // Une adresse `mailto:` ouvre la messagerie, pas un onglet.
  const opensNewTab = !href.startsWith('mailto:')

  return (
    <a
      className={classes}
      href={href}
      target={opensNewTab ? '_blank' : undefined}
      rel={opensNewTab ? 'noopener noreferrer' : undefined}
    >
      {label}
      <span className="visually-hidden">
        {opensNewTab
          ? service
            ? ` (${service}, nouvel onglet)` 
            : ' (nouvel onglet)'
          : ' (ouvre votre messagerie)'}
      </span>
    </a>
  )
}

export default RegistrationButton
