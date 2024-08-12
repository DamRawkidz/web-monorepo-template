import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent, SeItem } from '@poc-monorepo/shared';
import { routes } from '../core/data/navigator';

@Component({
  selector: 'app-main-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MainLayoutComponent
  ],
  templateUrl: './main-app-layout.component.html',
  styleUrl: './main-app-layout.component.scss',
})
export class MainAppLayoutComponent {
  appMenu: SeItem[] = routes

}
