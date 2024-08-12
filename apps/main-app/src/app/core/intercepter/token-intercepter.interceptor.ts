// import { Injectable } from '@angular/core';
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApptokenService } from '../service/apptoken.service';
import { AuthenService, SSO } from '../service/authen.service';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from 'apps/main-app/src/environments/environment';
import { OdicService } from '../service/odic.service';
// import { inject } from '@angular/core';
// import { Observable } from 'rxjs';
// import { AuthenService, SSO } from '../service/authen.service';
// import { ApptokenService } from '../service/apptoken.service';
// import { OdicService } from '../service/odic.service';
// import { environment } from 'src/environments/environment';

// @Injectable()
// export class TokenIntercepterInterceptor implements HttpInterceptor {

//   constructor() {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     return next.handle(request);
//   }
// }

export const tokenIntercepter: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  // const authenSV = inject(AuthenService)
  // const appToken = inject(ApptokenService)

  const clonseRequest = request.clone({
    setHeaders: {
      Authorization: createHedaer(request.url)
    }
  })

  return next(clonseRequest)
  // return next(request)
}



const createHedaer = (url: string) => {
  const authenSV = inject(AuthenService)
  const odicSV = inject(OdicService)
  const appToken = inject(ApptokenService)
  const useSso = environment.useSSO

  if (url.includes('app_tokens') && useSso == SSO.OPENID) {
    return odicSV.getAuthorizationHeaderValue()
  }

  if (url.includes('key_cloak_app_tokens') && useSso == SSO.KEYCLOAK) {
    return `Bearer ${authenSV.getToken()}`
  }

  return `Bearer ${appToken.getToken()}`


}
