/**
 * Source unique de vérité pour tous les contenus du mini-site.
 *
 * Les textes, catégories, biographies et logos proviennent des fichiers
 * fournis par la graphiste (« Mise en page site web - 2 copie.pdf »,
 * « Autres pages.ai », « Page Bios DEF.ai », dossier « Logos partenaires »).
 *
 * Toute valeur non encore validée par l'organisation est soit `null`,
 * soit accompagnée d'un commentaire `TODO`. Ne rien inventer ici.
 */

import type {
  Category,
  ContactInfo,
  EventInfo,
  NavItem,
  Partner,
  Person,
  RegistrationStep,
  SiteDocument,
} from '../types'

/* -------------------------------------------------------------------------- */
/* Événement                                                                   */
/* -------------------------------------------------------------------------- */

export const eventInfo: EventInfo = {
  title: '1er concours de trompette de Caluire-et-Cuire',
  /**
   * Dates confirmées par la billetterie HelloAsso de l'AMC2 : « samedi 28 et
   * dimanche 29 novembre 2026 ». Le calendrier concorde, le 28 novembre 2026
   * étant un samedi.
   *
   * Les planches portaient « 29-30 Nov. 26 » ; l'export SVG du logo livré le
   * 6 septembre 2026 annonce bien « 28-29 Nov. 26 », et l'image de partage
   * (`/images/og-concours-trompette.png`) en a été régénérée.
   */
  dates: '28 et 29 novembre 2026',
  datesISO: { start: '2026-11-28', end: '2026-11-29' },
  city: 'Caluire-et-Cuire (69)',
  venue: {
    name: 'AMC2 Centre Ville',
    address: '1 rue Jean Moulin, 69300 Caluire-et-Cuire',
    transport: 'Bus 33, 38 et S5',
  },
}

/* -------------------------------------------------------------------------- */
/* Liens externes                                                              */
/* -------------------------------------------------------------------------- */

export const externalLinks = {
  /**
   * Billetterie HelloAsso du concours : première des deux démarches
   * d'inscription (cf. `sectionContent.registration.steps`).
   */
  helloAsso:
    'https://www.helloasso.com/associations/association-musicale-de-caluire-et-cuire/evenements/concours-de-trompette-2026-amc2' as
      | string
      | null,
  /**
   * Formulaire recueillant les informations des candidats : seconde démarche,
   * tout aussi obligatoire que la première. Adresse confirmée par
   * l'organisation le 01/09/2026, puis reconfirmée le 07/09/2026 comme
   * faisant foi. C'est bien celle-ci qu'il faut servir.
   *
   * TODO — à corriger côté AMC2 : la description de la billetterie HelloAsso
   * renvoie vers `forms.office.com/e/yFmfM4jSpQ`, qui est un formulaire
   * distinct — même compte Microsoft, identifiant de formulaire différent, et
   * non la même chose sous l'ancien domaine. Un candidat qui suit le lien
   * affiché sur HelloAsso remplit donc le mauvais formulaire, et sa réponse
   * atterrit dans un tableau que personne ne consulte.
   *
   * Constaté aussi le 07/09/2026 : les deux formulaires refusaient les
   * réponses (« Ce formulaire n'accepte pas de réponses pour le moment »).
   * Vraisemblablement parce que les inscriptions n'étaient pas ouvertes — à
   * revérifier avant la mise en ligne.
   */
  registrationForm:
    'https://forms.cloud.microsoft/e/N4TXkkVQjp?origin=lprLink' as
      | string
      | null,
  // Site de l'AMC2, d'où le mini-site sera accessible.
  amc2: 'https://www.musicamc2.fr/' as string | null,
}

/* -------------------------------------------------------------------------- */
/* Navigation                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * La maquette ne fournit pas de barre de navigation pour le mini-site :
 * ces entrées reprennent les sections listées dans CLAUDE.md et les titres
 * de planches (« CATÉGORIES », « RÈGLEMENT DU CONCOURS », « PARTENAIRES »,
 * « JURY / ACCOMPAGNATRICES »).
 */
export const navItems: NavItem[] = [
  { label: 'Présentation', href: '#presentation' },
  { label: 'Catégories', href: '#categories' },
  { label: 'Règlement', href: '#reglement' },
  { label: 'Jury', href: '#jury' },
  { label: 'Partenaires', href: '#partenaires' },
  { label: "S'inscrire", href: '#inscription' },
]

