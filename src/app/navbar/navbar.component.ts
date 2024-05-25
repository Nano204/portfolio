import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconNamesEnum } from 'ngx-bootstrap-icons';

import { NavbarItem } from './models/navbar-item.enum';

@Component({
  selector: 'ndp-navbar',
  standalone: true,
  imports: [NgbNavModule, NgxBootstrapIconsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  active = NavbarItem.HOME;
  iconNames = IconNamesEnum;
  navbarItem = NavbarItem;
}
