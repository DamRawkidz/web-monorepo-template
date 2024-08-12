(function (window) {
  window['env'] = window['env'] || {};
  window['env'].BASEAPI = '${BASEAPI}';
  window['env'].LOGOUTREDIRECT = '${LOGOUTREDIRECT}';
  window['env'].USESSO = '${USESSO}';
  window['env'].REDIRECT = '${REDIRECT}';
  window['env'] = {
    ...window['env'],
    clientSettings: {
      authority: '${CLIENTSETTINGS__AUTHORITY}',
      client_id: '${CLIENTSETTINGS__CLIENTID}',
      redirect_uri: '${CLIENTSETTINGS__REDIRECT_URI}',
      post_logout_redirect_uri: '${CLIENTSETTINGS__POSTLOGOUTREDIRECTURI}',
      response_type: '${CLIENTSETTINGS__RESPONSE_TYPE}',
      scope: '${CLIENTSETTINGS__SCOPE}',
      filterProtocolClaims: '${CLIENTSETTINGS__FILTERPROROCOLCLAIMS}',
      loadUserInfo: '${CLIENTSETTINGS__LOADUSERINFO}',
    },
    KEYCLOAKCONFIG: {
      URL: '${KEYCLOAKCONFIG__URL}',
      REALM: '${KEYCLOAKCONFIG__REALM}',
      CLIENTID: '${KEYCLOAKCONFIG__CLIENTID}',
    },
  };
})(this);
