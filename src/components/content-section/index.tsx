import { useRef, MutableRefObject, useState, useLayoutEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Location } from 'history';
import { useWindowWidth } from '@react-hook/window-size';
import useOnScreen from '../../hooks/use-on-screen';

interface Props {
  children: JSX.Element | JSX.Element[];
  name: string;
  id: string;
}

const ContentSection = ({ children, name, id }: Props): JSX.Element => {
  const [hashRoute] = useState(`#${name}`);
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const onScreen = useOnScreen<HTMLDivElement>(ref);
  const location = useLocation<Location>();
  const onlyWidth = useWindowWidth();
  const history = useHistory();

  useLayoutEffect(() => {
    if (onScreen && location.hash.includes(hashRoute)) {
      history.push(hashRoute);
    } else if (onScreen && !location.hash) {
      history.push(hashRoute);
    } else if (!onScreen && location.hash.includes(hashRoute)) {
      history.push('/');
    }
  }, [hashRoute, history, location.hash, onScreen]);

  const isMediumScreenSize = onlyWidth < 1024;

  return (
    <>
      {isMediumScreenSize ? (
        <>
          <div id={id} className="h-2" />
          <div className="h-20" />
        </>
      ) : null}
      <div
        id={isMediumScreenSize ? '' : id}
        className="flex flex-col items-center lg:mb-32"
      >
        <div ref={ref} className="w-full mb-10">
          <div className="h-1 w-9 bg-tangerine-500" />
          <div className="text-2xl font-extrabold text-black uppercase">
            {name}
          </div>
        </div>
        <div className="w-full p-6 text-black bg-white shadow-xl rounded-xl">
          {children}
        </div>
      </div>
    </>
  );
};

export default ContentSection;
