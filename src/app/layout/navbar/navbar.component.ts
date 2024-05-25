import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconNamesEnum } from 'ngx-bootstrap-icons';
import { filter } from 'rxjs';

import { SpinnerComponent } from 'app/shared/spinner/spinner.component';
import { NavbarItem, NavbarItemPath } from './models';

@Component({
  selector: 'ndp-navbar',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    NgxBootstrapIconsModule,
    RouterLink,
    
    SpinnerComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  active = NavbarItemPath.HOME;
  loading = true;
  pages: NavbarItem[] = [
    { title: 'Home', path: NavbarItemPath.HOME, icon: IconNamesEnum.House },
    {
      title: 'Profile',
      path: NavbarItemPath.PROFILE,
      icon: IconNamesEnum.PersonCircle,
    },
    { title: 'Stack', path: NavbarItemPath.STACK, icon: IconNamesEnum.Stack },
    {
      title: 'Projects',
      path: NavbarItemPath.PROJECTS,
      icon: IconNamesEnum.JournalCode,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loading = false;
        this.active = this.router.url as NavbarItemPath;
      });
  }
}
