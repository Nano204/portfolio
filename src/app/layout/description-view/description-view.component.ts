import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IconNamesEnum, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { HomeDescriptionComponent } from 'app/home/home-description/home-description.component';
import { NanoDevLogoComponent } from 'assets/images/nano-dev-logo/nano-dev-logo.component';
import { RouterOutletName } from 'app/shared/models/router-outlet-name.enum';
import { ExternalLink, ExternalWeb } from './models';

@Component({
  selector: 'ndp-description-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgxBootstrapIconsModule,

    NanoDevLogoComponent,
    HomeDescriptionComponent,
  ],
  templateUrl: './description-view.component.html',
})
export class DescriptionViewComponent {
  routerOutletName = RouterOutletName;
  externalWeb = ExternalWeb;
  externalLink: ExternalLink[] = [
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

  goTo(address: string): void {
    window.open(address, '_blank');
  }
}
