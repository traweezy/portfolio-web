import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavItem from './components/nav-item';
import SocialIcon from './components/social-icon';

interface NavigationProps {
  routes: RouteConfig[];
}

const Navigation = ({ routes }: NavigationProps): JSX.Element => {
  const location = useLocation();

  return (
    <div className="h-full p-4">
      <div className="mb-12">
        <div className="inline-block text-4xl font-extrabold text-black uppercase">
          tyler
          <br />
          schumacher
        </div>
      </div>
      <div>
        {routes.map(({ name, path }) => (
          <Link to={path}>
            <NavItem name={name} isActive={location.pathname === path} />
            <br />
          </Link>
        ))}
      </div>
      <div>
        <SocialIcon name="marklar" />
      </div>
    </div>
  );
};

export default Navigation;
