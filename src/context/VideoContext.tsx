import { useRef } from 'react';
import { ReactNode, createContext, useContext, useMemo } from 'react';

type VideoContextType = {
  viewVideoCount: number;
};

export const VideoContext = createContext<VideoContextType | null>(null);

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(
      'useVideoContext must be used within a VideoContextProvider',
    );
  }
  return context;
};

type VideoProviderProps = {
  children: ReactNode;
};

const VideoProvider = ({ children }: VideoProviderProps) => {
  const viewVideoCount = useRef<number>(30).current;
  const contextValue = useMemo(() => ({ viewVideoCount }), [viewVideoCount]);

  return (
    <VideoContext.Provider value={contextValue}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
