import type { ResourceEntityV1alpha1  } from '@backstage/catalog-model';

export type CloudAccount = ResourceEntityV1alpha1 & {
  spec: {
    cloudOrganization: String;
    id?: String;
    number?: Number;
  };
}
