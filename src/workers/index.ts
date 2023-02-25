import { IDBUserSchema, UserData } from '@/@types/database';
import { WebWorkerAction } from '@/@types/dispatch';
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
    case 'getUser':
      {
        const user = await getUser(db);
        if (user) {
          const { id, ...filterUser } = user;
          response.status = 'success';
          response.payload = { ...filterUser };
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
