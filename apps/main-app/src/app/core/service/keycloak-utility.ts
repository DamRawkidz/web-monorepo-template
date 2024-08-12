// import { KeycloakService } from "keycloak-angular";
// import { environment } from "src/environments/environment";
// import { SSO } from "./authen.service";

// export function initializeSSOService(keycloak: KeycloakService) {
//   let sso = environment.useSSO
//   if(sso == SSO.KEYCLOAK) {
//     return () =>
//       keycloak.init({
//         config: environment.keycloakConfig,
//         initOptions: {
//           onLoad: "login-required",
//           silentCheckSsoRedirectUri: window.location.origin + "/assets/silent-check-sso.html",
//           pkceMethod: "S256",
//           checkLoginIframe: false,
//           redirectUri: environment.redirect,
//         },
//         shouldAddToken: (request) => {
//           return false;
//         },
//       });
//   }


//   if(sso == SSO.OPENID) {
//     return () => {
//       // console.log("test")
//     }
//   }



// }
