import { AppState } from '../types';

const STORAGE_KEY = 'breachLawNavigatorState';
const STORAGE_VERSION = '1.0.0';
const DB_NAME = 'BreachLawNavigator';
const DB_STORE_NAME = 'appState';
const DB_VERSION = 1;

interface StoredState {
  version: string;
  data: AppState;
  timestamp: number;
}

// Check if IndexedDB is available
const isIndexedDBAvailable = (): boolean => {
  return typeof window !== 'undefined' && 'indexedDB' in window;
};

// Get or create IndexedDB instance
const getIndexedDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (!isIndexedDBAvailable()) {
      reject(new Error('IndexedDB not available'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(DB_STORE_NAME)) {
        db.createObjectStore(DB_STORE_NAME);
      }
    };
  });
};

// Save to IndexedDB as fallback
const saveToIndexedDB = async (state: StoredState): Promise<boolean> => {
  try {
    const db = await getIndexedDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([DB_STORE_NAME], 'readwrite');
      const store = transaction.objectStore(DB_STORE_NAME);
      const request = store.put(state, STORAGE_KEY);

      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.warn('Failed to save to IndexedDB:', error);
    return false;
  }
};

// Load from IndexedDB
const loadFromIndexedDB = async (): Promise<StoredState | null> => {
  try {
    const db = await getIndexedDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([DB_STORE_NAME], 'readonly');
      const store = transaction.objectStore(DB_STORE_NAME);
      const request = store.get(STORAGE_KEY);

      request.onsuccess = () => resolve(request.result as StoredState | null);
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.warn('Failed to load from IndexedDB:', error);
    return null;
  }
};

export const saveAppState = async (state: AppState): Promise<boolean> => {
  const stateToStore: StoredState = {
    version: STORAGE_VERSION,
    data: state,
    timestamp: Date.now(),
  };

  // Try localStorage first
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToStore));
    return true;
  } catch (e: any) {
    if (e.name === 'QuotaExceededError') {
      console.warn('localStorage quota exceeded. Falling back to IndexedDB...');
    } else {
      console.warn('Failed to save to localStorage:', e);
    }

    // Fallback to IndexedDB
    if (isIndexedDBAvailable()) {
      const indexedDBSuccess = await saveToIndexedDB(stateToStore);
      if (indexedDBSuccess) {
        console.info('State saved to IndexedDB as fallback');
        return true;
      }
    }

    console.error('Failed to save app state to any storage mechanism');
    return false;
  }
};

export const loadAppState = async (): Promise<AppState | null> => {
  // Try localStorage first
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as StoredState;

      if (parsed.version !== STORAGE_VERSION) {
        console.log('State version mismatch in localStorage, ignoring stored state.');
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }

      return parsed.data;
    }
  } catch (e) {
    console.warn('Failed to load from localStorage:', e);
  }

  // Fallback to IndexedDB
  if (isIndexedDBAvailable()) {
    try {
      const stored = await loadFromIndexedDB();
      if (stored) {
        if (stored.version !== STORAGE_VERSION) {
          console.log('State version mismatch in IndexedDB, ignoring stored state.');
          return null;
        }
        console.info('State loaded from IndexedDB fallback');
        return stored.data;
      }
    } catch (e) {
      console.warn('Failed to load from IndexedDB:', e);
    }
  }

  return null;
};

// Keep synchronous version for backward compatibility
// Note: This will only try localStorage
export const saveAppStateSync = (state: AppState): boolean => {
  try {
    const stateToStore: StoredState = {
      version: STORAGE_VERSION,
      data: state,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToStore));
    return true;
  } catch (e: any) {
    console.warn('Synchronous save failed:', e);
    return false;
  }
};

export const loadAppStateSync = (): AppState | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as StoredState;

    if (parsed.version !== STORAGE_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsed.data;
  } catch (e) {
    return null;
  }
};
