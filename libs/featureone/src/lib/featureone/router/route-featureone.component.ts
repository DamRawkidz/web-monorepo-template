import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-route-featureone',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: '<router-outlet></router-outlet>',

})
export class RouteFeatureoneComponent { }
