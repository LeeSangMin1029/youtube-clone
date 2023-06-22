import { useMouseHandler } from '@/hooks';
import { SVGBtn } from '@/styles/utils';
import { Hamburger } from '@/assets';
import { useMenuContext } from '@/context/MenuContext';
import CoverInteract from '@/components/CoverInteract';
import { CustomMouseEvent } from '@/@types/global';
import { memo } from 'react';

const HamburgerButton = () => {
  const { mouse, ...handler } = useMouseHandler();
  const { open, setOpen } = useMenuContext();
  const onMouseUp = (event: CustomMouseEvent) => {
    setOpen(!open);
    handler.onMouseUp(event);
  };

  return (
    <SVGBtn {...handler} onMouseUp={onMouseUp}>
      <CoverInteract mouse={mouse} interact="immediate" />
      <Hamburger width={'24px'} height={'24px'} />
    </SVGBtn>
  );
};

export default memo(HamburgerButton);
