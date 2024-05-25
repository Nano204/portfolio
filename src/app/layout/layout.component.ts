import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionViewComponent } from 'app/layout/description-view/description-view.component';

import { NavbarComponent } from 'app/layout/navbar/navbar.component';
import { NanoDevLogoComponent } from 'assets/images/nano-dev-logo/nano-dev-logo.component';

@Component({
  selector: 'ndp-layout',
  standalone: true,
  imports: [
    RouterOutlet,

    NavbarComponent,
    NanoDevLogoComponent,
    DescriptionViewComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
