import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DescriptionViewComponent } from 'app/layout/description-view/description-view.component';

import { NavbarComponent } from 'app/layout/navs/navbar/navbar.component';
import { RouterOutletName } from 'app/shared/models/router-outlet-name.enum';
import { NanoDevLogoComponent } from 'assets/images/nano-dev-logo/nano-dev-logo.component';
import { BurgerMenuComponent } from './navs/burger-menu/burger-menu.component';
import { MObileContactBarComponent as MobileContactBarComponent } from './mobile-contact-bar/mobile-contact-bar.component';

@Component({
  selector: 'ndp-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    NavbarComponent,
    BurgerMenuComponent,
    NanoDevLogoComponent,
    DescriptionViewComponent,
    MobileContactBarComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  routerOutletName = RouterOutletName;

  get mobile(): boolean {
    return this.getWindowSize() <= 768;
  }

  get burgerMenu(): boolean {
    return this.getWindowSize() <= 880;
  }

  @HostListener('window:resize', ['$event'])
  getWindowSize(): number {
    return window.innerWidth;
  }
}
