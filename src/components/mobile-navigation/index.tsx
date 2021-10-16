import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';

import { HashLink } from 'react-router-hash-link';
import NavItem from '../navigation/components/nav-item';

interface NavigationProps {
  routes: RouteConfig[];
}

const MobileNavigation = ({ routes }: NavigationProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const heightClass = isOpen ? 'h-full' : 'h-0';

  return (
    <>
      <nav className="fixed top-0 z-20 w-full px-2  pt-4 pb-5  bg-blue-500 lg:hidden ">
        <div className="container flex items-center mx-auto">
          <div className="flex justify-start w-full font-extrabold text-white">
            <a
              className="text-white no-underline hover:text-white hover:no-underline"
              href="/"
            >
              <span className="pl-2 text-2xl">Tyler Schumacher</span>
            </a>
          </div>
          <div className="z-50 flex content-center justify-end">
            <button type="button" className="">
              <Hamburger
                size={34}
                toggled={isOpen}
                toggle={() => setIsOpen(!isOpen)}
              />
            </button>
          </div>
          <div
            className={`flex items-center justify-center fixed top-20 left-0 z-30 w-full ${heightClass} overflow-y-hidden bg-blue-500 transition-height duration-500 ease-in-out`}
          >
            <div className="text-center -mt-60">
              {routes.map(({ name, path }) => (
                <HashLink
                  data-testid={`${name}-link`}
                  smooth
                  key={name}
                  to={path}
                  onClick={() => setIsOpen(false)}
                >
                  <NavItem name={name} isActive={location.hash === path} />
                  <br />
                </HashLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;
