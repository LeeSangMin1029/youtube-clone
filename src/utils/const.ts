export const MOUSE_ACTION = {
  MOUSE_ENTER: 'MOUSE_ENTER',
  MOUSE_ENTER_DOWN: 'MOUSE_ENTER_DOWN',
  MOUSE_LEAVE: 'MOUSE_LEAVE',
  MOUSE_DOWN: 'MOUSE_DOWN',
  MOUSE_UP: 'MOUSE_UP',
} as const;
export type MOUSE_ACTION = (typeof MOUSE_ACTION)[keyof typeof MOUSE_ACTION];

export const MOUSE_WHICH = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2,
};
export type MOUSE_WHICH = (typeof MOUSE_WHICH)[keyof typeof MOUSE_WHICH];
