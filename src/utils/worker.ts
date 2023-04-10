import { UserData } from '@/@types/database';
import { WebWorkerAction } from '@/@types/dispatch';
import { addUser, getUser, getDB } from '@/database';

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
  const db = await getDB();
  const response: SendingData = { status: 'failed', dispatch: null };
  const { payload, dispatch } = e.data;
  response.dispatch = dispatch;
  switch (dispatch) {
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
      if (await addUser(db, payload.googleID, payload)) {
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
