import { useEffect, useRef } from 'react';

export const useResizeObject = () => {
  const width = useRef(0);
  const height = useRef(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      width.current = entries[0].contentRect.width;
      height.current = entries[0].contentRect.height;
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, []);
  return { ref, width: width.current, height: height.current };
};