/* -------------------------------------------------------------------------- */
/* Catégories                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Reprises du programme du concours, déclaré définitif le 09/09/2026 : il
 * borne chaque catégorie par un âge, et non plus par une date de naissance.
 * C'est lui qui fait foi désormais, devant la planche « CATÉGORIES » et
 * devant la billetterie HelloAsso.
 *
 * Cela tranche au passage l'incohérence signalée depuis le début entre
 * « Moyen » et « Supérieur », dont la maquette et HelloAsso donnaient des
 * bornes contradictoires : la question ne se pose plus, les deux sources
 * sont périmées.
 *
 * La catégorie « Débutant » disparaît : le programme ne lui donne aucun
 * morceau imposé, et n'ouvre la liste qu'au préparatoire.
 *
 * TODO — la billetterie HelloAsso annonce toujours des dates de naissance,
 * et elles ne se recoupent pas avec ces âges. « Supérieur » y est « né après
 * le 01/07/2004 », soit moins de 22 ans au moment du concours, quand le
 * programme dit « moins de 19 ans » ; « Moyen » y ouvre jusqu'à 18 ans quand
 * le programme s'arrête à 16. Un candidat peut donc s'inscrire dans une
 * catégorie dont il ne pourra pas jouer le programme : à aligner côté AMC2,
 * comme le lien du formulaire.
 */
export const categories: Category[] = [
  { id: 'preparatoire', name: 'Préparatoire', ageCondition: 'Moins de 10 ans' },
  { id: 'elementaire', name: 'Élémentaire', ageCondition: 'Moins de 13 ans' },
  { id: 'moyen', name: 'Moyen', ageCondition: 'Moins de 16 ans' },
  { id: 'superieur', name: 'Supérieur', ageCondition: 'Moins de 19 ans' },
  { id: 'excellence', name: 'Excellence', ageCondition: 'Moins de 25 ans' },
]

/* -------------------------------------------------------------------------- */
/* Jury et accompagnatrices                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Biographies issues du fichier « Page Bios DEF.ai », sauf celle de Clément
 * Saunier, mise à jour par l'organisation depuis (voir le commentaire sur son
 * entrée).
 *
 * Les portraits sont les visuels livrés par l'organisation, convertis en
 * WebP (900 px de large) dans `public/images/portraits/`. Les PNG d'origine
 * restent dans `design/sources/portraits/`, hors versionnement.
 *
 * TODO — Arnaud Schotté figurait dans la première mise en page
 * (« Mise en page site web - 2 copie.pdf ») mais pas dans le fichier de
 * biographies définitif : sa présence au jury reste à confirmer.
 */
