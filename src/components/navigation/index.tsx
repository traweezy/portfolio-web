import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavItem from './components/nav-item';
import SocialIcon from './components/social-icon';

interface NavigationProps {
  routes: RouteConfig[];
}

const Navigation = ({ routes }: NavigationProps): JSX.Element => {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between h-full p-4 bg-blue-500">
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
            <HashLink data-testid={`${name}-link`} smooth key={name} to={path}>
              <NavItem name={name} isActive={location.hash === path} />
              <br />
            </HashLink>
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
