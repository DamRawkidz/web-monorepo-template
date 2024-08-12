import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { ToolBarComponent } from '../components/tool-bar/tool-bar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      // declarations: [ MainLayoutComponent ]
      imports: [
        MenuBarComponent,
        ToolBarComponent,
        CommonModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
