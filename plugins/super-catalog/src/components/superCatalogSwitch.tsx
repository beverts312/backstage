import React from 'react';
import {
  EntitySwitch,
  isKind,
  isResourceType,
} from '@backstage/plugin-catalog';
import {
  CLOUD__RESOURCE_TYPE,
  CLOUD_ACCOUNT_TYPE,
  CLOUD_ORGANIZATION_TYPE,
  CLOUD_SERVICE_TYPE,
} from '@internal/backstage-plugin-super-catalog-common';
import {
  cloudOrganizationPage,
  cloudAccountPage,
  cloudResourcePage,
} from './Entities';

export const superCatalogSwitch = (
  <>
    <EntitySwitch.Case
      if={isKind('resource') && isResourceType(CLOUD_ACCOUNT_TYPE)}
      children={cloudAccountPage}
    />
    <EntitySwitch.Case
      if={isKind('resource') && isResourceType(CLOUD_ORGANIZATION_TYPE)}
      children={cloudOrganizationPage}
    />
    <EntitySwitch.Case
      if={isKind('resource') && isResourceType(CLOUD__RESOURCE_TYPE)}
      children={cloudResourcePage}
    />
    <EntitySwitch.Case
      if={isKind('resource') && isResourceType(CLOUD_SERVICE_TYPE)}
      children={cloudResourcePage}
    />
  </>
);
