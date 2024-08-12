import { KeycloakService } from "keycloak-angular";

import { SSO } from "./authen.service";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from "apps/main-app/src/environments/environment";

export function initializeSSOService(keycloak: KeycloakService) {
  const sso = environment.useSSO
  if (sso == SSO.KEYCLOAK) {
    return () =>
      keycloak.init({
        config: environment.keycloakConfig,
        initOptions: {
          onLoad: "login-required",
          silentCheckSsoRedirectUri: window.location.origin + "/assets/silent-check-sso.html",
          pkceMethod: "S256",
          checkLoginIframe: false,
          redirectUri: environment.redirect,
        },
        shouldAddToken: (request) => {
          return false;
        },
      });
  }


  if (sso == SSO.OPENID) {
    return () => {
      // console.log("test")
    }
  }



}
