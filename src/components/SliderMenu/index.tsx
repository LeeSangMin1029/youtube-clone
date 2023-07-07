import { useMenuContext } from '@/context/MenuContext';
import { StyledMenu } from './styles';
import { memo } from 'react';
import ExpandableMenu from '@/components/ExpandableMenu';
import ExpandedMenu from '@/components/ExpandedMenu';

const SliderMenu = () => {
  const { open } = useMenuContext();

  return (
    <StyledMenu open={open}>
      {open ? <ExpandedMenu /> : <ExpandableMenu />}
    </StyledMenu>
  );
};

export default memo(SliderMenu);
