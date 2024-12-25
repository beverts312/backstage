import React from 'react';
import { ErrorBoundary, InfoCard } from '@backstage/core-components';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useEntity } from '@backstage/plugin-catalog-react';
import { AboutField } from '@backstage/plugin-catalog';
import { CloudAccount } from '@internal/backstage-plugin-super-catalog-common';

const CardTitle = (props: { title: string }) => (
  <Box display="flex" alignItems="center">
    <Box ml={1}>{props.title}</Box>
  </Box>
);

const CloudAccountDetails = ({ entity }: { entity: CloudAccount }) => {
  const {
    metadata: { name, description },
    spec: { id, number },
  } = entity;

  return (
    <InfoCard title={<CardTitle title={name} />} subheader={description}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Grid container justifyContent="space-between">
            <AboutField label="ID" value={id} />
            <AboutField label="Number" value={number?.toString()} />
          </Grid>
        </Grid>
      </Grid>
    </InfoCard>
  );
};

export const CloudAccountCard = () => {
  const entity = useEntity().entity as unknown as CloudAccount;
  return (
    <ErrorBoundary>
      <CloudAccountDetails entity={entity} />
    </ErrorBoundary>
  );
};
