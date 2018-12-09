import { createSwitchNavigator } from "react-navigation";
import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";
import AuthLoadingScreen from "./AuthLoadingScreen";

const AuthNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    LoggedIn: LoggedIn,
    LoggedOut: LoggedOut
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default AuthNavigator;
