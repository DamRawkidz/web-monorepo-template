import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, EventEmitter, Output, inject } from '@angular/core';
import { mat } from '../../../../shared';
// import { AuthenService } from 'src/app/core/service/authen.service';
// import { mat } from 'src/app/shared/shared';


@Component({
  selector: 'lib-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    mat,
    CommonModule
  ]
})
export class ToolBarComponent {

  isExpanded = false
  @Output() expanedMenu = new EventEmitter<boolean>()
  // authenSV = inject(AuthenService)
  // constructor() { }

  // ngOnInit(): void {
  // }

  toggleMenu() {
    this.isExpanded = !this.isExpanded
    this.expanedMenu.emit(this.isExpanded)
  }

  logout() {
    // this.authenSV.logout()
  }

}
