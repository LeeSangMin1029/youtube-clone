import { IDBPDatabase, DBSchema } from 'idb';

export interface UserSchema extends DBSchema {
  user: {
    key: string;
    value: UserData;
  };
}

export type IDBUserSchema = IDBPDatabase<UserSchema>;

export type UserData = {
  googleID: string;
  name: string;
  email: string;
  thumbnails: string;
  userURL: string;
};