export const people: Person[] = [
  {
    id: 'clement-saunier',
    name: 'Clément Saunier',
    role: 'jury',
    instrument: 'Trompette',
    position: 'Président du jury',
    // Version transmise par l'organisation le 01/09/2026, qui remplace
    // celle du fichier « Page Bios DEF.ai ».
    bio: [
      'Clément Saunier est l’un des trompettistes français les plus actifs de la scène nationale et internationale. Diplômé du Conservatoire à Rayonnement Régional de Paris et du Conservatoire National Supérieur de Musique de Paris, il étudie auprès de Pierre Gillet, Clément Garrec, Gérard Boulanger et Jens McManama, avant de se perfectionner auprès de Pierre Thibault et Vladimir Kafelnikov.',
      'Ses prestations aux concours internationaux sont récompensées par plusieurs grands prix, notamment à Città di Porcia (Italie), au Printemps de Prague, à Jeju (Corée du Sud), au concours Théo Charlier à Bruxelles, au concours Maurice André à Paris ainsi qu’au Concours Tchaïkovski de Moscou.',
      'En 2013, il est nommé trompette solo de l’Ensemble intercontemporain. À ce poste, il collabore avec les grands compositeurs et chefs d’orchestre de notre temps. Il interprète et crée un grand nombre d’œuvres du répertoire pour trompette, parmi lesquelles le Requiem de Hans Werner Henze, Mysteries of the Macabre de György Ligeti, la Sequenza X de Luciano Berio, Metal Extensions et Metallics de Yan Maresz, le NONcerto de Richard Ayres, Doppelgänger et Evil Twin de Yann Robin, Wild Winged One de Liza Lim, Triptyque Bleu d’Hèctor Parra, Gnomon de José Miguel Fernández ou encore Soliloquy IX de Thomas Simaku.',
      'Il se produit régulièrement dans les grandes salles internationales, telles que la Philharmonie de Paris, la Philharmonie de Cologne, le Centre Pompidou, Hambourg, Munich, Milan, New York, Tokyo, Pékin, Londres, Moscou ou Berlin.',
      'En soliste, il est invité par de nombreux orchestres et festivals en Europe et à l’étranger, et mène parallèlement une intense activité de musique de chambre et de récital. Il est membre fondateur de l’ensemble Trombamania et du Paris Brass Quintet.',
      'Sa discographie soliste reflète la diversité de son parcours artistique, de la musique baroque aux œuvres contemporaines. Elle comprend notamment l’enregistrement du concerto d’Henri Tomasi avec l’English Chamber Orchestra, les concertos pour trompette d’Ida Gotkovsky, Charles Chaynes, Lalo Schiffrin, Roger Boutry et Anthony Girard, ainsi que le disque Direction (2017), consacré à des œuvres pour trompette seule de Fedele, Maxwell Davies, Pintscher, Scelsi, Henze et Takemitsu. Ces enregistrements sont parus chez Cristal Records, Maguelone, Klarthe et Corélia. En 2026 il sort un album chez Claves consacré aux œuvres pour trompette et orchestre symphonique de Zimmermann, Eötvös et Gruber.',
      'Pédagogue engagé, Clément Saunier est professeur au Conservatoire National Supérieur de Musique et de Danse de Lyon depuis 2021 ainsi qu’au Conservatoire à Rayonnement Régional de Paris depuis 2015, et donne des masterclasses dans les principales institutions et académies internationales.',
      'Depuis 1998, il développe de nombreux projets artistiques et pédagogiques dédiés aux cuivres. Il est notamment à l’origine du festival international Le Son des Cuivres à Mamers et du Surgères Brass Festival, ainsi que de l’Académie de cuivres et percussions de Surgères, qui rassemblent chaque été plusieurs dizaines de milliers de festivaliers.',
      'Il développe et joue les instruments Antoine Courtois.',
    ],
    photo: '/images/portraits/clement-saunier.webp',
    photoCredit: '© D. Gliksman',
  },
  {
    id: 'louis-gauvrit',
    name: 'Louis Gauvrit',
    role: 'jury',
    instrument: 'Trompette',
    bio: [
      'Louis Gauvrit débute l’apprentissage de la trompette dans sa ville natale de Royan, avant de se perfectionner au CRR de Bordeaux, puis d’intégrer le Conservatoire National Supérieur de Musique et Danse de Lyon où il obtient une Licence, un Master de musicien interprète mention Bien, puis par la suite obtient son Diplôme d’Etat.',
      'Issu d’une famille d’artistes, il prend vite goût à la musique et remporte plusieurs prix : 2e prix au concours national de Lormont en 2015, 2e prix au concours européen à Alençon en 2016, 3e prix au concours international Éric Aubier en 2017, 1er prix mention très bien au concours des Eurochestries en 2022. Louis s’est également produit au sein de l’Orchestre Français des Jeunes et au Lucerne Academy Festival.',
      'En parallèle de son activité de musicien au sein du quintet Penta’Saône, il enseigne la trompette à l’École Nationale de Musique, de Danse et d’Art Dramatique de Villeurbanne, transmettant avec enthousiasme sa passion, notamment à travers le dispositif “École par l’Orchestre”.',
    ],
    photo: '/images/portraits/louis-gauvrit.webp',
    photoCredit: '© G. Edée',
  },
  {
    id: 'arnaud-geffray',
    name: 'Arnaud Geffray',
    role: 'jury',
    instrument: 'Trompette',
    bio: [
      'Arnaud Geffray débute la trompette à l’école de musique de La Baule, puis au Conservatoire à rayonnement régional de Nantes. Il part ensuite étudier au Conservatoire de musique du Québec, à Montréal (Canada). Il termine ses études trois ans plus tard avec plusieurs premiers prix, notamment un premier prix à l’unanimité en trompette dans la classe de Jean-Louis Chatel. Il remporte le poste de deuxième trompette à l’Orchestre national de Lyon en 1991. Il a eu depuis, l\'occasion de jouer dans des salles exceptionnelles (Philharmonie de Berlin, Concertgebouw Amsterdam, Royal Albert Hall Londres, Suntory Hall Tokyo...) et d\'accompagner les plus grands solistes de notre époque (Martha Argerich, Yo Yo Ma, Maria Joao Pires, Hilary Hahn…).',
      'Sélectionné pour participer au Youtube Symphony Orchestra en 2009 sous la direction de Michael Tilson Thomas (Concert à Carnegie Hall de New-York), il joue à cette occasion en quintette de cuivres dans l\'émission "Good Morning America" avec Rolf Smedvig (Empire Brass). Il est régulièrement invité par les formations symphoniques françaises les plus prestigieuses : Orchestre National de France, Orchestre Philharmonique de Radio France, Orchestre National de Capitole de Toulouse, Orchestre National de Lille... et donne occasionnellement des masterclass en France et à l\'étranger (Vietnam, Iran, Canada…).',
    ],
    photo: '/images/portraits/arnaud-geffray.webp',
  },
  {
    id: 'ines-bucher',
    name: 'Inès Bucher',
    role: 'accompagnatrice',
    instrument: 'Piano',
    bio: [
      'Diplômée d’une licence de piano du PSPBB qu’elle réalisa auprès d’Elena Rozanova, Ines Bucher se consacre à des études d’accompagnement au piano au CNSM de Lyon depuis septembre 2025 dans la classe de Florian Caroubi. Férue de musique collective, la musique de chambre, le lied et la mélodie ou encore l’opéra sont des genres qui la passionnent.',
      'Dans le souhait d’élargir son accès au répertoire et multiplier les rencontres artistiques, elle joue régulièrement avec des instrumentistes, des chanteur•euses ou encore des danseur•euses. Auprès de ces derniers, elle a pu se former à l’accompagnement chorégraphique, notamment dans le cadre d’une licence au CNSM de Paris.',
      'Ines a également joué dans de nombreux projets de musique de chambre, lors par exemple des concerts de l’Orchestre Silmaril à l’Eglise Saint-Louis-en-l’île à Paris et à la Salle Cortot. Plus récemment elle a participé à la saison 2025-2026 de l’Orchestre Français des Jeunes, programmé en janvier 2026 à la Philharmonie de Paris.',
    ],
    photo: '/images/portraits/ines-bucher.webp',
  },
  {
    id: 'veronique-goudin',
    name: 'Véronique Goudin',
    role: 'accompagnatrice',
    instrument: 'Piano',
    bio: [
      'C’est à l’âge de huit ans que Véronique Goudin découvre le piano à l’École nationale de musique d’Agen, où elle obtient à l’âge de quatorze ans une médaille d’or. Elle poursuit alors ses études au Conservatoire à Rayonnement Régional de Bordeaux et reçoit les médailles d’or et d’honneur en piano, en hautbois, en cor anglais, ainsi qu’en musique de chambre. Elle est ensuite nommée accompagnatrice dans ce même établissement, alors âgée de dix-sept ans.',
      'Véronique Goudin a été professeur au CRR de Bordeaux de 1995 à 2009. Elle occupe un poste d’accompagnatrice au Conservatoire national supérieur de musique et de danse de Lyon depuis 2001 ainsi qu’à la Haute École de musique de Lausanne depuis 2010. Elle est régulièrement amenée à travailler comme musicienne supplémentaire ou accompagnatrice dans de nombreux orchestres français et suisses comme l’Orchestre National de Lyon, l’Orchestre de l’Opéra de Paris, l\'Orchestre de la Suisse Romande et l\'Orchestre de Chambre de Lausanne. Elle a occupé le poste de pianiste à l’ensemble Musique nouvelle de Bordeaux de 1998 à 2006, sous la direction de Michel Fusté Lambezat.',
      'Véronique Goudin est l’invitée de divers festivals en France et en Europe comme le festival Sbalz et Brassurround organisés par le Spanish brass Luur Metalls, ainsi que des Concours internationaux de trompette Philip-Jones, de Guebwiller, Maurice-André, à Paris et de Hautbois de Genève. Véronique Goudin est la pianiste du Trio Jacques-Thibaud de Bordeaux, avec lequel elle a remporté le premier prix du Concours international de musique de chambre de Pianello Val Tidone en Italie (juin 2005) et le deuxième prix du Concours international Charles-Hennen aux Pays-Bas (mai 2006).',
    ],
    photo: '/images/portraits/veronique-goudin.webp',
  },
  {
    id: 'juliette-rangheard',
    name: 'Juliette Rangheard',
    role: 'accompagnatrice',
    instrument: 'Piano',
    bio: [
      'Juliette Rangheard débute le piano au Conservatoire d’Angers où elle obtient en 2010 le Diplôme d’Etudes Musicales.',
      'Elle entre la même année à la Haute Ecole de Musique de Lausanne dans la classe de Pascal Godart et obtient un Bachelor, un Master Concert Interprétation puis un Master spécialisé en piano accompagnement avec les félicitations du jury et un prix de distinction pour la qualité de ses récitals.',
      'Juliette joue sous diverses formations : duo avec clarinette, violon, chant etc... Et se produit en France et à l\'étranger. Elle est par ailleurs invitée par l\'association Musiques en Polynésie pour se rendre à Tahiti et jouer en duo avec clarinette pour des concerts et des présentations scolaires. Elle est engagée pour divers projets : Festival Lavaux Classic, examens et auditions d\'élèves en Suisse Romande, accompagnements de choeurs, de concours (Girons), passages à la Radio etc...',
      'Juliette a l\'opportunité de travailler avec Patrick Messina, Helmut Deutsch et Martin Katz, ainsi qu’avec Renaud Capuçon, Michael Collins, Dmitri Alexeiev, Muza Rubackyte, Marie-Françoise Bucquet, Giorgio Pestelli (etc) lors de master-classes en solo et en accompagnement.',
      'A son retour en France en 2020, elle a occupé les postes d\'accompagnatrice au Conservatoire à Rayonnement Départemental de Bourg-en-Bresse puis au Conservatoire à Rayonnement Régional d\'Angers. Actuellement, Juliette est accompagnatrice au CRR de Lyon et se produit régulièrement au sein du Bouclier Septet.',
    ],
    photo: '/images/portraits/juliette-rangheard.webp',
  },
  {
    id: 'hyoung-sun-kim',
    name: 'Hyoung Sun Kim',
    role: 'accompagnatrice',
    instrument: 'Piano',
    bio: [
      'Née à Séoul (Corée du Sud), Hyoung Sun Kim débute ses études de piano à la Sun Hwa Art School et Sun Hwa High School. C’est après avoir obtenu son Bachelor de l’Université Yon Sei, toujours à Séoul, qu’elle est admise, à l’unanimité, au Conservatoire National Supérieur de Musique de Lyon dans la classe de Pierre Pontier. Elle y obtient le Diplôme d\'Études Supérieures de Musique.',
      'Lauréate du concours Samick piano en Corée du Sud, ainsi que du Concours National de Piano de Sucy-en-Brie, elle enseigne à l\'Amc2, à Caluire et Cuire.',
      'Elle se produit régulièrement en concert en France et à l’étranger, en tant que soliste et chambriste.',
    ],
    photo: '/images/portraits/hyoung-sun-kim.webp',
  },
]

