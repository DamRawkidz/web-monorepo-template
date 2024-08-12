// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard  {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }

// }

import { ActivatedRouteSnapshot,  CanActivate,  CanActivateChildFn,  CanActivateFn,  Router, RouterStateSnapshot } from '@angular/router';

export const AuthGuad: CanActivateFn = (
  routes: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return true
}

export const AuthGuardChildern:CanActivateChildFn = (
  routes: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => AuthGuardChildern(routes,state)
