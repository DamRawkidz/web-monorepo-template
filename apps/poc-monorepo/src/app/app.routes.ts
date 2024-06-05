import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path:'',
    loadComponent: () => import('@poc-monorepo/orders').then(r => r.OrdersComponent)
  },
  {
    path:'product',
    loadComponent: () => import('@poc-monorepo/products').then(r => r.ProductsComponent)
  }

];
