import type { ComponentEntityV1alpha1 } from '@backstage/catalog-model';

export type SaaS = ComponentEntityV1alpha1 & {
  spec: {
    cloudOrganization?: string;
    cloudAccount?: string;
    vendor: string;
    appUrl?: string;
    docsUrl?: string;
    supportUrl?: string;
    supportEmail?: string;
  };
};
