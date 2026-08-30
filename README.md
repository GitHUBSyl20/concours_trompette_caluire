# Concours de trompette de Caluire-et-Cuire

Mini-site du **1er concours de trompette de Caluire-et-Cuire** (29 et 30 novembre 2026),
landing page statique accessible depuis le site de l'AMC2.

Stack : React + Vite + TypeScript + CSS. Déploiement visé : Vercel.

Les règles de contribution et les partis pris du projet sont décrits dans
[CLAUDE.md](CLAUDE.md).

## Démarrage

```bash
npm install
npm run dev
```

## Scripts

| Commande        | Rôle                                            |
| --------------- | ----------------------------------------------- |
| `npm run dev`   | Serveur de développement Vite                   |
| `npm run build` | Vérification TypeScript puis build dans `dist/` |
| `npm run lint`  | ESLint                                          |
| `npm run preview` | Prévisualisation du build                     |

## Organisation

```text
design/                 # Sources graphiques (.ai, PDF, PNG d'origine) — non versionné
public/
├── documents/          # PDF (règlement, programme) — à recevoir
├── images/portraits/   # Portraits du jury et des accompagnatrices (WebP)
└── logos/
    ├── logo-concours.svg
    └── partners/       # Logos partenaires
src/
├── components/         # Une section = un composant + son fichier CSS
├── data/siteData.ts    # Source unique de vérité pour tous les contenus
├── styles/             # variables.css (jetons) + base.css (reset, typo, utilitaires)
└── types/              # Interfaces TypeScript des contenus
```

Tous les textes, listes et liens passent par `src/data/siteData.ts` : ne pas
écrire de contenu en dur dans un composant.

## Informations encore manquantes

Elles sont signalées par des `TODO` dans `src/data/siteData.ts` :

- URL HelloAsso définitive (le CTA « S'inscrire » reste inactif sans elle) ;
- coordonnées de contact de l'organisation ;
- validation des URL de partenaires (retrouvées à partir des noms, ce sont
  des propositions) ; celle d'« IC by Acquisto » reste introuvable ;
- textes de présentation et de règlement, PDF associés ;
- export SVG du logo en composition horizontale ;
- cohérence des dates de naissance entre les catégories « Moyen » et « Supérieur ».
