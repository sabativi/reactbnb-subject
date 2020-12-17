import { createStackNavigator } from '@react-navigation/stack';
import HousingList from "./HousingList";
import HousingDetail from "./HousingDetail";
import SearchForm from "./SearchForm";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HousingList" component={HousingList} />
      <Stack.Screen name="HousingDetail" component={HousingDetail} />
      <Stack.Screen name="SearchForm" component={SearchForm} />
    </Stack.Navigator>
  );
}

export default MyStack;
