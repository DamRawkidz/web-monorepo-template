import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMenuComponent } from './basic-menu.component';
import { CommonModule } from '@angular/common';
import { mat } from 'src/app/shared/shared';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('BasicMenuComponent', () => {
  let component: BasicMenuComponent;
  let fixture: ComponentFixture<BasicMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ BasicMenuComponent ],
      imports: [
        CommonModule,
        mat,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
