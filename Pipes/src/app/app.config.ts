import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import localeEs from '@angular/common/locales/es';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es-ES');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ]
};
