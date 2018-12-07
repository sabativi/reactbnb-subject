# TP 6 : Récupérer les données d'une API

## Objectifs

Intégrer des données d'une API

## Préparatifs

1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni.

## Instructions

1. La navigation s'étant complexifiée, créer dans le répertoire src/ un sous répertoire router et séparer les différents routers en fichiers, par exemple LoggedOut pour les routes d'un utilisateur non connecté, LoggedIn pour un utilisateur connecté, et AuthNavigator pour la gestion connecté/non connecté. Nous complèterons ce dernier bientôt.
2. L'objectif maintenant est de remplacer les données de notre répertoire data par des données provenant d'une API, j'ai crée une API pour vous, disponible à cette adresse : https://plb-rean.herokuapp.com/housings/public. Cette API fait deux choses : de l'authentification et affiche la liste que nous avons précédemment manipuler. Prenez le temps de lire la documentation et de vous familiariser avec le fonctionnement. Vous pouvez utiliser un outil comme [Postman](https://www.getpostman.com/)
3. Dans un premier temps, l'API dispose d'une route public permettant de récupérer la liste. `/housings/public/`. Remplacer la liste par la requête provenant de l'API dans la méthode componentDidMount. Utiliser pour celà la props `refreshing` de FlatList pour marquer que la requête est en attente.
4. Adapter votre code pour ne pas faire la requête à l'intérieur du composant HousingList, et donc respecter l'approche Smart/Dumb components. Le composant HousingList doit maintenant ne plus être une `classe` mais une fonction. Vous allez devoir créer un nouveau composant : HousingListContainer par exemple
5. En plus, passer une prop `refetch` et ajouter la fonctionnalité pullToRefetch sur la FlatList.

6) Nous allons maintenant mettre en place un flow d'authentification. Nous n'avons pas encore d'utilisateur crée, je vous invite à en créer un sur l'API grâce à la commande `curl -X POST https://plb-rean.herokuapp.com/users -i -d "email=YOUR_EMAIL&password=YOUR_PASSWORD&access_token=masterKey"`. Cette commande vous retourne un certain nombre d'information dont un token, gardez le précieusement pour les tests suivant.
7) Tester maintenant la route d'API privée : `https://plb-rean.herokuapp.com/housings` avec votre token d'authentification ( avec une authentification par Bearer Token c'est à dire en ajoutant dans le header de votre requête `Authorization: Bearer TOKEN`) vous devriez avoir le même résultat.
8) Une fois ce comportement pris en main, nous pouvons modifier notre requête de login pour aller chercher les infos sur notre API. La documentation de la route est ici : "https://plb-rean.herokuapp.com/#api-Auth-Authenticate". Pour faire une requête avec une authentification basique, il faudra utiliser btoa, qui est normalement disponible dans un navigateur mais pas dans un environnement react-native. Vous pouvez récupérer le fichier crypto dans le répertoire helpers du dossier démarrage.
9) En cas de succès de la requête, persister le token avec AsyncStorage.
10) En vous aidant du cours, ajuster votre router pour qu'il redirige sur la bonne route en fonction de la présence ou non du token.
11) Implémenter le flow de déconnection : c'est à dire supprimer le token du storage et rediriger vers la bonne route.

## Aller plus loin

Modifier l'écran profil pour récupérer les informations de l'utilisateur connecté avec la route https://plb-rean.herokuapp.com/#api-User-RetrieveCurrentUser
