import { Routes } from "@angular/router";

import { RouteFeatureoneComponent } from "./router/route-featureone.component";
import { FeatureOneFeatureComponent } from "./container/feature-one-feature.component";
import { FormFeatureoneComponent } from "./presenter/form/form-featureone.component";

export const ROUTES_FEATURE_ONE: Routes = [
  {
    path: '',
    component: RouteFeatureoneComponent,
    children: [
      {
        path: '',
        component: FeatureOneFeatureComponent
      },
      {
        path: 'add',
        component: FormFeatureoneComponent
      }
    ]
  }
]
