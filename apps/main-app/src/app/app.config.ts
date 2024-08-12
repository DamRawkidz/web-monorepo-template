import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS,
  withInterceptors,
} from '@angular/common/http';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { PICK_FORMATS, AppDateAdapter } from '@poc-monorepo/shared';
import { tokenIntercepter } from './core/intercepter/token-intercepter.interceptor';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { BACKEND_URL } from 'seventy-one-base';
import { environment } from '../environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideStore(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(
      // withInterceptorsFromDi()
      withInterceptors([tokenIntercepter])
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
    { provide: LOCALE_ID, useValue: 'th-TH' },
    { provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS },
    { provide: DateAdapter, useClass: AppDateAdapter },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
      },
    },
    {
      provide: BACKEND_URL,
      // useValue: 'https://utility.71dev.com/utility-api/'
      useValue: environment.baseapi
    }
  ],
};
