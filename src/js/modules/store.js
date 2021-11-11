// eslint-disable-next-line no-undef
const storage = new Map();

export function createStorage() {
  function saveToStore(key, value) {
    storage.set(key, value);
  }

  function getFromStore(key) {
    return storage.get(key);
  }

  return {
    save(key, value) {
      saveToStore(key, value);
    },
    get(key) {
      return getFromStore(key);
    }
  }
}
