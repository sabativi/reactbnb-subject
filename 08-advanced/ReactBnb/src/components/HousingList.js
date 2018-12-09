import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  FlatList
} from "react-native";

import HousingListItem from "./HousingListItem";
import Notification from "./Notification";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30
  },
  button: {
    alignItems: "center"
  },
  notificationWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  }
});

const HousingList = ({
  navigation,
  housings,
  hideError,
  loading,
  error,
  refetch
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={refetch}
        data={housings}
        refreshing={loading}
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
      <View style={styles.notificationWrapper}>
        <Notification
          showNotification={!loading && error}
          handleCloseNotification={hideError}
          type="Error"
          firstLine="Error when retrieving data."
          secondLine="Please pull to try again."
        />
      </View>
    </View>
  );
};

export default HousingList;
