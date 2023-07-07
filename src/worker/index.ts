import { expose } from 'comlink';
import { getUser, addUser } from '@/database';

const exports = {
  getUser,
  addUser,
};
export type ReactWebWorker = typeof exports;

expose(exports);
