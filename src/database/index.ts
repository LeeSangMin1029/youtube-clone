import { UserData, UserSchema, IDBUserSchema } from '@/@types/database';
import { openDB } from 'idb';

export const getDB = async (): Promise<IDBUserSchema> =>
  await openDB<UserSchema>('youtube', 1, {
    upgrade: (db: IDBUserSchema) =>
      db.createObjectStore('user', {
        keyPath: 'googleID',
      }),
  });

const db = await getDB();

export const getUser = async () => {
  const tx = db.transaction('user', 'readonly');
  const user = tx.objectStore('user');
  const req = await user.openCursor();
  return req?.value;
};

export const addUser = async (key: string, data: UserData) => {
  const tx = db.transaction('user', 'readwrite');
  const store = tx.objectStore('user');
  const req = await store.openCursor(key);
  if (req?.key !== key) return await store.add(data);
  db.close();
};
