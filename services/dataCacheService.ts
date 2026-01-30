/**
 * Service for caching application data in IndexedDB for offline support
 * Caches laws.json so the app works without internet after first load
 */

const DB_NAME = 'BreachLawNavigatorCache';
const DB_VERSION = 1;
const LAWS_STORE = 'laws';
const METADATA_STORE = 'metadata';

interface CacheMetadata {
  key: string;
  timestamp: number;
  version: string;
}

// Open IndexedDB connection
const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      
      // Store for cached laws data
      if (!db.objectStoreNames.contains(LAWS_STORE)) {
        db.createObjectStore(LAWS_STORE, { keyPath: 'stateCode' });
      }
      
      // Store for cache metadata (timestamps, versions)
      if (!db.objectStoreNames.contains(METADATA_STORE)) {
        db.createObjectStore(METADATA_STORE, { keyPath: 'key' });
      }
    };
  });
};

/**
 * Cache laws data to IndexedDB
 */
export const cacheLaws = async (laws: any[]): Promise<boolean> => {
  try {
    const db = await openDB();
    
    // Clear existing cache
    const clearTx = db.transaction(LAWS_STORE, 'readwrite');
    const clearStore = clearTx.objectStore(LAWS_STORE);
    await new Promise<void>((resolve, reject) => {
      const clearReq = clearStore.clear();
      clearReq.onsuccess = () => resolve();
      clearReq.onerror = () => reject(clearReq.error);
    });

    // Add all laws
    const tx = db.transaction(LAWS_STORE, 'readwrite');
    const store = tx.objectStore(LAWS_STORE);
    
    for (const law of laws) {
      await new Promise<void>((resolve, reject) => {
        const req = store.put(law);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    }

    // Update metadata
    const metaTx = db.transaction(METADATA_STORE, 'readwrite');
    const metaStore = metaTx.objectStore(METADATA_STORE);
    const metadata: CacheMetadata = {
      key: 'lawsCache',
      timestamp: Date.now(),
      version: '1.0.0',
    };
    
    await new Promise<void>((resolve, reject) => {
      const req = metaStore.put(metadata);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });

    console.info(`✅ Cached ${laws.length} laws to IndexedDB for offline use`);
    return true;
  } catch (error) {
    console.warn('Failed to cache laws:', error);
    return false;
  }
};

/**
 * Load cached laws from IndexedDB
 */
export const loadCachedLaws = async (): Promise<any[] | null> => {
  try {
    const db = await openDB();
    
    // Check if cache exists and is valid
    const metaTx = db.transaction(METADATA_STORE, 'readonly');
    const metaStore = metaTx.objectStore(METADATA_STORE);
    const metadata = await new Promise<CacheMetadata | null>((resolve, reject) => {
      const req = metaStore.get('lawsCache');
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });

    if (!metadata) {
      console.info('No cached laws found');
      return null;
    }

    // Load all laws
    const tx = db.transaction(LAWS_STORE, 'readonly');
    const store = tx.objectStore(LAWS_STORE);
    const laws = await new Promise<any[]>((resolve, reject) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });

    console.info(`✅ Loaded ${laws.length} laws from IndexedDB cache`);
    return laws;
  } catch (error) {
    console.warn('Failed to load cached laws:', error);
    return null;
  }
};

/**
 * Clear the laws cache
 */
export const clearLawsCache = async (): Promise<boolean> => {
  try {
    const db = await openDB();
    
    const tx = db.transaction(LAWS_STORE, 'readwrite');
    const store = tx.objectStore(LAWS_STORE);
    
    await new Promise<void>((resolve, reject) => {
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });

    // Also clear metadata
    const metaTx = db.transaction(METADATA_STORE, 'readwrite');
    const metaStore = metaTx.objectStore(METADATA_STORE);
    
    await new Promise<void>((resolve, reject) => {
      const req = metaStore.delete('lawsCache');
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });

    console.info('✅ Cleared laws cache');
    return true;
  } catch (error) {
    console.warn('Failed to clear cache:', error);
    return false;
  }
};

/**
 * Check if cache is available and recent (less than 7 days old)
 */
export const isCacheValid = async (): Promise<boolean> => {
  try {
    const db = await openDB();
    
    const tx = db.transaction(METADATA_STORE, 'readonly');
    const store = tx.objectStore(METADATA_STORE);
    
    const metadata = await new Promise<CacheMetadata | null>((resolve, reject) => {
      const req = store.get('lawsCache');
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });

    if (!metadata) return false;

    // Check if cache is less than 7 days old
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const isRecent = (Date.now() - metadata.timestamp) < maxAge;
    
    return isRecent;
  } catch (error) {
    return false;
  }
};

/**
 * Get cache age in hours
 */
export const getCacheAge = async (): Promise<number | null> => {
  try {
    const db = await openDB();
    
    const tx = db.transaction(METADATA_STORE, 'readonly');
    const store = tx.objectStore(METADATA_STORE);
    
    const metadata = await new Promise<CacheMetadata | null>((resolve, reject) => {
      const req = store.get('lawsCache');
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });

    if (!metadata) return null;

    const ageMs = Date.now() - metadata.timestamp;
    return Math.round(ageMs / (1000 * 60 * 60)); // Convert to hours
  } catch (error) {
    return null;
  }
};
