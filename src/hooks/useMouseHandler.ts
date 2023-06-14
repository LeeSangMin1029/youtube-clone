import { useReducer, useCallback, useEffect } from 'react';
import { MOUSE_ACTION } from '@/utils';

export type MouseState = {
  enter: boolean;
  leave: boolean;
  down: boolean;
  up: boolean | null;
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
      return { ...state, enter: true, leave: false, up: null };
    case MOUSE_ACTION.MOUSE_LEAVE:
      return { ...state, enter: false, leave: true };
    case MOUSE_ACTION.MOUSE_DOWN:
      return { ...state, leave: false, down: true, up: null };
    case MOUSE_ACTION.MOUSE_UP:
      return { ...state, down: false, up: true };
    default:
      throw new Error();
  }
};

export const useMouseHandler = () => {
  const [mouse, dispatch] = useReducer(reducer, initMouseState);

  const onMouseEnter = useCallback(() => {
    dispatch({ type: MOUSE_ACTION.MOUSE_ENTER });
  }, []);

  const onMouseDown = useCallback(() => {
    dispatch({ type: MOUSE_ACTION.MOUSE_DOWN });
  }, []);

  const onMouseLeave = useCallback(() => {
    dispatch({ type: MOUSE_ACTION.MOUSE_LEAVE });
  }, []);

  const onMouseUp = useCallback(() => {
    dispatch({ type: MOUSE_ACTION.MOUSE_UP });
  }, []);
  const onDragStart = onMouseDown;
  const onDragEnd = onMouseUp;

  useEffect(() => {
    if (mouse.leave && mouse.down) {
      document.addEventListener('mouseup', onMouseUp);
      return () => {
        document.removeEventListener('mouseup', onMouseUp);
      };
    }
  }, [mouse.leave, mouse.down]);

  return {
    mouse,
    onMouseEnter,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onDragEnd,
    onDragStart,
  };
};
