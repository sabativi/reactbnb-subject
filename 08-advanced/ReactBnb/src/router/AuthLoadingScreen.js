import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  StatusBar,
  View
} from "react-native";
import TOKEN_KEY from "../config/token";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(TOKEN_KEY);
    console.log({ userToken });
    this.props.navigation.navigate(userToken ? "LoggedIn" : "LoggedOut");
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
