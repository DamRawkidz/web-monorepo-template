import { Injectable } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from 'apps/main-app/src/environments/environment';

import { KeycloakService } from 'keycloak-angular';
import { KeycloakTokenParsed, KeycloakProfile } from 'keycloak-js';


@Injectable({
  providedIn: 'root'
})
export class KeyclaokService {

  constructor(private keycloakService: KeycloakService) {

  }

  public getLoggedUser(): KeycloakTokenParsed | undefined {
    try {
      const userDetails: KeycloakTokenParsed | undefined = this.keycloakService.getKeycloakInstance()
        .idTokenParsed;
      return userDetails;
    } catch (e) {
      console.error("Exception", e);
      return undefined;
    }
  }

  public isLoggedIn() {
    return this.keycloakService.isLoggedIn();
  }

  public loadUserProfile(): Promise<KeycloakProfile> {
    return this.keycloakService.loadUserProfile();
  }

  public login(): void {
    this.keycloakService.login();
  }

  public logout(): void {
    // localStorage.removeItem(APP_KEY_LOCALSTORAGE.CURRENT_URL)
    this.keycloakService.logout(environment.logoutRedirect);

    // this.keycloakService.logout();
  }

  public redirectToProfile(): void {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  public getRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }

  public getToken(): string | undefined {
    return this.keycloakService.getKeycloakInstance().token
  }

  // public keycloakLoginOptions: KeycloakLoginOptions = {
  //   redirectUri: environment.logoutRedirect
  // }
}
