import { createStackNavigator } from '@react-navigation/stack';

import HousingList from "./HousingList";
import HousingDetail from "./HousingDetail";
import SearchForm from "./SearchForm";

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

export default createAppContainer(AppNavigator);
