import React from 'react';
import { ErrorBoundary, InfoCard } from '@backstage/core-components';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useEntity } from '@backstage/plugin-catalog-react';
import { AboutField } from '@backstage/plugin-catalog';
import { CloudOrganizationV1alph1 } from '../../../../../super-catalog-common/src';

const CardTitle = (props: { title: string }) => (
  <Box display="flex" alignItems="center">
    <Box ml={1}>{props.title}</Box>
  </Box>
);

const CloudOrganizationDetails = ({
  entity,
}: {
  entity: CloudOrganizationV1alph1;
}) => {
  const {
    metadata: { name, description },
    spec: { csp, vendor },
  } = entity;

  return (
    <InfoCard title={<CardTitle title={name} />} subheader={description}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Grid container justifyContent="space-between">
            <AboutField label="CSP" value={csp} />
            <AboutField label="Vendor" value={vendor} />
          </Grid>
        </Grid>
      </Grid>
    </InfoCard>
  );
};

export const CloudOrganizationAboutCard = () => {
  const entity = useEntity().entity as unknown as CloudOrganizationV1alph1;
  return (
    <ErrorBoundary>
      <CloudOrganizationDetails entity={entity} />
    </ErrorBoundary>
  );
};
