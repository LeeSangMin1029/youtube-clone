import { ExtendSVGBtn } from '@/styles/utils';
import { useMouseHandler } from '@/hooks';
import { UploadIcon } from '@/assets';
import CoverInteract from '@/components/CoverInteract';

const Upload = () => {
  const { mouse, ...handler } = useMouseHandler();

  return (
    <ExtendSVGBtn {...handler}>
      <CoverInteract mouse={mouse} interact={'immediate'} />
      <UploadIcon width={'24px'} height={'24px'} />
    </ExtendSVGBtn>
  );
};

export default Upload;
