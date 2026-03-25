# Application de Planification de Rendez-vous

Une application web simple pour gérer et planifier des rendez-vous personnels ou professionnels.

## Fonctionnalités

- **Ajouter des rendez-vous** : Formulaire pour créer de nouveaux rendez-vous avec titre, date, heure et description
- **Affichage des rendez-vous** : Liste visuelle des rendez-vous programmés
- **Suppression de rendez-vous** : Possibilité de supprimer des rendez-vous existants
- **Stockage local** : Les rendez-vous sont sauvegardés dans le navigateur (localStorage)
- **Interface responsive** : Adaptée aux mobiles et ordinateurs

## Technologies utilisées

- **HTML5** : Structure de l'application
- **CSS3** : Styles modernes et responsives
- **JavaScript** : Logique de gestion des rendez-vous et stockage local

## Comment utiliser

1. Ouvrez `index.html` dans votre navigateur
2. Remplissez le formulaire pour ajouter un rendez-vous
3. Cliquez sur "Ajouter le Rendez-vous"
4. Vos rendez-vous apparaissent dans la liste ci-dessous
5. Utilisez le bouton "×" pour supprimer un rendez-vous

## Structure du projet

```
rendez-vous-app/
├── index.html     # Interface principale
├── style.css      # Feuilles de style
└── script.js      # Logique JavaScript
```

## Fonctionnalités JavaScript

- Validation des formulaires
- Stockage des données dans localStorage
- Génération dynamique des éléments DOM
- Gestion des événements (ajout, suppression)
- Formatage des dates en français

## Personnalisation

- Modifiez `style.css` pour changer l'apparence
- Ajoutez des fonctionnalités dans `script.js` (ex: notifications, export)
- Intégrez un calendrier externe pour une meilleure sélection de dates

## Limitations

- Stockage uniquement local (pas de synchronisation entre appareils)
- Pas de rappels automatiques
- Interface basique sans calendrier intégré