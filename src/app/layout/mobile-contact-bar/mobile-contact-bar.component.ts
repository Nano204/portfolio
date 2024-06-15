import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { HomeDescriptionComponent } from 'app/home/home-description/home-description.component';
import { NanoDevLogoComponent } from 'assets/images/nano-dev-logo/nano-dev-logo.component';
import { externalLinks } from '../shared';

@Component({
  selector: 'ndp-mobile-contact-bar',
  standalone: true,
  imports: [
    CommonModule,
    NgxBootstrapIconsModule,

    NanoDevLogoComponent,
    HomeDescriptionComponent,
  ],
  templateUrl: './mobile-contact-bar.component.html',
})
export class MObileContactBarComponent {
  externalLinks = externalLinks;

  goTo(address: string): void {
    window.open(address, '_blank');
  }
}
