import { IconNamesEnum } from "ngx-bootstrap-icons";

import { ExternalWeb } from "./models/external-link.model";
import { ExternalLink } from "./models/external-web.enum";

export const externalLinks: ExternalLink[] = [
    {
      web: ExternalWeb.EMAIL,
      address: 'mailTo:fgomeztenorio@hotmail.com',
      icon: IconNamesEnum.EnvelopeAt,
    },
    {
      web: ExternalWeb.GITHUB,
      address: 'https://github.com/Nano204',
      icon: IconNamesEnum.Github,
    },
    {
      web: ExternalWeb.LINKEDIN,
      address: 'https://www.linkedin.com/in/fgomeztenorio',
      icon: IconNamesEnum.Linkedin,
    },
  ];