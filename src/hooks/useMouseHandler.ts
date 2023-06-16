import { useReducer, useCallback, useEffect } from 'react';
import { MOUSE_ACTION } from '@/utils';
import { CustomMouseEvent, MouseState } from '@/@types/global';
import { MOUSE_WHICH } from '@/utils/const';

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

  const isLeftMouse = (btn: MOUSE_WHICH) => btn === MOUSE_WHICH.LEFT;

  const onMouseEnter = useCallback((event: CustomMouseEvent) => {
    if (isLeftMouse(event.button)) dispatch({ type: MOUSE_ACTION.MOUSE_ENTER });
  }, []);

  const onMouseDown = useCallback((event: CustomMouseEvent) => {
    if (isLeftMouse(event.button)) dispatch({ type: MOUSE_ACTION.MOUSE_DOWN });
  }, []);

  const onMouseLeave = useCallback((event: CustomMouseEvent) => {
    if (isLeftMouse(event.button)) dispatch({ type: MOUSE_ACTION.MOUSE_LEAVE });
  }, []);

  const onMouseUp = useCallback((event: CustomMouseEvent) => {
    if (isLeftMouse(event.button)) dispatch({ type: MOUSE_ACTION.MOUSE_UP });
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
