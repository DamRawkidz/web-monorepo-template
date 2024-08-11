import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { PICK_FORMATS, AppDateAdapter } from '@poc-monorepo/shared';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    // provideAnimations(),
    // provideStore(appReducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: false,
    //     strictActionImmutability: false,
    //   }
    // }),
    // provideEffects(),
    // provideRouterStore(),
    // provideStoreDevtools({ maxAge: 25, logOnly: environment.production, connectInZone: true }),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenIntercepterInterceptor,
    //   multi: true
    // },
    { provide: LOCALE_ID, useValue: 'th-TH' },
    { provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS },
    { provide: DateAdapter, useClass: AppDateAdapter },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill'
      }
    }
    // {
    //   provide: BACKEND_URL,
    //   useValue: 'https://utility.71dev.com/utility-api/'
    // }
  ],
};
