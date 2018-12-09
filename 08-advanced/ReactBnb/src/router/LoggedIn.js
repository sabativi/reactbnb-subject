import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Profile from "../containers/Profile";
import HousingList from "../containers/HousingList";
import HousingDetail from "../containers/HousingDetail";
import Map from "../containers/Map";
import Chat from "../containers/Chat";

import colors from "../config/colors";

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <Icon name={name} size={size} color={tintColor} />
  );

  return icon;
};

const AppNavigator = createStackNavigator({
  HousingList: {
    screen: HousingList
  },
  HousingDetail: {
    screen: HousingDetail
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarLabel: "EXPLORE",
        tabBarIcon: CustomTabBarIcon("ios-search", 22)
      }
    },
    Map: {
      screen: Map,
      navigationOptions: {
        tabBarLabel: "MAP",
        tabBarIcon: CustomTabBarIcon("ios-map", 22)
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarLabel: "Chat",
        tabBarIcon: CustomTabBarIcon("ios-chatboxes", 22)
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "PROFILE",
        tabBarIcon: CustomTabBarIcon("ios-contact", 22)
      }
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontWeight: "600",
        marginBottom: 5
      },
      activeTintColor: colors.BnbRed
    }
  }
);

export default TabNavigator;
