import { contact, eventInfo, externalLinks } from '../data/siteData'
import './Footer.css'

/**
 * Pied de page : organisateur, coordonnées et retour vers le site AMC2.
 *
 * TODO — coordonnées de contact non communiquées.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__event">{eventInfo.title}</p>
          <p className="footer__meta">
            {eventInfo.dates} — {eventInfo.city}
          </p>
          <address className="footer__venue">
            <span className="footer__venue-name">{eventInfo.venue.name}</span>
            <br />
            {eventInfo.venue.address}
            {eventInfo.venue.transport && (
              <>
                <br />
                Accès : {eventInfo.venue.transport}
              </>
            )}
          </address>
        </div>

        <div>
          <p className="footer__organisation">{contact.organisation}</p>
          {contact.address && <p className="footer__meta">{contact.address}</p>}
          {contact.email && (
            <p className="footer__meta">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          )}
          {contact.phone && (
            <p className="footer__meta">
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                {contact.phone}
              </a>
            </p>
          )}
          {externalLinks.amc2 && (
            <p className="footer__meta">
              <a
                href={externalLinks.amc2}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site de l'AMC2
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
