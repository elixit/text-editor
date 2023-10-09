import { openDB } from 'idb';

// Initialize the database
const initdb = async () => {
  const db = await openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
  return db;
};

// Add content to the database
export const putDb = async (content) => {
  const db = await initdb();
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.add({ value: content }); // Use 'add' instead of 'put' for auto-incremented key
  await tx.done;
  console.log('Content added to the database:', request);
};

// Get content from the database by ID
export const getDb = async (id) => {
  const db = await initdb();
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const content = await store.get(id);
  await tx.done;
  console.log('Content retrieved from the database:', content?.value);
  return content?.value;
};

// Initialize the database when the module is imported
initdb();
