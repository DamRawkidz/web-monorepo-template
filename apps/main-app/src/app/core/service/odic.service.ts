import { Injectable } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from 'apps/main-app/src/environments/environment';
import { User, UserManager, UserManagerSettings } from 'oidc-client';



function getClientSettings(): UserManagerSettings {
  return environment.clientSettings;
}
@Injectable({
  providedIn: 'root'
})
export class OdicService {

  public manager = new UserManager(getClientSettings());

  public user: User | null = null;

  constructor() {
    this.manager.getUser().then(user => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user?.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user?.token_type} ${this.user?.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      console.log(user);
      this.user = user;
    }).catch(err => {
      console.log('error');
    });
  }

  logout() {
    this.manager.signoutRedirect({ id_token_hint: this.user?.id_token }).then(res => console.log(res))
  }
}
