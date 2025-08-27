import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'quiz_results';

export const storeResult = async (result) => {
  try {
    const existingResults = await getStoredResults();
    const updatedResults = [...existingResults, result];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResults));
  } catch (error) {
    console.error('Error storing result:', error);
  }
};

export const getStoredResults = async () => {
  try {
    const results = await AsyncStorage.getItem(STORAGE_KEY);
    return results ? JSON.parse(results) : [];
  } catch (error) {
    console.error('Error getting stored results:', error);
    return [];
  }
};

export const clearResults = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing results:', error);
  }
};