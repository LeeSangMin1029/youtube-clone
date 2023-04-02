import { IDBUserSchema, UserData } from '@/@types/database';
import { WebWorkerAction } from '@/@types/dispatch';
import { envConfig } from '@/config';
import { decrypt } from './encryption';
import { databaseInit, addUser, getUser } from '@/database';

type ReceivingData = {
  payload: UserData;
  dispatch: WebWorkerAction;
};

type SendingData = {
  payload?: {} | null;
  status: 'failed' | 'success';
  dispatch: WebWorkerAction | null;
};

self.onmessage = async (e: MessageEvent<ReceivingData>) => {
  const response: SendingData = { status: 'failed', dispatch: null };
  let db: IDBUserSchema | null = null;
  db = await databaseInit();
  if (!db) return;
  const { payload, dispatch } = e.data;
  response.dispatch = dispatch;
  switch (dispatch) {
    case 'getToken':
      {
        const user = await getUser(db);
        if (user) {
          const decryptToken = decrypt(user.token, envConfig.ACCESS_SECRET_KEY);
          response.status = 'success';
          response.payload = decryptToken;
        }
        self.postMessage(response);
      }
      break;
    case 'setToken':
      {
        console.log(payload);
      }
      break;
    case 'getUser':
      {
        const user = await getUser(db);
        if (user) {
          response.status = 'success';
          response.payload = { ...user };
        } else {
          response.status = 'failed';
        }
        self.postMessage(response);
      }
      break;
    case 'addUser':
      if (await addUser(db, payload.id, payload)) {
        response.status = 'success';
      } else {
        response.status = 'failed';
      }
      self.postMessage(response);
      break;
    case 'updateUser':
      {
      }
      break;
    case 'deleteUser':
      {
      }
      break;
    case 'getVideo':
      break;
    case 'getAllVideo':
      break;
    case 'addVideo':
      break;
    case 'updateVideo':
      break;
    case 'deleteVideo':
      break;
    default:
      break;
  }
};
