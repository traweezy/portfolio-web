import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ParticleBackground from 'react-particle-backgrounds';
import Navigation from './components/navigation';
import About from './pages/about/index';
import Projects from './pages/projects';
import Contact from './pages/contact';

const settings: ParticleBackgroundConfig = {
  particle: {
    particleCount: 100,
    color: '#ffb75f',
    minSize: 2,
    maxSize: 4,
  },
  velocity: {
    directionAngle: 0,
    directionAngleVariance: 30,
    minSpeed: 0.2,
    maxSpeed: 2,
  },
  opacity: {
    minOpacity: 0,
    maxOpacity: 0.5,
    opacityTransitionTime: 5000,
  },
};

const routes: RouteConfig[] = [
  {
    name: 'about',
    path: '/',
    exact: true,
    component: About,
  },
  {
    name: 'projects',
    path: '/projects',
    exact: true,
    component: Projects,
  },
  {
    name: 'contact',
    path: '/contact',
    exact: true,
    component: Contact,
  },
];

const App = (): JSX.Element => (
  <Router>
    <div className="flex h-full">
      <div className="border-r-2 border-black w-80 md:col-span-3 lg:col-span-1p">
        <Navigation routes={routes} />
      </div>
      <div className="w-full">
        <Switch>
          {routes.map(({ name, path, exact, component: RouteComponent }) => (
            <Route key={name} path={path} exact={exact}>
              <RouteComponent />
            </Route>
          ))}
        </Switch>
        <ParticleBackground settings={settings} />
      </div>
    </div>
  </Router>
);

export default App;