export const jury = people.filter((person) => person.role === 'jury')

export const accompagnatrices = people.filter(
  (person) => person.role === 'accompagnatrice',
)

/* -------------------------------------------------------------------------- */
/* Partenaires                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Ordre repris de la planche « PARTENAIRES », à une réserve près : les
 * institutions sont remontées en tête et marquées `institution`. La planche
 * les mêlait aux marques du métier ; un soutien institutionnel ne se lit pas
 * comme un partenariat commercial, et les deux familles sont donc affichées
 * en groupes distincts.
 *
 * Y figurent la ville qui accueille le concours et l'association qui
 * l'organise.
 *
 * TODO — aucune URL n'a été communiquée par l'organisation. Celles qui
 * figurent ci-dessous ont été retrouvées à partir du nom de chaque
 * partenaire : ce sont des propositions, à valider une par une avant mise
 * en ligne (et à remplacer si l'organisation dispose d'un lien de suivi ou
 * d'une page distributeur).
 */
export const partners: Partner[] = [
  /* Institutions : la ville qui accueille le concours et l'association qui
     l'organise. Elles ouvrent la liste et sont affichées à part. */
  {
    id: 'ville-de-caluire-et-cuire',
    name: 'Ville de Caluire et Cuire',
    logo: '/logos/partners/ville-de-caluire-et-cuire.webp',
    url: 'https://www.ville-caluire.fr/',
    institution: true,
  },
  {
    id: 'amc2',
    name: 'AMC2 — Association Musicale de Caluire et Cuire',
    logo: '/logos/partners/amc2.webp',
    url: 'https://www.musicamc2.fr/',
    institution: true,
  },
  /* Partenaires professionnels : marques, ateliers et enseignes du métier. */
  // Ajoutée le 09/09/2026, hors planche « PARTENAIRES ». Académie cofondée
  // par Clément Saunier, président du jury du concours.
  //
  // Le lien mène au site Wix de l'académie, seul à répondre en https : le
  // domaine `academie-surgeres.fr` n'existe qu'en http et n'est qu'un cadre
  // posé autour de ce même site Wix.
  {
    id: 'academie-surgeres',
    name: 'Académie de Cuivres et Percussions de Surgères',
    logo: '/logos/partners/academie-cuivres-percussions-surgeres.webp',
    url: 'https://academiesurgeres.wixsite.com/site',
    // Le logo est cerné de blanc dans son fichier : à hauteur égale, il se
    // lit plus petit que les autres vignettes.
    logoScale: 1.2,
  },
  {
    id: 'a-mute',
    name: 'A-Mute',
    logo: '/logos/partners/a-mute.webp',
    url: 'https://amute3dprint.store/fr/',
    // TODO — lien peu sûr : le seul « A-Mute » trouvé est un fabricant
    // allemand de sourdines imprimées en 3D, dont le logo ne ressemble pas
    // à celui fourni. À faire confirmer avant publication.
  },
  {
    id: 'aj-atelier-des-cuivres',
    name: 'AJ — Atelier des Cuivres',
    logo: '/logos/partners/aj-atelier-des-cuivres.webp',
    url: 'https://aj-atelierdescuivres.fr/',
  },
  { id: 'a-jaminet', name: 'A. Jaminet', logo: '/logos/partners/a-jaminet.webp', url: 'https://www.ajaminet.fr/' },
  { id: 'donat', name: 'Donat — Embouchures pour cuivres', logo: '/logos/partners/donat.webp', url: 'https://www.donat-mouthpiece.com/' },
  { id: 'editions-lafitan', name: 'Éditions Lafitan', logo: '/logos/partners/editions-lafitan.svg', url: 'https://www.lafitan.com/' },
  { id: 'besson', name: 'Besson London', logo: '/logos/partners/besson.webp', url: 'https://www.besson.com/fr/' },
  { id: 'bs-markneukirchen', name: 'B&S Markneukirchen', logo: '/logos/partners/bs-markneukirchen.webp', url: 'https://b-and-s.com/' },
  { id: 'antoine-courtois', name: 'Antoine Courtois Paris', logo: '/logos/partners/antoine-courtois.webp', url: 'https://www.a-courtois.com/fr/' },
  {
    id: 'johannes-scherzer',
    name: 'Meister Johannes Scherzer',
    logo: '/logos/partners/johannes-scherzer.webp',
    url: 'https://www.scherzer-trumpets.com/fr/',
  },
  { id: 'hawkins-mutes', name: 'Hawkins Mutes', logo: '/logos/partners/hawkins-mutes.webp', url: 'https://hawkinsmutes.com/' },
  {
    id: 'ic-by-acquisto',
    name: 'IC by Acquisto',
    logo: '/logos/partners/ic-by-acquisto.webp',
    // La marque n'a pas de site : le lien mène à l'article que Trompette
    // Actus, autre partenaire du concours, lui consacre.
    url: 'https://trompetteactus.fr/2025/02/19/decouvrez-les-trompettes-ic-par-antoine-acquisto/',
    linkLabel: 'IC by Acquisto (présentation sur Trompette Actus)',
  },
  { id: 'js-musique', name: 'JS Musique', logo: '/logos/partners/js-musique.webp', url: 'https://www.jsmusique.com/' },
  {
    id: 'le-stock-de-notes',
    name: 'Le Stock de Notes',
    logo: '/logos/partners/le-stock-de-notes.webp',
    url: 'https://www.lestockdenotes.com/',
    // Partenaire à part entière : le programme du concours le désigne comme
    // « notre partenaire » et annonce 5 % de remise sur les œuvres imposées
    // commandées chez lui. Le logo était seulement rangé avec ceux de
    // JS Musique dans le dossier fourni.
  },
  { id: 'slide-to-play', name: 'Slide to Play', logo: '/logos/partners/slide-to-play.webp', url: 'https://slidetoplay.fr/' },
  {
    id: 'trompette-actus',
    name: 'Trompette Actus',
    logo: '/logos/partners/trompette-actus.webp',
    url: 'https://trompetteactus.fr/',
    // Logo dessiné, sans lettrage lisible à la taille d'affichage.
    caption: 'Trompette Actus',
  },
  // Ajoutée le 09/09/2026, hors planche « PARTENAIRES ». L'association n'a
  // pas de site propre : elle s'exprime sur Trompette Actus, autre
  // partenaire du concours, où sa page de présentation fait référence.
  //
  // Le seul logo fourni est la version pour fond noir (lettrage blanc) : il
  // est posé sur une vignette noire, la page étant blanche.
  {
    id: 'union-des-trompettistes',
    name: 'UT — Union des Trompettistes, Association de la Trompette Française',
    logo: '/logos/partners/ut-union-des-trompettistes.webp',
    url: 'https://trompetteactus.fr/lunion-des-trompettistes/',
    linkLabel:
      'Union des Trompettistes (présentation sur Trompette Actus)',
    logoBackground: 'opaque',
    // Réduit à la hauteur des vignettes, le nom de l'association n'est plus
    // lisible sous le sigle : on le redonne en clair.
    caption: 'Union des Trompettistes',
  },
  // TODO — les deux partenaires suivants figurent dans le dossier de logos
  // fourni mais pas sur la planche « PARTENAIRES ». Publication à confirmer.
  // Ils sont par ailleurs liés : « Piston Magazine » est le magazine
  // parodique publié par la Musique Angillonnaise. Une seule entrée
  // suffirait peut-être.
  {
    id: 'musique-angillonnaise',
    name: 'Musique Angillonnaise',
    logo: '/logos/partners/musique-angillonnaise.webp',
    url: 'https://musiqueangillonnai.wixsite.com/musiqueangillonnaise',
    note: 'Absent de la planche « PARTENAIRES » : présence à confirmer.',
  },
  {
    id: 'piston-magazine',
    name: 'Piston Magazine',
    logo: '/logos/partners/piston-magazine.webp',
    url: 'https://pistonmagazinemusique.wordpress.com/',
    note: 'Absent de la planche « PARTENAIRES » : présence à confirmer.',
  },
  // Partenaire ajouté après coup, absent lui aussi de la planche.
  // Le lien Instagram est celui imprimé sur la carte de visite fournie :
  // c'est le seul canal que l'atelier communique, il n'a pas de site.
  {
    id: '3dzir',
    name: '3DZiR — Embouchures et becs',
    logo: '/logos/partners/3dzir.webp',
    url: 'https://www.instagram.com/chalayerphilippe/',
    logoBackground: 'opaque',
    // Le lettrage du rendu 3D est illisible à 60 px : on le redonne en clair.
    caption: '3DZiR — Embouchures et becs',
    note: 'Ajouté hors planche « PARTENAIRES ». Logo en rendu 3D sur fond plein, contrairement aux autres.',
  },
]

