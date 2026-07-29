import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

export const storageAdapter = {
  getItem: async (name: string): Promise<string | null> => {
    try {
      if (isWeb && typeof localStorage !== "undefined") {
        return localStorage.getItem(name);
      }
      return await AsyncStorage.getItem(name);
    } catch (e) {
      console.error("Error getting item:", e);
      return null;
    }
  },
  setItem: async (name: string, value: string): Promise<void> => {
    try {
      if (isWeb && typeof localStorage !== "undefined") {
        localStorage.setItem(name, value);
      } else {
        await AsyncStorage.setItem(name, value);
      }
    } catch (e) {
      console.error("Error setting item:", e);
    }
  },
  removeItem: async (name: string): Promise<void> => {
    try {
      if (isWeb && typeof localStorage !== "undefined") {
        localStorage.removeItem(name);
      } else {
        await AsyncStorage.removeItem(name);
      }
    } catch (e) {
      console.error("Error removing item:", e);
    }
  },
};
