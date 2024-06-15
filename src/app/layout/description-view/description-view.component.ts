import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { HomeDescriptionComponent } from 'app/home/home-description/home-description.component';
import { NanoDevLogoComponent } from 'assets/images/nano-dev-logo/nano-dev-logo.component';
import { externalLinks } from '../shared';

@Component({
  selector: 'ndp-description-view',
  standalone: true,
  imports: [
    CommonModule,
    NgxBootstrapIconsModule,

    NanoDevLogoComponent,
    HomeDescriptionComponent,
  ],
  templateUrl: './description-view.component.html',
})
export class DescriptionViewComponent {
  externalLinks = externalLinks;

  goTo(address: string): void {
    window.open(address, '_blank');
  }
}
