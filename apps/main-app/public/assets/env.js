(function (window) {
  window['env'] = window['env'] || {};
  window['env'].BASEAPI = 'https://utility.71dev.com/utility-api/webhook';
  window['env'].USESSO = '1';
  window['env'].REDIRECT = 'http://localhost:4200/';
  window['env'].LOGOUTREDIRECT = 'http://localhost:4200/';
  window['env'] = {
    ...window['env'],
    CLIENTSETTINGS: {
      AUTHORITY: 'https://rsu-iam.71dev.com/',
      CLIENTID: 'rsu-setting-enrollment-app-dev',
      REDIRECT_URI: 'http://localhost:4200/auth',
      POSTLOGOUTREDIRECTURI: 'http://localhost:4200/',
      RESPONSE_TYPE: 'id_token token',
      SCOPE: 'rsu_setting_enrollment openid profile',
      FILTERPROROCOLCLAIMS: true,
      LOADUSERINFO: true,
    },
    KEYCLOAKCONFIG: {
      URL: 'https://sso.nagdx.com',
      REALM: 'nice',
      CLIENTID: 'ngh-daily-output-dev',
    },
  };
})(this);
