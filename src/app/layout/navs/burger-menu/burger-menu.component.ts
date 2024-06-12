import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconNamesEnum } from 'ngx-bootstrap-icons';
import { filter, startWith } from 'rxjs';

import { SpinnerComponent } from 'app/shared/spinner/spinner.component';
import { NavbarItem, NavbarItemPath } from '../models';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { pages } from '../pages.script';

@UntilDestroy()
@Component({
  selector: 'ndp-burger-menu',
  standalone: true,
  imports: [
    CommonModule,
    NgxBootstrapIconsModule,
    RouterLink,
    NgbCollapseModule,

    SpinnerComponent,
  ],
  templateUrl: './burger-menu.component.html',
})
export class BurgerMenuComponent implements OnInit {
  active?: NavbarItem;
  loading = true;
  listIcon = IconNamesEnum.List;
  isCollapsed = true;
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