/** Les deux institutions, affichées au-dessus des marques du métier. */
export const institutionPartners = partners.filter(
  (partner) => partner.institution,
)

/** Marques, ateliers et enseignes du métier. */
export const professionalPartners = partners.filter(
  (partner) => !partner.institution,
)

/* -------------------------------------------------------------------------- */
/* Documents téléchargeables                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Programme et règlement sont l'un et l'autre fournis par l'organisation :
 * le programme le 09/09/2026, le règlement le 12/09/2026.
 *
 * Le PDF servi est la version mise en page par la graphiste, reçue le
 * 10/09/2026, qui remplace le document bureautique d'origine. Contenu
 * identique : mêmes catégories, mêmes âges, mêmes morceaux imposés.
 *
 * TODO — le programme porte toujours une mention d'attente pour la catégorie
 * préparatoire : « Éditions Pierre Lafftan (code édition à venir) ». Ce code
 * est ce qui permet à un candidat de commander la partition : à réclamer, et
 * le PDF à remplacer une fois complété.
 *
 * TODO — la mise en page introduit au passage une coquille sur ce même
 * éditeur : « Lafftan » pour « Lafitan », qui est par ailleurs partenaire du
 * concours (cf. `partners`). À faire corriger avec le code d'édition.
 */
export const documents: SiteDocument[] = [
  {
    id: 'reglement',
    label: 'Règlement du concours',
    file: '/documents/reglement-concours.pdf',
  },
  {
    id: 'programme',
    label: 'Programme',
    file: '/documents/programme-concours.pdf',
  },
]

