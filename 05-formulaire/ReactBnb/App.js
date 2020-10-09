import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Navigator from "./src/containers/Navigator";
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer>
        <Navigator />
      </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
