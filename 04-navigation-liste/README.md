# TP 04 : Construire son interface : Navigation

## Objectifs

Mettre en place une navigation avec react-navigation.

## Préparatifs

1. Repartir des fichiers du TP précédent ou du dossier demarrage fourni.
2. Installer React Navigation
   ```bash
       npm install @react-navigation/native
   ```
3. Installer les dépendances depuis expo
   ```bash
       expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
   ```
4. Ou sur une app react native classique 
```npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view```


## Instructions

1. Créer un composant `SearchForm` (`src/containers/SearchForm.js`) affichant pour l'instant juste un texte de votre choix (ce composant sera enrichi lors du prochain TP).
2. Remplacer le code du composant `Navigator` (`src/containers/Navigator.js`) par un StackNavigator (https://reactnavigation.org/docs/en/hello-react-navigation.html) contenant la `HousingList`, le `HousingDetail` et le nouveau composant `SearchForm`
3. Supprimer toute trace de la navigation actuelle
   - commenter les appels à la fonction `changeScreen` dans `HousingList` et `HousingDetail`
4. Dans `HousingList`, ajouter autour de la `SearchBar` un composant `TouchableOpacity` qui devra amener vers la page `SearchForm` à l'aide de la props `this.props.navigation.navigate`
5. Transformer l'affichage de la liste en utilisant une FlatList de react-native. Utiliser comme clef "listing.id".

## Pour aller plus loin :

1. Utiliser react-navigation pour gérer le 'tap' sur un élément de la HousingList et la redirection vers la page HousingDetail.
2. Vous pouvez essayer en utilisant une SectionList de grouper les biens par ville.
