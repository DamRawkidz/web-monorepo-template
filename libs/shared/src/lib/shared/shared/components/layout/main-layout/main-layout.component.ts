import { CommonModule } from '@angular/common';
import { ToolBarComponent } from '../components/tool-bar/tool-bar.component';
import { MenuBarComponent } from './../components/menu-bar/menu-bar.component';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeItem } from '../../../../core/data/type';

@Component({
  selector: 'lib-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [
    MenuBarComponent,
    ToolBarComponent,
    CommonModule,
    RouterModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {
  @Input() menu: SeItem[] = []
  isExpanedMenu = false
  // constructor() { }

  // ngOnInit(): void {
  //   console.log(this.isExpanedMenu)
  // }



}
