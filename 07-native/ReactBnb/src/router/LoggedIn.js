import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Profile from "../containers/Profile";
import HousingList from "../containers/HousingList";
import HousingDetail from "../containers/HousingDetail";
import SearchForm from "../containers/SearchForm";

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
  },
  SearchForm: {
    screen: SearchForm
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
