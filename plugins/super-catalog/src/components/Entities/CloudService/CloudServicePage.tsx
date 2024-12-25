import React from 'react';
import { EntityLayout } from '@backstage/plugin-catalog';
import { Grid } from '@material-ui/core';
import { CloudServiceCard } from './CloudServiceCard';
import { entityWarningContent } from '../entityWarningContent';

export const cloudServicePage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title="Overview">
      <Grid container spacing={3}>
        {entityWarningContent}
        <Grid item md={6}>
          <CloudServiceCard />
        </Grid>
      </Grid>
    </EntityLayout.Route>
  </EntityLayout>
);
