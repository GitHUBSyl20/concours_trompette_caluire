# CLAUDE.md — Concours de trompette de Caluire-et-Cuire

## Objectif du projet

Créer le mini-site officiel du **1er concours de trompette de Caluire-et-Cuire**.

Le site est une landing page autonome qui sera accessible depuis le site AMC2 existant.

La priorité est de reproduire fidèlement la direction artistique fournie par la graphiste tout en construisant une véritable interface web responsive, accessible et maintenable.

## Stack

* React
* Vite
* TypeScript
* CSS
* Git
* Vercel

Ne pas ajouter de framework, librairie ou dépendance sans nécessité réelle.

## Périmètre

Le site est entièrement statique.

Il ne comporte :

* aucun backend ;
* aucune base de données ;
* aucun CMS ;
* aucune authentification ;
* aucune interface d'administration ;
* aucune API métier.

Le bouton d'inscription redirige vers une page HelloAsso externe.

## Sources graphiques

Les fichiers présents dans `/design` constituent la référence visuelle principale.

Notamment :

* `Mise en page site web - 2 copie.pdf`
* `Autres pages.ai`

Le fichier Illustrator contient notamment les planches :

* accueil / présentation ;
* partenaires ;
* catégories ;
* règlement.

Ces fichiers servent à déterminer :

* couleurs ;
* proportions ;
* espacements ;
* typographies ;
* compositions ;
* éléments décoratifs ;
* hiérarchie visuelle.

Ne jamais convertir la totalité d'une planche Illustrator ou PDF en une seule image ou en un SVG monolithique.

La page doit être reconstruite avec de véritables composants HTML/React.

## Typographie

La direction graphique utilise principalement :

* Poppins Light
* Poppins Bold

Utiliser Poppins comme police principale du site.

Prévoir des fallbacks adaptés.

## Architecture

Les principales sections doivent être organisées sous forme de composants indépendants :

* Header
* Hero
* IntroSection
* CategoriesSection
* RulesSection
* JurySection
* PartnersSection
* RegistrationSection
* Footer

Éviter les composants inutilement fragmentés.

Créer des sous-composants uniquement lorsqu'ils apportent une vraie réutilisabilité ou améliorent clairement la lisibilité.

## Données

Les contenus structurés doivent être centralisés dans :

`src/data/siteData.ts`

Cela concerne notamment :

* navigation ;
* catégories ;
* membres du jury ;
* accompagnateurs ;
* partenaires ;
* liens externes ;
* URL HelloAsso ;
* documents téléchargeables ;
* informations de contact.

Ne pas dupliquer ces données directement dans plusieurs composants.

Créer les interfaces TypeScript nécessaires dans `src/types`.

## Assets

Organiser les fichiers publics par type :

```text
public/
├── images/
├── logos/
│   └── partners/
└── documents/
```

Privilégier :

1. SVG pour logos et illustrations vectorielles ;
2. WebP/AVIF ou images optimisées pour les photographies ;
3. PNG transparent si aucun SVG n'existe.

Ne jamais déformer un logo partenaire.

Respecter son ratio.

Si un logo possède naturellement un fond blanc, une carte blanche est acceptable si elle correspond à la maquette.

## Responsive

Les maquettes servent de référence, mais le comportement responsive doit être conçu pour le web.

Le site doit fonctionner au minimum sur :

* smartphone ;
* tablette ;
* laptop ;
* grand écran desktop.

Approche recommandée :

* mobile first lorsque pertinent ;
* `max-width` pour limiter les grandes compositions ;
* `clamp()` pour certaines tailles typographiques ;
* CSS Grid et Flexbox ;
* éviter les positions absolues pour les éléments structurels ;
* réserver les positions absolues aux éléments purement décoratifs.

Les compositions doivent conserver l'esprit de la maquette plutôt que reproduire mécaniquement des coordonnées Illustrator sur toutes les résolutions.

## Accessibilité

Utiliser du HTML sémantique.

Respecter notamment :

* un seul `h1` principal ;
* hiérarchie correcte des titres ;
* boutons et liens réellement interactifs ;
* `alt` pertinents pour les images informatives ;
* `alt=""` pour les images strictement décoratives ;
* navigation clavier ;
* état `:focus-visible` ;
* contraste suffisant ;
* zones cliquables adaptées au mobile.

Respecter `prefers-reduced-motion` si des animations sont ajoutées.

## Animations

Les animations ne sont pas prioritaires.

Si elles sont utilisées :

* rester discrètes ;
* ne pas ralentir l'accès à l'information ;
* éviter les bibliothèques d'animation lourdes ;
* privilégier CSS.

## Inscription

Le CTA principal « S'inscrire » doit rediriger vers HelloAsso.

L'URL définitive n'est pas encore disponible.

Centraliser provisoirement cette URL dans `siteData.ts` afin qu'elle puisse être remplacée en un seul endroit.

Ne pas créer de formulaire d'inscription interne.

## Sections à implémenter en priorité

Ordre de développement :

1. Header / Hero
2. Présentation
3. Catégories
4. Règlement / programme
5. Partenaires
6. CTA inscription
7. Footer
8. Jury / accompagnateurs

Pour Jury / Accompagnateurs, construire dès maintenant la structure et les composants mais accepter des placeholders temporaires jusqu'à réception des portraits HD et du fichier Illustrator correspondant.

## Points actuellement non finalisés

Ne pas inventer les informations suivantes :

* URL HelloAsso définitive ;
* portraits définitifs du jury ;
* portraits des accompagnateurs ;
* éventuels PDF de règlement/programme ;
* règles d'âge définitives des catégories ;
* domaine ou sous-domaine final.

Une incohérence potentielle existe actuellement entre les catégories « Moyen » et « Supérieur » concernant les conditions de naissance.

Ne pas corriger arbitrairement cette information.

La signaler dans les données ou utiliser un TODO jusqu'à validation.

## Qualité du code

Le projet doit rester volontairement simple.

Priorités :

1. fidélité graphique ;
2. responsive ;
3. accessibilité ;
4. lisibilité ;
5. performance ;
6. facilité de modification.

Éviter :

* sur-engineering ;
* state management global ;
* abstractions génériques inutiles ;
* dépendances lourdes ;
* duplication des contenus.

Le site étant statique, la majorité des composants doivent être de simples composants de présentation alimentés par `siteData.ts`.

## Validation

Après chaque grande section :

1. vérifier visuellement dans le navigateur ;
2. comparer à la maquette ;
3. tester mobile et desktop ;
4. vérifier la console ;
5. lancer :

```bash
npm run build
```

Le build doit rester sans erreur avant chaque commit significatif.

## Déploiement

Cible : Vercel.

Le site doit pouvoir être construit avec :

```bash
npm run build
```

et produire le dossier Vite standard :

```text
dist/
```

Aucune configuration serveur spécifique ne doit être nécessaire.
