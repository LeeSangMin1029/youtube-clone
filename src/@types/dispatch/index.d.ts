export type UserAction = 'getUser' | 'addUser' | 'updateUser' | 'deleteUser';

export type VideoAction =
  | 'getVideo'
  | 'getAllVideo'
  | 'addVideo'
  | 'updateVideo'
  | 'deleteVideo';
export type TokenAction = 'getToken' | 'refresh';

export type WebWorkerAction = UserAction | VideoAction | TokenAction;

export interface VideoDispatch {
  dispatch: VideoAction;
}
