import { Routes } from '@angular/router';
import { RouterOutletName } from './shared/models/router-outlet-name.enum';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/home-description/home-description.component').then(
            (component) => component.HomeDescriptionComponent,
          ),
        outlet: RouterOutletName.DESCRIPTION,
      },
      {
        path: '',
        loadComponent: () =>
          import('./home/home-details/home-details.component').then(
            (component) => component.HomeDetailsComponent,
          ),
        outlet: RouterOutletName.DETAILS,
      },
    ],
  },
  {
    path: 'profile',

    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './profile/profile-description/profile-description.component'
          ).then((component) => component.ProfileDescriptionComponent),
        outlet: RouterOutletName.DESCRIPTION,
      },
      {
        path: '',
        loadComponent: () =>
          import('./profile/profile-details/profile-details.component').then(
            (component) => component.ProfileDetailsComponent,
          ),
        outlet: RouterOutletName.DETAILS,
      },
    ],
  },
  {
    path: 'projects',

    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './projects/projects-description/projects-description.component'
          ).then((component) => component.ProjectsDescriptionComponent),
        outlet: RouterOutletName.DESCRIPTION,
      },
    ],
  },
  {
    path: 'stack',

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./stack/stack-description/stack-description.component').then(
            (component) => component.StackDescriptionComponent,
          ),
        outlet: RouterOutletName.DESCRIPTION,
      },
    ],
  },

  // Not found route
  { path: '**', redirectTo: '/home' },
];
