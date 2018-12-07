import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import colors from "../config/colors";

class Profile extends Component {
  onLogout = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();
    navigation.navigate("LoggedOut");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john@doe.com</Text>
            <Text style={styles.description}>
              Voyageur qui aime partager, je serai content de vous recevoir chez
              moi.
            </Text>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onLogout}
            >
              <Text style={styles.buttonText}>Se déconnecter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: colors.BnbGreen,
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "white",
    fontWeight: "600"
  },
  body: {
    marginTop: 40,
    flex: 1
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: colors.textGrey,
    fontWeight: "600"
  },
  email: {
    fontSize: 16,
    color: colors.BnbGreen,
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: colors.textGrey,
    marginTop: 10,
    textAlign: "center"
  },
  buttonText: {
    color: "white"
  },
  buttonContainer: {
    marginTop: 40,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: colors.BnbRed
  }
});

export default Profile;
