import type { ResourceEntityV1alpha1  } from '@backstage/catalog-model';
import { CSP } from './csp';

export type CloudServiceV1alph1 = ResourceEntityV1alpha1 & {
  spec: {
    docsUrl?: string;
    csp: CSP;
  };
}
