import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { CollapsableComponent } from '../menu/collapsable/collapsable.component';
import { BasicMenuComponent } from '../menu/basic-menu/basic-menu.component';

import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SeItem } from 'libs/shared/src/lib/shared/core/data/type';
import { mat } from '../../../../shared';
import { nestedFind, updateMenu } from '../../../../utility/menu-helper';




@Component({
  selector: 'lib-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    mat,
    CollapsableComponent,
    BasicMenuComponent
  ]
})
export class MenuBarComponent {
  @Input() menus: any[] = []

  constructor(
    private r: Router
  ) {


    this.r.events.pipe(
      filter(r => r instanceof NavigationEnd)
    ).subscribe((event: any) => this.updateNavigator(event.url, this.menus))
  }




  updateNavigator(_link: string, _routes: SeItem[]) {
    const routes = nestedFind(_routes, _link)

    updateMenu(routes, routes.title, _link)

  }




  identify(index: any) {
    return index;
  }

}
