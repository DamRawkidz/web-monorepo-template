/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, Injectable } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from 'apps/main-app/src/environments/environment';
import { KeycloakService } from 'keycloak-angular';
import { from, Observable } from 'rxjs';
import { OdicService } from './odic.service';

export enum SSO {
  NOUSE = 0,
  OPENID = 1,
  KEYCLOAK = 2
}

export interface CoreAuthen {
  loaduser(): Observable<any>,
  isLoggin(): boolean,
  logout(): void,
  login(): void
  getToken(): string
}



@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  keycloakSV = inject(KeycloakService)
  odic = inject(OdicService)

  // constructor() { }

  login(): void {
    switch (environment.useSSO) {
      case 1:
        this.odic.startAuthentication()
        break
      case 2:
        this.keycloakSV.login()
        break

      default:

        break
    }
  }

  getToken(): any {
    switch (environment.useSSO) {
      case 1:
        return this.odic?.user?.access_token
      case 2:
        return this.keycloakSV.getKeycloakInstance().token
    }
  }


  isLoggin(): any {
    switch (environment.useSSO) {
      case 1:
        return this.odic.isLoggedIn()
      case 2:
        return this.keycloakSV.isLoggedIn()
      // break

      // default:

      //   break
    }
  }

  logout(): void {
    switch (environment.useSSO) {
      case 1:
        this.odic.logout()
        break
      case 2:
        this.keycloakSV.logout()
        break

      default:

        break
    }
  }


  loaduser(): any {
    switch (environment.useSSO) {
      case 1: return from(this.odic.manager.signinRedirectCallback())
      case 2: return from(this.keycloakSV.loadUserProfile())

      // default:

      //   break
    }
  }




}
