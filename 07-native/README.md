# TP 04.2 : Construire son interface : Navigation

## Objectifs

Ajouter une carte pour afficher avec des marqueurs.
Centrer cette carte sur la géolocalisation de l'utilisateur.
Utiliser l'appareil photo pour mettre à jour la photo de profil.

## Instructions

1. Ajouter un nouveau tab dans notre application avec un logo map et qui va contenir la carte avec les différents biens.
2. Le module pour afficher une carte que nous allons utiliser est : https://github.com/react-native-community/react-native-maps, sa mise en place peut être un peu pointilleuse mais elle est révélatrice d'une difficulté dans react-native. Si vous souhaitez en faire abstraction, vous pouvez créer un nouveau projet avec expo et copier le code fait jusqu'à présent. Expo intègre nativement ce module de maps. Sinon les instructions d'installation sont ici : https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
3. Nous souhaitons maintenant afficher nos maisons sur la carte, la structure de donnés dispose des informations de latitude et longitude. Nous voulons accéder au même données que sur la page de la liste, nous allons mettre en place un pattern en react qui s'appelle le Higher Ordre Component ( HOC ). Un HOC est une fonction qui retourne un composant. Voici un exemple d'HOC :

```js
import React from "react";
import housingsFetch from "../api/housings";

const HousingListHOC = Component => {
  class HousingListContainer extends React.Component {
    state = {
      housings: [],
      loading: true,
      error: false
    };

    async componentDidMount() {
      await this.refetch();
    }

    hideError = () => {
      this.setState({ error: false });
    };

    refetch = async () => {
      this.setState({ loading: true });
      try {
        const json = await housingsFetch();
        this.setState({
          housings: json
        });
      } catch (e) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    };

    render() {
      return (
        <Component
          hideError={this.hideError}
          refetch={this.refetch}
          {...this.props}
          {...this.state}
        />
      );
    }
  }
  return HousingListContainer;
};
```

Adapter le code pour utiliser ce composant comme container de la liste et de la map.

4. Centrer la carte de l'utilisateur sur sa position en fonction de sa géolocalisation. Sur android, il vous faudra ajouter cette permission dans le fichier `AndroidManifest.xml`

```
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

Il est préférable de tester sur votre propre téléphone.

5. Nous voulons maintenant avoir accès à l'appareil photo du téléphone/gallerie. Il faut pour celà utiliser une librairie : https://github.com/react-native-community/react-native-image-picker. Procéder à l'installation de la librarie puis intialiser la position de la carte sur la position de l'utilisateur.

## Pour aller plus loin :

1. Mettre en place un cache pour éviter de faire la requête deux fois.
2. Essayer de persister le cache avec AsyncStorage et de la réhydrater à l'ouverture de l'application.
