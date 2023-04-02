import { IDBPDatabase, DBSchema } from 'idb';

export interface UserSchema extends DBSchema {
  user: {
    key: string;
    value: UserData;
    indexes: { token: string };
  };
}

export type IDBUserSchema = IDBPDatabase<UserSchema>;

export interface TokenData {
  refreshToken: string;
  accessToken: string;
  expirationDate: Date;
}

export interface UserData {
  id: string;
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
  token?: string;
}
