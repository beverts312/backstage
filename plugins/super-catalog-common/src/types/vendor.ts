import type { ComponentEntityV1alpha1 } from '@backstage/catalog-model';

export type Vendor = ComponentEntityV1alpha1 & {
  spec: {
    websiteUrl: string;
    contactEmail: string;
  };
};
