import { Route } from '@angular/router';
import { MainAppLayoutComponent } from './layout/main-app-layout.component';



export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app'
  },
  // {
  //   path: 'auth-callback',
  //   loadChildren: () => import('./feature/auth-callback/routes').then(r => r.routes)
  // },
  {
    path: 'app',
    component: MainAppLayoutComponent,
    children: [
      {
        path: 'fo',
        loadChildren: () => import("@poc-monorepo/featureone").then(m => m.ROUTES_FEATURE_ONE)
      }
    ]
  }
];
