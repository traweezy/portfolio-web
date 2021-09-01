import { Link, useLocation } from 'react-router-dom';
import NavItem from './components/nav-item';
import SocialIcon from './components/social-icon';

interface NavigationProps {
  routes: RouteConfig[];
}

const Navigation = ({ routes }: NavigationProps): JSX.Element => {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="mb-12">
          <div className="inline-block text-4xl font-extrabold text-white uppercase">
            tyler
            <br />
            schumacher
          </div>
        </div>
        <div>
          {routes.map(({ name, path }) => (
            <Link data-testid={`${name}-link`} key={name} to={path}>
              <NavItem name={name} isActive={location.pathname === path} />
              <br />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <SocialIcon name="gitHub" />
        <SocialIcon name="linkedin" />
      </div>
    </div>
  );
};

export default Navigation;
