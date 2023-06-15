import { useMouseHandler } from '@/hooks';
import { Content } from './styles';
import { Hamburger } from '@/assets';
import CoverInteract from '@/components/CoverInteract';

const DropdownMenu = () => {
  const { mouse, ...handler } = useMouseHandler();
  return (
    <Content {...handler}>
      <CoverInteract mouse={mouse} variant="circular" />
      <Hamburger />
    </Content>
  );
};

export default DropdownMenu;
