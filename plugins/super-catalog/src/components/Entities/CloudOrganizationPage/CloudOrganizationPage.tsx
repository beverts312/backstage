import React from 'react';
import { EntityLayout } from '@backstage/plugin-catalog';
import { Grid } from '@material-ui/core';
import { CloudOrganizationAboutCard } from './CloudOrganizationAboutCard';
import { entityWarningContent } from '../entityWarningContent';

export const cloudOrganizationPage = (
  <EntityLayout>
    <EntityLayout.Route path="/" title="Overview">
      <Grid container spacing={3}>
        {entityWarningContent}
        <Grid item md={6}>
          <CloudOrganizationAboutCard />
        </Grid>
      </Grid>
    </EntityLayout.Route>
  </EntityLayout>
);
