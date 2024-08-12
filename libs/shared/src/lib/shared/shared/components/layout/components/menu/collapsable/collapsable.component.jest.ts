import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableComponent } from './collapsable.component';
import { CommonModule } from '@angular/common';
import { mat } from 'src/app/shared/shared';
import { BasicMenuComponent } from '../basic-menu/basic-menu.component';

describe('CollapsableComponent', () => {
  let component: CollapsableComponent;
  let fixture: ComponentFixture<CollapsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ CollapsableComponent ],
      imports: [
        CommonModule,
        mat,
        BasicMenuComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
