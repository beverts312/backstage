import React from 'react';
import { SuperCatalogPage } from './SuperCatalogPage';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { registerMswTestHooks, renderInTestApp } from '@backstage/test-utils';

describe('SuperCatalogPage', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  registerMswTestHooks(server);

  // setup mock response
  beforeEach(() => {
    server.use(
      rest.get('/*', (_, res, ctx) => res(ctx.status(200), ctx.json({}))),
    );
  });

  it('should render', async () => {
    await renderInTestApp(<SuperCatalogPage />);
    expect(screen.getByText('Welcome to super-catalog!')).toBeInTheDocument();
  });
});
