import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const superCatalogPlugin = createPlugin({
  id: 'super-catalog',
  routes: {
    root: rootRouteRef,
  },
});

export const SuperCatalogPage = superCatalogPlugin.provide(
  createRoutableExtension({
    name: 'SuperCatalogPage',
    component: () =>
      import('./components/SuperCatalogPage').then(m => m.SuperCatalogPage),
    mountPoint: rootRouteRef,
  }),
);
