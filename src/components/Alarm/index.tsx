import { ExtendSVGBtn } from '@/styles/utils';
import { useMouseHandler } from '@/hooks';
import { AlarmIcon } from '@/assets';
import CoverInteract from '@/components/CoverInteract';

const Alarm = () => {
  const { mouse, ...handler } = useMouseHandler();

  return (
    <ExtendSVGBtn {...handler}>
      <CoverInteract mouse={mouse} interact={'immediate'} />
      <AlarmIcon width={'24px'} height={'24px'} />
    </ExtendSVGBtn>
  );
};

export default Alarm;
