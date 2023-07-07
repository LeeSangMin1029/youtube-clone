import Videos from '@/components/Videos';
import VideoProvider from '@/context/VideoContext';

const Home = () => {
  return (
    <VideoProvider>
      <Videos />
    </VideoProvider>
  );
};

export default Home;
