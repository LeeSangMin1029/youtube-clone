import { UserData, UserSchema, IDBUserSchema } from '@/@types/database';
import { openDB } from 'idb';

const upgradeDB = (db: IDBUserSchema): void => {
  db.createObjectStore('user', {
    keyPath: 'id',
  });
};

export const getUser = async (db: IDBUserSchema) => {
  const tx = db.transaction('user', 'readonly');
  const user = tx.objectStore('user');
  const req = await user.openCursor();
  db.close();
  return req?.value;
};

export const addUser = async (
  db: IDBUserSchema,
  key: string,
  data: UserData,
) => {
  const tx = db.transaction('user', 'readwrite');
  const store = tx.objectStore('user');
  const req = await store.openCursor(key);
  if (req?.key !== key) return await store.add(data);
  db.close();
};

export const databaseInit = async (): Promise<IDBUserSchema> =>
  await openDB<UserSchema>('youtube', 1, { upgrade: upgradeDB });
