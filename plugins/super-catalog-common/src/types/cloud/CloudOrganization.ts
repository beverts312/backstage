import type { ResourceEntityV1alpha1  } from '@backstage/catalog-model';
import { CSP } from './csp';

export type CloudOrganizationV1alph1 = ResourceEntityV1alpha1 & {
  spec: {
    vendor: String;
    csp: CSP;
  };
}
