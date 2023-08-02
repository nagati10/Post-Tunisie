README du Projet

Ce projet consiste en une application simple pour gérer des stagiaires.L'application dispose d'une interface
utilisateur (frontend) développée avec React et d'un serveur (backend) construit avec Node.js, Express et MongoDB.

Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé les éléments suivants :

1. Node.js (version 18 ou supérieure)
2. MongoDB
3.Run MongoDB Compass and connect to the provided MongoDB Atlas cluster using the provided connection string:
 mongodb+srv://nagatinajd:CLMjlF0Q8Tz5n2to@cluster0.yqaz1hq.mongodb.net/


Exécution de l'Application

1. Démarrez le serveur backend.

cd BackEndSever
npm start

Le serveur backend démarrera à l'adresse http://localhost:3001.

2. Démarrez l'application frontend.

cd frontendserver
npm start

L'application frontend démarrera à l'adresse http://localhost:3000.

Utilisation

Une fois l'application en cours d'exécution, vous pouvez y accéder en visitant http://localhost:3000 dans votre navigateur web.

L'application vous permet d'effectuer les actions suivantes :

1. Afficher une liste de stagiaires avec leurs détails.
2. Ajouter un nouveau stagiaire en cliquant sur "Ajouter Stagiaire" dans la barre latérale.
3. Modifier les détails d'un stagiaire en cliquant sur le bouton "Modifier".
4. Supprimer un stagiaire en cliquant sur le bouton "Supprimer".
5. Filtrer la liste des stagiaires par nom à l'aide de la barre de recherche.
6. Trier la liste des stagiaires par nom, position ou état à l'aide de la liste déroulante de tri.

Veuillez noter que l'application suppose l'existence d'une base de données MongoDB et des collections appropriées.
Le backend gère les opérations MongoDB pour créer, mettre à jour et supprimer les stagiaires.

Crédits

Ce projet a été créé par Najd Nagati.

Pour toute question ou problème, veuillez contacter nagati.najd@esprit.tn  .
