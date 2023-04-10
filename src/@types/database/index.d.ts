import { IDBPDatabase, DBSchema } from 'idb';

export interface UserSchema extends DBSchema {
  user: {
    key: string;
    value: UserData;
  };
}

export type IDBUserSchema = IDBPDatabase<UserSchema>;

export interface UserData {
  googleID: string;
  name: string;
  email: string;
  thumbnails: string;
  userURL: string;
}
