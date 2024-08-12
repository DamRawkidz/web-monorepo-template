// import { Injectable } from '@angular/core';
// import { tap } from 'rxjs/operators';
// import { BaseService } from 'seventy-one-base';
// import { environment } from 'src/environments/environment';
// import { SSO } from './authen.service';
// export interface Right {
//   obj: string;
//   perm: string;
// }

// export interface UserToken {
//   login: string;
//   display: string;
//   token: string;
//   rights: Right[];
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class ApptokenService extends BaseService {

//   payload: UserToken

//   constructor() {

//     let urlAppToken: string = environment.useSSO == SSO.OPENID ? '/security/app_tokens' : '/security/key_cloak_app_tokens'
//     super(urlAppToken);

//     let localStorageUser = localStorage.getItem('token')

//     if(localStorageUser){
//       this.payload = JSON.parse(localStorageUser)
//     }

//   }

//   hasPermission(permission: string): boolean{
//     return this.payload.rights.some(role => role.obj == permission)
//   }

//   genToken() {
//     // let option  = {
//     //   context: new HttpContext().set(EXCAHNGE_APP_TOKEN, true)
//     // }
//     // console.log(this.fullUrl);
//     return this.http.get(`${this.fullUrl}`).pipe(
//       tap((res: any) => {
//         console.log(res)
//         this.payload = { ...res };
//         localStorage.setItem("token", JSON.stringify(res));
//       })
//     );
//     // return this.http.get(`${this.fullUrl}`).pipe(
//     //   tap(res => this.payload = {...res})
//     // )
//   }


//   // getRefressToken() {
//   //   let refreshToken = JSON.parse(localStorage.getItem("refreshtoken"));
//   //   return refreshToken;
//   // }

//   // getDataTokens() {
//   //   return this.http.get(`${this.fullUrl}`);
//   // }

//   // isAccessTokenExpire() {
//   //   let accesToken = JSON.parse(localStorage.getItem("accesstoken"));
//   //   let isExpire = accesToken?.expire_at < Date.now() / 1000;
//   //   return isExpire;
//   // }

//   // isRefreshTokenExpire() {
//   //   let refreshToken = JSON.parse(localStorage.getItem("refreshtoken"));
//   //   let isExpire = refreshToken?.expire_at < Date.now() / 1000;
//   //   return isExpire;
//   // }

//   getToken(): { token: string; expire_at: number } {
//     let accessToken = JSON.parse(localStorage.getItem("token"));
//     return accessToken.token;
//   }


//   // renewToken(refreshToken: string) {
//   //   return this.http.get(`${this.fullUrl}/${refreshToken}`).pipe(
//   //     tap((res: any) => {
//   //       this.payload = { ...res };
//   //       console.log(res)
//   //       localStorage.setItem("accesstoken", JSON.stringify(res.access_token));
//   //       localStorage.setItem("refreshtoken", JSON.stringify(res.refresh_token));
//   //     })
//   //   );
//   // }

//   // extractToken(): Observable<UserToken> {
//   //   const req = {
//   //     login_attribute: "email",
//   //     user_attribute: "user_id",
//   //     department_attribute: "department_id",
//   //   };
//   //   return this.http.post<UserToken>(`${this.fullUrl}`, req);
//   // }

//   // decodeToken() {
//   //   const helper = new JwtHelperService();
//   //   const decodedToken = helper.decodeToken(this.payload?.token);
//   //   return decodedToken;
//   // }
// }
