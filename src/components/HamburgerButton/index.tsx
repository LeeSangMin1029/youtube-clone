import { useMouseHandler } from '@/hooks';
import { Content } from './styles';
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
    <Content {...handler} onMouseUp={onMouseUp}>
      <CoverInteract mouse={mouse} interact="immediate" />
      <Hamburger />
    </Content>
  );
};

export default memo(HamburgerButton);
