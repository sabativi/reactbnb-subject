import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import HousingListHOC from "./HousingListHOC";
import GeolocationHOC from "./GeolocationHOC";

const styles = StyleSheet.create({
  container: StyleSheet.absoluteFillObject,
  map: StyleSheet.absoluteFillObject
});

const Map = ({ housings, latitude, longitude }) => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      region={{
        latitude,
        longitude,
        latitudeDelta: 30.015,
        longitudeDelta: 30.0121
      }}
    >
      {housings.map(({ listing }) => (
        <Marker
          key={listing.id}
          coordinate={{ latitude: listing.lat, longitude: listing.lng }}
          title={listing.name}
        />
      ))}
    </MapView>
  </View>
);

const MapWithPosition = GeolocationHOC(Map);

export default HousingListHOC(MapWithPosition);
