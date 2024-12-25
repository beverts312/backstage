import type { ResourceEntityV1alpha1 } from '@backstage/catalog-model';

export type CloudResourceEntity = ResourceEntityV1alpha1 & {
  spec: {
    cloudAccount: string;
    cloudService: string;
    region?: string;
    hostnames?: string[];
    ipAddresses?: string[];
  };
};
