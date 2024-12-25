import type { ResourceEntityV1alpha1 } from '@backstage/catalog-model';

export type Network = ResourceEntityV1alpha1 & {
  spec: {
    cloudOrganization?: string;
    cloudAccount?: string;
    cidrs: string[];
  };
};
