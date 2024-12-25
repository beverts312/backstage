import React from 'react';
import { EntityLayout } from '@backstage/plugin-catalog';
import { Grid } from '@material-ui/core';
import { CloudAccountCard } from './CloudAccountCard';
import { entityWarningContent } from '../entityWarningContent';

export const cloudAccountPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title="Overview">
      <Grid container spacing={3}>
        {entityWarningContent}
        <Grid item md={6}>
          <CloudAccountCard />
        </Grid>
      </Grid>
    </EntityLayout.Route>
  </EntityLayout>
);
