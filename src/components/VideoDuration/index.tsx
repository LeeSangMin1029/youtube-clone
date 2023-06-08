import { Overlay } from './styles';
import { getDuration } from '@/utils';
type VideoDurationProps = {
  duration: string;
};

const VideoDuration = ({ duration }: VideoDurationProps) => {
  const renderDuration = getDuration(duration);
  return <Overlay>{renderDuration}</Overlay>;
};
export default VideoDuration;
