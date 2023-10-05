import { MMKV } from 'react-native-mmkv';
import { STORAGE_USER_ID, STORAGE_ENCRYPTION_KEY } from 'react-native-dotenv';

const storage = new MMKV({
  id: STORAGE_USER_ID,
  encryptionKey: STORAGE_ENCRYPTION_KEY,
});

/**
 * Save data into storage
 *
 * @param {string} key
 * @param {boolean | string | number | Uint8Array} value
 * @returns {void}
 */
export function save(
  key: string,
  value: boolean | string | number | Uint8Array,
) {
  try {
    storage.delete(key);
    storage.set(key, value);
  } catch (error) {
    console.log('Storage save', error);
  }
}

/**
 * Delete data into storage
 *
 * @param {string} key
 * @returns {void}
 */
export function remove(key: string) {
  try {
    storage.delete(key);
  } catch (error) {
    console.log('Storage delete', error);
  }
}

/**
 * Loads the string value of the specified key
 *
 * @param {string} key
 * @returns {string|undefined} The string value or `null` if the key is not found.
 */
export function loadString(key: string) {
  try {
    return storage.getString(key);
  } catch (error) {
    console.log('Storage loadString', error);
  }
}

/**
 * Loads the number value for the given key
 *
 * @param {string} key
 * @returns {number|undefined} The value as number or `undefined` if the key is not found.
 */
export function loadNumber(key: string) {
  try {
    return storage.getNumber(key);
  } catch (error) {
    console.log('Storage loadNumber', error);
  }
}

/**
 * Loads the boolean value of the specified
 *
 * @param {string} key The key to load the boolean value for.
 * @returns {boolean|undefined} The boolean value or `undefined` if the key is not found.
 */
export function loadBoolean(key: string) {
  try {
    return storage.getBoolean(key);
  } catch (error) {
    console.log('Storage loadBoolean', error);
  }
}
