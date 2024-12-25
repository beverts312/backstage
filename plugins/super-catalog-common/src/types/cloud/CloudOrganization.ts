import type { ResourceEntityV1alpha1 } from '@backstage/catalog-model';
import { CSP } from './csp';

export type CloudOrganization = ResourceEntityV1alpha1 & {
  spec: {
    vendor: string;
    csp: CSP;
  };
};
