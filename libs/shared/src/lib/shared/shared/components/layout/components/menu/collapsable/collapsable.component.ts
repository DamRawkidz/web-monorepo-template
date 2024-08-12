import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

import { BasicMenuComponent } from '../basic-menu/basic-menu.component';
import { SEAnimations } from '../../../../../animations/animation';
import { mat } from '../../../../../shared';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SeItem } from 'libs/shared/src/lib/shared/core/data/type';

@Component({
  selector: 'lib-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: SEAnimations,
  standalone: true,
  imports: [
    CommonModule,
    mat,
    BasicMenuComponent
  ]
})
export class CollapsableComponent {
  isCollapsed = true;
  isExpanded = false;

  @HostBinding('class') get classList(): any {
    return {
      'se_item_collapsed': this.isCollapsed,
      'se_item_expanded': this.isExpanded
    };
  }

  @Input() item: SeItem | null = null



  toggleCollapsable() {

    if (this.isCollapsed) {
      this.expand();
    }
    else {
      this.collapse();
    }

  }

  expand(): void {
    // Return if the item is disabled
    if (this.item?.disabled) {
      return;
    }

    // Return if the item is already expanded
    if (!this.isCollapsed) {
      return;
    }

    // Expand it
    this.isCollapsed = false;
    this.isExpanded = !this.isCollapsed;

    // Mark for check

  }

  collapse(): void {
    // Return if the item is disabled
    if (this.item?.disabled) {
      return;
    }

    // Return if the item is already collapsed
    if (this.isCollapsed) {
      return;
    }

    // Collapse it
    this.isCollapsed = true;
    this.isExpanded = !this.isCollapsed;

    // Mark for check

  }

  identify(index: number) {
    return index;
  }



}
