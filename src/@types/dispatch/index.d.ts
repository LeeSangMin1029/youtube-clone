import { UserData } from '../database';
export type UserAction = 'getUser' | 'addUser' | 'updateUser' | 'deleteUser';

export type VideoAction =
  | 'getVideo'
  | 'getAllVideo'
  | 'addVideo'
  | 'updateVideo'
  | 'deleteVideo';

export type WebWorkerAction = UserAction | VideoAction;

export type VideoDispatch = {
  dispatch: VideoAction;
};

export type WorkerEventData = {
  payload?: UserData;
  status: 'failed' | 'success';
  dispatch: WebWorkerAction | null;
};
