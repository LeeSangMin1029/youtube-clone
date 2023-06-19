import { useMouseHandler } from '@/hooks';
import { Content } from './styles';
import { Hamburger } from '@/assets';
import { useMenuContext } from '@/context/MenuContext';
import CoverInteract from '@/components/CoverInteract';
import { useEffect } from 'react';

const HamburgerButton = () => {
  const { mouse, ...handler } = useMouseHandler();
  const { open, setOpen } = useMenuContext();
  useEffect(() => {
    if (!mouse.leave && mouse.up) {
      setOpen(!open);
    }
  }, [mouse.leave, mouse.up]);
  return (
    <Content {...handler}>
      <CoverInteract mouse={mouse} variant="circular" />
      <Hamburger />
    </Content>
  );
};

export default HamburgerButton;
