import { IconNamesEnum } from 'ngx-bootstrap-icons';

import { ExternalWeb } from './external-link.model';

export interface ExternalLink {
  web: ExternalWeb;
  address: string;
  icon: IconNamesEnum
}
