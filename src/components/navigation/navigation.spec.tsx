import { render, screen, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './index';

const TestHome = () => <>Home</>;

describe('Given <Navigation />', () => {
  const testRoutes: RouteConfig[] = [
    {
      name: 'home',
      path: '/',
      exact: true,
      component: TestHome,
    },
  ];

  afterEach(() => {
    cleanup();
  });

  describe('When given valid routes', () => {
    test('Should render navigation links', () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <Navigation routes={testRoutes} />
        </Router>,
      );
      const homeLink = screen.queryByTestId(`${testRoutes[0].name}-link`);
      expect(homeLink).toHaveTextContent(testRoutes[0].name);
    });
  });
});
