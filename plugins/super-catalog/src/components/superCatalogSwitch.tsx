import React from 'react';
import {
  EntitySwitch,
  isKind,
  isResourceType,
} from '@backstage/plugin-catalog';
import { CLOUD_ORGANIZATION_TYPE } from '@internal/backstage-plugin-super-catalog-common';
import { cloudOrganizationPage } from './Entities';

export const superCatalogSwitch = (
  <>
    <EntitySwitch.Case
      if={isKind('resource') && isResourceType(CLOUD_ORGANIZATION_TYPE)}
      children={cloudOrganizationPage}
    />
  </>
);
