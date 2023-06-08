import { Overlay } from './styles';

type VideoDurationProps = {
  duration: string;
};

const VideoDuration = ({ duration }: VideoDurationProps) => {
  const lengthArray = duration?.slice(2, -1).split('M');
  const second =
    lengthArray[1]?.length === 2 ? lengthArray[1] : `0${lengthArray[1]}`;
  const time = `${lengthArray[0]}:${second}`;
  return <Overlay> {time} </Overlay>;
};
export default VideoDuration;
