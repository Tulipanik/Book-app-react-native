import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAPIRequest, URL } from "./BookApiService";

const TOKEN_KEY = "jwtToken";
let authorizationStatus = false;

const TokenService = {
  saveToken: async (loginData) => {
    try {
      const token = await setItem(loginData);
      AsyncStorage.setItem(TOKEN_KEY, token.token);
      authorizationStatus = true;
    } catch (error) {
      console.error("Error saving token:", error);
    }
  },

  getToken: async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      console.log(token);
      return token;
    } catch (error) {
      console.error("Error getting token:", error);
      return null;
    }
  },

  removeToken: async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
    } catch (error) {
      console.error("Error removing token:", error);
    }
  },

  isAuthenticated: () => {
    return authorizationStatus;
  },
};

const setItem = async (loginData) => {
  const endpoint = `${URL}login`;
  const metadata = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  };

  const token = getAPIRequest(endpoint, "", metadata);
  return token;
};

export const register = async (user) => {
  const endpoint = `${URL}register`;
  const metadata = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  const token = await getAPIRequest(endpoint, "", metadata);
  return token;
};

export default TokenService;