/* -------------------------------------------------------------------------- */
/* Contact                                                                     */
/* -------------------------------------------------------------------------- */

export const contact: ContactInfo = {
  organisation: 'AMC2 — Association Musicale de Caluire et Cuire',
  email: 'communication@musicamc2.fr',
  phone: '04 78 08 14 04',
  // TODO — adresse postale de l'association non communiquée.
  address: null,
}

/* -------------------------------------------------------------------------- */
/* Textes de section                                                           */
/* -------------------------------------------------------------------------- */

/** Titres et accroches repris littéralement des planches fournies. */
export const sectionContent = {
  hero: {
    title: 'Bienvenue au 1er concours de trompette de Caluire-et-Cuire',
    subtitle:
      'Retrouvez ici toutes les informations concernant le concours (programme, jury, règlement…)',
  },
  /**
   * Texte fourni par l'organisation, découpé en deux paragraphes :
   * l'événement, puis le public visé. Apostrophes typographiques comme
   * dans les biographies.
   */
  intro: {
    title: 'Présentation',
    body: [
      'L’Association Musicale de Caluire-et-Cuire (AMC2) organise le premier concours de trompette de la ville. Il se tiendra les samedi 28 et dimanche 29 novembre 2026 à l’école de musique : 1 rue Jean Moulin, 69300 Caluire-et-Cuire.',
      'Cet événement convivial et exigeant s’adresse aux trompettistes de moins de 25 ans répartis en 5 catégories, souhaitant partager leur passion, progresser et se produire dans des conditions professionnelles.',
    ] as string[] | null,
  },
  categories: { title: 'Catégories' },
  rules: {
    title: 'Règlement du concours',
    /**
     * Sans texte d'introduction, à la demande de l'organisation : la section
     * s'ouvre directement sur les deux documents. Le tableau vide est
     * volontaire — `null` ferait apparaître à la place le cadre « texte à
     * recevoir » de `RulesSection`.
     */
    body: [] as string[] | null,
  },
  jury: { title: 'Jury / Accompagnatrices' },
  partners: {
    title: 'Partenaires',
    hint: 'Cliquez sur un logo pour découvrir le partenaire.',
    /* Intitulés des deux groupes. La planche « PARTENAIRES » est un mur de
       logos sans texte, mais sans ces deux lignes la séparation se lirait
       comme un accident de mise en page. */
    groups: {
      institutions: 'Institutions',
      professionals: 'Partenaires professionnels',
    },
  },
  registration: {
    title: "S'inscrire",
    cta: "S'inscrire",
    /**
     * Formulation reprise de la billetterie HelloAsso : l'organisation
     * encaisse l'inscription sur HelloAsso, recueille les informations des
     * candidats par le formulaire, et attend en plus les partitions pour le
     * seul niveau Excellence.
     */
    requirement:
      "L'inscription n'est validée qu'après réception de tous ces éléments.",
    steps: [
      {
        id: 'helloasso',
        title: 'Inscription sur HelloAsso',
        description:
          "L'inscription au concours passe par la plateforme HelloAsso de l'AMC2.",
        cta: "S'inscrire sur HelloAsso",
        service: 'HelloAsso',
        url: externalLinks.helloAsso,
      },
      {
        id: 'formulaire',
        title: "Formulaire d'inscription",
        description:
          "Le formulaire transmet à l'organisation les informations du candidat.",
        cta: 'Remplir le formulaire',
        service: 'Microsoft Forms',
        url: externalLinks.registrationForm,
      },
      {
        id: 'partitions',
        title: "Partitions d'accompagnement",
        condition: 'Niveau Excellence uniquement',
        description:
          "Les partitions d'accompagnement piano sont à envoyer scannées avant la clôture des inscriptions.",
        cta: 'Envoyer les partitions',
        service: 'e-mail',
        url: 'mailto:communication@musicamc2.fr',
      },
    ] satisfies RegistrationStep[],
  },
}
