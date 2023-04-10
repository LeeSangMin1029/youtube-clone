export type UserAction = 'getUser' | 'addUser' | 'updateUser' | 'deleteUser';

export type VideoAction =
  | 'getVideo'
  | 'getAllVideo'
  | 'addVideo'
  | 'updateVideo'
  | 'deleteVideo';

export type WebWorkerAction = UserAction | VideoAction;

export interface VideoDispatch {
  dispatch: VideoAction;
}
