import { IDBPDatabase, DBSchema } from 'idb';

export interface UserSchema extends DBSchema {
  user: {
    key: string;
    value: UserData;
  };
}

export type IDBUserSchema = IDBPDatabase<UserSchema>;

export interface UserDataWithoutId {
  googleName: string;
  youtubeName: string;
  email: string;
  gThumbnails: string;
  yThumbnails: {
    url: string;
    width: number;
    height: number;
  };
  customUrl: string;
}

export type UserData = UserDataWithoutId & { id: string };
