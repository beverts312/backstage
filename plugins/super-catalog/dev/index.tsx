import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { superCatalogPlugin, SuperCatalogPage } from '../src/plugin';

createDevApp()
  .registerPlugin(superCatalogPlugin)
  .addPage({
    element: <SuperCatalogPage />,
    title: 'Root Page',
    path: '/super-catalog',
  })
  .render();
