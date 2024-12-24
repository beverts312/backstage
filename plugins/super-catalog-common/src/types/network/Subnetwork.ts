import type { ResourceEntityV1alpha1  } from '@backstage/catalog-model';

export type Subnetwork = ResourceEntityV1alpha1 & {
  spec: {
    network: String;
    cloudAccount?: String;
    cidrs: String[];
    region?: String;
  };
}
