import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import Navigation from './components/navigation';
import MobileNavigation from './components/mobile-navigation';
import ContentContainer from './components/content-container';
import ConentSection from './components/content-section';
import Hero from './pages/hero/index';
import About from './pages/about';
import Interests from './pages/interests';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';

import 'react-fullscreen-menu/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';

const routes: RouteConfig[] = [
  {
    name: 'about',
    path: '#about',
    component: About,
  },
  {
    name: 'skills',
    path: '#skills',
    component: Skills,
  },
  {
    name: 'interests',
    path: '#interests',
    component: Interests,
  },
  {
    name: 'projects',
    path: '#projects',
    component: Projects,
  },
  {
    name: 'contact',
    path: '#contact',
    component: Contact,
  },
];

const queryClient = new QueryClient();

const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <div className="flex h-full">
        <MobileNavigation routes={routes} />
        <Navigation routes={routes} />
        <ContentContainer>
          <>
            <Hero />
            {routes.map(({ name, path, component: RouteComponent }) => (
              <ConentSection id={path.replace('#', '')} key={name} name={name}>
                <RouteComponent />
              </ConentSection>
            ))}
          </>
        </ContentContainer>
      </div>
    </Router>
    <ToastContainer />
  </QueryClientProvider>
);

export default App;
