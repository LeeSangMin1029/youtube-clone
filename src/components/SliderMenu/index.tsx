import { StyledMenu, StyledList } from './styles';
import { useMenuContext } from '@/context/MenuContext';
import { randomKey } from '@/utils';
import SliderItem from '@/components/SliderItem';
import { Home, Shorts, Subscription, Library } from '@/assets';

const list = [
  { name: '홈', Asset: Home },
  { name: 'Shorts', Asset: Shorts },
  { name: '구독', Asset: Subscription },
  { name: '보관함', Asset: Library },
];

const SliderMenu = () => {
  const { open } = useMenuContext();
  return (
    <StyledMenu open={open}>
      <StyledList>
        {list.map(({ name, Asset }) => (
          <SliderItem name={name} key={randomKey()}>
            <Asset />
          </SliderItem>
        ))}
      </StyledList>
    </StyledMenu>
  );
};

export default SliderMenu;
