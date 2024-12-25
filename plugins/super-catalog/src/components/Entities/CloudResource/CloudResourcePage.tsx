import React from 'react';
import { EntityLayout } from '@backstage/plugin-catalog';
import { Grid } from '@material-ui/core';
import { CloudResourceCard } from './CloudResourceCard';
import { entityWarningContent } from '../entityWarningContent';

export const cloudResourcePage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title="Overview">
      <Grid container spacing={3}>
        {entityWarningContent}
        <Grid item md={6}>
          <CloudResourceCard />
        </Grid>
      </Grid>
    </EntityLayout.Route>
  </EntityLayout>
);
