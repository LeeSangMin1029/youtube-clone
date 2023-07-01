import { Hamburger } from '@/assets';
import { useMenuContext } from '@/context/MenuContext';
import AnimateElement from '@/components/AnimateElement';
import { memo } from 'react';
import { CircularButton } from '@/styles/utils';

const HamburgerButton = () => {
  const { open, setOpen } = useMenuContext();

  return (
    <AnimateElement Styled={CircularButton} handleUp={() => setOpen(!open)}>
      <Hamburger width={'24px'} height={'24px'} />
    </AnimateElement>
  );
};

export default memo(HamburgerButton);
