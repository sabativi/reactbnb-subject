import { AsyncStorage } from "react-native";
import TOKEN_KEY from "../config/token";
import API_URL from "../config/api";

const housingFetch = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  const paramsFetch = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const raw = await fetch(`${API_URL}/housings`, {
    paramsFetch
  });
  return raw.json();
};

export default housingFetch;
