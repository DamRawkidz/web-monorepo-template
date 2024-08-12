// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// const key: string  = "env"

export const environment = {
  production: true,
  baseapi: (window as any)["env"].BASEAPI,
  useSSO: +(window as any)["env"].USESSO,
  redirect: (window as any)["env"].REDIRECT,
  logoutRedirect: (window as any)["env"].LOGOUTREDIRECT,
  keycloakConfig: {
    url: (window as any)["env"].KEYCLOAKCONFIG.URL,
    realm: (window as any)["env"].KEYCLOAKCONFIG.REALM,
    clientId: (window as any)["env"].KEYCLOAKCONFIG.CLIENTID
  },
  clientSettings: {
    authority: (window as any)["env"].CLIENTSETTINGS.AUTHORITY,
    client_id: (window as any)["env"].CLIENTSETTINGS.CLIENTID,
    redirect_uri: (window as any)["env"].CLIENTSETTINGS.REDIRECT_URI,
    post_logout_redirect_uri: (window as any)["env"].CLIENTSETTINGS.POSTLOGOUTREDIRECTURI,
    response_type: (window as any)["env"].CLIENTSETTINGS.RESPONSE_TYPE,
    scope: (window as any)["env"].CLIENTSETTINGS.SCOPE,
    filterProtocolClaims: (window as any)["env"].CLIENTSETTINGS.FILTERPROROCOLCLAIMS,
    loadUserInfo: (window as any)["env"].CLIENTSETTINGS.LOADUSERINFO
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
