import { MutableRefObject, useEffect, useState } from 'react';

const useOnScreen = <T extends Element>(
  ref: MutableRefObject<T> | undefined,
  rootMargin = '0px',
): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref?.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
};

export default useOnScreen;
