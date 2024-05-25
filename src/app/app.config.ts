import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  NgxBootstrapIconsModule,
  envelopeAt,
  github,
  house,
  journalCode,
  linkedin,
  personCircle,
  stack,
} from 'ngx-bootstrap-icons';

import { routes } from './app.routes';

// TODO: Figure out if there is any way to provide the icon list directly in the component
// so it's not necessary to import them for all the app
const icons = {
  envelopeAt,
  github,
  house,
  journalCode,
  linkedin,
  personCircle,
  stack,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NgxBootstrapIconsModule.pick(icons, {
        width: '1.7rem',
        height: '1.7rem',
      }),
    ),
  ],
};
