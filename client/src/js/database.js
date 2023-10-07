import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

    const db = await openDB('jate', 1);
    const request = store.put({ id: 1, value: content });
    const result = store.put({ id: 1, value: content });
    const tx = db.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    console.log(request, result);
  
  

  //TODO: Add logic for a method that gets all the content from the database
  export const getDb = async () => console.log('Get from database');
  {
  

    const id = await store.put({ value: content, id:1 })
    const db = await openDB('jate', 1);
    const tx = db.transaction('jate', 'readonly');  
    const store = tx.objectStore('jate');
    const content = await store.get(1);
    await tx.done;
  
    return content?.value;
  };
  
  
  initdb();
