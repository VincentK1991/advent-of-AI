import type { UserState } from '../types/index';

const STORAGE_KEY = 'christmas-adventure-state';

export const loadUserState = (): UserState | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error loading user state:', error);
    return null;
  }
};

export const saveUserState = (state: UserState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving user state:', error);
  }
};

export const clearUserState = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing user state:', error);
  }
};

export const createInitialState = (): UserState => ({
  currentStoryId: null,
  currentScenarioId: null,
  choiceHistory: [],
  completedEndings: [],
  timestamp: Date.now(),
});
