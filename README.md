# Print-It WebSite v.1

Carrousel interactif ajouté en JavaScript vanilla à la bannière du site vitrine d'une imprimerie.

## Aperçu

Site en ligne : https://maxi1993-tech.github.io/Print-it/

La bannière affiche un carrousel de 4 slides. Chaque slide a son image et son texte. La navigation se fait avec les deux flèches, et des points sous le slider indiquent la position courante. Le carrousel boucle indéfiniment dans les deux sens.

## Contexte

Projet 5 de la formation Intégrateur Web d'OpenClassrooms. Premier projet en JavaScript.

Le site statique (HTML et CSS) était fourni. La mission consistait à le dynamiser en ajoutant le carrousel, sans framework ni librairie.

## Fonctionnalités

- Navigation par flèches gauche et droite
- Points de progression générés dynamiquement, un par slide
- Changement synchronisé de l'image, du texte et du point actif
- Boucle infinie : la dernière slide renvoie à la première, et inversement

## Technologies

- HTML5
- CSS3
- JavaScript vanilla (ES6)

Aucun framework, aucune librairie, aucun outil de build.

## Lancer le projet en local

```bash
git clone git@github.com:maxi1993-tech/Print-it.git
cd Print-it
```

Ouvrir `index.html` dans un navigateur, ou le servir avec une extension type Live Server.

## Structure

```
Print-it/
├── index.html
├── assets/
│   ├── style.css
│   ├── script.js
│   └── images/
└── README.md
```

## Auteur

Maxime Chapelle