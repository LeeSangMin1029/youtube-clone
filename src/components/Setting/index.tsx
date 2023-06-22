import { ExtendSVGBtn } from '@/styles/utils';
import { useMouseHandler } from '@/hooks';
import { SettingIcon } from '@/assets';
import CoverInteract from '@/components/CoverInteract';

const Setting = () => {
  const { mouse, ...handler } = useMouseHandler();

  return (
    <ExtendSVGBtn {...handler}>
      <CoverInteract mouse={mouse} />
      <SettingIcon width={'24px'} height={'24px'} />
    </ExtendSVGBtn>
  );
};

export default Setting;
