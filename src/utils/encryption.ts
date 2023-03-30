import { TokenData } from '@/@types/database';
import CryptoJS from 'crypto-js';

export type EncryptionType = string | TokenData | Object;

export const encrypt = (data: EncryptionType, key: string) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();

export const decrypt = (data: string, key: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    console.error(err);
  }
};
