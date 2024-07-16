import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavItem from './components/nav-item';
import SocialIcon from '../social-icon';

interface NavigationProps {
  routes: RouteConfig[];
}

const Navigation = ({ routes }: NavigationProps): JSX.Element => {
  const location = useLocation();

  return (
    <nav className="flex-col justify-between hidden h-full p-4 bg-bills-blue-600 lg:flex">
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
        <SocialIcon name="gitHub" url="https://github.com/traweezy" />
        <SocialIcon name="email" url="mailto:tyschumacher@proton.me" />
        <SocialIcon name="resume" url="https://github.com/traweezy" />
      </div>
    </nav>
  );
};

export default Navigation;
