import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const SecureStorage = {
  // Get an item from SecureStore
  getItem: async (key: string) => {
    if (Platform.OS === 'web') {
      try {
        return sessionStorage.getItem(key);
      } catch (error) {
        // TODO: Handle error
      }
    } else {
      return await AsyncStorage.getItem(key);
    }
  },

  setItem: async (key: string, value: string) => {
    if (Platform.OS === 'web') {
      try {
        sessionStorage.setItem(key, value);
      } catch (error) {
        // TODO: Handle error
      }
    } else {
      return await AsyncStorage.setItem(key, value);
    }
  },

  removeItem: async (key: string) => {
    if (Platform.OS === 'web') {
      try {
        return sessionStorage.removeItem(key);
      } catch (error) {
        // TODO: Handle error
      }
    } else {
      return await AsyncStorage.removeItem(key);
    }
  },
};

export { SecureStorage };
