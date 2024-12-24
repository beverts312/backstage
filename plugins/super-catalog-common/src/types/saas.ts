import type { ComponentEntityV1alpha1  } from '@backstage/catalog-model';

export type SaaS = ComponentEntityV1alpha1 & {
  spec: {
    cloudOrganization?: String;
    cloudAccount?: String;
    vendor: String;
    appUrl?: String;
    docsUrl?: String;
    supportUrl?: String;
    supportEmail?: String;
  };
}
