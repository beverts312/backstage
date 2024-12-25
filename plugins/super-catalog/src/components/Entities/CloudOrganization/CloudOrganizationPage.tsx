import React from 'react';
import { EntityLayout } from '@backstage/plugin-catalog';
import { Grid } from '@material-ui/core';
import { CloudOrganizationCard } from './CloudOrganizationCard';
import { entityWarningContent } from '../entityWarningContent';

export const cloudOrganizationPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title="Overview">
      <Grid container spacing={3}>
        {entityWarningContent}
        <Grid item md={6}>
          <CloudOrganizationCard />
        </Grid>
      </Grid>
    </EntityLayout.Route>
  </EntityLayout>
);
