import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './components/navigation';
import PageContainer from './components/page-container';
import About from './pages/about/index';
import Projects from './pages/projects';
import Contact from './pages/contact';

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

const queryClient = new QueryClient();

const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <div className="flex h-full">
        <div className="border-r-2 border-black w-80 md:col-span-3 lg:col-span-1p">
          <Navigation routes={routes} />
        </div>
        <div className="w-full">
          <Switch>
            {routes.map(({ name, path, exact, component: RouteComponent }) => (
              <Route key={name} path={path} exact={exact}>
                <PageContainer>
                  <RouteComponent />
                </PageContainer>
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  </QueryClientProvider>
);

export default App;
