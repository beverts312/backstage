import type { ResourceEntityV1alpha1 } from '@backstage/catalog-model';
import { CSP } from './csp';

export type CloudService = ResourceEntityV1alpha1 & {
  spec: {
    docsUrl?: string;
    csp: CSP;
  };
};
