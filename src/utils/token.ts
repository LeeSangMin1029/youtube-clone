import { TokenData } from '@/@types/database';
import { envConfig } from '@/config';
import CustomWorker from './worker?worker';
import { encrypt } from './encryption';

const worker = new CustomWorker();

export const getAccessToken = () => {
  worker.postMessage({ dispatch: 'getToken' });
  let token: TokenData | undefined;
  worker.onmessage = async (e: MessageEvent<TokenData>) => {
    token = e.data;
  };
  return token?.accessToken;
};

export const authTokenConfig = (token: string): RequestInit => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const encryptToken = (token: TokenData) =>
  encrypt(token, envConfig.ACCESS_SECRET_KEY);

export const isExpiredToken = () => {};
