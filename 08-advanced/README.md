# TP 04.2 : Construire son interface : Navigation

## Objectifs

Publier l'applications sur les stores.

## Préparatifs

1. Repartir des fichiers du TP précédent ou du dossier `ReactBnb` fourni. **NB :** Si vous repartez de vos fichiers, récupérer le splash screen

## Instructions

1. Avant de publier sur les stores, il faut ajouter une icone et un splash screen à notre application. La procédure est un peu longue, vous pouvez suivre ce tuto : https://medium.com/@scottianstewart/react-native-add-app-icons-and-launch-screens-onto-ios-and-android-apps-3bfbc20b7d4
2. En suivant cette documentation https://facebook.github.io/react-native/docs/signed-apk-android, générer un .apk en mode release. Celui ci peut s'uploader sur les stores. Si vous avez un compte Android ( 25 euros ) alors vous pouvez publier votre application ( créer dans un premier temps une release beta ).

Je vous propose de mettre en place un chat dans l'application, un module de notification push pour notifier les personnes quand il y a un nouveau message. Afin de simplifier les choses et d'éviter les notions de rooms, le chat sera sans API websocket.

1. Dans un premier temps, nous allons setter les notifications, un service qui fonctionne très bien et gratuit est https://onesignal.com/, vous pouvez créer un compte et suivre la documentation ici : https://documentation.onesignal.com/docs/react-native-sdk-setup
2. Pour faire le chat, nous allons utiliser le module https://github.com/FaridSafi/react-native-gifted-chat qui est une référence.
