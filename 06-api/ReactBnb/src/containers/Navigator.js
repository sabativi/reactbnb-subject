import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import HousingList from "./HousingList";
import HousingDetail from "./HousingDetail";
import SearchForm from "./SearchForm";
import Profile from "./Profile";
import LogIn from "./LogIn";

import colors from "../config/colors";

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

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <Icon name={name} size={size} color={tintColor} />
  );

  return icon;
};

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

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LogIn
    },
    Main: {
      screen: TabNavigator
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AuthNavigator);
