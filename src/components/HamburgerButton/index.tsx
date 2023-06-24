import { useMouseHandler } from '@/hooks';
import { SVGBtn } from '@/styles/utils';
import { Hamburger } from '@/assets';
import { useMenuContext } from '@/context/MenuContext';
import CoverInteract from '@/components/CoverInteract';
import { memo } from 'react';

const HamburgerButton = () => {
  const { open, setOpen } = useMenuContext();
  const { mouse, ...handler } = useMouseHandler({
    handleUp: () => setOpen(!open),
  });

  return (
    <SVGBtn {...handler}>
      <CoverInteract mouse={mouse} interact="immediate" />
      <Hamburger width={'24px'} height={'24px'} />
    </SVGBtn>
  );
};

export default memo(HamburgerButton);
