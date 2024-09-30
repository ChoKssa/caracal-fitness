import AsyncStorage from '@react-native-async-storage/async-storage';
import { Callback, CallbackWithResult } from '@react-native-async-storage/async-storage/lib/typescript/types';

export const AsyncStorageService = {
    setItem: async (key: string, value: any, callback?: Callback) => {
        try {
            await AsyncStorage.setItem(key, value, callback);
        } catch (error) {
            console.error(`AsyncStorage error setItem: ${error}`);

            if (callback) {
                callback(error as Error | null);
            }
        }
    },

    getItem: async (key: string, callback?: CallbackWithResult<string>): Promise<string | undefined> => {
        try {
            return await AsyncStorage.getItem(key, callback) || undefined;
        } catch (error) {
            console.error(`AsyncStorage error getItem: ${error}`);

            if (callback) {
                callback(error as Error | null);
            }

        }
    },

    clear: async (callback?: Callback) => {
        try {
            await AsyncStorage.clear(callback);
        } catch (error) {
            console.error(`AsyncStorage error clear: ${error}`);

            if (callback) {
                callback(error as Error | null);
            }
        }
    }
};
