import { render } from '@testing-library/react';
import { rest } from 'msw';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const handlers = [
  rest.post('/send-email', (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export const renderWithClient = (ui: React.ReactElement) => {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  );

  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  };
};

export const createWrapper = () => {
  const testQueryClient = createTestQueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
  return wrapper;
};
