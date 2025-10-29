import { AppState } from '../types';

const STORAGE_KEY = 'breachLawNavigatorState';
const STORAGE_VERSION = '1.0.0';

interface StoredState {
  version: string;
  data: AppState;
  timestamp: number;
}

export const saveAppState = (state: AppState): boolean => {
  try {
    const stateToStore: StoredState = {
      version: STORAGE_VERSION,
      data: state,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToStore));
    return true;
  } catch (e: any) {
    if (e.name === 'QuotaExceededError') {
      console.error('localStorage quota exceeded. Unable to save app state.');
      // Could alert user here, but keeping it silent to avoid interrupting workflow
    } else {
      console.warn('Failed to save app state to localStorage:', e);
    }
    return false;
  }
};

export const loadAppState = (): AppState | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as StoredState;

    if (parsed.version !== STORAGE_VERSION) {
      console.log('State version mismatch, ignoring stored state.');
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsed.data;
  } catch (e) {
    console.warn('Failed to load app state from localStorage:', e);
    return null;
  }
};
