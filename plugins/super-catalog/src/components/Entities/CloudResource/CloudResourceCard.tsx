import React from 'react';
import { ErrorBoundary, InfoCard } from '@backstage/core-components';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useEntity } from '@backstage/plugin-catalog-react';
import { AboutField } from '@backstage/plugin-catalog';
import { CloudResourceEntity } from '@internal/backstage-plugin-super-catalog-common';

const CardTitle = (props: { title: string }) => (
  <Box display="flex" alignItems="center">
    <Box ml={1}>{props.title}</Box>
  </Box>
);

const CloudResourceDetails = ({ entity }: { entity: CloudResourceEntity }) => {
  const {
    metadata: { name, description },
    spec: { region },
  } = entity;

  return (
    <InfoCard title={<CardTitle title={name} />} subheader={description}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Grid container justifyContent="space-between">
            <AboutField label="Region" value={region} />
          </Grid>
        </Grid>
      </Grid>
    </InfoCard>
  );
};

export const CloudResourceCard = () => {
  const entity = useEntity().entity as unknown as CloudResourceEntity;
  return (
    <ErrorBoundary>
      <CloudResourceDetails entity={entity} />
    </ErrorBoundary>
  );
};
