import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './index';

describe('Given <Navigation />', () => {
  const testRoutes: RouteConfig[] = [
    {
      name: 'home',
      path: '/',
      exact: true,
      component: () => <>Home</>,
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
