import { useCallback, useState } from 'react';

export const useHeight = () => {
  const [height, setHeight] = useState(0);

  const ref = useCallback((node: HTMLElement) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return { height, ref };
};
