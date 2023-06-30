import { useMouseHandler } from '@/hooks';
import CoverInteract from '@/components/CoverInteract';
import { BaseButton } from '@/styles/utils';
import {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

type CommentSubmitProps = {
  isReply: boolean;
};

export type ColorHandle = {
  activate: () => void;
  deActivate: () => void;
};

const CommentSubmit = (
  { isReply }: CommentSubmitProps,
  outRef: ForwardedRef<ColorHandle>,
) => {
  const { mouse, ...handler } = useMouseHandler();
  const [isPlay, setPlay] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  useImperativeHandle(outRef, () => ({
    activate() {
      if (ref.current) {
        ref.current.style.backgroundColor = '#0556bf';
        ref.current.style.color = 'white';
        ref.current.style.cursor = 'pointer';
        ref.current.disabled = false;
        setPlay(true);
      }
    },
    deActivate() {
      if (ref.current) {
        ref.current.style.backgroundColor = 'rgba(0,0,0,0.05)';
        ref.current.style.color = '#909090';
        ref.current.style.cursor = 'default';
        ref.current.disabled = true;
        setPlay(false);
      }
    },
  }));

  return (
    <BaseButton {...handler} id="form1" type="submit" ref={ref}>
      <span>{isReply ? '답글' : '댓글'}</span>
      {isPlay && <CoverInteract mouse={mouse} interact="immediate" />}
    </BaseButton>
  );
};
export default memo(forwardRef<ColorHandle, CommentSubmitProps>(CommentSubmit));
