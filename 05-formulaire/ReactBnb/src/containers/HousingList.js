import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  FlatList
} from "react-native";

import housings from "../data/housings.json";
import HousingListItem from "../components/HousingListItem";
import SearchBar from "../components/SearchBar";

export default class HousingList extends React.Component {
  state = {
    housings
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.searchBarContainer}
          onPress={() => {
            navigation.navigate("SearchForm");
          }}
        >
          <SearchBar style={styles.searchBar} />
        </TouchableOpacity>
        <FlatList
          data={this.state.housings}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("HousingDetail", { housing: item });
              }}
            >
              <HousingListItem housing={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.listing.id.toString()}
        />
      </View>
    );
  }
}

const searchBarHeight = Platform.select({ android: 78, ios: 100 });

const styles = StyleSheet.create({
  container: {
    paddingTop: searchBarHeight + 15,
    paddingHorizontal: 30
  },
  button: {
    alignItems: "center"
  },
  searchBarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  searchBar: {
    height: searchBarHeight
  }
});
