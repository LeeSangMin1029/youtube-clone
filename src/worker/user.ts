import { UserData } from '@/@types/database';
import { UserAction, WorkerEventData } from '@/@types/dispatch';
import { addUser, getUser, getDB } from '@/database';

type ReceivingData = {
  payload?: UserData;
  dispatch: UserAction;
};

self.onmessage = async (e: MessageEvent<ReceivingData>) => {
  const db = await getDB();
  const { payload, dispatch } = e.data;
  const response: WorkerEventData = { status: 'failed', dispatch: null };
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
      if (payload && (await addUser(db, payload.googleID, payload))) {
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
    default:
      break;
  }
};
