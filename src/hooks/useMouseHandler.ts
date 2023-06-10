import { useReducer } from 'react';
import { MOUSE_ACTION } from '@/utils';

type MouseState = {
  enter: boolean;
  leave: boolean;
  down: boolean;
  up: null | boolean;
};

const initMouseState: MouseState = {
  enter: false,
  leave: false,
  down: false,
  up: null,
};

const reducer = (
  state: MouseState,
  action: { type: MOUSE_ACTION },
): MouseState => {
  switch (action.type) {
    case MOUSE_ACTION.MOUSE_ENTER:
      return { ...state, enter: true, leave: false };
    case MOUSE_ACTION.MOUSE_LEAVE:
      return { ...state, enter: false, leave: true };
    case MOUSE_ACTION.MOUSE_DOWN:
      return { ...state, down: true, up: null };
    case MOUSE_ACTION.MOUSE_UP:
      return { ...state, down: false, up: true };
    default:
      throw new Error();
  }
};

export const useMouseHandler = () => useReducer(reducer, initMouseState);
