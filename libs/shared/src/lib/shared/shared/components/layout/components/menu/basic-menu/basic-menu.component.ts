import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mat } from '../../../../../shared';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SeItem } from 'libs/shared/src/lib/shared/core/data/type';



@Component({
  selector: 'lib-basic-menu',
  templateUrl: './basic-menu.component.html',
  styleUrls: ['./basic-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    mat,
    RouterModule
  ]
})
export class BasicMenuComponent {
  @Input() item: SeItem | null = null
  // constructor() { }



}
