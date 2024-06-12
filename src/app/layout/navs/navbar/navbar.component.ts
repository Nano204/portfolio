import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { filter, startWith } from 'rxjs';

import { SpinnerComponent } from 'app/shared/spinner/spinner.component';
import { NavbarItem, NavbarItemPath } from '../models';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { pages } from '../pages.script';

@UntilDestroy()
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
  active?: NavbarItem;
  loading = true;
  pages = pages;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((event) => event instanceof NavigationEnd),
        startWith(undefined),
      )
      .subscribe(() => {
        this.loading = false;
        this.setActive(this.router.url as NavbarItemPath);
      });
  }

  private setActive(path: NavbarItemPath): void {
    this.active = this.pages.find((page) => page.path === path) as NavbarItem;
  }
}
