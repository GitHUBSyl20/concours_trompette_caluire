/**
 * Interfaces des contenus du mini-site.
 * Toutes les données concrètes vivent dans `src/data/siteData.ts`.
 */

/** Entrée de la navigation principale (ancre interne ou lien externe). */
export interface NavItem {
  /** Libellé affiché. */
  label: string
  /** Ancre interne (`#categories`) ou URL absolue. */
  href: string
  /** `true` pour un lien sortant : ouvert dans un nouvel onglet. */
  external?: boolean
}

/** Catégorie de concours (planche « CATÉGORIES » de la maquette). */
export interface Category {
  id: string
  /** Nom affiché : « Débutant », « Préparatoire »… */
  name: string
  /**
   * Condition de naissance telle qu'écrite sur la maquette,
   * ponctuation inclusive comprise (« Né·e après le 01/07/2015 »).
   */
  birthCondition: string
  /** Remarque interne à lever avec l'organisation (non affichée). */
  note?: string
}

/** Rôle d'une personne présentée dans la section Jury / Accompagnatrices. */
export type PersonRole = 'jury' | 'accompagnatrice'

/** Membre du jury ou accompagnatrice. */
export interface Person {
  id: string
  name: string
  role: PersonRole
  /** Instrument ou fonction : « Trompette », « Piano »… */
  instrument: string
  /**
   * Biographie fournie par l'organisation (fichier « Page Bios DEF »),
   * découpée selon les paragraphes de la planche.
   */
  bio: string[]
  /** Chemin public du portrait, `null` tant que les visuels HD manquent. */
  photo: string | null
  /** Crédit photo à afficher si le portrait est publié. */
  photoCredit?: string
}

/** Partenaire du concours. */
export interface Partner {
  id: string
  /** Nom lisible, utilisé pour l'attribut `alt` du logo. */
  name: string
  /** Chemin public du logo. */
  logo: string
  /** Site officiel du partenaire, `null` tant qu'il n'est pas confirmé. */
  url: string | null
  /**
   * Traitement du fond quand le logo n'est pas détouré :
   * `'white'` pose une carte blanche sous un logo livré sur fond blanc
   * (cf. maquette), `'opaque'` arrondit et allège un logo livré sur un fond
   * plein, pour qu'il ne fasse pas tuile au milieu des marques détourées.
   * Absent pour un logo transparent, le cas courant.
   */
  logoBackground?: 'white' | 'opaque'
  /** Remarque interne à lever avec l'organisation (non affichée). */
  note?: string
}

/** Document téléchargeable (règlement, programme…). */
export interface SiteDocument {
  id: string
  label: string
  /** Chemin public du fichier, `null` tant qu'il n'a pas été fourni. */
  file: string | null
}

/** Informations de contact affichées dans le pied de page. */
export interface ContactInfo {
  organisation: string
  email: string | null
  phone: string | null
  address: string | null
}

/** Informations générales sur l'édition en cours. */
export interface EventInfo {
  /** Titre complet : « 1er concours de trompette de Caluire-et-Cuire ». */
  title: string
  /** Dates formatées pour l'affichage. */
  dates: string
  /** Dates lisibles par une machine, pour `<time datetime>`. */
  datesISO: { start: string; end: string }
  city: string
  /** Lieu où se déroule le concours. */
  venue: Venue
}

/** Lieu du concours. */
export interface Venue {
  /** Nom de l'établissement : « AMC2 Centre Ville ». */
  name: string
  address: string
  /** Accès en transports en commun, `null` si non communiqué. */
  transport: string | null
}
